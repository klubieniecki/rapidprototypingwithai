import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

const TOTAL_SLIDES = 27;
const BASE_URL = 'http://localhost:3000';
const OUTPUT_DIR = './slide-images';

async function captureSlides() {
  // Create output directory
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  console.log('Launching browser...');
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  // Set viewport to 1920x1080 with 2x scale for high-res output
  await page.setViewport({ width: 1920, height: 1080, deviceScaleFactor: 2 });

  for (let i = 1; i <= TOTAL_SLIDES; i++) {
    const url = `${BASE_URL}/slides/${i}`;
    console.log(`Capturing slide ${i}/${TOTAL_SLIDES}: ${url}`);

    await page.goto(url, { waitUntil: 'networkidle0' });

    // Hide navigation controls
    await page.evaluate(() => {
      const nav = document.querySelector('nav');
      if (nav) nav.style.display = 'none';
    });

    // Wait for animations to settle
    await new Promise(resolve => setTimeout(resolve, 500));

    // Screenshot just the slide frame (no surrounding dark padding)
    const slideFrame = await page.$('.slide-frame');
    if (!slideFrame) {
      console.error(`  Could not find .slide-frame on slide ${i}, skipping`);
      continue;
    }

    const filename = path.join(OUTPUT_DIR, `slide-${String(i).padStart(2, '0')}.png`);
    await slideFrame.screenshot({ path: filename, type: 'png' });

    console.log(`  Saved: ${filename}`);
  }

  await browser.close();
  console.log(`\nDone! ${TOTAL_SLIDES} slides saved to ${OUTPUT_DIR}/`);
}

captureSlides().catch(console.error);

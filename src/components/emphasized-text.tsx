"use client";

/**
 * Inline emphasis component — wraps a word/phrase in Libre Baskerville italic.
 * Used sparingly within Geist headers for contrast.
 *
 * Usage: <Em>ambiguity</Em>
 */
export function Em({ children }: { children: React.ReactNode }) {
  return <span className="font-emphasis not-italic">{children}</span>;
}

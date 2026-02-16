"use client";

import { motion, AnimatePresence } from "framer-motion";

interface SlideTransitionProps {
  slideId: number;
  children: React.ReactNode;
}

export function SlideTransition({ slideId, children }: SlideTransitionProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={slideId}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className="h-full w-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

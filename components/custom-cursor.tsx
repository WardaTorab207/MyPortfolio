"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [interactive, setInteractive] = useState(false);
  const [visible, setVisible] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 500, damping: 34 });
  const springY = useSpring(y, { stiffness: 500, damping: 34 });

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const media = window.matchMedia("(pointer: fine)");
    if (!media.matches) return;

    setEnabled(true);

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
      const target = e.target as HTMLElement | null;
      const isInteractive = !!target?.closest(
        "a,button,input,textarea,[data-cursor='interactive']"
      );
      setInteractive(isInteractive);
    };

    const leave = () => setVisible(false);
    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      className="custom-cursor"
      style={{ x: springX, y: springY }}
      animate={{
        scale: interactive ? 1.9 : 1,
        opacity: visible ? 1 : 0,
      }}
      transition={{ type: "spring", stiffness: 250, damping: 20 }}
    />
  );
}

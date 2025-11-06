import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

export const ScrollAnimationContainer = ({ children, delay = 0, direction = "up" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  const directionVariants = {
    up: { y: 100, opacity: 0 },
    down: { y: -100, opacity: 0 },
    left: { x: -100, opacity: 0 },
    right: { x: 100, opacity: 0 },
    scale: { scale: 0.8, opacity: 0 },
  };

  useEffect(() => {
    if (isInView) {
      controls.start({ x: 0, y: 0, scale: 1, opacity: 1 });
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={directionVariants[direction]}
      animate={controls}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0.21, 1.02, 0.73, 0.96] // smooth elastic effect
      }}
    >
      {children}
    </motion.div>
  );
};
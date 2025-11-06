import { motion } from 'framer-motion';
import React from 'react';

export const FadeIn = ({ children, delay = 0, duration = 0.6 }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration, delay }}
  >
    {children}
  </motion.div>
);

export const SlideIn = ({ children, direction = 'up', delay = 0, duration = 0.6 }) => {
  const directions = {
    up: { y: 50 },
    down: { y: -50 },
    left: { x: 50 },
    right: { x: -50 }
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  );
};

export const ZoomIn = ({ children, delay = 0, duration = 0.6 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration, delay }}
  >
    {children}
  </motion.div>
);

export const Bounce = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ y: -20 }}
    animate={{ y: 0 }}
    transition={{
      type: "spring",
      stiffness: 300,
      damping: 10,
      delay
    }}
  >
    {children}
  </motion.div>
);

export const Shake = ({ children, delay = 0 }) => (
  <motion.div
    animate={{ 
      x: [0, -10, 10, -10, 10, 0],
    }}
    transition={{ 
      duration: 0.5,
      delay,
      type: "spring"
    }}
  >
    {children}
  </motion.div>
);
import React from 'react';
import { motion } from 'framer-motion';

function LoadingScreen() {
  return (
    <motion.div 
      className="fixed inset-0 bg-slate-100 flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        <motion.div
          className="w-20 h-20 border-4 border-slate-300 border-t-slate-600 rounded-full mx-auto mb-6"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        
        <motion.h1 
          className="text-4xl font-bold text-slate-700 mb-2 uppercase font-serif"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Bitxbase
        </motion.h1>
        
        <motion.p 
          className="text-slate-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Loading your campus events...
        </motion.p>
      </div>
    </motion.div>
  );
}

export default LoadingScreen;
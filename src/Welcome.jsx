import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Header from './components/Header';
import LoadingScreen from './components/LoadingScreen';
import { useLoadingNavigation } from './hooks/useLoadingNavigation';

function Welcome() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const { navigateWithLoading, isNavigating } = useLoadingNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const next = () => {
    navigateWithLoading("/Home");
  };

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const fadeUp = {
    hidden: { y: 30, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <>
      <AnimatePresence>
        {(isLoading || isNavigating) && <LoadingScreen />}
      </AnimatePresence>
      
      {!isLoading && (
        <>
          <Header />
      <motion.div
        className="min-h-screen relative flex flex-col items-center justify-center bg-slate-100 text-slate-900 px-6 overflow-hidden"
        initial="hidden"
        animate="show"
        variants={container}
      >
        <div className="absolute inset-0 bg-[url(campu.jpg)] bg-cover bg-center opacity-50" />
        <div className="absolute inset-0 bg-slate-100/60" />

        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-slate-300/50 rounded-full blur-xl"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-24 h-24 bg-slate-400/50 rounded-full blur-xl"
          animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <motion.div className="relative z-10 text-center max-w-4xl" variants={fadeUp}>
          <motion.div className="mb-6" variants={fadeUp}>
            <span className="inline-block px-4 py-2 bg-slate-200 rounded-full text-slate-600 text-sm font-medium border border-slate-300">
              🎉 Your Campus Community Awaits
            </span>
          </motion.div>
          
          <motion.h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight" variants={fadeUp}>
            Welcome to{' '}
            <span className="text-slate-500 uppercase font-serif">
              Bitxbase
            </span>
          </motion.h1>
          
          <motion.p className="text-xl md:text-2xl mb-8 text-slate-600 max-w-2xl mx-auto leading-relaxed" variants={fadeUp}>
            Your ultimate hub for campus events, connections, and unforgettable experiences
          </motion.p>

          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center items-center" variants={fadeUp}>
            <motion.button
              onClick={next}
              className="bg-slate-700 hover:bg-slate-800 text-white font-bold px-8 py-4 rounded-lg shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Events →
            </motion.button>
            <motion.div className="text-slate-500 text-sm" variants={fadeUp}>
              Join 2,000+ students already connected
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          variants={fadeUp}
        >
          <div className="text-slate-500 text-xs">Scroll to discover</div>
          <div className="w-6 h-10 border-2 border-slate-500 rounded-full mx-auto mt-2 relative">
            <div className="w-1 h-3 bg-slate-500 rounded-full mx-auto mt-2 animate-bounce"></div>
          </div>
        </motion.div>
      </motion.div>
        </>
      )}
    </>
  );
}

export default Welcome;

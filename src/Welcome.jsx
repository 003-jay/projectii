import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Header from './components/Header';

function Welcome() {
  const navigate = useNavigate();

  const next = () => {
    navigate("/Home");
  };

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const fadeUp = {
    hidden: { y: 24, opacity: 0, scale: 0.98 },
    show: { y: 0, opacity: 1, scale: 1, transition: { duration: 0.75, ease: [0.2, 0.8, 0.2, 1] } },
  };

  return (
    <>
      <Header />
      <motion.div
        className="min-h-screen relative flex flex-col items-center overflow-hidden justify-center bg-[url(campu.jpg)] bg-cover bg-no-repeat bg-center text-center text-white px-6"
        initial="hidden"
        animate="show"
        variants={container}
      >
      
      <div className="absolute inset-0 bg-black/45 backdrop-blur-sm pointer-events-none" />

     
      <motion.div
        aria-hidden
        className="absolute -left-20 -top-16 w-72 h-72 rounded-full bg-linear-to-br from-indigo-500/40 to-sky-400/30 blur-3xl"
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute -right-24 bottom-24 w-56 h-56 rounded-full bg-linear-to-br from-rose-400/30 to-yellow-300/30 blur-3xl"
        animate={{ y: [0, 18, 0], x: [0, -8, 0] }}
        transition={{ duration: 7, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      />

      <motion.div className="relative z-10 max-w-3xl mx-auto" variants={fadeUp}>
        <motion.h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight" variants={fadeUp}>
          Welcome to <span className=" text-4xl font-extrabold text-slate-400 mb-4 uppercase md:text-6xl">Bitxbase</span> Campus Events Hub
        </motion.h1>
        <motion.p className="text-lg md:text-xl mb-8 max-w-2xl text-slate-200" variants={fadeUp}>
          Discover, share, and stay updated on the latest campus happenings — from academic seminars to social parties.
        </motion.p>

        <motion.button
          onClick={next}
          className="relative z-20 inline-flex items-center justify-center bg-linear-to-r from-sky-500 to-indigo-600 text-white font-semibold px-8 py-3 rounded-full shadow-xl focus:outline-none focus:ring-4 focus:ring-sky-300"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          variants={fadeUp}
        >
          Get Started
        </motion.button>
      </motion.div>

      
      </motion.div>
    </>
  );
}

export default Welcome;

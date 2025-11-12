import { motion, AnimatePresence } from 'framer-motion';
import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { ScrollAnimationContainer } from './components/animations/ScrollAnimationContainer';
import Header from './components/Header';
import LoadingScreen from './components/LoadingScreen';
import { useLoadingNavigation } from './hooks/useLoadingNavigation';



 function Home() {
    let location = useLocation();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    const { navigateWithLoading, isNavigating } = useLoadingNavigation();
    const [num, setNum] = useState(1);
    const imageUrl = `campus${num}.jpg`;

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1500);
      return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
      // Preload all images
      const totalImages = 5;
      for (let i = 1; i <= totalImages; i++) {
        const img = new Image();
        img.src = `campus${i}.jpg`;
      }
      
      const id = setInterval(() => {
        setNum(n => (n % totalImages) + 1);
      }, 3000);
      return () => clearInterval(id);
    }, []);

    const next = () => {
      navigateWithLoading("/practice");
    };





  return (
    <>
      <AnimatePresence>
        {(isLoading || isNavigating) && <LoadingScreen />}
      </AnimatePresence>
      
      {!isLoading && (
        <>
          <Header />
      <div className='bg-slate-100 h-24 italic text-2xl md:flex-row flex flex-col items-center justify-center px-4 relative overflow-hidden'>
        <motion.div 
          className='absolute w-2 h-2 bg-slate-400 rounded-full'
          animate={{ 
            x: [0, 100, 0], 
            y: [0, -20, 0],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity }}
          style={{ top: '20%', left: '10%' }}
        />
        <motion.div 
          className='absolute w-1 h-1 bg-slate-300 rounded-full'
          animate={{ 
            x: [0, -80, 0], 
            y: [0, 15, 0],
            opacity: [0.2, 0.6, 0.2]
          }}
          transition={{ duration: 6, repeat: Infinity, delay: 2 }}
          style={{ top: '60%', right: '15%' }}
        />
        Your Home Of <span className='font-serif text-slate-500 uppercase  mx-2'>Exclussive Events</span>, Your All In One.
      </div>

      
      <section className='bg-slate-100 w-full flex justify-center items-center py-8'>
        <div className='relative w-full max-w-5xl px-4'>
          
          <div
            className='relative rounded-xl overflow-hidden w-full h-64 sm:h-80 md:h-96 bg-cover bg-center shadow-2xl transition-all duration-1000 ease-in-out'
            style={{ backgroundImage: `url(${imageUrl})` }}
          >
            <div className='flex flex-col items-center justify-center h-full bg-slate-900/40 text-center p-4'>
              <motion.p 
                className='text-2xl sm:text-3xl md:text-5xl text-white font-extrabold'
                initial={{ y: 20, opacity: 2 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >Home Of Exclussive Events</motion.p>
              <motion.p 
                className='text-sm sm:text-lg md:text-2xl text-slate-200 font-light font-serif mt-2'
                initial={{ y: 20, opacity: 2 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >Bitxbase Campus Events Hub</motion.p>
            </div>
          </div>
        </div>
      </section>


      <div className='bg-slate-100 w-full py-12'>
        <div className='max-w-6xl mx-auto flex flex-col md:flex-row items-center px-4'>
          <ScrollAnimationContainer direction="left" delay={0.2}>
            <motion.div 
              className='rounded-xl overflow-hidden h-64 sm:h-80 md:h-96 w-80 md:w-96 bg-[url("https://images.unsplash.com/photo-1591541104670-b08b8d8ea044?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGV4Y2l0ZW1lbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500")] bg-cover bg-center flex-shrink-0 shadow-xl transform hover:scale-105 transition-transform duration-300' 
              whileHover={{ y: -5 }}
              aria-hidden='true'
            ></motion.div>
          </ScrollAnimationContainer>
          <ScrollAnimationContainer direction="right" delay={0.4}>
            <div className='p-4 flex-1'>
              <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4'>
                Explore Campus Events Around You
              </h2>
              <p className='text-slate-700 text-base sm:text-lg mb-4'>
                <span className='font-semibold text-slate-500 uppercase font-serif'>Bitxbase</span> Events Hub keeps you in the loop with all campus activities. From <span className='font-semibold text-slate-900 mr-2'>academic seminars</span> that boost your knowledge, to <span className='font-semibold text-slate-900 mr-2'>exciting parties</span> that let you unwind, and <span className='font-semibold text-slate-900 mr-2'>networking events</span> that help you connect with great minds.
              </p>
              <p className='text-slate-700 text-base sm:text-lg mb-6'>
                Stay updated, post your own events, and explore what's happening around your academy — all in one digital notice board.
              </p>
              <button onClick={next} className='bg-slate-700 hover:bg-slate-800 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition'>
                View Upcoming Events
              </button>
            </div>
          </ScrollAnimationContainer>
        </div>
      </div>

      <div className='bg-slate-800 w-full py-16 relative overflow-hidden'>
        <motion.div 
          className='absolute w-32 h-32 bg-slate-600/20 rounded-full blur-xl'
          animate={{ 
            x: [0, 100, 0], 
            y: [0, -50, 0]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          style={{ top: '10%', left: '5%' }}
        />
        <motion.div 
          className='absolute w-24 h-24 bg-slate-500/20 rounded-full blur-xl'
          animate={{ 
            x: [0, -80, 0], 
            y: [0, 40, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 4 }}
          style={{ bottom: '20%', right: '10%' }}
        />
        
        <div className='max-w-6xl mx-auto text-center px-4 relative z-10'>
          <ScrollAnimationContainer direction="up" delay={0.2}>
            <h3 className='text-3xl md:text-4xl font-bold text-white mb-6'>
              Join Thousands of Students
            </h3>
            <p className='text-slate-300 text-lg mb-8 max-w-2xl mx-auto'>
              Connect with your campus community and never miss out on amazing opportunities
            </p>
            <div className='flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-white'>
              <motion.div className='text-center' whileHover={{ scale: 1.05 }}>
                <div className='text-3xl font-bold'>500+</div>
                <div className='text-slate-400'>Active Events</div>
              </motion.div>
              <motion.div className='text-center' whileHover={{ scale: 1.05 }}>
                <div className='text-3xl font-bold'>2K+</div>
                <div className='text-slate-400'>Students</div>
              </motion.div>
              <motion.div className='text-center' whileHover={{ scale: 1.05 }}>
                <div className='text-3xl font-bold'>50+</div>
                <div className='text-slate-400'>Organizations</div>
              </motion.div>
            </div>
          </ScrollAnimationContainer>
        </div>
      </div>
        </>
      )}
    </>
  );
}
export default Home;






















{/* <div className="bg-slate-50 min-h-screen flex flex-col items-center py-12 px-6">
    //   <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
       
    //     <div>
    //       <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
    //         Explore Campus Events Around You 
    //       </h2>
    //       <p className="text-slate-700 text-lg mb-4">
    //         Bitxbase Events Hub keeps you in the loop with all campus activities.
    //         From <span className="font-semibold text-slate-900">academic seminars</span> 
    //         that boost your knowledge, to <span className="font-semibold text-slate-900">exciting parties</span> 
    //         that let you unwind, and <span className="font-semibold text-slate-900">networking events</span> 
    //         that help you connect with great minds.
    //       </p>
    //       <p className="text-slate-700 text-lg mb-6">
    //         Stay updated, post your own events, and explore what's happening around your academy —
    //         all in one digital notice board.
    //       </p>
    //       <button className="bg-sky-500 hover:bg-indigo-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition">
    //         View Upcoming Events
    //       </button>
    //     </div>

        
    //     <div className="flex justify-center bg-amber-200  bg-[url(campus3.jpg)] brightness-80 bg-cover bg-no-repeat bg-center rounded-2xl shadow-lg w-full max-w-md object-cover"></div>
    //   </div>
    // </div> */}
import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { ScrollAnimationContainer } from './components/animations/ScrollAnimationContainer';
import Header from './components/Header';



 function Home() {
    let location = useLocation();
    const navigate = useNavigate();
    
    const [num, setNum] = useState(1);
    const imageUrl = `campus${num}.jpg`;

    useEffect(() => {
      const totalImages = 5;
      const id = setInterval(() => {
        setNum(n => (n % totalImages) + 1);
      }, 3000);
      return () => clearInterval(id);
    }, []);

    const next = () => {
      navigate("/practice");
    };





  return (
    <>
      <Header />
      <div className='bg-slate-100 h-24 italic text-2xl md:flex-row flex flex-col items-center justify-center px-4'>
        Your Home Of <span className='font-serif text-slate-500 uppercase  mx-2'>Exclussive Events</span>, Your All In One.
      </div>

      
      <section className='bg-slate-100 w-full flex justify-center items-center py-8'>
        <div className='relative w-full max-w-5xl px-4'>
          
          <motion.div
            className='relative bg-slate-300 rounded-md overflow-hidden w-full h-64 sm:h-80 md:h-96 bg-cover bg-center shadow-lg'
            style={{ backgroundImage: `url(${imageUrl})` }}
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 3 }}
            key={imageUrl}
          >
            <div className='flex flex-col items-center justify-center h-full bg-black/35 text-center p-4'>
              <motion.p 
                className='text-2xl sm:text-3xl md:text-5xl text-white font-extrabold'
                initial={{ y: 20, opacity: 1 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >Home Of Exclussive Events</motion.p>
              <motion.p 
                className='text-sm sm:text-lg md:text-2xl text-slate-200 font-light font-serif mt-2'
                initial={{ y: 20, opacity: 1 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >Bitxbase Campus Events Hub</motion.p>
            </div>
          </motion.div>
        </div>
      </section>


      <div className='bg-slate-100 w-full py-12'>
        <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4'>
          <ScrollAnimationContainer direction="left" delay={0.2}>
            <div className='p-4'>
              <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4'>
                Explore Campus Events Around You
              </h2>
              <p className='text-slate-700 text-base sm:text-lg mb-4'>
                <span className='font-semibold text-slate-500 uppercase font-serif'>Bitxbase</span> Events Hub keeps you in the loop with all campus activities. From <span className='font-semibold text-slate-900 mr-2'>academic seminars</span> that boost your knowledge, to <span className='font-semibold text-slate-900 mr-2'>exciting parties</span> that let you unwind, and <span className='font-semibold text-slate-900 mr-2'>networking events</span> that help you connect with great minds.
              </p>
              <p className='text-slate-700 text-base sm:text-lg mb-6'>
                Stay updated, post your own events, and explore what's happening around your academy — all in one digital notice board.
              </p>
              <button onClick={next} className='bg-transparent border border-blue-500 hover:bg-indigo-500 text-black font-semibold px-6 py-3 rounded-lg shadow-md transition'>
                View Upcoming Events
              </button>
            </div>
          </ScrollAnimationContainer>

          <ScrollAnimationContainer direction="right" delay={0.4}>
            <div className='rounded-lg overflow-hidden h-64 sm:h-80 md:h-96 bg-[url("outdoor1.jpg")] bg-cover bg-center' aria-hidden='true'></div>
          </ScrollAnimationContainer>
        </div>
      </div>
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
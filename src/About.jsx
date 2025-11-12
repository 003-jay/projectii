import React, { useRef } from "react";
import Header from "./components/Header";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";

export default function About() {
  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-100 via-white to-slate-200 text-slate-800">
      {/* ✅ Header */}
      <Header />

      {/* HERO SECTION */}
      <section className="relative flex flex-col items-center justify-center text-center py-20 px-6">
        {/* Floating Background Elements */}
        <motion.div 
          className="absolute w-32 h-32 bg-slate-400/20 rounded-full blur-xl"
          animate={{ 
            x: [0, 100, 0], 
            y: [0, -50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          style={{ top: '10%', left: '5%' }}
        />
        <motion.div 
          className="absolute w-24 h-24 bg-slate-300/15 rounded-full blur-xl"
          animate={{ 
            x: [0, -80, 0], 
            y: [0, 40, 0],
            scale: [1.2, 1, 1.2]
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 4 }}
          style={{ bottom: '20%', right: '10%' }}
        />
        
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4 relative z-10"
        >
          About <span className="text-slate-700">Bitxbase Hub</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-slate-600 text-base sm:text-lg leading-relaxed relative z-10"
        >
          Bitxbase Hub is a creative platform built to empower students and
          innovators by organizing campus events, fostering collaboration, and
          connecting passionate learners across diverse fields.
        </motion.p>
      </section>

      {/* ABOUT THE HUB SECTION */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6 py-16">
        {/* LEFT SIDE - Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative bg-gradient-to-br from-slate-200 to-slate-300 rounded-2xl p-4 shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Campus Community"
              className="rounded-xl w-full h-80 object-cover shadow-lg"
            />
            <motion.div 
              className="absolute -top-4 -right-4 w-16 h-16 bg-slate-500/20 rounded-full blur-lg"
              animate={{ 
                scale: [1, 1.3, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ duration: 6, repeat: Infinity }}
            />
          </div>
        </motion.div>

        {/* RIGHT SIDE - Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Our Story & Mission
          </h2>
          <div className="space-y-4 text-slate-600 leading-relaxed">
            <p>
              <span className="font-semibold text-slate-800">Founded in December 2024</span>, 
              Bitxbase Events Hub was created to bridge the gap between students and exciting campus opportunities. 
              We recognized that amazing events were happening across campus, but students often missed out due to poor communication.
            </p>
            <p>
              Our platform serves as the <span className="font-semibold text-slate-800">central hub</span> for all campus activities - 
              from tech workshops and career fairs to cultural celebrations and sports tournaments. 
              We believe every student deserves to be part of their campus community.
            </p>
            <p>
              With features like <span className="font-semibold text-slate-800">event discovery, easy registration, and admin approval systems</span>, 
              we've made it simple for both organizers and attendees to connect and create memorable experiences together.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mt-6">
            <motion.div 
              className="bg-slate-100 rounded-lg p-4 text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-2xl font-bold text-slate-800">500+</div>
              <div className="text-sm text-slate-600">Events Hosted</div>
            </motion.div>
            <motion.div 
              className="bg-slate-100 rounded-lg p-4 text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-2xl font-bold text-slate-800">2K+</div>
              <div className="text-sm text-slate-600">Active Students</div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ABOUT THE DEVELOPER */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-4 items-center px-6">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-2">
            Meet the Developer
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Hi, I'm <span className="font-semibold text-sky-600">B. Joseph</span>,
            a Frontend Developer, Graphic Designer, and aspiring Data Analyst.
            Passionate about building visually stunning and functional digital
            experiences, I combine creativity with technical skills to craft
            solutions that connect people and ideas.
          </p>
          <p className="text-slate-600 leading-relaxed">
            I specialize in technologies like{" "}
            <span className="font-semibold text-slate-800">
              React, Tailwind CSS, and JavaScript
            </span>
            , and I’m always open to collaborations and innovative projects.
          </p>
          <div className="mt-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={scrollToContact}
              className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition relative overflow-hidden"
            >
              <span className="relative z-10">Open to Work & Collaboration 🤝</span>
              <motion.span
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-sky-400 blur-xl opacity-40"
              />
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative bg-white/60 backdrop-blur-lg border border-slate-200 shadow-lg rounded-2xl p-4 max-w-sm mx-auto"
        >
          <img
            src="jay2.jpeg"
            alt="Developer Portrait"
            className="rounded-xl w-full h-96 object-cover shadow-md aspect-[3/4]"
          />
          <motion.div 
            className="absolute -bottom-2 -left-2 w-12 h-12 bg-slate-400/30 rounded-full blur-md"
            animate={{ 
              scale: [1, 1.4, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </motion.div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-slate-900 mb-6"
          >
            Featured Projects
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "mirror",
              }}
              className="bg-white/80 backdrop-blur-lg border border-slate-200 shadow-xl rounded-2xl overflow-hidden relative group"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl bg-sky-300/20"></div>
              <img
                src="projectrefix.jpg"
                alt="Car Booking Project"
                className="h-56 w-full object-cover"
              />
              <div className="p-6 text-left relative z-10">
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  Car Booking System
                </h3>
                <p className="text-slate-600 mb-4">
                  A booking platform built with React & Tailwind CSS, allowing
                  users to seamlessly schedule and manage ride bookings.
                </p>
                <a
                  href="https://jluxebooking1.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:underline font-medium"
                >
                  View Live Project →
                </a>
              </div>
            </motion.div>

            {/* Project 2 */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: 1.5,
                repeatType: "mirror",
              }}
              className="bg-white/80 backdrop-blur-lg border border-slate-200 shadow-xl rounded-2xl overflow-hidden relative group"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl bg-sky-300/20"></div>
              <img
                src="guessing game.jpg"
                alt="JS CSS Project"
                className="h-56 w-full object-cover"
              />
              <div className="p-6 text-left relative z-10">
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                   A Practiced Guessing Game
                </h3>
                <p className="text-slate-600 mb-4">
                 A fun guessing game made with HTML, CSS, and JavaScript. You try to guess a number between 1 and 20 before your trials run out.
                  It was a cool way to practice JavaScript logic and interactivity.
                </p>
                <a
                  href="https://www.awesomescreenshot.com/video/46138073?key=2da9b814c36a63058a449d6444c6f665"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:underline font-medium"
                >
                  View Live Project →
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <footer
        ref={contactRef}
        className="bg-slate-900 text-slate-100 py-16 mt-20 scroll-mt-20"
      >
        <div className="max-w-6xl mx-auto px-6 text-center space-y-6">
          <h2 className="text-2xl font-bold mb-2">Get in Touch</h2>
          <p className="text-slate-400 max-w-lg mx-auto">
            Interested in collaborating or have a project in mind? Let’s create
            something amazing together.
          </p>

          <div className="flex justify-center gap-6 text-xl mt-4">
            <a
              href="https://www.linkedin.com/in/bamidele-jesutofunmi-52708a33a"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-400 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/003-jay"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-400 transition"
            >
              <FaGithub />
            </a>
            <a
              href="mailto:b.joseph2903@gmail.com"
              className="hover:text-sky-400 transition"
            >
              <FaEnvelope />
            </a>
            <a href="tel:+2347066038974" className="hover:text-sky-400 transition">
              <FaPhone />
            </a>
            <a
              href="https://wa.me/2349019942199"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition"
            >
              <FaWhatsapp />
            </a>
          </div>

          <p className="text-sm text-slate-500 mt-8">
            © {new Date().getFullYear()} Bitxbase Hub | Designed by B. Joseph
          </p>
        </div>
      </footer>
    </div>
  );
}

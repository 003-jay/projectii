import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ScrollAnimationContainer } from './components/animations/ScrollAnimationContainer';
import Header from './components/Header';

const speakers = [
  {
    name: "Dr. Sarah Chen",
    role: "AI Research Director, TechFuture Labs",
    topic: "The Future of AI in Education",
    image: "speaker1.jpg"
  },
  {
    name: "James Rodriguez",
    role: "Blockchain Specialist, CryptoTech",
    topic: "Web3 and the Future of Digital Identity",
    image: "speaker2.jpg"
  },
  {
    name: "Dr. Michael Wong",
    role: "Head of Innovation, Silicon Valley Institute",
    topic: "Emerging Technologies in 2026",
    image: "speaker3.jpg"
  }
  
];

const schedule = [
  {
    time: "10:00 AM",
    event: "Opening Ceremony",
    description: "Welcome address and keynote speech"
  },
  {
    time: "11:00 AM",
    event: "AI in Education Panel",
    description: "Interactive session on AI's role in modern education"
  },
  {
    time: "12:30 PM",
    event: "Networking Lunch",
    description: "Connect with industry leaders and peers"
  },
  {
    time: "2:00 PM",
    event: "Tech Workshops",
    description: "Hands-on sessions with cutting-edge technologies"
  },
  {
    time: "3:30 PM",
    event: "Future of Web3",
    description: "Blockchain and decentralized internet discussion"
  }
];

function Techpg() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate('/practice');
  };

  return (
  <div className="min-h-screen bg-linear-to-b from-slate-100 to-slate-200">
    <Header />
     
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-[60vh] overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('/techbg2.jpg')] bg-cover bg-center bg-no-repeat">
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <motion.div 
          className="absolute w-20 h-20 bg-blue-500/20 rounded-full blur-xl"
          animate={{ 
            x: [0, 100, 0], 
            y: [0, -50, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          style={{ top: '20%', left: '10%' }}
        />
        <motion.div 
          className="absolute w-16 h-16 bg-purple-500/20 rounded-full blur-xl"
          animate={{ 
            x: [0, -80, 0], 
            y: [0, 30, 0],
            scale: [1.2, 1, 1.2]
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 4 }}
          style={{ bottom: '30%', right: '15%' }}
        />
        <div className="relative h-full flex items-center justify-center text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="max-w-4xl mx-auto px-4"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Tech Innovation Summit 2025
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 mb-8">
              Shaping the Future of Technology
            </p>
            <div className="flex justify-center">
              <button onClick={goBack} className="px-6 py-3 bg-transparent border border-white/30 text-white rounded-lg font-medium hover:bg-white/5 transition">
                Back
              </button>
            </div>
          </motion.div>
        </div>
      </motion.div>

    
      <ScrollAnimationContainer direction="up" delay={0.2}>
        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">
                About the Summit
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                Join us for an extraordinary day of innovation, learning, and networking at the Tech Innovation Summit 2025. This premier event brings together industry leaders, innovators, and tech enthusiasts to explore the latest trends and breakthrough technologies shaping our future.
              </p>
              <ul className="space-y-4">
                {['Interactive Workshops', 'Networking Opportunities', 'Expert Panels', 'Innovation Showcase'].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center text-slate-700"
                    whileHover={{ x: 5 }}
                  >
                    <svg className="w-5 h-5 text-blue-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="/tech-conference.jpg" 
                alt="Tech Conference" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>
      </ScrollAnimationContainer>

     
      <ScrollAnimationContainer direction="up" delay={0.3}>
        <section className="bg-slate-500 py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Featured Speakers
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {speakers.map((speaker, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-slate-600 rounded-xl p-6 text-center group cursor-pointer"
                  whileHover={{ 
                    scale: 1.03, 
                    y: -5,
                    backgroundColor: "rgb(71 85 105)"
                  }}
                >
                  <div className="w-42 h-32 mx-auto mb-4 rounded-xl overflow-hidden">
                    <motion.img 
                      src={speaker.image} 
                      alt={speaker.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {speaker.name}
                  </h3>
                  <p className="text-slate-300 mb-3">{speaker.role}</p>
                  <p className="text-blue-400">{speaker.topic}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimationContainer>

     
      <ScrollAnimationContainer direction="up" delay={0.4}>
        <section className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">
            Event Schedule
          </h2>
          <div className="max-w-3xl mx-auto">
            {schedule.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 mb-8 items-start"
              >
                <div className="w-24 shrink-0">
                  <div className="text-lg font-semibold text-blue-600">
                    {item.time}
                  </div>
                </div>
                <div className="flex-1 bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">
                    {item.event}
                  </h3>
                  <p className="text-slate-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </ScrollAnimationContainer>

      {/* Tech Innovation Stats */}
      <ScrollAnimationContainer direction="up" delay={0.6}>
        <section className="bg-gradient-to-r from-slate-800 to-slate-900 py-16 relative overflow-hidden">
          <motion.div 
            className="absolute w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"
            animate={{ 
              x: [0, 150, 0], 
              y: [0, -80, 0],
              rotate: [0, 180, 360]
            }}
            transition={{ duration: 15, repeat: Infinity }}
            style={{ top: '10%', left: '5%' }}
          />
          
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
              <motion.h2 
                className="text-4xl font-bold text-white mb-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Innovation by the Numbers
              </motion.h2>
              <motion.p 
                className="text-xl text-slate-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Join the tech revolution happening on campus
              </motion.p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "500+", label: "Attendees Expected" },
                { number: "25+", label: "Industry Speakers" },
                { number: "10+", label: "Tech Workshops" },
                { number: "₦2M+", label: "Startup Funding" }
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">{stat.number}</div>
                  <div className="text-slate-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              className="text-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p className="text-slate-300 text-lg mb-6">
                Be part of the largest tech gathering in campus history
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div 
                  className="bg-blue-600/20 border border-blue-500/30 text-blue-300 px-6 py-3 rounded-lg"
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(59, 130, 246, 0.3)" }}
                >
                  🚀 Free Entry
                </motion.div>
                <motion.div 
                  className="bg-purple-600/20 border border-purple-500/30 text-purple-300 px-6 py-3 rounded-lg"
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(147, 51, 234, 0.3)" }}
                >
                  🎁 Swag Bags
                </motion.div>
                <motion.div 
                  className="bg-green-600/20 border border-green-500/30 text-green-300 px-6 py-3 rounded-lg"
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(34, 197, 94, 0.3)" }}
                >
                  🍕 Free Lunch
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </ScrollAnimationContainer>
    </div>
  );
}

export default Techpg;
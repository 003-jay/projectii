import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import { motion } from 'framer-motion';
import { ScrollAnimationContainer } from './components/animations/ScrollAnimationContainer';
import Header from './components/Header';

const artists = [
  {
    name: "Luna Rose",
    role: "Singer-Songwriter",
    genre: "Alternative Pop/R&B",
    description: "Rising star with a soulful voice and compelling storytelling",
    image: "/muscian1.jpg"
  },
  {
    name: "Cosmic Wave",
    role: "Indie Band",
    genre: "Alternative Rock/Electronic",
    description: "Four-piece band blending rock roots with modern electronic elements",
    image: "muscian2.jpg"
  },
  {
    name: "Urban Pulse",
    role: "Hip-Hop Collective",
    genre: "Hip-Hop/Afrobeats",
    description: "Dynamic group bringing fresh beats and authentic campus vibes",
    image: "muscian3.jpg"
  }
];

const schedule = [
  {
    time: "6:00 PM",
    event: "Opening Act - DJ Set",
    description: "Get ready to groove with our resident campus DJ"
  },
  {
    time: "7:00 PM",
    event: "Luna Rose Performance",
    description: "Soulful melodies and powerful vocals"
  },
  {
    time: "8:00 PM",
    event: "Cosmic Wave Live",
    description: "High-energy rock with electronic fusion"
  },
  {
    time: "9:00 PM",
    event: "Urban Pulse Showcase",
    description: "Dynamic hip-hop performance with live instruments"
  },
  {
    time: "10:00 PM",
    event: "Collaborative Finale",
    description: "Special joint performance by all artists"
  }
];

function Musicpage() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate('/practice');
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-purple-50 to-purple-100">
      <Header />
        
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-[50vh] overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('/muscianbg1.jpg')] bg-cover bg-center bg-no-repeat">
          <div className="absolute inset-0 bg-black/40 opacity-75" />
        </div>
        
        <motion.div 
          className="absolute w-6 h-6 bg-purple-400/30 rounded-full"
          animate={{ 
            y: [0, -100, 0],
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.5, 1]
          }}
          transition={{ duration: 3, repeat: Infinity, delay: 0 }}
          style={{ top: '70%', left: '20%' }}
        />
        <motion.div 
          className="absolute w-4 h-4 bg-pink-400/40 rounded-full"
          animate={{ 
            y: [0, -80, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          style={{ top: '60%', right: '25%' }}
        />
        <motion.div 
          className="absolute w-5 h-5 bg-blue-400/35 rounded-full"
          animate={{ 
            y: [0, -90, 0],
            opacity: [0.3, 0.9, 0.3],
            scale: [1, 1.4, 1]
          }}
          transition={{ duration: 3.5, repeat: Infinity, delay: 2 }}
          style={{ top: '80%', left: '70%' }}
        />
        <div className="relative h-full flex items-center justify-center text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="max-w-4xl mx-auto px-4"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Campus Music Festival 2025
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 mb-8">
              Discover Tomorrow's Stars Today
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
              <h2 className="text-3xl font-bold text-slate-700 mb-6">
                Celebrating Campus Talent
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                Join us for an unforgettable night of music as we showcase the brightest emerging talents from our campus. The Campus Music Festival 2025 is more than just a concert - it's a launching pad for the next generation of music stars.
              </p>
              <ul className="space-y-4">
                {[
                  'Live Performances',
                  'Genre-Crossing Collaborations',
                  'Professional Sound System',
                  'Talent Scouts Present',
                  'Networking Opportunities'
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center text-slate-600"
                  >
                    <svg className="w-5 h-5 text-slate-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="/muscianbg2.jpg" 
                alt="Live Performance" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>
      </ScrollAnimationContainer>

      
      <ScrollAnimationContainer direction="up" delay={0.3}>
        <section className="bg-linear-to-r from-slate-500 to-slate-700 py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Featured Artists
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {artists.map((artist, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center group cursor-pointer"
                  whileHover={{ 
                    scale: 1.03, 
                    y: -8,
                    backgroundColor: "rgba(255, 255, 255, 0.15)"
                  }}
                >
                  <div className="w-32 h-32 mx-auto mb-4 rounded-xl overflow-hidden">
                    <motion.img 
                      src={artist.image} 
                      alt={artist.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {artist.name}
                  </h3>
                  <p className="text-purple-200 mb-2">{artist.role}</p>
                  <p className="text-purple-300 mb-3">{artist.genre}</p>
                  <p className="text-purple-100 text-sm">{artist.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimationContainer>

      
      <ScrollAnimationContainer direction="up" delay={0.4}>
        <section className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-slate-600 text-center mb-12">
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
                  <div className="text-lg font-semibold text-slate-600">
                    {item.time}
                  </div>
                </div>
                <div className="flex-1 bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-semibold text-slate-600 mb-2">
                    {item.event}
                  </h3>
                  <p className="text-slate-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </ScrollAnimationContainer>

      {/* Registration CTA */}
      <ScrollAnimationContainer direction="up" delay={0.5}>
        <section className="bg-linear-to-r from-slate-400 to-slate-500 py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Experience the Future of Music?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Get your tickets now and be part of this incredible musical journey
            </p>
            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={handleRegister} className="px-8 py-4 bg-white text-slate-600 rounded-lg font-semibold hover:bg-slate-100 transition-colors">
                Buy Tickets Now
              </button>
            </div> */}
          </div>
        </section>
      </ScrollAnimationContainer>

      {/* Additional Info */}
      <ScrollAnimationContainer direction="up" delay={0.6}>
        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="text-xl font-bold text-slate-700 mb-2">Venue</h3>
                <p className="text-slate-600">Campus Main Ground</p>
                <p className="text-slate-600">Central Square Amphitheater</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-700 mb-2">Date & Time</h3>
                <p className="text-slate-600">6:00 PM - 11:00 PM</p>
                <p className="text-slate-600">November 20, 2025</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-700 mb-2">Tickets</h3>
                <p className="text-slate-600">Regular: ₦2,000</p>
                <p className="text-slate-600">Early Bird: ₦1,500</p>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimationContainer>

      {/* Music Festival Vibe Section */}
      <ScrollAnimationContainer direction="up" delay={0.7}>
        <section className="bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 py-16 relative overflow-hidden">
          <motion.div 
            className="absolute w-40 h-40 bg-white/10 rounded-full blur-2xl"
            animate={{ 
              x: [0, 120, 0], 
              y: [0, -60, 0],
              rotate: [0, 360, 0]
            }}
            transition={{ duration: 12, repeat: Infinity }}
            style={{ top: '15%', left: '10%' }}
          />
          <motion.div 
            className="absolute w-32 h-32 bg-slate-400/20 rounded-full blur-xl"
            animate={{ 
              x: [0, -100, 0], 
              y: [0, 40, 0],
              rotate: [360, 0, 360]
            }}
            transition={{ duration: 10, repeat: Infinity, delay: 5 }}
            style={{ bottom: '20%', right: '15%' }}
          />
          
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
              <motion.h2 
                className="text-4xl md:text-5xl font-bold text-white mb-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                🎵 Feel the Beat 🎵
              </motion.h2>
              <motion.p 
                className="text-xl text-slate-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Experience the energy of live campus music
              </motion.p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "3", label: "Live Bands", icon: "🎸" },
                { number: "5hrs", label: "Non-Stop Music", icon: "🎶" },
                { number: "₦2K", label: "Ticket Price", icon: "🎫" },
                { number: "1000+", label: "Music Lovers", icon: "🎤" }
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                >
                  <div className="text-4xl mb-2">{stat.icon}</div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
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
                Get ready for the most electrifying night of the year!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div 
                  className="bg-slate-600/30 border border-slate-500/50 text-slate-300 px-6 py-3 rounded-full"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(71, 85, 105, 0.4)" }}
                >
                  🎵 Live Performances
                </motion.div>
                <motion.div 
                  className="bg-slate-600/30 border border-slate-500/50 text-slate-300 px-6 py-3 rounded-full"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(71, 85, 105, 0.4)" }}
                >
                  🍕 Food & Drinks
                </motion.div>
                <motion.div 
                  className="bg-slate-600/30 border border-slate-500/50 text-slate-300 px-6 py-3 rounded-full"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(71, 85, 105, 0.4)" }}
                >
                  📸 Photo Booths
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </ScrollAnimationContainer>
    </div>
  );
}

export default Musicpage;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ScrollAnimationContainer } from './components/animations/ScrollAnimationContainer';
import Header from './components/Header';

const performances = [
  {
    name: "Igbo Dance Troupe",
    type: "Traditional Dance",
    description: "Energetic and colorful performance showcasing Igbo culture.",
    image: "/igbo.jpg"
  },
  {
    name: "Yoruba Drummers",
    type: "Percussion Ensemble",
    description: "Rhythmic drumming and chants from the Yoruba tradition.",
    image: "/drum.jpg"
  },
  {
    name: "Northern Fashion Parade",
    type: "Fashion Show",
    description: "A vibrant display of northern Nigerian attire and style.",
    image: "/hausa.jpg"
  }
];

const schedule = [
  {
    time: "7:00 PM",
    event: "Opening Ceremony",
    description: "Welcome address and introduction to the night's theme."
  },
  {
    time: "7:30 PM",
    event: "Igbo Dance Troupe",
    description: "Traditional dance performance."
  },
  {
    time: "8:00 PM",
    event: "Yoruba Drummers",
    description: "Percussion and chant performance."
  },
  {
    time: "8:30 PM",
    event: "Northern Fashion Parade",
    description: "Fashion show featuring northern attire."
  },
  {
    time: "9:00 PM",
    event: "Cultural Fusion",
    description: "Collaborative performance blending multiple cultures."
  },
  {
    time: "9:30 PM",
    event: "Closing Ceremony",
    description: "Vote of thanks and group photo session."
  }
];

const highlights = [
  {
    title: "Diverse Performances",
    description: "Experience dances, music, and fashion from across Nigeria.",
    image: "/dancing.jpg"
  },
  {
    title: "Food & Crafts Bazaar",
    description: "Enjoy local delicacies and handmade crafts at the event.",
    image: "/jollof.jpg"
  },
  {
    title: "Photo Booths",
    description: "Capture memories with themed photo booths.",
    image: "/photobooth.jpg"
  },
  {
    title: "Awards & Prizes",
    description: "Special awards for best performances and costumes.",
    image: "/award.jpg"
  }
];

function Cultural() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-100">
      <Header />
      
      <div className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/culturalbg1.jpg"
            alt="Cultural Night"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <motion.div 
          className="absolute w-6 h-6 bg-yellow-400/30 rounded-full"
          animate={{ 
            y: [0, -130, 0],
            x: [0, 40, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 5, repeat: Infinity, delay: 0 }}
          style={{ top: '70%', left: '18%' }}
        />
        <motion.div 
          className="absolute w-8 h-8 bg-red-400/25 rounded-full"
          animate={{ 
            y: [0, -110, 0],
            x: [0, -35, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 6, repeat: Infinity, delay: 2 }}
          style={{ top: '65%', right: '22%' }}
        />
        <motion.div 
          className="absolute w-7 h-7 bg-green-400/20 rounded-full"
          animate={{ 
            y: [0, -95, 0],
            rotate: [0, 270, 0]
          }}
          transition={{ duration: 4.5, repeat: Infinity, delay: 4 }}
          style={{ top: '75%', left: '65%' }}
        />
        <div className="relative h-full flex items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Cultural Night Showcase
            </h1>
            <p className="text-xl sm:text-2xl text-slate-200 mb-8">
              A spectacular evening celebrating diversity through dance, music, and fashion.
            </p>
            <button
              onClick={() => navigate('/practice')}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-slate-600/30 hover:bg-slate-700/40 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-100 transition-colors"
            >
              ← Back to Events
            </button>
          </motion.div>
        </div>
      </div>
     
      <section className="bg-white py-12 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="md:w-2/3 w-full"
          >
            <h2 className="text-3xl font-bold text-yellow-700 mb-4">Celebrating Nigerian Culture</h2>
            <p className="text-lg text-slate-700 mb-2">
              Nigeria is a vibrant tapestry of ethnic groups, languages, and traditions. From the energetic dances of the Igbo, the rhythmic drumming of the Yoruba, to the colorful attire of the North, our campus brings together a rich blend of heritage and creativity.
            </p>
            <p className="text-base text-slate-600">
              The Cultural Night Showcase is more than an event—it's a celebration of unity, diversity, and pride. Join us as we honor the stories, music, food, and fashion that make our community unique. Experience the warmth, hospitality, and joy that define Nigerian culture.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="md:w-1/3 w-full flex justify-center"
          >
            <img
              src="/atire.jpg"
              alt="Nigerian Culture Collage"
              className="rounded-xl shadow-lg w-full max-w-xs object-cover"
            />
          </motion.div>
        </div>
      </section>
     
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimationContainer>
            <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
              Featured Performances
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {performances.map((perf, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden group cursor-pointer"
                  whileHover={{ 
                    scale: 1.03, 
                    y: -8,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                  }}
                >
                  <div className="h-48 overflow-hidden">
                    <motion.img
                      src={perf.image}
                      alt={perf.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{perf.name}</h3>
                    <p className="text-sm text-yellow-600 font-semibold mb-2">{perf.type}</p>
                    <p className="text-slate-500 mb-4">{perf.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </ScrollAnimationContainer>
        </div>
      </section>
      {/* Schedule Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimationContainer>
            <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
              Event Schedule
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {schedule.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-md p-6 flex items-start space-x-4"
                >
                  <div className="shrink-0">
                    <div className="w-16 h-16 bg-slate-200 rounded-lg flex items-center justify-center">
                      <span className="text-slate-600 font-semibold">{item.time}</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">{item.event}</h3>
                    <p className="text-slate-600 mt-1">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </ScrollAnimationContainer>
        </div>
      </section>
      {/* Highlights Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimationContainer>
            <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
              Event Highlights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="w-40 h-25 mx-auto mb-4 rounded-xl overflow-hidden">
                    <img 
                      src={highlight.image}
                      alt={highlight.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-slate-600">{highlight.description}</p>
                </motion.div>
              ))}
            </div>
          </ScrollAnimationContainer>
        </div>
      </section>
      {/* Cultural Celebration Stats */}
      <ScrollAnimationContainer direction="up" delay={0.8}>
        <section className="bg-gradient-to-r from-slate-800 to-slate-900 py-16 relative overflow-hidden">
          <motion.div 
            className="absolute w-40 h-40 bg-slate-600/10 rounded-full blur-2xl"
            animate={{ 
              x: [0, 150, 0], 
              y: [0, -80, 0],
              rotate: [0, 360, 0]
            }}
            transition={{ duration: 14, repeat: Infinity }}
            style={{ top: '10%', left: '5%' }}
          />
          <motion.div 
            className="absolute w-32 h-32 bg-slate-500/15 rounded-full blur-xl"
            animate={{ 
              x: [0, -120, 0], 
              y: [0, 50, 0],
              rotate: [360, 0, 360]
            }}
            transition={{ duration: 11, repeat: Infinity, delay: 6 }}
            style={{ bottom: '15%', right: '8%' }}
          />
          
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
              <motion.h2 
                className="text-4xl md:text-5xl font-bold text-white mb-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                🎆 Cultural Showcase 🎆
              </motion.h2>
              <motion.p 
                className="text-xl text-slate-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Celebrating diversity through dance, music, and fashion
              </motion.p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "15+", label: "Cultural Groups", icon: "🎭" },
                { number: "3hrs", label: "Live Performances", icon: "🎵" },
                { number: "₦1.5K", label: "Entry Fee", icon: "🎫" },
                { number: "500+", label: "Attendees", icon: "🎉" }
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
                Experience the rich tapestry of Nigerian culture in one spectacular night!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div 
                  className="bg-slate-600/30 border border-slate-500/50 text-slate-300 px-6 py-3 rounded-full"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(71, 85, 105, 0.4)" }}
                >
                  🎭 Traditional Dances
                </motion.div>
                <motion.div 
                  className="bg-slate-600/30 border border-slate-500/50 text-slate-300 px-6 py-3 rounded-full"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(71, 85, 105, 0.4)" }}
                >
                  🍲 Local Cuisine
                </motion.div>
                <motion.div 
                  className="bg-slate-600/30 border border-slate-500/50 text-slate-300 px-6 py-3 rounded-full"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(71, 85, 105, 0.4)" }}
                >
                  👗 Fashion Show
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </ScrollAnimationContainer>
    </div>
  );
}

export default Cultural;
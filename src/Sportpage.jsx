import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ScrollAnimationContainer } from './components/animations/ScrollAnimationContainer';
import Header from './components/Header';

const teams = [
  {
    name: "Thunder Hawks",
    sport: "Basketball",
    department: "Engineering",
    achievement: "Defending Champions",
    description: "Known for their fast-paced offense and strong team chemistry",
    image: "/basketball.jpg"
  },
  {
    name: "Green Lions",
    sport: "Football",
    department: "Business School",
    achievement: "Season's Top Scorer",
    description: "Remarkable attacking style with solid defensive foundation",
    image: "/football.jpg"
  },
  {
    name: "Swift Wings",
    sport: "Athletics",
    department: "Health Sciences",
    achievement: "Record Holders",
    description: "Dominating track events with multiple campus records",
    image: "/athletics1.jpg"
  }
];

const schedule = [
  {
    time: "2:00 PM",
    event: "Opening Ceremony",
    description: "Parade of teams and official tournament kickoff"
  },
  {
    time: "2:30 PM",
    event: "Basketball Finals",
    description: "Engineering vs. Medicine - Championship Match"
  },
  {
    time: "3:45 PM",
    event: "Athletics Finals",
    description: "100m, 200m, and 4x100m relay championships"
  },
  {
    time: "5:00 PM",
    event: "Football Finals",
    description: "Business School vs. Arts - Title Deciding Match"
  },
  {
    time: "6:00 PM",
    event: "Awards Ceremony",
    description: "Trophy presentation and closing ceremony"
  }
];

const highlights = [
  {
    title: "Championship Matches",
    description: "Witness the culmination of months of intense competition across multiple sports",
    image: "/trophy.jpg"
  },
  {
    title: "Live Commentary",
    description: "Professional commentators bringing you every moment of the action",
    image: "/commentator.jpg"
  },
  {
    title: "Prize Pool",
    description: "Over ₦500,000 in prizes and scholarships for winning teams",
    image: "/cash.jpg"
  },
  {
    title: "Live Streaming",
    description: "All finals matches streamed live on campus social media",
    image: "/streaming.jpg"
  }
];

function Sportpage() {
  const navigate = useNavigate();


  return (
    <div className="min-h-screen bg-slate-100">
      <Header />
      
      
      <div className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/sportbg2.jpg"
            alt="Sports Tournament"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <motion.div 
          className="absolute w-6 h-6 bg-orange-400/30 rounded-full"
          animate={{ 
            y: [0, -150, 0],
            x: [0, 50, 0],
            rotate: [0, 360, 0]
          }}
          transition={{ duration: 4, repeat: Infinity, delay: 0 }}
          style={{ top: '70%', left: '20%' }}
        />
        <motion.div 
          className="absolute w-8 h-8 bg-red-400/25 rounded-full"
          animate={{ 
            y: [0, -120, 0],
            x: [0, -30, 0],
            rotate: [360, 0, 360]
          }}
          transition={{ duration: 5, repeat: Infinity, delay: 1.5 }}
          style={{ top: '60%', right: '25%' }}
        />
        <motion.div 
          className="absolute w-7 h-7 bg-green-400/20 rounded-full"
          animate={{ 
            y: [0, -100, 0],
            rotate: [0, 180, 0]
          }}
          transition={{ duration: 3.5, repeat: Infinity, delay: 3 }}
          style={{ top: '80%', left: '70%' }}
        />
        
        <div className="relative h-full flex items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Campus Sports Tournament Finals
            </h1>
            <p className="text-xl sm:text-2xl text-slate-200 mb-8">
              The ultimate showdown of athletic excellence
            </p>
           <div className='flex justify-center'>
             <button
              onClick={() => navigate('/practice')}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-slate-600/30 hover:bg-slate-700/40 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 transition-colors"
            >
              ← Back to Events
            </button>
           </div>
          </motion.div>
        </div>
      </div>

      {/* Teams Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimationContainer>
            <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
              Featured Teams
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teams.map((team, index) => (
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
                      src={team.image}
                      alt={team.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{team.name}</h3>
                    <p className="text-sm text-blue-600 font-semibold mb-2">{team.sport}</p>
                    <p className="text-slate-500 mb-4">{team.description}</p>
                    <div className="flex items-center text-sm text-slate-600">
                      <span className="font-medium">{team.department}</span>
                      <span className="mx-2">•</span>
                      <span className="text-green-600 font-medium">{team.achievement}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </ScrollAnimationContainer>
        </div>
      </section>

     
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimationContainer>
            <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
              Tournament Schedule
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
                      <span className="text-slate-700 font-semibold">{item.time}</span>
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

      
      <section className="py-16 bg-slate-50">
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
                  <div className="w-40 h-30 mx-auto mb-4 rounded-xl overflow-hidden">
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

      {/* Sports Championship Stats */}
      <ScrollAnimationContainer direction="up" delay={0.8}>
        <section className="bg-gradient-to-r from-slate-800 to-slate-900 py-16 relative overflow-hidden">
          <motion.div 
            className="absolute w-40 h-40 bg-slate-600/10 rounded-full blur-2xl"
            animate={{ 
              x: [0, 150, 0], 
              y: [0, -80, 0],
              rotate: [0, 360, 0]
            }}
            transition={{ duration: 12, repeat: Infinity }}
            style={{ top: '10%', left: '5%' }}
          />
          <motion.div 
            className="absolute w-32 h-32 bg-slate-500/15 rounded-full blur-xl"
            animate={{ 
              x: [0, -100, 0], 
              y: [0, 60, 0],
              rotate: [360, 0, 360]
            }}
            transition={{ duration: 10, repeat: Infinity, delay: 5 }}
            style={{ bottom: '15%', right: '10%' }}
          />
          
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
              <motion.h2 
                className="text-4xl md:text-5xl font-bold text-white mb-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                🏆 Championship Finals 🏆
              </motion.h2>
              <motion.p 
                className="text-xl text-slate-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Witness athletic excellence and campus pride
              </motion.p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "8", label: "Championship Teams", icon: "🏅" },
                { number: "4hrs", label: "Non-Stop Action", icon: "⚡" },
                { number: "₦500", label: "Entry Fee", icon: "🎫" },
                { number: "₦500K", label: "Prize Pool", icon: "💰" }
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
                Experience the thrill of victory and the spirit of competition!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div 
                  className="bg-slate-600/30 border border-slate-500/50 text-slate-300 px-6 py-3 rounded-full"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(71, 85, 105, 0.4)" }}
                >
                  📺 Live Commentary
                </motion.div>
                <motion.div 
                  className="bg-slate-600/30 border border-slate-500/50 text-slate-300 px-6 py-3 rounded-full"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(71, 85, 105, 0.4)" }}
                >
                  🍕 Food Stalls
                </motion.div>
                <motion.div 
                  className="bg-slate-600/30 border border-slate-500/50 text-slate-300 px-6 py-3 rounded-full"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(71, 85, 105, 0.4)" }}
                >
                  📸 Photo Ops
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </ScrollAnimationContainer>
    </div>
  );
}

export default Sportpage;


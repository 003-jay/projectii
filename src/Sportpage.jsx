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
   const handleRegister = () => navigate('/registerform');

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
           <div className=' flex flex-col sm:flex-row gap-4 justify-center'>
             <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-slate-600/30 hover:bg-slate-700/40 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 transition-colors"
            >
              ← Back to Events
            </button>

             <button onClick={handleRegister} className="px-6 py-3 bg-white/50 text-slate-600 rounded-lg font-semibold hover:bg-slate-100/60 transition-colors">
                Buy Tickets Now
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
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={team.image}
                      alt={team.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
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
                  className="text-center bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
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

      {/* CTA Section */}
      <section className="py-16 bg-slate-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimationContainer>
            <h2 className="text-3xl font-bold text-white mb-8">
              Don't Miss The Action!
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join us for an unforgettable day of sports excellence and campus spirit
            </p>
            <button className="inline-flex items-center px-8 py-3 border-2 border-white text-lg font-medium rounded-md text-white hover:bg-white/10 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 transition-colors">
              Register as Spectator
            </button>
          </ScrollAnimationContainer>
        </div>
      </section>
    </div>
  );
}

export default Sportpage;


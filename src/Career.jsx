import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ScrollAnimationContainer } from './components/animations/ScrollAnimationContainer';
import Header from './components/Header';

const companies = [
  {
    name: "TechCorp Global",
    industry: "Technology",
    positions: "Software Engineers, Product Managers",
    image: "careersp1.jpg",
    description: "Leading innovation in cloud computing and AI solutions"
  },
  {
    name: "FinanceHub",
    industry: "Financial Services",
    positions: "Financial Analysts, Risk Management",
    image: "careersp2.jpg",
    description: "Transforming digital banking and fintech solutions"
  },
  {
    name: "CreativeMinds Agency",
    industry: "Creative & Marketing",
    positions: "Digital Marketing, UI/UX Design",
    image: "careersp3.jpg",
    description: "Award-winning creative solutions for global brands"
  }
];

const schedule = [
  {
    time: "5:00 PM",
    event: "Registration & Welcome",
    description: "Check-in and networking starter"
  },
  {
    time: "5:30 PM",
    event: "Opening Keynote",
    description: "Future of Work in 2026 and Beyond"
  },
  {
    time: "6:15 PM",
    event: "Company Presentations",
    description: "Learn about opportunities from industry leaders"
  },
  {
    time: "7:00 PM",
    event: "Speed Networking",
    description: "One-on-one sessions with recruiters"
  },
  {
    time: "7:45 PM",
    event: "CV Review Workshop",
    description: "Professional CV optimization tips"
  }
];

const workshops = [
  {
    title: "Interview Mastery",
    time: "6:30 PM - 7:15 PM",
    location: "Room 101",
    seats: "30 spots"
  },
  {
    title: "LinkedIn Optimization",
    time: "7:15 PM - 8:00 PM",
    location: "Room 102",
    seats: "25 spots"
  }
];

function Career() {
  const navigate = useNavigate();
  const goBack = () => navigate('/practice');
  const handleRegister = () => navigate('/registerform');
  return (
    <div className="min-h-screen bg-linear-to-b from-slate-50 to-slate-100">
      <Header />
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-[60vh] overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('/careerspg1.jpg')] bg-cover bg-center bg-no-repeat">
          <div className="absolute inset-0 bg-slate-900/60 opacity-15" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="max-w-4xl mx-auto px-4"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Career Networking Night 2025
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 mb-8">
              Connect with Industry Leaders & Launch Your Career
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={goBack} className="px-6 py-3 bg-transparent border border-white/30 text-white rounded-lg font-medium hover:bg-white/5 transition">
                Back
              </button>
              <button onClick={handleRegister} className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg font-semibold transition-colors">
                Register Now
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
                Your Gateway to Professional Success
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                Join us for an evening of meaningful connections and career opportunities. Network with leading employers, gain valuable insights from industry experts, and take the next step in your professional journey.
              </p>
              <ul className="space-y-4">
                {[
                  'One-on-One with Recruiters',
                  'Resume Review Sessions',
                  'Industry Expert Panels',
                  'Interview Workshops',
                  'Networking Opportunities'
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center text-slate-700"
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
                src="/careerspg2.jpg" 
                alt="Professional Networking" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>
      </ScrollAnimationContainer>

      
      <ScrollAnimationContainer direction="up" delay={0.3}>
        <section className="bg-linear-to-r from-slate-800 to-slate-900 py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Featured Companies
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {companies.map((company, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-6"
                >
                  <div className="w-24 h-24 mx-auto mb-4 rounded-xl overflow-hidden">
                    <img 
                      src={company.image} 
                      alt={company.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 text-center">
                    {company.name}
                  </h3>
                  <p className="text-blue-300 mb-2 text-center">{company.industry}</p>
                  <p className="text-slate-300 mb-3 text-center">{company.positions}</p>
                  <p className="text-slate-400 text-sm text-center">{company.description}</p>
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
                  <div className="text-lg font-semibold text-slate-800">
                    {item.time}
                  </div>
                </div>
                <div className="flex-1 bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow">
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

      
      <ScrollAnimationContainer direction="up" delay={0.5}>
        <section className="bg-linear-to-r from-slate-50 to-slate-100 py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">
              Career Development Workshops
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {workshops.map((workshop, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">
                    {workshop.title}
                  </h3>
                  <div className="space-y-2 text-slate-600">
                    <p className="flex items-center">
                      <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {workshop.time}
                    </p>
                    <p className="flex items-center">
                      <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {workshop.location}
                    </p>
                    <p className="flex items-center">
                      <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      {workshop.seats}
                    </p>
                  </div>
                  <button className="mt-4 w-full bg-slate-600 hover:bg-slate-700 text-white font-semibold py-2 rounded-lg transition-colors">
                    Reserve Spot
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimationContainer>

      
      <ScrollAnimationContainer direction="up" delay={0.6}>
        <section className="bg-linear-to-r from-slate-400 to-slate-500 py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Start Your Professional Journey?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Don't miss this opportunity to connect with top employers and kickstart your career
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={handleRegister} className="px-8 py-4 bg-slate-500 text-slate-100 rounded-lg font-semibold hover:bg-slate-600 transition-colors">
                Register Now
              </button>
              
            </div>
          </div>
        </section>
      </ScrollAnimationContainer>

     
      <ScrollAnimationContainer direction="up" delay={0.7}>
        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Venue</h3>
                <p className="text-slate-600">Business School Hall</p>
                <p className="text-slate-500">Main Campus</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Date & Time</h3>
                <p className="text-slate-600">November 25, 2025</p>
                <p className="text-slate-500">5:00 PM - 8:00 PM</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Entry</h3>
                <p className="text-slate-600">Free for Students</p>
                <p className="text-slate-500">Professional ID Required</p>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimationContainer>
    </div>
  );
}

export default Career;
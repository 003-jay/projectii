import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from './components/Header';
import { FadeIn, SlideIn } from './components/animations';
import { ScrollAnimationContainer } from './components/animations/ScrollAnimationContainer';

const topics = [
  {
    title: "Python for AI",
    level: "Beginner Friendly",
    description: "Introduction to Python programming with focus on AI/ML libraries.",
    duration: "2 hours",
    image: "/pythoncode.jpg"
  },
  {
    title: "Deep Learning Basics",
    level: "Intermediate",
    description: "Understanding neural networks and their applications.",
    duration: "2.5 hours",
    image: "/brain.jpg"
  },
  {
    title: "TensorFlow in Practice",
    level: "Advanced",
    description: "Hands-on machine learning model development.",
    duration: "2.5 hours",
    image: "/neural.jpg"
  }
];

const schedule = [
  {
    time: "9:00 AM",
    event: "Registration & Setup",
    description: "Welcome pack distribution and environment setup assistance"
  },
  {
    time: "9:30 AM",
    event: "Python Fundamentals",
    description: "Essential Python concepts for AI/ML development"
  },
  {
    time: "11:00 AM",
    event: "Break & Networking",
    description: "Refreshments and interaction with mentors"
  },
  {
    time: "11:30 AM",
    event: "Deep Learning Session",
    description: "Neural networks and practical applications"
  },
  {
    time: "1:00 PM",
    event: "Lunch Break",
    description: "Lunch provided for all participants"
  },
  {
    time: "2:00 PM",
    event: "TensorFlow Workshop",
    description: "Hands-on model building and training"
  }
];

const requirements = [
  {
    title: "Hardware Requirements",
    description: "Laptop with minimum 8GB RAM, 4-core processor",
    image: "/hardware_req.jpg"
  },
  {
    title: "Software Setup",
    description: "Python 3.8+, VSCode, Jupyter Notebooks",
    image: "/software_req.jpg"
  },
  {
    title: "Prerequisites",
    description: "Basic programming knowledge, mathematics fundamentals",
    image: "/prereq.jpg"
  },
  {
    title: "Workshop Materials",
    description: "Digital course materials and practice datasets provided",
    image: "/materials.jpg"
  }
];

function Aipage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-100">
      <Header />
      
      
      <div className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
            <img
            src="/ai.jpg"
            alt="ai workshop"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              AI & Machine Learning Workshop
            </h1>
            <p className="text-xl sm:text-2xl text-slate-200 mb-8">
              Dive into the world of artificial intelligence and machine learning
            </p>
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-white/30 hover:bg-white/40 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
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
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Future-Ready Skills</h2>
            <p className="text-lg text-slate-700 mb-4">
              Join us for an immersive workshop where you'll learn practical AI and machine learning skills from industry experts. This hands-on session will take you from basic concepts to building real ML models.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Hands-on Training</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Expert Mentors</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Take-Home Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Certificate</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="md:w-1/1 w-full flex justify-center"
          >
            <img
              src="robotlab.jpg"
              alt="AI Workshop Overview"
              className="rounded-xl shadow-lg w-full max-w-xs object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
              Workshop Topics
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {topics.map((topic, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={topic.image}
                      alt={topic.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{topic.title}</h3>
                    <p className="text-sm text-blue-600 font-semibold mb-2">{topic.level}</p>
                    <p className="text-slate-500 mb-4">{topic.description}</p>
                    <div className="flex items-center text-sm text-slate-600">
                      <span className="font-medium">Duration:</span>
                      <span className="ml-2">{topic.duration}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

     
      <ScrollAnimationContainer direction="up" delay={0.8} >
        <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
              Workshop Schedule
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {schedule.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5,  delay: index * 0.1 }}
                  className="bg-slate-50 rounded-lg shadow-md p-6 flex items-start space-x-4"
                >
                  <div className="shrink-0">
                    <div className="w-19 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
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
          </FadeIn>
        </div>
      </section>
      </ScrollAnimationContainer>

      {/* Requirements Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
              What You'll Need
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {requirements.map((req, index) => (
                <SlideIn key={index} direction="up" delay={index * 0.1}>
                  <div className="text-center bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg--100 flex items-center justify-center">
                      <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">
                      {req.title}
                    </h3>
                    <p className="text-slate-600">{req.description}</p>
                  </div>
                </SlideIn>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold text-white mb-8">
              Ready to Start Your AI Journey?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Limited seats available. Register now to secure your spot in this transformative workshop.
            </p>
            <button className="inline-flex items-center px-8 py-3 border-2 border-white text-lg font-medium rounded-md text-white hover:bg-white hover:text-slate-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
              Register Now - ₦3,000
            </button>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}

export default Aipage;
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function ViewEvent() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getEventFromStorage = () => {
      try {
        const events = JSON.parse(localStorage.getItem('events') || '[]');
        const foundEvent = events.find(e => e.id === id);
        setEvent(foundEvent);
      } catch (error) {
        console.error('Error loading event:', error);
      } finally {
        setLoading(false);
      }
    };

    getEventFromStorage();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading event...</div>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <motion.div 
          className="text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-3xl font-bold mb-4">Event Not Found</h1>
          <p className="text-slate-300 mb-6">The event you're looking for doesn't exist.</p>
          <button 
            onClick={() => navigate('/practice')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all"
          >
            Back to Events
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Floating Background Elements */}
      <motion.div 
        className="absolute w-32 h-32 bg-slate-600/20 rounded-full blur-xl"
        animate={{ 
          x: [0, 100, 0], 
          y: [0, -50, 0]
        }}
        transition={{ duration: 8, repeat: Infinity }}
        style={{ top: '10%', left: '5%' }}
      />
      <motion.div 
        className="absolute w-24 h-24 bg-slate-500/20 rounded-full blur-xl"
        animate={{ 
          x: [0, -80, 0], 
          y: [0, 40, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, delay: 4 }}
        style={{ bottom: '20%', right: '10%' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <button
            onClick={() => navigate('/practice')}
            className="flex items-center space-x-2 bg-slate-700 hover:bg-slate-600 text-white font-medium py-2 px-4 rounded-lg shadow-md transition-all mb-6"
          >
            <span>←</span>
            <span>Back to Events</span>
          </button>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Event Image/Flyer */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden shadow-2xl">
              {event.flyer ? (
                <img
                  src={event.flyer}
                  alt={event.title}
                  className="w-full h-96 object-cover"
                />
              ) : (
                <div className="h-96 bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-6xl mb-4">🎉</div>
                    <h3 className="text-2xl font-bold">{event.title}</h3>
                  </div>
                </div>
              )}
              
              <div className="p-8">
                <motion.h1 
                  className="text-4xl font-bold text-white mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {event.title}
                </motion.h1>
                
                <motion.p 
                  className="text-slate-300 text-lg leading-relaxed mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {event.description || "Join us for this amazing event!"}
                </motion.p>

                {/* Event Details Grid */}
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="bg-white/5 rounded-lg p-4 backdrop-blur-sm">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                        <span className="text-lg">📅</span>
                      </div>
                      <div>
                        <p className="text-slate-400 text-sm">Date & Time</p>
                        <p className="text-white font-medium">{event.date}</p>
                        <p className="text-slate-300 text-sm">{event.time}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-lg p-4 backdrop-blur-sm">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                        <span className="text-lg">📍</span>
                      </div>
                      <div>
                        <p className="text-slate-400 text-sm">Venue</p>
                        <p className="text-white font-medium">{event.venue}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-lg p-4 backdrop-blur-sm">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                        <span className="text-lg">🎯</span>
                      </div>
                      <div>
                        <p className="text-slate-400 text-sm">Category</p>
                        <p className="text-white font-medium capitalize">{event.eventType}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-lg p-4 backdrop-blur-sm">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center">
                        <span className="text-lg">💰</span>
                      </div>
                      <div>
                        <p className="text-slate-400 text-sm">Entry Fee</p>
                        <p className="text-white font-medium">{event.ticketFee || 'Free'}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Organizer Info */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <span className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center mr-3">
                  👤
                </span>
                Organizer
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="text-slate-400 text-sm">Name</p>
                  <p className="text-white font-medium">{event.organizerName}</p>
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Contact</p>
                  <p className="text-slate-300 text-sm">{event.organizerEmail}</p>
                </div>
              </div>
            </div>

            {/* Registration Button */}
            <motion.button
              onClick={() => navigate(`/register/${event.id}`)}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-xl shadow-lg transition-all"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              🎫 Register for Event
            </motion.button>

            {/* Share Buttons */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl">
              <h3 className="text-lg font-bold text-white mb-4">Share Event</h3>
              <div className="flex space-x-3">
                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm transition-all">
                  📱 Share
                </button>
                <button className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg text-sm transition-all">
                  💾 Save
                </button>
              </div>
            </div>

            {/* Event Stats */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl">
              <h3 className="text-lg font-bold text-white mb-4">Event Info</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-400">Created</span>
                  <span className="text-white">{new Date(event.createdAt).toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Event ID</span>
                  <span className="text-slate-300 font-mono text-xs">{event.id.slice(-8)}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default ViewEvent;
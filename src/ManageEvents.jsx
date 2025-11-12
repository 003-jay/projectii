import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Header from './components/Header';

const ManageEvents = () => {
  const navigate = useNavigate();
  const [liveEvents, setLiveEvents] = useState([]);
  const [showConfirm, setShowConfirm] = useState(null);

  useEffect(() => {
    const events = JSON.parse(localStorage.getItem('events') || '[]');
    setLiveEvents(events);
  }, []);

  const handleRemoveEvent = (eventId) => {
    const updatedEvents = liveEvents.filter(event => event.id !== eventId);
    localStorage.setItem('events', JSON.stringify(updatedEvents));
    setLiveEvents(updatedEvents);
    setShowConfirm(null);
    
    // Show success message
    const notification = document.createElement('div');
    notification.className = 'fixed top-4 right-4 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg z-50';
    notification.textContent = 'Event removed successfully';
    document.body.appendChild(notification);
    setTimeout(() => document.body.removeChild(notification), 3000);
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-slate-900 p-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="mb-8"
          >
            <button
              onClick={() => navigate('/practice')}
              className="flex items-center space-x-2 bg-slate-700 hover:bg-slate-600 text-white font-medium py-2 px-4 rounded-lg shadow-md transition-all mb-6"
            >
              <span>←</span>
              <span>Back to Events</span>
            </button>
            <h1 className="text-3xl font-bold text-white mb-2">Manage Live Events</h1>
            <p className="text-slate-400">Remove cancelled or completed events</p>
          </motion.div>

        {liveEvents.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-6xl text-slate-600 mb-4">📅</div>
            <p className="text-slate-400 text-lg">No live events to manage</p>
          </motion.div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {liveEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-slate-600 transition-all"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{event.title}</h3>
                
                <div className="space-y-2 mb-4 text-slate-300">
                  <div className="flex items-center gap-2">
                    <span className="text-sm">📅 {event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm">🕐 {event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm">📍 {event.venue || event.location}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm bg-slate-700 text-slate-300 px-2 py-1 rounded">
                    {event.category}
                  </span>
                  <button
                    onClick={() => setShowConfirm(event.id)}
                    className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-lg transition-colors"
                  >
                    🗑️ Remove
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Confirmation Modal */}
        {showConfirm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-slate-800 rounded-xl p-6 max-w-md w-full"
            >
              <h3 className="text-xl font-semibold text-white mb-4">Confirm Removal</h3>
              <p className="text-slate-300 mb-6">
                Are you sure you want to remove this event? This action cannot be undone.
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowConfirm(null)}
                  className="flex-1 bg-slate-700 hover:bg-slate-600 text-white py-2 rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleRemoveEvent(showConfirm)}
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg transition-colors"
                >
                  Remove Event
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
        </div>
      </div>
    </>
  );
};

export default ManageEvents;
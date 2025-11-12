import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';

function PendingEvents() {
  const navigate = useNavigate();
  const [pendingEvents, setPendingEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showPreview, setShowPreview] = useState(false);

  useEffect(() => {
    loadPendingEvents();
  }, []);

  const loadPendingEvents = () => {
    try {
      const pending = JSON.parse(localStorage.getItem('pendingEvents') || '[]');
      setPendingEvents(pending);
    } catch (error) {
      console.error('Error loading pending events:', error);
      localStorage.removeItem('pendingEvents');
      setPendingEvents([]);
    }
  };

  const handleApprove = (event) => {
    try {
      // Get current events (keep all existing events safe)
      let approvedEvents = JSON.parse(localStorage.getItem('events') || '[]');
      
      // Clean up event for live events (minimal fields only)
      const approvedEvent = {
        id: event.id || Date.now().toString(),
        title: event.title || 'Untitled Event',
        description: (event.description || '').substring(0, 150),
        date: event.date || 'TBD',
        time: event.time || 'TBD',
        venue: event.venue || event.location || 'TBD',
        category: event.eventType || 'Event',
        price: event.ticketFee || 'Free',
        createdAt: event.createdAt || new Date().toISOString()
      };
      
      approvedEvents.unshift(approvedEvent);
      localStorage.setItem('events', JSON.stringify(approvedEvents));

      // Remove from pending
      const updatedPending = pendingEvents.filter(e => e.id !== event.id);
      setPendingEvents(updatedPending);
      localStorage.setItem('pendingEvents', JSON.stringify(updatedPending));

      setShowPreview(false);
      
      // Show success notification
      const notification = document.createElement('div');
      notification.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50';
      notification.textContent = '✅ Event approved!';
      document.body.appendChild(notification);
      setTimeout(() => {
        if (document.body.contains(notification)) {
          document.body.removeChild(notification);
        }
      }, 3000);
      
      // Trigger header update
      window.dispatchEvent(new Event('storage'));
    } catch (error) {
      console.error('Error approving event:', error);
      alert('❌ Storage quota exceeded. Please use Manage Events to remove old events first.');
    }
  };

  const handleDecline = (event, reason = '') => {
    try {
      // Remove from pending
      const updatedPending = pendingEvents.filter(e => e.id !== event.id);
      setPendingEvents(updatedPending);
      localStorage.setItem('pendingEvents', JSON.stringify(updatedPending));

      setShowPreview(false);
      
      // Show decline notification
      const notification = document.createElement('div');
      notification.className = 'fixed top-4 right-4 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg z-50';
      notification.textContent = '❌ Event declined';
      document.body.appendChild(notification);
      setTimeout(() => {
        if (document.body.contains(notification)) {
          document.body.removeChild(notification);
        }
      }, 3000);
      
      // Trigger header update
      window.dispatchEvent(new Event('storage'));
    } catch (error) {
      console.error('Error declining event:', error);
      alert('❌ Error declining event: ' + error.message);
    }
  };

  const handlePreview = (event) => {
    setSelectedEvent(event);
    setShowPreview(true);
  };

  return (
    <>
      <Header />
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8">
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

          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">Admin Dashboard</h1>
              <p className="text-slate-300">Review and manage pending event submissions</p>
            </div>
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl px-6 py-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">{pendingEvents.length}</div>
                <div className="text-slate-300 text-sm">Pending Events</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Pending Events Grid */}
        {pendingEvents.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">📭</div>
            <h2 className="text-2xl font-bold text-white mb-2">No Pending Events</h2>
            <p className="text-slate-300">All event submissions have been reviewed</p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pendingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden shadow-2xl"
              >
                {/* Event Image */}
                <div className="relative h-48">
                  {event.flyer ? (
                    <img
                      src={event.flyer}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="text-4xl mb-2">🎉</div>
                        <p className="text-sm">No Image</p>
                      </div>
                    </div>
                  )}
                  <div className="absolute top-3 right-3">
                    <span className="bg-yellow-500 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold">
                      PENDING
                    </span>
                  </div>
                </div>

                {/* Event Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">
                    {event.title}
                  </h3>
                  <p className="text-slate-300 text-sm mb-4 line-clamp-2">
                    {event.description || 'No description provided'}
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-slate-300">
                      <span className="mr-2">📅</span>
                      {event.date} at {event.time}
                    </div>
                    <div className="flex items-center text-sm text-slate-300">
                      <span className="mr-2">📍</span>
                      {event.venue}
                    </div>
                    <div className="flex items-center text-sm text-slate-300">
                      <span className="mr-2">👤</span>
                      {event.organizerName}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handlePreview(event)}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded-lg text-sm transition-all"
                    >
                      👁️ Preview
                    </button>
                    <button
                      onClick={() => handleApprove(event)}
                      className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-3 rounded-lg text-sm transition-all"
                    >
                      ✅ Approve
                    </button>
                    <button
                      onClick={() => handleDecline(event)}
                      className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 px-3 rounded-lg text-sm transition-all"
                    >
                      ❌ Decline
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Preview Modal */}
      <AnimatePresence>
        {showPreview && selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowPreview(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Preview Header */}
              <div className="p-6 border-b border-white/20">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-white">Event Preview</h2>
                  <button
                    onClick={() => setShowPreview(false)}
                    className="text-white hover:text-slate-300 text-2xl"
                  >
                    ×
                  </button>
                </div>
              </div>

              {/* Preview Content */}
              <div className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Event Image */}
                  <div>
                    {selectedEvent.flyer ? (
                      <img
                        src={selectedEvent.flyer}
                        alt={selectedEvent.title}
                        className="w-full h-64 object-cover rounded-xl"
                      />
                    ) : (
                      <div className="w-full h-64 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl flex items-center justify-center">
                        <div className="text-center text-white">
                          <div className="text-6xl mb-4">🎉</div>
                          <h3 className="text-xl font-bold">{selectedEvent.title}</h3>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Event Details */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{selectedEvent.title}</h3>
                      <p className="text-slate-300">{selectedEvent.description}</p>
                    </div>

                    <div className="grid grid-cols-1 gap-3">
                      <div className="bg-white/5 rounded-lg p-3">
                        <div className="flex items-center space-x-3">
                          <span className="text-lg">📅</span>
                          <div>
                            <p className="text-slate-400 text-sm">Date & Time</p>
                            <p className="text-white">{selectedEvent.date} at {selectedEvent.time}</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white/5 rounded-lg p-3">
                        <div className="flex items-center space-x-3">
                          <span className="text-lg">📍</span>
                          <div>
                            <p className="text-slate-400 text-sm">Venue</p>
                            <p className="text-white">{selectedEvent.venue}</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white/5 rounded-lg p-3">
                        <div className="flex items-center space-x-3">
                          <span className="text-lg">👤</span>
                          <div>
                            <p className="text-slate-400 text-sm">Organizer</p>
                            <p className="text-white">{selectedEvent.organizerName}</p>
                            <p className="text-slate-300 text-sm">{selectedEvent.organizerEmail}</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white/5 rounded-lg p-3">
                        <div className="flex items-center space-x-3">
                          <span className="text-lg">💰</span>
                          <div>
                            <p className="text-slate-400 text-sm">Entry Fee</p>
                            <p className="text-white">{selectedEvent.ticketFee || 'Free'}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4 mt-8 pt-6 border-t border-white/20">
                  <button
                    onClick={() => handleApprove(selectedEvent)}
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-xl font-semibold transition-all"
                  >
                    ✅ Approve Event
                  </button>
                  <button
                    onClick={() => handleDecline(selectedEvent)}
                    className="flex-1 bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-xl font-semibold transition-all"
                  >
                    ❌ Decline Event
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      </div>
    </>
  );
}

export default PendingEvents;
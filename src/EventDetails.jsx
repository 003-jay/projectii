import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function EventDetails() {
  const { id } = useParams(); // from /event/:id
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("events");
    if (stored) {
      const parsed = JSON.parse(stored);

      // Fix: match both string and number id safely
      const found = parsed.find(
        (e) => e.id?.toString() === id?.toString()
      );

      setEvent(found || null);
    }
  }, [id]);

  if (!event) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <motion.div 
          className="text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="text-6xl mb-4">😢</div>
          <h1 className="text-3xl font-bold mb-4">Event Not Found</h1>
          <p className="text-slate-300 mb-6">The event you're looking for doesn't exist.</p>
          <button 
            onClick={() => navigate('/practice')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all font-semibold"
          >
            ← Back to Events
          </button>
        </motion.div>
      </div>
    );
  }

  const handleRegister = () => {
    const booked = JSON.parse(localStorage.getItem("bookedEvents") || "[]");
    booked.unshift(event);
    localStorage.setItem("bookedEvents", JSON.stringify(booked));
    navigate(`/registerform/${event.id}`);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: event.title,
        text: `Check out this event: ${event.title}`,
        url: window.location.href
      }).catch(() => {
        // Fallback to clipboard
        navigator.clipboard.writeText(window.location.href);
        alert('Event link copied to clipboard!');
      });
    } else {
      // Fallback for browsers without Web Share API
      navigator.clipboard.writeText(window.location.href);
      alert('Event link copied to clipboard!');
    }
  };

  const handleSave = () => {
    const savedEvents = JSON.parse(localStorage.getItem('savedEvents') || '[]');
    const isAlreadySaved = savedEvents.some(e => e.id === event.id);
    
    if (isAlreadySaved) {
      alert('Event already saved!');
      return;
    }
    
    savedEvents.unshift(event);
    localStorage.setItem('savedEvents', JSON.stringify(savedEvents));
    alert('Event saved successfully!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-8 px-4 relative overflow-hidden">
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
      
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Back Button */}
        <motion.button
          onClick={() => navigate("/practice")}
          className="mb-6 flex items-center space-x-2 bg-slate-700 hover:bg-slate-600 text-white font-medium py-2 px-4 rounded-lg shadow-md transition-all"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          <span>←</span>
          <span>Back to Events</span>
        </motion.button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Event Poster */}
            <div className="relative">
              {event.flyer ? (
                <img
                  src={event.flyer}
                  alt={event.title}
                  className="w-full h-80 object-cover"
                />
              ) : (
                <div className="w-full h-80 bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-6xl mb-4">🎉</div>
                    <h3 className="text-2xl font-bold">{event.title}</h3>
                  </div>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h1 className="text-4xl font-extrabold drop-shadow-lg">{event.title}</h1>
                <p className="text-sm mt-1 text-slate-200 drop-shadow-md">
                  {event.eventType || event.category} • {event.date} • {event.time}
                </p>
              </div>
            </div>

            {/* Event Info */}
            <div className="p-8">
              <motion.p 
                className="text-slate-200 mb-6 leading-relaxed text-lg"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {event.description ||
                  "No description provided. Add more details about this event to help others understand what to expect!"}
              </motion.p>

              {/* Event Details Grid */}
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <div className="bg-white/5 rounded-lg p-4 backdrop-blur-sm">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                      <span className="text-lg">📍</span>
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">Venue</p>
                      <p className="text-white font-medium">{event.location || event.venue}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 rounded-lg p-4 backdrop-blur-sm">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                      <span className="text-lg">💰</span>
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">Entry Fee</p>
                      <p className="text-white font-medium">{event.price || event.ticketFee || "Free"}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 rounded-lg p-4 backdrop-blur-sm">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                      <span className="text-lg">👤</span>
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">Organizer</p>
                      <p className="text-white font-medium">{event.organizerName || "N/A"}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 rounded-lg p-4 backdrop-blur-sm">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center">
                      <span className="text-lg">📧</span>
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">Contact</p>
                      <a
                        href={`mailto:${event.organizerEmail}`}
                        className="text-blue-300 hover:text-blue-200 font-medium transition-colors"
                      >
                        {event.organizerEmail || "Not provided"}
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Registration Card */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-4">Join This Event</h3>
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleRegister}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-xl shadow-lg transition-all"
              >
                🎫 Register Now
              </motion.button>
            </div>

            {/* Event Stats */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl">
              <h3 className="text-lg font-bold text-white mb-4">Event Details</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-400">Category</span>
                  <span className="text-white capitalize">{event.eventType || event.category}</span>
                </div>
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

            {/* Share Options */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl">
              <h3 className="text-lg font-bold text-white mb-4">Share Event</h3>
              <div className="flex space-x-3">
                <button 
                  onClick={handleShare}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm transition-all"
                >
                  📱 Share
                </button>
                <button 
                  onClick={handleSave}
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg text-sm transition-all"
                >
                  💾 Save
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default EventDetails;

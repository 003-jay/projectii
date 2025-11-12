import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function AddEvent() {
  const navigate = useNavigate();

  const [eventType, setEventType] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    venue: "",
    organizerName: "",
    organizerEmail: "",
    ticketFee: "",
    customType: "",
  });

  const [flyer, setFlyer] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  
  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setFlyer({ file, previewBase64: reader.result });
    reader.readAsDataURL(file);
  };

 
  const getEventsFromStorage = () => {
    try {
      const data = localStorage.getItem("events");
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  };

  
  const saveEventToStorage = (event) => {
    const events = getEventsFromStorage();
    events.unshift(event);
    localStorage.setItem("events", JSON.stringify(events));
  };

  
  const handleClear = () => {
    const confirmClear = window.confirm(
      "Are you sure you want to clear this form? All data will be lost."
    );

    if (!confirmClear) return;

    setFormData({
      title: "",
      description: "",
      date: "",
      time: "",
      venue: "",
      organizerName: "",
      organizerEmail: "",
      ticketFee: "",
      customType: "",
    });
    setFlyer(null);
    setEventType("");
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.title ||
      !formData.date ||
      !formData.time ||
      !formData.venue ||
      !formData.organizerName ||
      !formData.organizerEmail ||
      !eventType
    ) {
      alert("Please fill all required fields.");
      setSubmitting(false);
      return;
    }

    setSubmitting(true);

    try {
      // Simulate processing time
      setTimeout(() => {
      const finalType =
        eventType === "other" ? formData.customType || "Other" : eventType;

      const newEvent = {
        id: Date.now().toString(),
        title: formData.title,
        description: formData.description,
        date: formData.date,
        time: formData.time,
        venue: formData.venue,
        eventType: finalType,
        organizerName: formData.organizerName,
        organizerEmail: formData.organizerEmail,
        ticketFee: formData.ticketFee || null,
        flyer: flyer ? flyer.previewBase64 : null,
        createdAt: new Date().toISOString(),
      };

      // Save to pending events instead of live events
      const pendingEvents = JSON.parse(localStorage.getItem("pendingEvents") || "[]");
      const eventWithStatus = { ...newEvent, status: "PENDING", submittedAt: new Date().toISOString() };
      pendingEvents.unshift(eventWithStatus);
      localStorage.setItem("pendingEvents", JSON.stringify(pendingEvents));
      
      setSubmitting(false);
      
      // Show success notification
      showNotification();
      
        // Navigate after short delay
        setTimeout(() => {
          navigate("/practice", { state: { success: "Event submitted for review!" } });
        }, 2000);
      }, 1000);
    } catch (error) {
      console.error('Error submitting event:', error);
      setSubmitting(false);
      alert('Error submitting event. Please try again.');
    }
  };

  const showNotification = () => {
    // Create notification element
    const notification = document.createElement('div');
    notification.innerHTML = `
      <div class="fixed top-4 right-4 z-50 bg-green-600 text-white px-6 py-4 rounded-lg shadow-lg transform transition-all duration-500 translate-x-full">
        <div class="flex items-center space-x-3">
          <div class="text-2xl">✅</div>
          <div>
            <div class="font-bold">Request Sent!</div>
            <div class="text-sm opacity-90">Check Admin Panel for review</div>
          </div>
        </div>
      </div>
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
      notification.firstElementChild.classList.remove('translate-x-full');
    }, 100);
    
    // Animate out and remove
    setTimeout(() => {
      notification.firstElementChild.classList.add('translate-x-full');
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 500);
    }, 3000);
  };

  
  const preview = {
    title: formData.title || "Event Title Preview",
    date: formData.date || "YYYY-MM-DD",
    time: formData.time || "HH:MM",
    venue: formData.venue || "Venue name",
    category:
      eventType === "other"
        ? formData.customType || "Other"
        : eventType || "Category",
    organizer: formData.organizerName || "Organizer Name",
    flyer: flyer?.previewBase64 || null,
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
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
        {/* Form Section */}
        <motion.div 
          className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl p-8"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.button
            onClick={() => navigate(-1)}
            className="mb-6 flex items-center space-x-2 bg-slate-700 hover:bg-slate-600 text-white font-medium py-2 px-4 rounded-lg shadow-md transition-all"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>←</span>
            <span>Back</span>
          </motion.button>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-4xl font-bold text-white mb-2">
              Create New Event
            </h2>
            <p className="text-slate-300">Share your event with the campus community</p>
          </motion.div>

          
          <form onSubmit={handleSubmit} className="space-y-5">
            
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <label className="block text-white font-medium mb-2">
                Event Title *
              </label>
              <input
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter event name"
                className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-white placeholder-slate-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm transition-all"
              />
            </motion.div>

            
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <label className="block text-white font-medium mb-2">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Brief description about the event"
                rows="3"
                className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-white placeholder-slate-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm transition-all resize-none"
              ></textarea>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <div>
                <label className="block text-white font-medium mb-2">
                  📅 Date *
                </label>
                <input
                  name="date"
                  type="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-white focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm transition-all"
                />
              </div>
              <div>
                <label className="block text-white font-medium mb-2">
                  🕐 Time *
                </label>
                <input
                  name="time"
                  type="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-white focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm transition-all"
                />
              </div>
            </motion.div>

            
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <label className="block text-white font-medium mb-2">
                📍 Venue *
              </label>
              <input
                name="venue"
                value={formData.venue}
                onChange={handleChange}
                placeholder="Enter location"
                className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-white placeholder-slate-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm transition-all"
              />
            </motion.div>

            
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <label className="block text-white font-medium mb-2">
                🎯 Event Type *
              </label>
              <select
                value={eventType}
                onChange={(e) => setEventType(e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-white focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm transition-all"
              >
                <option value="" className="bg-slate-800 text-white">Select category</option>
                <option value="academic" className="bg-slate-800 text-white">Academic</option>
                <option value="tech" className="bg-slate-800 text-white">Tech</option>
                <option value="sports" className="bg-slate-800 text-white">Sports</option>
                <option value="career" className="bg-slate-800 text-white">Career Networking</option>
                <option value="party" className="bg-slate-800 text-white">Party</option>
                <option value="other" className="bg-slate-800 text-white">Other</option>
              </select>
            </motion.div>

            {eventType === "other" && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.3 }}
              >
                <label className="block text-white font-medium mb-2">
                  ✨ Specify Your Event Type
                </label>
                <input
                  type="text"
                  name="customType"
                  value={formData.customType}
                  onChange={handleChange}
                  placeholder="e.g., Fashion Show, Charity Drive"
                  className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-white placeholder-slate-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm transition-all"
                />
              </motion.div>
            )}

            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <div>
                <label className="block text-white font-medium mb-2">
                  👤 Organizer Name *
                </label>
                <input
                  name="organizerName"
                  value={formData.organizerName}
                  onChange={handleChange}
                  placeholder="Enter your name or club"
                  className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-white placeholder-slate-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm transition-all"
                />
              </div>
              <div>
                <label className="block text-white font-medium mb-2">
                  📧 Organizer Email *
                </label>
                <input
                  type="email"
                  name="organizerEmail"
                  value={formData.organizerEmail}
                  onChange={handleChange}
                  placeholder="yourname@email.com"
                  className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-white placeholder-slate-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm transition-all"
                />
              </div>
            </motion.div>

            
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              <label className="block text-white font-medium mb-2">
                💰 Ticket Fee (optional)
              </label>
              <input
                name="ticketFee"
                value={formData.ticketFee}
                onChange={handleChange}
                placeholder="e.g., ₦2000 or Free"
                className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-white placeholder-slate-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm transition-all"
              />
            </motion.div>

            
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.5 }}
            >
              <label className="block text-white font-medium mb-2">
                🖼️ Upload Flyer / Poster
              </label>

              <div className="border-2 border-dashed border-white/30 hover:border-blue-400 bg-white/5 rounded-lg p-6 text-center cursor-pointer transition-all backdrop-blur-sm">
                <label htmlFor="flyerUpload" className="flex flex-col items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-slate-300 mb-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16a4 4 0 01-.88-7.9A5 5 0 0115 8h1a3 3 0 011 5.83M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                  <span className="text-white font-medium">
                    Click or drag your flyer here
                  </span>
                  <span className="text-xs text-slate-300 mt-1">
                    PNG, JPG (max 3MB)
                  </span>
                </label>
                <input
                  type="file"
                  id="flyerUpload"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </div>

              {flyer && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4"
                >
                  <div className="rounded-xl p-[2px] bg-gradient-to-r from-sky-400 to-indigo-500">
                    <img
                      src={flyer.previewBase64}
                      alt="Flyer preview"
                      className="w-full h-48 object-cover rounded-lg shadow-md"
                    />
                  </div>
                </motion.div>
              )}
            </motion.div>

            
            <motion.div 
              className="pt-6 flex flex-col sm:flex-row gap-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.5 }}
            >
              <motion.button
                type="submit"
                disabled={submitting}
                className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                whileHover={{ scale: submitting ? 1 : 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                {submitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </span>
                ) : (
                  "🚀 Submit Event"
                )}
              </motion.button>

              <motion.button
                type="button"
                onClick={handleClear}
                className="flex-1 border border-white/30 text-white hover:bg-white/10 font-semibold py-3 px-6 rounded-lg transition-all backdrop-blur-sm"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                🗑️ Clear Form
              </motion.button>
            </motion.div>
          </form>
        </motion.div>

        
        {/* Preview Section */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="sticky top-8"
        >
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl overflow-hidden">
            <div className="relative">
              {preview.flyer ? (
                <img
                  src={preview.flyer}
                  alt="Flyer preview"
                  className="w-full h-56 object-cover"
                />
              ) : (
                <div className="h-56 bg-slate-700/50 flex items-center justify-center text-slate-300 text-sm backdrop-blur-sm">
                  📸 No flyer uploaded
                </div>
              )}

             
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>

              
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="text-2xl font-bold drop-shadow-lg">{preview.title}</h4>
                <p className="text-sm text-slate-200 drop-shadow-md">
                  {preview.category} • {preview.date} • {preview.time}
                </p>
              </div>

              
              <div className="absolute top-3 right-3 flex gap-2">
                <button className="bg-white/20 hover:bg-blue-500 text-white text-xs px-3 py-1 rounded-full font-medium shadow-lg backdrop-blur-sm transition-all border border-white/30">
                  ❤️ Interested
                </button>
                <button className="bg-white/20 hover:bg-purple-500 text-white text-xs px-3 py-1 rounded-full font-medium shadow-lg backdrop-blur-sm transition-all border border-white/30">
                  📤 Share
                </button>
              </div>
            </div>

            <div className="p-6">
              <p className="text-slate-200 mb-3 text-sm leading-relaxed">
                {formData.description ||
                  "Your event description will appear here. Keep it short and interesting!"}
              </p>
              <div className="space-y-2">
                <p className="text-slate-300 text-sm flex items-center">
                  <span className="font-semibold text-white mr-2">📍 Venue:</span>
                  {preview.venue}
                </p>
                <p className="text-slate-300 text-sm flex items-center">
                  <span className="font-semibold text-white mr-2">👤 Organizer:</span>
                  {preview.organizer}
                </p>
                {formData.ticketFee && (
                  <p className="text-slate-300 text-sm flex items-center">
                    <span className="font-semibold text-white mr-2">💰 Fee:</span>
                    {formData.ticketFee}
                  </p>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default AddEvent;

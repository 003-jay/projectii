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
      !formData.organizerEmail
    ) {
      alert("Please fill all required fields.");
      return;
    }

    setSubmitting(true);

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

    saveEventToStorage(newEvent);
    setSubmitting(false);
    alert("🎉 Event added successfully!");
    navigate("/practice", { state: { success: "Event added successfully!" } });
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
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-slate-50 to-slate-200 py-10 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        
        <div className="bg-white shadow-lg rounded-2xl p-8">
          <button
            onClick={() => navigate(-1)}
            className="mb-4 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold py-2 px-4 rounded-lg shadow-sm transition"
          >
            ← Back
          </button>

          <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
            Add New Event
          </h2>

          
          <form onSubmit={handleSubmit} className="space-y-5">
            
            <div>
              <label className="block text-slate-700 font-semibold mb-1">
                Event Title *
              </label>
              <input
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter event name"
                className="w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-sky-500"
              />
            </div>

            
            <div>
              <label className="block text-slate-700 font-semibold mb-1">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Brief description about the event"
                rows="3"
                className="w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-sky-500"
              ></textarea>
            </div>

            {/* Date & Time */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-700 font-semibold mb-1">
                  Date *
                </label>
                <input
                  name="date"
                  type="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-sky-500"
                />
              </div>
              <div>
                <label className="block text-slate-700 font-semibold mb-1">
                  Time *
                </label>
                <input
                  name="time"
                  type="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-sky-500"
                />
              </div>
            </div>

            
            <div>
              <label className="block text-slate-700 font-semibold mb-1">
                Venue *
              </label>
              <input
                name="venue"
                value={formData.venue}
                onChange={handleChange}
                placeholder="Enter location"
                className="w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-sky-500"
              />
            </div>

            
            <div>
              <label className="block text-slate-700 font-semibold mb-1">
                Event Type *
              </label>
              <select
                value={eventType}
                onChange={(e) => setEventType(e.target.value)}
                className="w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-sky-500"
              >
                <option value="">Select category</option>
                <option value="academic">Academic</option>
                <option value="tech">Tech</option>
                <option value="sports">Sports</option>
                <option value="career">Career Networking</option>
                <option value="party">Party</option>
                <option value="other">Other</option>
              </select>
            </div>

            {eventType  === "other" && (
              <div>
                <label className="block text-slate-700 font-semibold mb-1">
                  Specify Your Event Type
                </label>
                <input
                  type="text"
                  name="customType"
                  value={formData.customType}
                  onChange={handleChange}
                  placeholder="e.g., Fashion Show, Charity Drive"
                  className="w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-sky-500"
                />
              </div>
            )}

            
            <div>
              <label className="block text-slate-700 font-semibold mb-1">
                Organizer Name *
              </label>
              <input
                name="organizerName"
                value={formData.organizerName}
                onChange={handleChange}
                placeholder="Enter your name or club"
                className="w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-sky-500"
              />
            </div>

            <div>
              <label className="block text-slate-700 font-semibold mb-1">
                Organizer Email *
              </label>
              <input
                type="email"
                name="organizerEmail"
                value={formData.organizerEmail}
                onChange={handleChange}
                placeholder="yourname@email.com"
                className="w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-sky-500"
              />
            </div>

            
            <div>
              <label className="block text-slate-700 font-semibold mb-1">
                Ticket Fee (optional)
              </label>
              <input
                name="ticketFee"
                value={formData.ticketFee}
                onChange={handleChange}
                placeholder="e.g., ₦2000"
                className="w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-sky-500"
              />
            </div>

            
            <div>
              <label className="block text-slate-700 font-semibold mb-1">
                Upload Flyer / Poster
              </label>

              <div className="border-2 border-dashed border-slate-300 hover:border-sky-500 bg-slate-50 rounded-lg p-6 text-center cursor-pointer transition">
                <label htmlFor="flyerUpload" className="flex flex-col items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-slate-400 mb-2"
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
                  <span className="text-slate-600 font-medium">
                    Click or drag your flyer here
                  </span>
                  <span className="text-xs text-slate-400 mt-1">
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
            </div>

            
            <div className="pt-4 flex flex-col sm:flex-row gap-3">
              <button
                type="submit"
                disabled={submitting}
                className="w-full sm:flex-1 bg-sky-500 hover:bg-indigo-500 text-white font-semibold py-2 rounded-md shadow-md transition disabled:opacity-60"
              >
                {submitting ? "Submitting..." : "Submit Event"}
              </button>

              <button
                type="button"
                onClick={handleClear}
                className="w-full sm:flex-1 border border-slate-400 text-slate-700 hover:bg-slate-100 font-semibold py-2 rounded-md transition"
              >
                Clear Form
              </button>
            </div>
          </form>
        </div>

        
        <aside>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="sticky top-8 bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="relative">
              {preview.flyer ? (
                <img
                  src={preview.flyer}
                  alt="Flyer preview"
                  className="w-full h-56 object-cover"
                />
              ) : (
                <div className="h-56 bg-slate-200 flex items-center justify-center text-slate-400 text-sm">
                  No flyer uploaded
                </div>
              )}

             
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>

              
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="text-2xl font-bold">{preview.title}</h4>
                <p className="text-sm">
                  {preview.category} • {preview.date} • {preview.time}
                </p>
              </div>

              
              <div className="absolute top-3 right-3 flex gap-2">
                <button className="bg-white/90 hover:bg-sky-500 hover:text-white text-slate-800 text-xs px-3 py-1 rounded-full font-medium shadow-sm transition">
                  Interested
                </button>
                <button className="bg-white/90 hover:bg-indigo-500 hover:text-white text-slate-800 text-xs px-3 py-1 rounded-full font-medium shadow-sm transition">
                  Share
                </button>
              </div>
            </div>

            <div className="p-5">
              <p className="text-slate-700 mb-2 text-sm">
                {formData.description ||
                  "Your event description will appear here. Keep it short and interesting!"}
              </p>
              <p className="text-slate-600 text-sm">
                <span className="font-semibold text-slate-800">Venue:</span>{" "}
                {preview.venue}
              </p>
              <p className="text-slate-600 text-sm mt-1">
                <span className="font-semibold text-slate-800">Organizer:</span>{" "}
                {preview.organizer}
              </p>
            </div>
          </motion.div>
        </aside>
      </div>
    </div>
  );
}

export default AddEvent;

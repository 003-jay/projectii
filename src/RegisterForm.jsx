import React, { useState, useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

function RegisterForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();

  const [event, setEvent] = useState(location.state?.event || null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "",
    studentId: "",
  });

  useEffect(() => {
    if (!event && id) {
      // First check localStorage for user-added events
      const stored = localStorage.getItem("events");
      if (stored) {
        const found = JSON.parse(stored).find(
          (e) => e.id.toString() === id.toString()
        );
        if (found) {
          setEvent(found);
          return;
        }
      }
      
      // Then check static events from Practice page
      const staticEvents = [
        {
          id: 1,
          title: "Tech Innovation Summit 2025",
          date: "November 15, 2025",
          time: "10:00 AM - 4:00 PM",
          location: "Main Auditorium",
          category: "Academic",
          description: "Join industry leaders and innovators for a day of inspiring talks and workshops on the latest technology trends.",
          price: "Free Entry",
        },
        {
          id: 2,
          title: "Campus Music Festival",
          date: "November 20, 2025",
          time: "6:00 PM - 11:00 PM",
          location: "Central Square",
          category: "Entertainment",
          description: "Experience an unforgettable night of live music featuring top campus bands and special guest performers.",
          price: "₦2,000",
        },
        {
          id: 3,
          title: "Career Networking Night",
          date: "November 25, 2025",
          time: "5:00 PM - 8:00 PM",
          location: "Business School Hall",
          category: "Career",
          description: "Connect with leading employers and alumni for career opportunities and professional guidance.",
          price: "Free for Students",
        },
        {
          id: 4,
          title: "Sports Tournament Finals",
          date: "December 1, 2025",
          time: "2:00 PM - 6:00 PM",
          location: "University Sports Complex",
          category: "Sports",
          description: "Witness the exciting finals of our inter-department sports tournament. Basketball, football, and athletics competitions with amazing prizes.",
          price: "₦500",
        },
        {
          id: 5,
          title: "Cultural Night Showcase",
          date: "December 5, 2025",
          time: "7:00 PM - 10:00 PM",
          location: "Campus Theatre",
          category: "Culture",
          description: "A spectacular evening celebrating diversity through traditional dances, music, fashion show, and cultural performances from different regions.",
          price: "₦1,500",
        },
        {
          id: 6,
          title: "AI & Machine Learning Workshop",
          date: "December 8, 2025",
          time: "9:00 AM - 3:00 PM",
          location: "Computer Science Lab",
          category: "Workshop",
          description: "Hands-on workshop on AI and Machine Learning. Learn practical skills in Python, TensorFlow, and real-world AI applications. Limited seats available!",
          price: "₦3,000",
        },
      ];
      
      const staticEvent = staticEvents.find(e => e.id.toString() === id.toString());
      if (staticEvent) {
        setEvent(staticEvent);
      }
    }
  }, [id, event]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email) {
      alert("Please fill in all required fields.");
      return;
    }

    const registration = {
      id: Date.now().toString(),
      eventId: id || event?.id || null,
      ...formData,
      eventTitle: event ? event.title : "General Registration",
      eventDate: event?.date || "",
      eventTime: event?.time || "",
      venue: event?.venue || event?.location || "",
      eventPrice: event?.price || "Free",
      eventCategory: event?.category || "Event",
      eventDescription: event?.description || "",
      dateRegistered: new Date().toISOString(),
    };

    const registered =
      JSON.parse(localStorage.getItem("registeredUsers") || "[]");
    registered.unshift(registration);
    localStorage.setItem("registeredUsers", JSON.stringify(registered));

    navigate("/confirmationpage", { state: { registration } });
  };

  const handleGoBack = () => {
    if (window.history.length > 1) navigate(-1);
    else navigate("/");
  };

  return (
    <div className="min-h-screen flex">
      {/* LEFT SIDE - Image */}
      <motion.div 
        className="hidden lg:flex lg:w-1/2 relative overflow-hidden"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1758270703653-e031eabf5b33?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHN0dWRlbnQlMjBleGNpdGVkfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500"
            alt="Campus Events"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/60"></div>
        </div>
        
        <motion.div 
          className="absolute w-20 h-20 bg-slate-400/20 rounded-full blur-xl"
          animate={{ 
            x: [0, 100, 0], 
            y: [0, -50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          style={{ top: '20%', left: '10%' }}
        />
        <motion.div 
          className="absolute w-16 h-16 bg-slate-300/15 rounded-full blur-xl"
          animate={{ 
            x: [0, -80, 0], 
            y: [0, 30, 0],
            scale: [1.2, 1, 1.2]
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 4 }}
          style={{ bottom: '30%', right: '15%' }}
        />
        
        <div className="relative z-10 flex flex-col justify-center items-center text-center text-white p-12">
          <motion.h1 
            className="text-4xl lg:text-5xl font-bold mb-6 leading-tight"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Join Amazing Campus Events
          </motion.h1>
          <motion.p 
            className="text-xl text-slate-200 mb-8 max-w-md leading-relaxed"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Connect with your campus community and never miss out on exciting opportunities
          </motion.p>
          <motion.div 
            className="flex space-x-8 text-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <div>
              <div className="text-3xl font-bold">500+</div>
              <div className="text-slate-300 text-sm">Events</div>
            </div>
            <div>
              <div className="text-3xl font-bold">2K+</div>
              <div className="text-slate-300 text-sm">Students</div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* RIGHT SIDE - Registration Form */}
      <motion.div 
        className="flex-1 lg:w-1/2 flex justify-center items-center bg-slate-100 px-6 py-12"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="w-full max-w-md">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-2">
              Event Registration
            </h2>
            <p className="text-slate-600 mb-8">Fill in your details to register for this event</p>

            {event && (
              <motion.div 
                className="mb-6 bg-white rounded-xl p-4 shadow-md border border-slate-200"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <h3 className="font-semibold text-slate-800 mb-2">{event.title}</h3>
                <div className="text-sm text-slate-600 space-y-1">
                  <p>📅 {event.date} at {event.time}</p>
                  <p>📍 {event.venue || event.location}</p>
                  <p>💰 {event.price}</p>
                </div>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <label className="block text-slate-700 font-medium mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all"
                />
              </motion.div>

              <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <label className="block text-slate-700 font-medium mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all"
                />
              </motion.div>

              <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.5 }}
              >
                <label className="block text-slate-700 font-medium mb-2">
                  Department
                </label>
                <input
                  type="text"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  placeholder="e.g., Computer Science"
                  className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all"
                />
              </motion.div>

              <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.0, duration: 0.5 }}
              >
                <label className="block text-slate-700 font-medium mb-2">
                  Student ID (optional)
                </label>
                <input
                  type="text"
                  name="studentId"
                  value={formData.studentId}
                  onChange={handleChange}
                  placeholder="Enter student ID"
                  className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all"
                />
              </motion.div>

              <motion.div 
                className="flex gap-4 pt-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.1, duration: 0.5 }}
              >
                <motion.button
                  type="button"
                  onClick={handleGoBack}
                  className="flex-1 bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold py-3 rounded-lg transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  ← Back
                </motion.button>

                <motion.button
                  type="submit"
                  className="flex-1 bg-slate-800 hover:bg-slate-700 text-white font-semibold py-3 rounded-lg transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Register Now
                </motion.button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default RegisterForm;

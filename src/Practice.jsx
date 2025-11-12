import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn, SlideIn } from "./components/animations";
import { useLocation, useNavigate } from "react-router-dom";
import { ScrollAnimationContainer } from "./components/animations/ScrollAnimationContainer";
import Header from "./components/Header";
import LoadingScreen from "./components/LoadingScreen";
import { useLoadingNavigation } from "./hooks/useLoadingNavigation";


const staticEvents = [
  {
    id: 1,
    title: "Tech Innovation Summit 2025",
    date: "November 15, 2025",
    time: "10:00 AM - 4:00 PM",
    location: "Main Auditorium",
    image: "/techbg1.jpg",
    category: "Academic",
    description:
      "Join industry leaders and innovators for a day of inspiring talks and workshops on the latest technology trends.",
    price: "Free Entry",
  },
  {
    id: 2,
    title: "Campus Music Festival",
    date: "November 20, 2025",
    time: "6:00 PM - 11:00 PM",
    location: "Central Square",
    image: "/party1.jpg",
    category: "Entertainment",
    description:
      "Experience an unforgettable night of live music featuring top campus bands and special guest performers.",
    price: "₦2,000",
  },
  {
    id: 3,
    title: "Career Networking Night",
    date: "November 25, 2025",
    time: "5:00 PM - 8:00 PM",
    location: "Business School Hall",
    image: "/careerbg3.jpg",
    category: "Career",
    description:
      "Connect with leading employers and alumni for career opportunities and professional guidance.",
    price: "Free for Students",
  },
  {
    id: 4,
    title: "Sports Tournament Finals",
    date: "December 1, 2025",
    time: "2:00 PM - 6:00 PM",
    location: "University Sports Complex",
    image: "/sportbg2.jpg",
    category: "Sports",
    description:
      "Witness the exciting finals of our inter-department sports tournament. Basketball, football, and athletics competitions with amazing prizes.",
    price: "₦500",
  },
  {
    id: 5,
    title: "Cultural Night Showcase",
    date: "December 5, 2025",
    time: "7:00 PM - 10:00 PM",
    location: "Campus Theatre",
    image: "/culturalbg1.jpg",
    category: "Culture",
    description:
      "A spectacular evening celebrating diversity through traditional dances, music, fashion show, and cultural performances from different regions.",
    price: "₦1,500",
  },
  {
    id: 6,
    title: "AI & Machine Learning Workshop",
    date: "December 8, 2025",
    time: "9:00 AM - 3:00 PM",
    location: "Computer Science Lab",
    image: "/student4.jpg",
    category: "Workshop",
    description:
      "Hands-on workshop on AI and Machine Learning. Learn practical skills in Python, TensorFlow, and real-world AI applications. Limited seats available!",
    price: "₦3,000",
  },
];

function Practice() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const { navigateWithLoading, isNavigating } = useLoadingNavigation();
  const [allEvents, setAllEvents] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [successMessage, setSuccessMessage] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [imageLoading, setImageLoading] = useState(false);

  // Keyboard navigation for modal
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!selectedImage || !selectedCategory) return;
      
      if (e.key === 'ArrowLeft') {
        const currentIndex = selectedCategory.images.indexOf(selectedImage);
        const prevIndex = currentIndex === 0 ? selectedCategory.images.length - 1 : currentIndex - 1;
        setSelectedImage(selectedCategory.images[prevIndex]);
      } else if (e.key === 'ArrowRight') {
        const currentIndex = selectedCategory.images.indexOf(selectedImage);
        const nextIndex = currentIndex === selectedCategory.images.length - 1 ? 0 : currentIndex + 1;
        setSelectedImage(selectedCategory.images[nextIndex]);
      } else if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedImage, selectedCategory]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Restore scroll position after loading
      const scrollData = sessionStorage.getItem('practice-scroll');
      if (scrollData) {
        try {
          const { y } = JSON.parse(scrollData);
          setTimeout(() => {
            window.scrollTo({ top: y, behavior: 'instant' });
          }, 100);
        } catch (error) {
          console.error('Error restoring scroll position:', error);
        }
      }
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

 
  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem("events")) || [];
      const normalizedStored = Array.isArray(stored)
        ? stored.map((ev, i) => ({
            id: ev.id || `user-${Date.now()}-${i}`,
            title: ev.title || ev.name || "Untitled Event",
            date: ev.date || ev.eventDate || "",
            time: ev.time || ev.eventTime || "",
            location: ev.location || ev.venue || "",
            image: ev.image || ev.flyer || null,
            flyer: ev.flyer || ev.image || null,
            category: ev.category || ev.eventType || "Event",
            description: ev.description || ev.desc || "",
            price: ev.price || ev.ticketFee || "Free",
            userAdded: true,
            ...ev,
          }))
        : [];

      setAllEvents([...staticEvents, ...normalizedStored]);
    } catch (error) {
      console.error("Error loading stored events:", error);
      setAllEvents(staticEvents);
    }
  }, []);

  
  useEffect(() => {
    if (location?.state?.success) {
      setSuccessMessage(location.state.success);
      const t = setTimeout(() => setSuccessMessage(""), 3000);
      return () => clearTimeout(t);
    }
  }, [location]);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  
  const handleViewDetails = (eventId) => {
    sessionStorage.setItem(
      "practice-scroll",
      JSON.stringify({ y: window.scrollY, id: eventId })
    );

    if (eventId === 1) navigateWithLoading("/techpg");
    else if (eventId === 2) navigateWithLoading("/musicpage");
    else if (eventId === 3) navigateWithLoading("/career");
    else if (eventId === 4) navigateWithLoading("/sportpage");
    else if (eventId === 5) navigateWithLoading("/cultural");
    else if (eventId === 6) navigateWithLoading("/aipage");
    else navigateWithLoading(`/event/${eventId}`);
  };

  
  const handleRegister = (eventId) => {
    const selectedEvent = allEvents.find((e) => e.id === eventId);
    navigateWithLoading(`/registerform/${eventId}`, 600);
  };

  
  const handleDiscard = (eventId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to discard this event?"
    );
    if (!confirmDelete) return;

    const updatedEvents = allEvents.filter((event) => event.id !== eventId);
    setAllEvents(updatedEvents);

    const remainingUserEvents = updatedEvents.filter((e) => e.userAdded);
    localStorage.setItem("events", JSON.stringify(remainingUserEvents));
  };

  return (
    <>
      <AnimatePresence>
        {(isLoading || isNavigating) && <LoadingScreen />}
      </AnimatePresence>
      
      {!isLoading && (
        <div className="min-h-screen bg-slate-100">
          <Header />

      
      <div className="relative overflow-hidden bg-slate-200">
        <div className="absolute inset-0 bg-[url('/campus2.jpg')] bg-cover bg-center opacity-95" />
        <div className="absolute inset-0 bg-slate-900/40" />
        
        <motion.div 
          className="absolute w-20 h-20 bg-white/10 rounded-full blur-xl"
          animate={{ 
            x: [0, 100, 0], 
            y: [0, -50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          style={{ top: '20%', left: '10%' }}
        />
        <motion.div 
          className="absolute w-16 h-16 bg-white/5 rounded-full blur-xl"
          animate={{ 
            x: [0, -80, 0], 
            y: [0, 30, 0],
            scale: [1.2, 1, 1.2]
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 4 }}
          style={{ bottom: '30%', right: '15%' }}
        />
        
        <div className="relative max-w-7xl mx-auto px-4 py-12 sm:py-16 sm:px-6 lg:px-8">
          <FadeIn delay={0.2}>
            <div className="max-w-3xl mx-auto text-center">
              <motion.h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight drop-shadow-lg"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Campus Events
              </motion.h1>
              <motion.p 
                className="text-lg sm:text-xl text-slate-100 max-w-2xl mx-auto leading-relaxed drop-shadow-md"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Discover and participate in exciting events happening around your campus
              </motion.p>
            </div>
          </FadeIn>
        </div>
      </div>

      
      {successMessage && (
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg text-center">
            {successMessage}
          </div>
        </div>
      )}

      
      <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16 sm:px-6 lg:px-8">
        <ScrollAnimationContainer direction="up" delay={0.3}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {allEvents.map((event, index) => (
              <SlideIn
                key={event.id}
                direction={index % 2 === 0 ? "right" : "left"}
                delay={0.2 * (index + 1)}
              >
                <motion.div 
                  className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-200 group"
                  whileHover={{ 
                    scale: 1.03, 
                    y: -5,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <motion.img
                      src={event.flyer || event.image || "/campus2.jpg"}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <motion.div 
                      className="absolute top-4 right-4"
                      whileHover={{ scale: 1.1 }}
                    >
                      <span className="px-3 py-1 bg-slate-700 text-white text-sm font-semibold rounded-full shadow-lg">
                        {event.category || event.eventType || "Event"}
                      </span>
                    </motion.div>
                  </div>

                  <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-3 line-clamp-1">
                      {event.title}
                    </h3>

                    <div className="space-y-2.5 text-sm sm:text-base text-slate-600 mb-4">
                      <p>{event.date} • {event.time}</p>
                      <p>{event.location || event.venue}</p>
                      <p>{event.price}</p>
                    </div>

                    <p className="text-sm sm:text-base text-slate-600 mb-6 line-clamp-2 leading-relaxed">
                      {event.description}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                      <motion.button
                        onClick={() => handleRegister(event.id)}
                        className="w-full sm:flex-1 bg-slate-800 hover:bg-slate-700 text-white font-semibold py-2.5 px-4 rounded-lg transition-all duration-200"
                        whileHover={{ scale: 1.02, y: -1 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Register Now
                      </motion.button>

                      <motion.button
                        onClick={() => handleViewDetails(event.id)}
                        className="w-full sm:flex-1 border border-slate-400 text-slate-700 hover:bg-slate-100 font-semibold py-2.5 px-4 rounded-lg transition-all duration-200"
                        whileHover={{ scale: 1.02, y: -1 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        View Details
                      </motion.button>

                      {event.userAdded && (
                        <motion.button
                          onClick={() => handleDiscard(event.id)}
                          className="w-full sm:flex-1 border border-red-400 text-red-600 hover:bg-red-50 font-semibold py-2.5 px-4 rounded-lg transition-all duration-200"
                          whileHover={{ scale: 1.02, y: -1 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Discard
                        </motion.button>
                      )}
                    </div>
                  </div>
                </motion.div>
              </SlideIn>
            ))}
          </div>
        </ScrollAnimationContainer>
      </div>

      
      <div className="bg-slate-200 py-12 sm:py-20 relative overflow-hidden">
        <motion.div 
          className="absolute w-40 h-40 bg-slate-300/30 rounded-full blur-2xl"
          animate={{ 
            x: [0, 150, 0], 
            y: [0, -80, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 15, repeat: Infinity }}
          style={{ top: '10%', left: '5%' }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollAnimationContainer direction="up" delay={0.2}>
            <div id="gallery" className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-4 leading-tight">
                Event Categories Gallery
              </h2>
              <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                Explore our diverse range of campus events and activities
              </p>
            </div>
          </ScrollAnimationContainer>

          <ScrollAnimationContainer direction="scale" delay={0.4}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  category: "Tech Events",
                  images: ["tech1.jpg", "tech2.jpg", "tech3.jpg", "tech4.jpg"],
                  color: "bg-blue-500",
                },
                {
                  category: "Workshops",
                  images: ["workshop1.jpg", "workshop2.jpg", "workshop3.jpg", "workshop4.jpg"],
                  color: "bg-green-500",
                },
                {
                  category: "Sports",
                  images: ["sport1.jpg", "sport2.jpg", "sport3.jpg", "sport4.jpg"],
                  color: "bg-red-500",
                },
                {
                  category: "Music Festival",
                  images: ["music1.jpg", "music2.jpg", "music3.jpg", "music4.jpg"],
                  color: "bg-purple-500",
                },
                {
                  category: "Cultural Events",
                  images: ["cultural7.jpg", "cultural1.jpg", "cultural5.jpg", "cultural6.jpg"],
                  color: "bg-yellow-500",
                },
                {
                  category: "Career Events",
                  images: ["career1.jpg", "career2.jpg", "career3.jpg", "career4.jpg"],
                  color: "bg-indigo-500",
                },
              ].map((category, i) => (
                <SlideIn key={i} direction={i % 2 === 0 ? "right" : "left"} delay={0.2 * (i + 1)}>
                  <motion.div 
                    className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                    whileHover={{ 
                      scale: 1.02, 
                      y: -3,
                      boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.2)"
                    }}
                  >
                    <div 
                      className="relative h-64 overflow-hidden cursor-pointer group"
                      onClick={() => {
                        setSelectedCategory(category);
                        setSelectedImage(category.images[Math.floor(Date.now() / 3000) % 4]);
                      }}
                    >
                      {category.images.map((img, j) => (
                        <motion.img
                          key={j}
                          src={img}
                          alt={`${category.category} ${j + 1}`}
                          className={`absolute inset-0 w-full h-full object-cover transition-all duration-[3sec] group-hover:scale-105 ${
                            j === (Math.floor(Date.now() / 3000) % 4)
                              ? "opacity-100"
                              : "opacity-0"
                          }`}
                          whileHover={{ scale: 1.02 }}
                        />
                      ))}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-white text-xl font-bold mb-1">
                          {category.category}
                        </h3>
                        <p className="text-slate-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          Click to view gallery
                        </p>
                      </div>
                      <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <span className={`px-3 py-1 rounded-full text-white text-sm ${category.color}`}>
                        4 Photos
                      </span>
                    </div>
                  </motion.div>
                </SlideIn>
              ))}
            </div>
          </ScrollAnimationContainer>
        </div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div 
              className="relative max-w-4xl max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                {imageLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-slate-100">
                    <motion.div 
                      className="w-8 h-8 border-4 border-slate-300 border-t-slate-600 rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                  </div>
                )}
                <motion.img 
                  src={selectedImage} 
                  alt="Gallery view" 
                  className="w-full h-auto max-h-[70vh] object-cover cursor-zoom-in"
                  onLoad={() => setImageLoading(false)}
                  onLoadStart={() => setImageLoading(true)}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Previous Button */}
                <button 
                  onClick={() => {
                    const currentIndex = selectedCategory.images.indexOf(selectedImage);
                    const prevIndex = currentIndex === 0 ? selectedCategory.images.length - 1 : currentIndex - 1;
                    setSelectedImage(selectedCategory.images[prevIndex]);
                  }}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                {/* Next Button */}
                <button 
                  onClick={() => {
                    const currentIndex = selectedCategory.images.indexOf(selectedImage);
                    const nextIndex = currentIndex === selectedCategory.images.length - 1 ? 0 : currentIndex + 1;
                    setSelectedImage(selectedCategory.images[nextIndex]);
                  }}
                  className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                
                {/* Close Button */}
                <button 
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                
                {/* Image Counter */}
                <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                  {selectedCategory.images.indexOf(selectedImage) + 1} / {selectedCategory.images.length}
                </div>
              </div>
              {selectedCategory && (
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">{selectedCategory.category}</h3>
                  <p className="text-slate-600 mb-2">Explore more amazing {selectedCategory.category.toLowerCase()} happening around campus</p>
                  <p className="text-xs text-slate-400">Use ← → arrow keys or click thumbnails to navigate • Press ESC to close</p>
                  <div className="flex gap-2 mt-4">
                    {selectedCategory.images.map((img, i) => (
                      <motion.img
                        key={i}
                        src={img}
                        alt={`${selectedCategory.category} ${i + 1}`}
                        className={`w-16 h-16 object-cover rounded-lg cursor-pointer border-2 transition-all duration-200 ${
                          img === selectedImage 
                            ? 'border-slate-600 ring-2 ring-slate-400' 
                            : 'border-transparent hover:border-slate-400'
                        }`}
                        onClick={() => {
                          setImageLoading(true);
                          setSelectedImage(img);
                        }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      />
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 py-20 relative overflow-hidden">
        <motion.div 
          className="absolute w-64 h-64 bg-white/5 rounded-full blur-3xl"
          animate={{ 
            x: [0, 100, 0], 
            y: [0, -50, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 12, repeat: Infinity }}
          style={{ top: '20%', right: '10%' }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollAnimationContainer direction="up" delay={0.2}>
            <div className="text-center mb-16">
              <motion.h2 
                className="text-4xl md:text-5xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Ready to Join the Fun?
              </motion.h2>
              <motion.p 
                className="text-xl text-slate-300 max-w-2xl mx-auto mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Don't miss out on the amazing events happening around campus. Create memories that last a lifetime!
              </motion.p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                {[
                  { number: "500+", label: "Events This Year" },
                  { number: "2K+", label: "Active Students" },
                  { number: "50+", label: "Organizations" },
                  { number: "95%", label: "Satisfaction Rate" }
                ].map((stat, i) => (
                  <motion.div 
                    key={i}
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                    <div className="text-slate-400 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <motion.button 
                  onClick={() => navigateWithLoading('/addevent')}
                  className="bg-white text-slate-800 font-bold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Create Your Event
                </motion.button>
                <motion.button 
                  onClick={() => {
                    document.getElementById('gallery').scrollIntoView({ 
                      behavior: 'smooth' 
                    });
                  }}
                  className="border-2 border-white text-white font-bold px-8 py-4 rounded-full hover:bg-white hover:text-slate-800 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore More
                </motion.button>
              </motion.div>
            </div>
          </ScrollAnimationContainer>
        </div>
      </div>
        </div>
      )}
    </>
  );
}

export default Practice;

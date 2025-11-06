import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FadeIn, SlideIn } from "./components/animations";
import { useLocation, useNavigate } from "react-router-dom";
import { ScrollAnimationContainer } from "./components/animations/ScrollAnimationContainer";
import Header from "./components/Header";


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

  const [allEvents, setAllEvents] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [successMessage, setSuccessMessage] = useState("");

 
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

    if (eventId === 1) navigate("/techpg");
    else if (eventId === 2) navigate("/musicpage");
    else if (eventId === 3) navigate("/career");
    else if (eventId === 4) navigate("/sportpage");
    else if (eventId === 5) navigate("/cultural");
    else if (eventId === 6) navigate("/aipage");
    else navigate(`/event/${eventId}`);
  };

  
  const handleRegister = (eventId) => {
    const selectedEvent = allEvents.find((e) => e.id === eventId);
    navigate(`/registerform/${eventId}`, { state: { event: selectedEvent } });
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
    <div className="min-h-screen bg-slate-100">
      <Header />

      
      <div className="relative overflow-hidden bg-slate-200">
        <div className="absolute inset-0 bg-[url('/campus2.jpg')] bg-cover bg-center opacity-95" />
        <div className="relative max-w-7xl mx-auto px-4 py-12 sm:py-16 sm:px-6 lg:px-8">
          <FadeIn delay={0.2}>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-200 mb-4 leading-tight">
                Campus Events
              </h1>
              <p className="text-lg sm:text-xl text-slate-100 max-w-2xl mx-auto leading-relaxed">
                Discover and participate in exciting events happening around your campus
              </p>
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
                <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-slate-200">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={event.flyer || event.image || "/campus2.jpg"}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-slate-700 text-white text-sm font-semibold rounded-full">
                        {event.category || event.eventType || "Event"}
                      </span>
                    </div>
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
                      <button
                        onClick={() => handleRegister(event.id)}
                        className="w-full sm:flex-1 bg-slate-800 hover:bg-slate-700 text-white font-semibold py-2.5 px-4 rounded-lg transition"
                      >
                        Register Now
                      </button>

                      <button
                        onClick={() => handleViewDetails(event.id)}
                        className="w-full sm:flex-1 border border-slate-400 text-slate-700 hover:bg-slate-100 font-semibold py-2.5 px-4 rounded-lg transition"
                      >
                        View Details
                      </button>

                      {event.userAdded && (
                        <button
                          onClick={() => handleDiscard(event.id)}
                          className="w-full sm:flex-1 border border-red-400 text-red-600 hover:bg-red-50 font-semibold py-2.5 px-4 rounded-lg transition"
                        >
                          Discard
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </SlideIn>
            ))}
          </div>
        </ScrollAnimationContainer>
      </div>

      
      <div className="bg-slate-200 py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                    <div className="relative h-64 overflow-hidden">
                      {category.images.map((img, j) => (
                        <img
                          key={j}
                          src={img}
                          alt={`${category.category} ${j + 1}`}
                          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[3sec] ${
                            j === (Math.floor(Date.now() / 3000) % 4)
                              ? "opacity-100"
                              : "opacity-0"
                          }`}
                        />
                      ))}
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                        <h3 className="text-white text-xl font-bold">
                          {category.category}
                        </h3>
                      </div>
                    </div>
                    <div className="p-4">
                      <span className={`px-3 py-1 rounded-full text-white text-sm ${category.color}`}>
                        4 Photos
                      </span>
                    </div>
                  </div>
                </SlideIn>
              ))}
            </div>
          </ScrollAnimationContainer>
        </div>
      </div>
    </div>
  );
}

export default Practice;

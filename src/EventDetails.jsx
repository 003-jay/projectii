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
      <div className="h-screen flex flex-col gap-3 items-center justify-center text-slate-600 text-xl">
        <p>Event not found 😢</p>
        <button
          onClick={() => navigate("/practice")}
          className="bg-sky-500 hover:bg-indigo-500 text-white px-5 py-2 rounded-md font-semibold"
        >
          ← Back to Events
        </button>
      </div>
    );
  }

  const handleRegister = () => {
    const booked = JSON.parse(localStorage.getItem("bookedEvents") || "[]");
    booked.unshift(event);
    localStorage.setItem("bookedEvents", JSON.stringify(booked));
    navigate(`/registerform/${event.id}`);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden"
      >
        {/* Event Poster */}
        <div className="relative">
          {event.flyer ? (
            <img
              src={event.flyer}
              alt={event.title}
              className="w-full h-72 object-cover"
            />
          ) : (
            <div className="w-full h-72 bg-slate-200 flex items-center justify-center text-slate-500">
              No flyer available
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
          <div className="absolute bottom-6 left-6 text-white">
            <h1 className="text-4xl font-extrabold">{event.title}</h1>
            <p className="text-sm mt-1">
              {event.eventType || event.category} • {event.date} • {event.time}
            </p>
          </div>
        </div>

        {/* Event Info */}
        <div className="p-8">
          <p className="text-slate-700 mb-6 leading-relaxed">
            {event.description ||
              "No description provided. Add more details about this event to help others understand what to expect!"}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-slate-700">
            <div>
              <p>
                <span className="font-semibold text-slate-900">📍 Venue:</span>{" "}
                {event.location || event.venue}
              </p>
              <p className="mt-2">
                <span className="font-semibold text-slate-900">🎟️ Ticket Fee:</span>{" "}
                {event.price || event.ticketFee || "Free"}
              </p>
            </div>
            <div>
              <p>
                <span className="font-semibold text-slate-900">👤 Organizer:</span>{" "}
                {event.organizerName || "N/A"}
              </p>
              <p className="mt-2">
                <span className="font-semibold text-slate-900">📧 Contact:</span>{" "}
                <a
                  href={`mailto:${event.organizerEmail}`}
                  className="text-sky-600 hover:underline"
                >
                  {event.organizerEmail || "Not provided"}
                </a>
              </p>
            </div>
          </div>

          <div className="mt-10 flex justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleRegister}
              className="px-6 py-3 bg-sky-500 hover:bg-indigo-500 text-white font-semibold rounded-lg shadow-md transition"
            >
              Register for this Event
            </motion.button>

            <button
              onClick={() => navigate("/practice")}
              className="px-6 py-3 border border-slate-400 hover:bg-slate-100 text-slate-700 font-semibold rounded-lg transition"
            >
              ← Back
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default EventDetails;

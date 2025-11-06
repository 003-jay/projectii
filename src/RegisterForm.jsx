import React, { useState, useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";

function RegisterForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();

  // 👇 If the user came from Practice, read event from state
  const [event, setEvent] = useState(location.state?.event || null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "",
    studentId: "",
  });

  // 👇 If page is refreshed, fall back to fetching from localStorage
  useEffect(() => {
    if (!event && id) {
      const stored = localStorage.getItem("events");
      if (stored) {
        const found = JSON.parse(stored).find(
          (e) => e.id.toString() === id.toString()
        );
        setEvent(found || null);
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
      dateRegistered: new Date().toISOString(),
    };

    // ✅ Save to localStorage
    const registered =
      JSON.parse(localStorage.getItem("registeredUsers") || "[]");
    registered.unshift(registration);
    localStorage.setItem("registeredUsers", JSON.stringify(registered));

    // ✅ Navigate to confirmation page with state
    navigate("/confirmationpage", { state: { registration } });
  };

  const handleGoBack = () => {
    if (window.history.length > 1) navigate(-1);
    else navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* LEFT SIDE - Registration Form */}
      <div className="flex-1 flex justify-center items-center bg-slate-500 px-4 py-10">
        <div className="bg-white/50 shadow-2xl rounded-2xl w-full max-w-lg p-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-6">
            Event Registration
          </h2>

          {/* ✅ Event Info Preview */}
          {event && (
            <div className="mb-5 bg-slate-100 rounded-lg p-4 text-sm text-slate-700">
              <p>
                <span className="font-semibold">Event:</span> {event.title}
              </p>
              <p>
                <span className="font-semibold">Date:</span> {event.date} at{" "}
                {event.time}
              </p>
              <p>
                <span className="font-semibold">Venue:</span>{" "}
                {event.venue || event.location}
              </p>
            </div>
          )}

          {/* ✅ Registration Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-slate-700 font-semibold mb-1">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-sky-500"
              />
            </div>

            <div>
              <label className="block text-slate-700 font-semibold mb-1">
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-sky-500"
              />
            </div>

            <div>
              <label className="block text-slate-700 font-semibold mb-1">
                Department / Faculty
              </label>
              <input
                type="text"
                name="department"
                value={formData.department}
                onChange={handleChange}
                placeholder="e.g., Computer Science"
                className="w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-sky-500"
              />
            </div>

            <div>
              <label className="block text-slate-700 font-semibold mb-1">
                Student ID (optional)
              </label>
              <input
                type="text"
                name="studentId"
                value={formData.studentId}
                onChange={handleChange}
                placeholder="Enter student ID"
                className="w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-sky-500"
              />
            </div>

            <div className="flex gap-4 pt-2">
              <button
                type="button"
                onClick={handleGoBack}
                className="w-1/2 bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold py-2 rounded-md shadow-md transition"
              >
                ← Back
              </button>

              <button
                type="submit"
                className="w-1/2 bg-sky-500 hover:bg-indigo-500 text-white font-semibold py-2 rounded-md shadow-md transition"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* RIGHT SIDE - Illustration */}
      <div
        className="hidden lg:flex flex-1 relative items-center justify-center text-white"
        style={{
          backgroundImage: `url("/excited.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-slate-900/50"></div>
        <div className="relative z-10 text-center p-10">
          <h1 className="text-4xl font-extrabold mb-3">
            Join the Next Big Campus Event
          </h1>
          <p className="text-lg text-slate-200 font-medium">
            Network, learn, and experience exciting opportunities around you.
            Be part of something amazing today!
          </p>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;

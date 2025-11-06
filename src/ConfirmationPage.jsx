import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function ConfirmationPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const registration = location.state?.registration;

  
  if (!registration) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-slate-200 via-slate-100 to-white text-center p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="backdrop-blur-lg bg-white/60 border border-slate-300 rounded-3xl shadow-2xl p-10 max-w-md"
        >
          <h1 className="text-3xl font-bold text-slate-800 mb-4">
            No registration data found 😢
          </h1>
          <p className="text-slate-600 mb-6">
            Please return to the event page and try registering again.
          </p>
          <button
            onClick={() => navigate("/practice")}
            className="px-6 py-3 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-xl shadow-md transition"
          >
            Back to Events
          </button>
        </motion.div>
      </div>
    );
  }

  
  const handleDownloadReceipt = () => {
    const receiptText = `
BITXBASE HUB - EVENT REGISTRATION RECEIPT

Name: ${registration.name}
Email: ${registration.email}
Department: ${registration.department || "N/A"}
Student ID: ${registration.studentId || "N/A"}

Event: ${registration.eventTitle}
Date: ${registration.eventDate || "TBA"}
Time: ${registration.eventTime || "TBA"}
Venue: ${registration.venue || "TBA"}

Registration ID: ${registration.id}
Date Registered: ${new Date(
      registration.dateRegistered
    ).toLocaleString()}

Thank you for registering with Bitxbase Hub!
    `;
    const blob = new Blob([receiptText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `receipt_${registration.id}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-200 via-slate-100 to-white px-4 py-12 overflow-hidden relative">
     
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ repeat: Infinity, duration: 6, repeatType: "reverse" }}
        className="absolute w-[400px] h-[400px] bg-sky-400 rounded-full blur-3xl top-1/3 left-1/3"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.12 }}
        transition={{ repeat: Infinity, duration: 7, repeatType: "reverse" }}
        className="absolute w-[350px] h-[350px] bg-green-400 rounded-full blur-3xl bottom-1/3 right-1/4"
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-3xl w-full backdrop-blur-2xl bg-white/50 border border-slate-200 shadow-2xl rounded-3xl p-10 text-center"
      >
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-10"
        >
          <h1 className="text-5xl font-extrabold text-slate-900 tracking-wide drop-shadow-sm">
            <span className="text-slate-700">Bitxbase</span> Hub
          </h1>
          <p className="text-slate-600 text-base mt-2">
            Empowering Students Through Innovation & Learning
          </p>
        </motion.div>

        
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 150 }}
          className="flex items-center justify-center mb-8"
        >
          <div className="w-20 h-20 bg-green-100 border-4 border-green-500 rounded-full flex items-center justify-center shadow-lg">
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 52 52"
              className="w-12 h-12 text-green-600"
            >
              <motion.path
                fill="none"
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 27l7 7 16-16"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              />
            </motion.svg>
          </div>
        </motion.div>

        
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-3xl font-bold text-slate-800 mb-3"
        >
          Registration Successful!
        </motion.h2>

        <p className="text-lg text-slate-700 mb-8">
          Thank you,{" "}
          <span className="font-semibold text-sky-600">
            {registration.name}
          </span>
          ! You’ve successfully registered for:
        </p>

        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white/70 backdrop-blur-md border border-slate-200 rounded-2xl p-6 mb-8 text-left shadow-inner"
        >
          <h3 className="text-xl font-bold text-slate-800 mb-2">
            {registration.eventTitle}
          </h3>
          <p className="text-slate-700">
            <span className="font-semibold">📅 Date:</span>{" "}
            {registration.eventDate || "TBA"}
          </p>
          <p className="text-slate-700">
            <span className="font-semibold">🕒 Time:</span>{" "}
            {registration.eventTime || "TBA"}
          </p>
          <p className="text-slate-700">
            <span className="font-semibold">📍 Venue:</span>{" "}
            {registration.venue || "TBA"}
          </p>
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white/70 backdrop-blur-md border border-slate-200 rounded-2xl p-6 mb-8 text-left shadow-inner"
        >
          <h4 className="text-lg font-semibold text-slate-800 mb-3">
            👤 Registrant Details
          </h4>
          <p className="text-slate-700">
            <span className="font-semibold">Full Name:</span>{" "}
            {registration.name}
          </p>
          <p className="text-slate-700">
            <span className="font-semibold">Email:</span>{" "}
            {registration.email}
          </p>
          <p className="text-slate-700">
            <span className="font-semibold">Department:</span>{" "}
            {registration.department || "N/A"}
          </p>
          {registration.studentId && (
            <p className="text-slate-700">
              <span className="font-semibold">Student ID:</span>{" "}
              {registration.studentId}
            </p>
          )}
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <button
            onClick={handleDownloadReceipt}
            className="px-6 py-3 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-xl shadow-lg transition-all transform hover:scale-105"
          >
            Download Receipt
          </button>
          <button
            onClick={() => navigate("/practice")}
            className="px-6 py-3 bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold rounded-xl shadow-lg transition-all transform hover:scale-105"
          >
            Back to Events
          </button>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl shadow-lg transition-all transform hover:scale-105"
          >
            Go Home
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default ConfirmationPage;

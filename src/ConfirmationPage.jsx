import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function ConfirmationPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const registration = location.state?.registration;

  if (!registration) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 text-center p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-10 max-w-md"
        >
          <div className="text-6xl mb-4">😢</div>
          <h1 className="text-3xl font-bold text-white mb-4">
            No Registration Found
          </h1>
          <p className="text-slate-300 mb-6">
            Please return to the event page and try registering again.
          </p>
          <motion.button
            onClick={() => navigate("/practice")}
            className="px-8 py-3 bg-white text-slate-800 font-semibold rounded-xl shadow-lg transition-all"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Back to Events
          </motion.button>
        </motion.div>
      </div>
    );
  }

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadReceipt = () => {
    const receiptHTML = `
<!DOCTYPE html>
<html>
<head>
    <title>Bitxbase Hub - Registration Receipt</title>
    <style>
        body { font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; background: #f8fafc; }
        .receipt { background: white; padding: 40px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
        .header { text-align: center; border-bottom: 3px solid #1e293b; padding-bottom: 20px; margin-bottom: 30px; }
        .title { color: #1e293b; font-size: 28px; font-weight: bold; margin: 0; }
        .subtitle { color: #64748b; font-size: 16px; margin: 5px 0 0 0; }
        .section { margin: 25px 0; }
        .section-title { color: #1e293b; font-size: 18px; font-weight: bold; margin-bottom: 15px; border-left: 4px solid #3b82f6; padding-left: 12px; }
        .info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; }
        .info-item { background: #f1f5f9; padding: 12px; border-radius: 8px; }
        .info-label { font-weight: bold; color: #475569; font-size: 14px; }
        .info-value { color: #1e293b; font-size: 16px; margin-top: 4px; }
        .event-title { color: #3b82f6; font-size: 24px; font-weight: bold; text-align: center; margin: 20px 0; }
        .footer { text-align: center; margin-top: 40px; padding-top: 20px; border-top: 2px solid #e2e8f0; color: #64748b; }
        .reg-id { background: #1e293b; color: white; padding: 8px 16px; border-radius: 6px; font-family: monospace; display: inline-block; }
    </style>
</head>
<body>
    <div class="receipt">
        <div class="header">
            <h1 class="title">🎉 BITXBASE HUB</h1>
            <p class="subtitle">Event Registration Receipt</p>
        </div>
        
        <div class="event-title">${registration.eventTitle}</div>
        
        <div class="section">
            <div class="section-title">👤 Registrant Details</div>
            <div class="info-grid">
                <div class="info-item">
                    <div class="info-label">Full Name</div>
                    <div class="info-value">${registration.name}</div>
                </div>
                <div class="info-item">
                    <div class="info-label">Email Address</div>
                    <div class="info-value">${registration.email}</div>
                </div>
                <div class="info-item">
                    <div class="info-label">Department</div>
                    <div class="info-value">${registration.department || "N/A"}</div>
                </div>
                <div class="info-item">
                    <div class="info-label">Student ID</div>
                    <div class="info-value">${registration.studentId || "N/A"}</div>
                </div>
            </div>
        </div>
        
        <div class="section">
            <div class="section-title">🎯 Event Details</div>
            <div class="info-grid">
                <div class="info-item">
                    <div class="info-label">Date & Time</div>
                    <div class="info-value">${registration.eventDate || "TBA"}<br>${registration.eventTime || "TBA"}</div>
                </div>
                <div class="info-item">
                    <div class="info-label">Venue</div>
                    <div class="info-value">${registration.venue || "TBA"}</div>
                </div>
                <div class="info-item">
                    <div class="info-label">Registration Fee</div>
                    <div class="info-value">${registration.eventPrice || "Free"}</div>
                </div>
                <div class="info-item">
                    <div class="info-label">Category</div>
                    <div class="info-value">${registration.eventCategory || "Event"}</div>
                </div>
            </div>
        </div>
        
        <div class="section">
            <div class="section-title">📋 Registration Information</div>
            <div class="info-grid">
                <div class="info-item">
                    <div class="info-label">Registration ID</div>
                    <div class="info-value"><span class="reg-id">${registration.id}</span></div>
                </div>
                <div class="info-item">
                    <div class="info-label">Registration Date</div>
                    <div class="info-value">${new Date(registration.dateRegistered).toLocaleString()}</div>
                </div>
            </div>
        </div>
        
        <div class="footer">
            <p><strong>✨ Thank you for registering with Bitxbase Hub!</strong></p>
            <p>We look forward to seeing you at the event!</p>
            <p>📧 For inquiries: events@bitxbase.edu | 🌐 Visit: www.bitxbase.edu/events</p>
        </div>
    </div>
</body>
</html>
    `;
    
    const blob = new Blob([receiptHTML], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `BitxbaseHub_Receipt_${registration.id}.html`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-2 sm:px-4 py-4 sm:py-8 overflow-hidden relative print:bg-white print:text-black">
      {/* Animated Background Elements - Hidden during print */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ repeat: Infinity, duration: 8, repeatType: "reverse" }}
        className="absolute w-96 h-96 bg-blue-500 rounded-full blur-3xl top-10 left-10 print:hidden"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.08 }}
        transition={{ repeat: Infinity, duration: 10, repeatType: "reverse", delay: 2 }}
        className="absolute w-80 h-80 bg-purple-500 rounded-full blur-3xl bottom-20 right-20 print:hidden"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.06 }}
        transition={{ repeat: Infinity, duration: 12, repeatType: "reverse", delay: 4 }}
        className="absolute w-64 h-64 bg-green-500 rounded-full blur-3xl top-1/2 right-10 print:hidden"
      />

      <div className="flex items-center justify-center min-h-screen py-4">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative max-w-4xl w-full backdrop-blur-2xl bg-white/10 border border-white/20 shadow-2xl rounded-2xl sm:rounded-3xl overflow-hidden mx-2 sm:mx-4 print:bg-white print:border-gray-300 print:shadow-none"
        >
          {/* Header Section */}
          <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-4 sm:p-6 md:p-8 text-center relative overflow-hidden">
            <motion.div 
              className="absolute w-32 h-32 bg-white/5 rounded-full blur-2xl"
              animate={{ 
                x: [0, 100, 0], 
                y: [0, -50, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 8, repeat: Infinity }}
              style={{ top: '10%', left: '10%' }}
            />
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <div className="text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4">🎉</div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
                Registration Successful!
              </h1>
              <p className="text-slate-300 text-base sm:text-lg">
                Welcome to <span className="font-bold text-white">Bitxbase Hub</span>
              </p>
            </motion.div>
          </div>

          {/* Main Content */}
          <div className="p-4 sm:p-6 md:p-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-center mb-8"
            >
              <p className="text-lg sm:text-xl text-white mb-2">
                Thank you, <span className="font-bold text-blue-300">{registration.name}</span>!
              </p>
              <p className="text-sm sm:text-base text-slate-300">
                You've successfully registered for this amazing event
              </p>
            </motion.div>

            {/* Event Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 mb-6"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-white">
                  {registration.eventTitle}
                </h3>
                {registration.eventCategory && (
                  <span className="px-3 py-1 bg-blue-500/20 border border-blue-400/30 text-blue-300 rounded-full text-sm font-medium">
                    {registration.eventCategory}
                  </span>
                )}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-300">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-lg">📅</span>
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Date & Time</p>
                    <p className="font-medium">{registration.eventDate}</p>
                    <p className="text-sm">{registration.eventTime}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-lg">📍</span>
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Venue</p>
                    <p className="font-medium">{registration.venue || "TBA"}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-lg">💰</span>
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Fee</p>
                    <p className="font-bold text-green-300 text-lg">{registration.eventPrice || "Free"}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-lg">🎫</span>
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Registration ID</p>
                    <p className="font-mono text-sm">{registration.id}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Registrant Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 mb-8"
            >
              <h4 className="text-lg font-bold text-white mb-4 flex items-center">
                <span className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center mr-3">
                  👤
                </span>
                Your Details
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-300">
                <div>
                  <p className="text-sm text-slate-400 mb-1">Full Name</p>
                  <p className="font-medium">{registration.name}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-400 mb-1">Email Address</p>
                  <p className="font-medium">{registration.email}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-400 mb-1">Department</p>
                  <p className="font-medium">{registration.department || "N/A"}</p>
                </div>
                {registration.studentId && (
                  <div>
                    <p className="text-sm text-slate-400 mb-1">Student ID</p>
                    <p className="font-medium">{registration.studentId}</p>
                  </div>
                )}
              </div>
              
              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="text-sm text-slate-400">
                  Registered on: <span className="text-slate-300">{new Date(registration.dateRegistered).toLocaleString()}</span>
                </p>
              </div>
            </motion.div>

            {/* Action Buttons - Hidden during print */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center print:hidden"
            >
              <motion.button
                onClick={handlePrint}
                className="flex items-center justify-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl shadow-lg transition-all"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="mr-2">🖨️</span>
                Print Receipt
              </motion.button>
              
              <motion.button
                onClick={handleDownloadReceipt}
                className="flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg transition-all"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="mr-2">📄</span>
                Download Receipt
              </motion.button>
              
              <motion.button
                onClick={() => navigate("/practice")}
                className="flex items-center justify-center px-6 py-3 bg-white/20 hover:bg-white/30 text-white font-semibold rounded-xl border border-white/30 transition-all"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="mr-2">🎯</span>
                More Events
              </motion.button>
              
              <motion.button
                onClick={() => navigate("/")}
                className="flex items-center justify-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl shadow-lg transition-all"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="mr-2">🏠</span>
                Go Home
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default ConfirmationPage;
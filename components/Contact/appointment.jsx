import React, { useState } from "react";

export default function Appointments () {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Appointment Data:", formData);
    alert("Appointment request submitted successfully!");
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-200">
     
     

        <div className="max-w-4xl mx-auto">
          
          {/* Title Section */}
          <div className="text-center p-12 animate-fadeIn">
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-[#2D4A2E] mb-8">
              Book an appointment.
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-700"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-700"
          />

          {/* Phone */}
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-700"
          />

          {/* Date & Time */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-700"
            />

            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-700"
            />
          </div>

          {/* Message */}
          <textarea
            name="message"
            placeholder="Tell us briefly about your concern..."
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-700"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-900 text-white py-3 rounded-lg font-semibold hover:bg-green-800 transition"
          >
            Request Appointment
          </button>
        </form>
        </div>
</div>
  );
}



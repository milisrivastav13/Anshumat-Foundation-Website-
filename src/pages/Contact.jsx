import React from "react";

function Contact() {
  return (
    <section className="py-20 bg-gray-50 min-h-screen flex items-center justify-center perspective">
      <div className="max-w-md w-full mx-auto px-6">
        {/* 3D Popup Neon Card */}
        <div className="bg-white p-8 rounded-lg card-neon transform transition-all duration-500 hover:-translate-y-6 hover:scale-105 hover:rotate-1 hover:shadow-[0_10px_20px_rgba(0,240,255,0.4),0_15px_30px_rgba(0,200,255,0.3)] animate-fadeUp">
          <h2 className="text-4xl font-heading text-blue-600 mb-6 text-center glow-text">
            Contact Us
          </h2>
          <p className="text-gray-700 mb-8 text-center animate-fadeUp delay-200">
            Have questions, ideas, or want to collaborate? Fill out the form below and we’ll get back to you shortly.
          </p>

          <form className="grid gap-5 text-left">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>

          <p className="text-center text-gray-600 mt-6">
            © 2025 Anshumat Foundation. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;












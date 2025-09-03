import React from "react";

function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center px-4 bg-neon-tech">
      {/* Floating Neon Card */}
      <div className="p-6 card-neon max-w-md mx-auto text-center transform transition duration-300 hover:scale-110 cursor-pointer">
        <h3 className="text-3xl font-semibold glow-text mb-4">🛠️ Join Us</h3>
        <p className="text-gray-200">
          Empowering Futures <br />
          Anshumat Foundation is dedicated to guiding students and professionals through mentorship, knowledge, and skill development. Be a part of a transformative journey that empowers you to unlock your full potential.
        </p>
        <div className="mt-4 flex justify-center gap-4">
  <a
    href="/signup"
    className="bg-cyan-500 text-black px-6 py-2 rounded-lg font-semibold hover:bg-cyan-400 transition"
  >
    Join Now
  </a>
  <a
    href="/initiatives"
    className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-indigo-500 transition"
  >
    
  </a>
</div>

      </div>
    </section>
  );
}

export default HeroSection;





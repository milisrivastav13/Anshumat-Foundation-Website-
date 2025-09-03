import React from "react";
import HeroSection from "../components/HeroSection";

function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <HeroSection />

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50 text-center fade-in">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-blue-600 mb-6 animate-fadeUp">
            🌟 Why Choose Us?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8 animate-fadeUp delay-200">
            At <span className="font-semibold text-indigo-700">Anshumat Foundation</span>, 
            we believe in nurturing talent and building brighter futures.  
            Through <span className="underline">career mentorship 🤝</span>, 
            <span className="underline">skill development workshops 💡</span>, 
            and our <span className="underline">knowledge library 📚</span>, 
            we guide individuals to unlock their true potential.
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12">
            <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition transform hover:-translate-y-2">
              <h3 className="text-2xl font-bold text-indigo-600 mb-3">💡 Innovation</h3>
              <p className="text-gray-600">Creative approaches to learning and mentorship for real-world success.</p>
            </div>
            <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition transform hover:-translate-y-2">
              <h3 className="text-2xl font-bold text-indigo-600 mb-3">🤝 Community</h3>
              <p className="text-gray-600">A supportive network of mentors, peers, and learners growing together.</p>
            </div>
            <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition transform hover:-translate-y-2">
              <h3 className="text-2xl font-bold text-indigo-600 mb-3">🚀 Growth</h3>
              <p className="text-gray-600">Helping individuals boost confidence, skills, and career opportunities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-blue-500 text-white text-center fade-in">
        <h2 className="text-4xl font-extrabold mb-6 animate-fadeUp">
          🚀 Ready to Transform Your Future?
        </h2>
        <p className="text-lg mb-8 animate-fadeUp delay-200">
          Join a movement that is shaping tomorrow’s leaders today.  
          Be part of mentorship, workshops, and opportunities that make a difference!
        </p>
        <a
          href="/signup"
          className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold hover:bg-yellow-300 transition"
        >
          🌟 Join the Foundation
        </a>
      </section>
    </div>
  );
}

export default Home;











import React from "react";

function About() {
  return (
    <section className="py-20 bg-neon-tech text-center">
      <h2 className="text-4xl font-bold glow-text mb-6">🌟 Why Choose Us?</h2>
      <p className="max-w-3xl mx-auto text-lg text-blue-900">
        At Anshumat Foundation, we nurture talent and build brighter futures. Career mentorship 🤝, skill workshops 💡, and knowledge library 📚 help individuals unlock their true potential.
      </p>

      <div className="mt-12 flex flex-col md:flex-row justify-center gap-8">
        <div className="p-6 card-neon">
          <h3 className="text-2xl font-semibold glow-text mb-2">💡 Empowering Futures with Innovation</h3>
          <p>At Anshumat Foundation, we bridge the gap between potential and success. Our mission is to provide personalized mentorship, cutting-edge skill development, and a collaborative community to help individuals thrive in their careers.</p>
        </div>
        <div className="p-6 card-neon">
          <h3 className="text-2xl font-semibold glow-text mb-2">🤝 Our Core Values</h3>
          <p>1.Embracing the latest technologies and methodologies to foster creative solutions and forward-thinking approaches.</p>
            <p>2.Building a supportive network of mentors, peers, and learners who collaborate and grow together.</p>
            <p>3.Providing access to a vast library of resources, workshops, and learning materials to empower continuous growth.</p>
        </div>
        <div className="p-6 card-neon">
          <h3 className="text-2xl font-semibold glow-text mb-2">🎯 Our Approach</h3>
          <p>We combine personalized mentorship with hands-on learning experiences to equip individuals with the skills and confidence needed to excel in their chosen fields. Our programs are designed to be interactive, engaging, and tailored to meet the unique needs of each participant.</p>
        </div>
        <div className="p-6 card-neon">
          <h3 className="text-2xl font-semibold glow-text mb-2">🛠️ Join Us</h3>
          <p>Be a part of a transformative journey that empowers you to unlock your full potential. Whether you're a student seeking guidance or a professional aiming to upskill, Anshumat Foundation is here to support you every step of the way.</p>
        </div>

      </div>
    </section>
  );
}

export default About;











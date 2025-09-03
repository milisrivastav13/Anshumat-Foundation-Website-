import React from "react";

const initiativesData = [
  {
    title: "Career Mentorship",
    img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
    desc: [
      "🎯 Personalized Guidance – One-on-one mentorship to help you navigate your career path.",
      "💼 Real-world Insights – Learn from professionals with hands-on industry experience.",
      "🚀 Goal-Oriented Plans – Structured mentorship programs to reach your personal and professional objectives."
    ]
  },
  {
    title: "Skill Development Workshops",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    desc: [
      "💡 Technical Skills – Learn in-demand technologies and tools to stay competitive.",
      "🤝 Soft Skills – Communication, teamwork, and leadership training for real-world success.",
      "📚 Practical Workshops – Hands-on exercises and projects to reinforce learning."
    ]
  },
  {
    title: "Knowledge Library",
    img: "https://images.unsplash.com/photo-1581091215367-6f0e3f00b8f3?auto=format&fit=crop&w=800&q=80",
    desc: [
      "📚 Curated Learning Resources – Access hand-picked articles, e-books, and study materials to accelerate your growth.",
      "🖥️ Interactive Guides & Tutorials – Step-by-step instructions and hands-on examples for mastering new skills.",
      "🎓 Online Workshops & Webinars – Participate in live sessions conducted by experts and industry mentors.",
      "🧑‍🏫 Mentor Recommendations – Personalized guidance from professionals to help you navigate your learning journey.",
      "⏱️ Self-paced Skill Development – Learn at your own speed with structured programs and exercises.",
      "🌐 Community Insights – Join discussion forums and peer groups to exchange knowledge and tips.",
      "🚀 Career-focused Modules – Resources designed to directly improve employability and career readiness.",
      "🧩 Problem-Solving Challenges – Practice real-world scenarios to enhance analytical and critical thinking skills.",
      "📈 Progress Tracking – Monitor your learning journey and milestones to stay motivated.",
      "🤝 Peer Collaboration – Collaborate on projects, assignments, or discussion threads with fellow learners.",
      "💡 Innovative Learning Tools – Use quizzes, flashcards, and interactive simulations to strengthen understanding.",
      "🌟 Expert Insights – Exclusive interviews, podcasts, and blogs from top professionals and industry leaders.",
      "🏆 Certification & Badges – Earn recognition for completing courses and modules to showcase your skills.",
      "🔍 Research & Trends – Stay updated with the latest trends, research papers, and industry knowledge.",
      "🛠️ Hands-on Projects – Apply knowledge by building mini-projects or solving real-life problems."
    ]
  }
];

function Initiatives() {
  return (
    <section className="py-20 bg-neon-tech text-center">
      <div className="max-w-screen-xl mx-auto px-6">
        <h2 className="text-5xl font-heading text-blue-400 mb-12 glow-text animate-fadeUp">
          Our Initiatives
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {initiativesData.map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-900 rounded-xl shadow-xl transform hover:scale-105 transition-all duration-300 p-6 card-neon animate-fadeUp"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-52 object-cover rounded-lg mb-6"
              />
              {/* Make title H2 with custom font and glow */}
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-cyan-400 mb-6 glow-text">
                {item.title}
              </h2>
              <div className="text-gray-200 text-left space-y-2">
                {item.desc.map((point, i) => (
                  <p key={i}>• {point}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Initiatives;
























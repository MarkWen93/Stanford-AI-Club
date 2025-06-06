'use client';
import Link from "next/link";
import { useEffect, useState } from "react";

const teamStructure = [
  { role: "Repeat Founder", icon: "🚀", desc: "Brings experience in launching and scaling startups.", color: "#8C1515" },
  { role: "Investor", icon: "💸", desc: "Supports and accelerates high-potential projects.", color: "#A33333" },
  { role: "Professor", icon: "🎓", desc: "Provides academic guidance and cutting-edge insights.", color: "#2C1E3D" },
  { role: "Engineer", icon: "💻", desc: "Builds robust, scalable AI-native solutions.", color: "#B3995D" },
  { role: "Artist", icon: "🎨", desc: "Shapes the visual identity and user experience.", color: "#E8C4AB" },
  { role: "Peer Collaborator", icon: "🧑‍🤝‍🧑", desc: "Brings energy, creativity, and hands-on teamwork.", color: "#FADBD8" },
];

const steps = [
  { icon: "📝", title: "Apply & Join", desc: "Attend onboarding sessions." },
  { icon: "🛠️", title: "Learn & Build", desc: "Access mentors and tools." },
  { icon: "💡", title: "Demo & Fund", desc: "Pitch your project." },
  { icon: "🌲", title: "Alumni Network", desc: "Stay connected and mentor others." },
];

export default function Home() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll('.fade-in-section');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
        }
      });
    }, { threshold: 0.1 });
    sections.forEach(section => {
      section.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-700');
      observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen font-sans overflow-x-hidden">
      <nav className="bg-[#8C1515] text-white px-4 py-4 flex justify-between items-center sticky top-0 z-50 shadow-md">
        <span className="text-xl font-bold">Stanford AI Builder Club</span>
        <div className="space-x-4 hidden sm:flex">
          <a href="#mission" className="hover:text-[#FFD700]">Mission</a>
          <a href="#journey" className="hover:text-[#FFD700]">Journey</a>
          <a href="#team" className="hover:text-[#FFD700]">Support</a>
          <a href="#events" className="hover:text-[#FFD700]">Events</a>
          <a href="#volunteer" className="hover:text-[#FFD700]">Volunteer</a>
        </div>
      </nav>

      <section className="text-center py-24 px-4 sm:px-6 bg-[#8C1515] text-white">
        <h1 className="text-3xl sm:text-5xl font-bold mb-4">Stanford AI Builder Club</h1>
        <p className="text-base sm:text-xl mb-8">Empowering students to build and lead with AI</p>
        <a href="#journey" className="inline-block bg-white text-[#8C1515] px-6 py-3 rounded-full font-bold hover:bg-[#FFD700] transition text-sm sm:text-base">Start Your Journey</a>
      </section>

      <section id="mission" className="bg-[#f8f7f4] text-center py-24 px-4 sm:px-6 fade-in-section">
        <h2 className="text-2xl sm:text-4xl font-extrabold text-[#8C1515] mb-4">Our Mission</h2>
        <div className="w-12 h-1 bg-[#8C1515] mx-auto mb-8" />
        <p className="text-base sm:text-lg text-[#2C1E3D] max-w-3xl mx-auto">
          At the AI Builder Club, we believe in learning by building. Founded at Stanford, our mission is to empower students from all disciplines to explore, prototype, and scale AI-native applications that make a meaningful impact.
        </p>
      </section>

      <section id="events" className="bg-white text-center py-24 px-4 sm:px-6 fade-in-section">
        <h2 className="text-2xl sm:text-4xl font-extrabold text-[#8C1515] mb-4">Upcoming Events</h2>
        <div className="w-12 h-1 bg-[#8C1515] mx-auto mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto text-left">
          <div className="bg-[#f8f7f4] rounded-xl p-6 shadow">
            <h3 className="text-xl font-bold text-[#8C1515] mb-2">🔥 Summer 2025</h3>
            <ul className="list-disc list-inside text-[#2C1E3D] space-y-2 text-sm sm:text-base">
              <li>🌭 Weekly BBQ & Social at Wilbur Field</li>
              <li>🏊 Chill & Connect: Sunday Pool Meetups</li>
              <li>💡 Fireside AI Talks by founders & professors</li>
              <li>🎮 Hack & Play: Build & brainstorm projects</li>
            </ul>
          </div>
          <div className="bg-[#f8f7f4] rounded-xl p-6 shadow">
            <h3 className="text-xl font-bold text-[#8C1515] mb-2">🍁 Fall 2025</h3>
            <p className="text-[#2C1E3D] mb-4 text-sm sm:text-base">
              Launching our flagship 8-week accelerator program for AI-native builders, inspired by Sequoia Arc and Speedrun.
            </p>
            <ul className="list-disc list-inside text-[#2C1E3D] space-y-2 text-sm sm:text-base">
              <li>🧭 Structured cohort journey</li>
              <li>💼 Mentorship from Stanford alumni & investors</li>
              <li>🚀 $250K startup grants for top teams</li>
              <li>📣 Demo Day at Stanford</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="journey" className="bg-white text-center py-24 px-4 sm:px-6 fade-in-section">
        <h2 className="text-2xl sm:text-4xl font-extrabold text-[#8C1515] mb-4">Your Hero's Journey</h2>
        <div className="w-12 h-1 bg-[#8C1515] mx-auto mb-8" />
        <p className="text-base sm:text-lg text-[#2C1E3D] max-w-3xl mx-auto mb-10">
          Embark on a transformative journey — from dreamer to builder to leader. Whether you're experiencing breakthroughs or facing challenges, we're with you every step of the way.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-10">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-[#f8f7f4] rounded-xl p-6 shadow">
              <div className="text-4xl mb-2">{step.icon}</div>
              <h3 className="text-lg font-semibold text-[#8C1515] mb-1">{step.title}</h3>
              <p className="text-[#2C1E3D] text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <p className="text-base sm:text-lg text-[#2C1E3D] mb-6 max-w-2xl mx-auto">
            We are looking for the next generation of world changers.
          </p>
          <a href="YOUR_GOOGLE_FORM_LINK" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#8C1515] text-white px-6 py-3 rounded-full font-bold hover:bg-[#A33333] transition text-sm sm:text-base">Apply Now</a>
        </div>
      </section>

      <section id="team" className="bg-[#f8f7f4] text-center py-24 px-4 sm:px-6 fade-in-section">
        <h2 className="text-2xl sm:text-4xl font-extrabold text-[#8C1515] mb-4">Who Supports You</h2>
        <div className="w-12 h-1 bg-[#8C1515] mx-auto mb-8" />
        <p className="text-base sm:text-lg text-[#2C1E3D] max-w-3xl mx-auto mb-10">
          Behind every great AI-native product is a team of people with diverse talents and deep conviction. Our club is supported by repeat founders, investors, professors, engineers, artists, and peers — all here to help you succeed.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {teamStructure.map((item, idx) => (
            <div key={idx} className="rounded-2xl p-6 shadow-md" style={{ backgroundColor: item.color }}>
              <div className="text-4xl mb-2">{item.icon}</div>
              <h3 className="text-xl font-bold text-white mb-1">{item.role}</h3>
              <p className="text-white text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="volunteer" className="bg-[#f8f7f4] text-center py-24 px-4 sm:px-6 fade-in-section">
        <h2 className="text-2xl sm:text-4xl font-extrabold text-[#8C1515] mb-4">Want to Help?</h2>
        <div className="w-12 h-1 bg-[#8C1515] mx-auto mb-8" />
        <p className="text-base sm:text-lg text-[#2C1E3D] max-w-2xl mx-auto mb-8">
          We're looking for passionate volunteers to join our support crew. Help us create meaningful experiences for our community by taking on roles like:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            { icon: "📱", title: "Social Media Manager", desc: "Craft content & share stories to grow our presence." },
            { icon: "🎤", title: "Podcast Producer", desc: "Help host & edit episodes featuring builders & thinkers." },
            { icon: "📷", title: "Event Photographer", desc: "Capture the spirit of our community in action." },
            { icon: "🎨", title: "Visual Designer", desc: "Design visuals that elevate our branding & message." },
            { icon: "🎪", title: "Event Organizer", desc: "Plan and coordinate smooth and memorable events." },
            { icon: "🧑‍💻", title: "Community Coordinator", desc: "Keep our members engaged and connected." },
          ].map((role, idx) => (
            <div key={idx} className="bg-white rounded-xl p-6 shadow text-center">
              <div className="text-4xl mb-2">{role.icon}</div>
              <h3 className="text-lg font-semibold text-[#8C1515] mb-1">{role.title}</h3>
              <p className="text-[#2C1E3D] text-sm">{role.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <a href="YOUR_VOLUNTEER_FORM_LINK" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#8C1515] text-white px-6 py-3 rounded-full font-bold hover:bg-[#A33333] transition">I Want to Help</a>
        </div>
      </section>

      <footer className="bg-[#2d2233] text-white text-center py-6 px-4 fade-in-section">
        <p className="text-sm">© 2025 Stanford AI Builder Club. All rights reserved.</p>
      </footer>
    </div>
  );
}

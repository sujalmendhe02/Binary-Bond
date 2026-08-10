import React from 'react';
import { ArrowUpRight, Target } from 'lucide-react';

export default function Hero() {
  const instaLink = "https://ig.me/m/binary.bond";

  const handleHireUsClick = () => {
    window.open(instaLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="home" className="pt-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pb-16">

        {/* Left Headline Area */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 text-brand-blue font-bold text-xs uppercase tracking-wider">
            <span className="w-4 h-2 bg-brand-blue rounded-full"></span> Elevate Your Brand With Us
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-text-main tracking-tight leading-[1.15]">
            Empowering Your <br />
            Success with <br />
            <span className="text-brand-blue">Digital Expertise</span>
          </h1>

          <p className="text-text-muted text-sm sm:text-base max-w-xl leading-relaxed font-medium">
            We plan, engineer, and optimize state-of-the-art web systems designed to maximize user acquisition and drive scalable digital transformation for forward-thinking enterprises.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#projects"
              className="bg-brand-blue hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold text-xs flex items-center gap-2 transition-all duration-300 shadow-sm cursor-pointer"
            >
              Explore More <ArrowUpRight size={14} />
            </a>
            <a href="#services" className="text-text-main hover:text-brand-blue text-xs font-bold underline decoration-2 underline-offset-4 transition-all">
              View All Services
            </a>
          </div>
        </div>

        {/* Right Custom Shaped Image Collage Component */}
        <div className="lg:col-span-5 relative flex justify-center items-center">

          {/* --- CLICKABLE HIRE US STICKER --- */}
          <button
            onClick={handleHireUsClick}
            className="absolute bottom-8 left-0 bg-white border border-gray-100 p-3 rounded-full shadow-lg z-20 flex items-center gap-2 transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer group"
            title="Connect with us on Instagram"
          >
            <div className="p-2 bg-brand-light text-brand-blue rounded-full group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
              <Target size={16} />
            </div>
            <div className="pr-2">
              <p className="text-[10px] font-black uppercase text-brand-blue group-hover:text-blue-700 transition-colors">
                Hire Us
              </p>
            </div>
          </button>

          {/* Precision Shaped Asymmetric Frames */}
          <div className="w-full max-w-sm aspect-[4/5] bg-brand-light rounded-t-[8rem] rounded-b-[2rem] overflow-hidden p-3 border border-blue-100/50">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
              alt="Team Collaboration"
              className="w-full h-full object-cover rounded-t-[7.5rem] rounded-b-[1.5rem]"
            />
          </div>
        </div>
      </div>

      {/* Infinite Horizontal Running Marquee Band */}
      <div className="bg-brand-blue text-white py-4 overflow-hidden border-y border-blue-700">
        <div className="animate-marquee whitespace-nowrap flex gap-12 text-xs font-black uppercase tracking-widest">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex gap-12 items-center">
              <span>Web Engineering</span> <span className="text-brand-sky">✦</span>
              <span>Content Architecture</span> <span className="text-brand-sky">✦</span>
              <span>Cloud Automation</span> <span className="text-brand-sky">✦</span>
              <span>UI/UX Architecture</span> <span className="text-brand-sky">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
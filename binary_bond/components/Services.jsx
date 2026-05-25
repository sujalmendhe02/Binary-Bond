import React, { useState } from 'react';
import { ArrowRight, X, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      title: "Custom Front-End Engineering",
      shortDesc: "Beautiful responsive interfaces using React.jsx and Tailwind.",
      fullDesc: "We specialize in building high-conversion landing pages and complex web dashboards. Our front-end stack ensures your site is lightning fast and works perfectly on every mobile device.",
      features: ["React & Next.js Expert", "Responsive Design", "Performance Optimization"],
      color: "bg-blue-600"
    },
    {
      title: "Full-Stack Software Architecture",
      shortDesc: "Robust server networks and optimized database designs.",
      fullDesc: "From database modeling to secure API integrations, we build the backbone of your business. We ensure your data is safe and your system can handle thousands of users simultaneously.",
      features: ["Node.js Backends", "Database Scaling", "API Security"],
      color: "bg-white"
    },
    {
      title: "Search Optimization & Content",
      shortDesc: "Strategic structures engineered to rank and retain users.",
      fullDesc: "Building a site is only half the battle. We optimize your technical SEO and content structure so that your target audience can actually find you on Google without paid ads.",
      features: ["Technical SEO", "Speed Optimization", "Keyword Strategy"],
      color: "bg-blue-600"
    }
  ];

  return (
    <section id="services" className="py-24 bg-brand-blue px-6 lg:px-12 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-black text-white mb-16 leading-tight">
          Expertise that <br /> <span className="opacity-70">Scales Businesses</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              onClick={() => setSelectedService(service)}
              className={`group cursor-pointer p-10 rounded-[2.5rem] transition-all duration-500 hover:-translate-y-2 ${
                service.color === "bg-white" ? "bg-white text-gray-900" : "bg-white/10 text-white border border-white/10"
              }`}
            >
              <h3 className="text-2xl font-black mb-4">{service.title}</h3>
              <p className="opacity-60 text-sm mb-8">{service.shortDesc}</p>
              
              <div className="flex items-center gap-2 font-bold text-[10px] uppercase tracking-widest">
                Explore Plan <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- POPUP MODAL --- */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            
            {/* Card Popup */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative bg-white w-full max-w-lg rounded-[2rem] overflow-hidden shadow-2xl"
            >
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={20} className="text-gray-400" />
              </button>

              <div className="p-10">
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-brand-blue mb-6">
                  <CheckCircle2 size={24} />
                </div>
                
                <h3 className="text-3xl font-black text-gray-900 mb-4">{selectedService.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-8">
                  {selectedService.fullDesc}
                </p>

                <div className="space-y-3 mb-10">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-blue">What's Included:</p>
                  {selectedService.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm font-bold text-gray-800">
                      <div className="w-1.5 h-1.5 bg-brand-blue rounded-full" /> {feat}
                    </div>
                  ))}
                </div>

                <a 
                  href="https://ig.me/m/binary.bond_official"
                  target="_blank"
                  className="block w-full text-center bg-brand-blue hover:bg-blue-700 text-white py-4 rounded-2xl font-black text-sm transition-all"
                >
                  Request This Service
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
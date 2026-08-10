import React from 'react';
//import { Linkedin, Instagram } from "lucide-react";
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Process from '../components/Process';
import Pricing from '../components/Pricing';
import Contact from '../components/Contact';

export default function App() {
  return (
    <div className="bg-white min-h-screen text-text-main selection:bg-brand-blue selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Process />
      <Pricing />
      <Contact />

      {/* Short Footer Block */}
      <footer className="py-12 border-t border-gray-100 text-center text-xs font-bold text-text-muted bg-panel-light">
        <div className="flex justify-center gap-5 mb-4">
          <a href="https://linkedin.com/company/yourhandle" target="_blank" rel="noopener noreferrer" className="hover:text-text-primary transition-colors">
            <img
                src="/linkedin_logo.png"
                alt="LinkedIn"
                className="w-5 h-5 object-contain"
              />
          </a>
          <a href="https://instagram.com/binary.bond" target="_blank" rel="noopener noreferrer" className="hover:text-text-primary transition-colors">
            <img
                src="/insta_logo.png"
                alt="Instagram"
                className="w-5 h-5 object-contain"
              />
          </a>
        </div>
        © {new Date().getFullYear()} BINARY BOND.
      </footer>
    </div>
  );
}

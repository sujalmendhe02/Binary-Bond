import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

import styleHubImg from '/product.png';
import styleHubImg2 from '/product2.png';
import styleHubImg3 from '/product3.png';
import styleHubImg4 from '/product4.png';
import styleHubImg5 from '/product5.png';

const projectsData = [
  { title: 'StyleHub — Premium Shopping Platform', type: 'E-commerce', image: styleHubImg, link: 'https://product-demo-by-sujal.onrender.com/', size: 'large' },
  { title: 'Skinsify — An E-Commerce Site', type: 'Landing Page', image: styleHubImg2, link: 'https://skinsify.onrender.com', size: 'small' },
  { title: 'Product — Premium Demo 1', type: 'Website', image: styleHubImg3, link: 'https://product-demo1.onrender.com/', size: 'small' },
  { title: 'Product — Creative Demo 2', type: 'Website', image: styleHubImg4, link: 'https://product-demo2.onrender.com', size: 'small' },
  { title: 'Product — Advanced Demo 3', type: 'Website', image: styleHubImg5, link: 'https://product-demo3.onrender.com/', size: 'large' },
];

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const filteredProjects = filter === 'All' ? projectsData : projectsData.filter(p => p.type === filter);

  return (
    <section id="projects" className="py-20 px-6 max-w-7xl mx-auto bg-white space-y-12">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-extrabold tracking-tight text-text-main">Featured Projects</h2>
        <p className="text-text-muted text-sm font-medium">A showcase of clean, responsive web design</p>
        
        {/* Modern Blue/White Pill Tabs */}
        <div className="flex justify-center flex-wrap gap-2 pt-4">
          {['All', 'Landing Page', 'Website', 'E-commerce'].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer ${
                filter === tab ? 'bg-brand-blue text-white shadow-sm' : 'bg-panel-light text-text-muted hover:text-text-main border border-gray-100'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Asymmetric Light Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {filteredProjects.map((project, index) => (
          <div key={index} className={`bg-panel-light border border-gray-100 rounded-[2rem] p-3 flex flex-col justify-between group hover:border-brand-blue/30 transition-all duration-300 shadow-sm ${project.size === 'large' ? 'md:col-span-7' : 'md:col-span-5'}`}>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-full overflow-hidden relative block cursor-pointer rounded-[1.4rem] bg-white border border-gray-200" style={{ aspectRatio: project.size === 'large' ? '16/10' : '4/3' }}>
              <div className="absolute inset-0 bg-brand-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                <span className="bg-white text-text-main text-xs font-bold px-3.5 py-1.5 rounded-full border border-gray-100 shadow-sm flex items-center gap-1">
                  View Live <ArrowUpRight size={12} />
                </span>
              </div>
              <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.01]" />
            </a>

            <div className="pt-4 pb-1 px-2 flex justify-between items-start gap-2">
              <div className="space-y-1">
                <span className="text-brand-blue text-[10px] uppercase font-bold tracking-widest block">{project.type}</span>
                <h4 className="font-bold text-base text-text-main group-hover:text-brand-blue transition-colors duration-200">{project.title}</h4>
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white text-text-main hover:bg-brand-blue hover:text-white rounded-full border border-gray-200 transition-all shadow-sm flex-shrink-0">
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

import React from 'react';

const stats = [
  { value: '10+', label: 'Projects Completed' },
  { value: '7+', label: 'Happy Clients' },
  { value: '2+', label: 'Years Experience' },
  { value: '100%', label: 'Client Satisfaction' },
];

export default function Stats() {
  return (
    <div className="max-w-7xl mx-auto px-6 mb-16">
      <div className="bg-card-bg/40 backdrop-blur-sm border border-white/[0.04] rounded-2xl py-8 px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, i) => (
          <div key={i} className="space-y-1 relative group">
            <h3 className="text-3xl font-bold text-white tracking-tight group-hover:text-brand-cyan transition-colors duration-300">{stat.value}</h3>
            <p className="text-text-muted text-xs font-medium tracking-wide">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
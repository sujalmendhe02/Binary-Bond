import React from 'react';

export default function About() {
  const standards = [
    { title: "Bespoke Design", desc: "No templates. Every site we build is a unique piece of digital art." },
    { title: "Performance First", desc: "Ultra-fast loading speeds that keep your users engaged." },
    { title: "Client Partnership", desc: "We don't just work for you; we work with you as technical partners." }
  ];

  return (
    <section id="about" className="py-20 bg-white overflow-hidden px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          {/* Left: Clean Image Container */}
          <div className="w-full lg:w-1/2">
            <div className="relative inline-block w-full">
              {/* Main Image - Properly Scaled */}
              <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200"
                  alt="Software Development Team"
                  className="w-full h-[350px] md:h-[450px] object-cover"
                />
              </div>
              {/* Floating Decorative Card - Chota aur clean */}
              <div className="absolute -bottom-6 -right-6 md:right-6 bg-brand-blue text-white p-5 rounded-2xl shadow-lg hidden sm:block">
                <p className="text-xs uppercase tracking-widest font-black opacity-80">Tech Stack</p>
                <p className="text-sm font-bold mt-1">React • Node • Cloud</p>
              </div>
            </div>
          </div>

          {/* Right: Persuasive Content */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <span className="text-brand-blue font-black text-xs uppercase tracking-[0.2em] bg-blue-50 px-3 py-1.5 rounded-md">
                Our Philosophy
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-[1.1]">
                Turning Startup Ideas into <br />
                <span className="text-brand-blue">Market Realities.</span>
              </h2>
              <p className="text-gray-600 text-base leading-relaxed font-medium">
                Binary Bond is an emerging digital agency based in Nagpur. We don't just build websites—we create growth-driven digital solutions for businesses. Our focus is to empower startups and entrepreneurs with modern technology that helps them stand out and stay ahead of the competition.
              </p>
            </div>

            {/* Why Hire Us - Grid for Trust */}
            <div className="grid grid-cols-1 gap-4">
              {standards.map((item, index) => (
                <div key={index} className="flex gap-4 p-4 rounded-xl border border-gray-100 hover:shadow-md hover:border-brand-blue/20 transition-all duration-300">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-brand-blue font-bold">
                    0{index + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm mb-1">{item.title}</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA to talk */}
            <div className="pt-4">
              <a
                href="https://ig.me/m/binary.bond_official"
                target="_blank"
                className="inline-flex items-center gap-2 bg-gray-900 hover:bg-brand-blue text-white px-8 py-4 rounded-full text-sm font-bold transition-all duration-300 shadow-xl"
              >
                Discuss Your First Project
                <span className="text-xl">→</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
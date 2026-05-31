import React from 'react';

export default function Process() {
  const steps = [
    {
      num: '01',
      title: 'Discover & Strategize',
      desc: 'We deep dive into analytics requirements to establish technical scope baselines.',
    },
    {
      num: '02',
      title: 'Execute & Optimize',
      desc: 'Our engineers implement pixel-perfect system interfaces backed by modern clean code.',
    },
    {
      num: '03',
      title: 'Analyze & Grow',
      desc: 'Post-deployment tracking loops are integrated to ensure constant scalability.',
    },
  ];

  return (
    <section
      id="process"
      className="py-20 bg-white max-w-7xl mx-auto px-6 lg:px-12 space-y-12"
    >
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 text-brand-blue font-bold text-xs uppercase tracking-wider">
          <span className="w-4 h-2 bg-brand-blue rounded-full"></span>
          Our Work Process
        </div>

        <h2 className="text-3xl sm:text-4xl font-black text-text-main tracking-tight">
          Step-by-Step to Your Growth
        </h2>
      </div>

      {/* Mobile Swipe | Desktop Grid */}
      <div
        className="
          flex md:grid md:grid-cols-3
          overflow-x-auto md:overflow-visible
          gap-6
          snap-x snap-mandatory
          pb-2
          [-ms-overflow-style:none]
          [scrollbar-width:none]
          [&::-webkit-scrollbar]:hidden
        "
      >
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="
              flex-shrink-0
              w-[85vw]
              sm:w-[70vw]
              snap-center

              md:w-auto

              bg-panel-light
              border border-gray-100
              rounded-[2rem]
              overflow-hidden
              shadow-sm
              flex flex-col justify-between
            "
          >
            <div className="p-8 space-y-4">
              <div className="flex justify-between items-center">
                <h4 className="font-extrabold text-lg text-text-main">
                  {step.title}
                </h4>

                <span className="text-4xl font-black text-gray-200/60 font-mono">
                  {step.num}
                </span>
              </div>

              <p className="text-text-muted text-xs leading-relaxed font-medium">
                {step.desc}
              </p>
            </div>

            <div className="bg-brand-blue text-white text-[10px] font-bold tracking-widest uppercase py-3.5 px-8 flex justify-between items-center">
              <span>Step</span>
              <span>{step.num}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
import React from 'react';
import { Check, Zap, Rocket, Crown } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: "STARTER WEBSITE",
      price: "4,999",
      icon: <Zap className="text-blue-500" />,
      features: [
        "Responsive Website (Up to 5 Pages)",
        "Mobile + Desktop Friendly",
        "Modern Clean UI",
        "WhatsApp & Call Integration",
        "Contact Form Setup",
        "Basic SEO Optimization",
        "Fast Loading Website",
        "Free SSL Certificate",
        "1 Month Free Support"
      ],
      cta: "Get Started",
      featured: false
    },
    {
      name: "BUSINESS PRO",
      price: "9,999",
      icon: <Rocket className="text-purple-500" />,
      features: [
        "Everything in Starter",
        "Up to 10 Premium Pages",
        "Custom UI/UX Design",
        "Advanced Animations",
        "Instagram & Social Integration",
        "Interactive Sections",
        "Lead Capture Forms",
        "Chat Bot Integration",
        "Priority Support",
        "3 Months Free Support"
      ],
      cta: "Get Started",
      featured: true
    },
    {
      name: "FULL STACK PREMIUM",
      price: "19,999",
      icon: <Crown className="text-amber-500" />,
      features: [
        "Everything in Business Pro",
        "Frontend + Backend Development",
        "Admin Dashboard",
        "Database Integration",
        "Authentication/Login System",
        "Payment Gateway Integration",
        "REST API Integration",
        "Dynamic Data Management",
        "Deployment + Domain Support",
        "6 Months Free Support"
      ],
      cta: "Get Started",
      featured: false
    },
    {
      name: "ENTERPRISE ELITE",
      price: "59,999",
      icon: <Crown className="text-red-500" />,
      features: [
        "Complete Industry-Level Solution",
        "Fully Custom UI/UX Design",
        "Unlimited Premium Pages",
        "Scalable Full Stack Architecture",
        "Advanced Admin Panel",
        "High Performance Backend",
        "Custom APIs & Integrations",
        "Payment Gateway + Automation",
        "Cloud Deployment & Security",
        "SEO + Speed Optimization",
        "Dedicated Project Handling",
        "1 Year Premium Support & Maintenance"
      ],
      cta: "Get Started",
      featured: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-gray-50 px-6">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
          Transparent Pricing
        </h2>
        <p className="text-gray-500">
          No hidden costs. Choose a plan that fits your business goals.
        </p>
      </div>

      {/* 4 Cards Container */}
      <div
        className="
          flex xl:grid xl:grid-cols-4 items-stretch
          overflow-x-auto xl:overflow-visible
          gap-6
          snap-x snap-mandatory
          max-w-7xl mx-auto
          pt-6 pb-2
          [-ms-overflow-style:none]
          [scrollbar-width:none]
          [&::-webkit-scrollbar]:hidden
        "
      >
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`
              relative
              flex-shrink-0 flex flex-col
              w-[85vw] sm:w-[70vw] md:w-[50vw] xl:w-auto
              snap-center
              ${plan.featured ? "order-first xl:order-none" : ""}
            `}
          >
            {plan.featured && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 bg-blue-600 text-white text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-widest shadow-md">
                Most Popular
              </span>
            )}

            <div
              className={`
                relative flex flex-col justify-between h-full p-7 rounded-[2.5rem] overflow-hidden
                transition-all duration-300 hover:-translate-y-2
                ${
                  plan.featured
                    ? "bg-gray-900 text-white shadow-2xl border-2 border-blue-500"
                    : "bg-white text-gray-900 border border-gray-200 shadow-lg"
                }
              `}
            >
              <div>
                <div className="mb-8 text-center">
                  <div className="mb-4 flex justify-center">{plan.icon}</div>

                  <h3 className="text-sm font-black tracking-widest uppercase mb-2 opacity-80">
                    {plan.name}
                  </h3>

                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-2xl font-bold">₹</span>
                    <span className="text-4xl font-black">{plan.price}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-10 text-left">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <Check
                        size={18}
                        className={
                          plan.featured ? "text-blue-400 shrink-0" : "text-blue-600 shrink-0"
                        }
                      />
                      <span
                        className={
                          plan.featured ? "opacity-90" : "text-gray-600"
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className={`w-full py-4 rounded-2xl font-black text-sm transition-all mt-auto ${
                  plan.featured
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "bg-gray-100 hover:bg-gray-900 hover:text-white text-gray-900"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
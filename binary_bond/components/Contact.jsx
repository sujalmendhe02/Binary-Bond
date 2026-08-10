import React, { useRef } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gizgeps",
        "template_carsev6",
        form.current,
        "53OTq8fNWknu9R3Yq"
      )
      .then(
        () => {
          alert("Message sent successfully 🚀");
          e.target.reset();
        },
        (error) => {
          console.log(error);
          alert("Failed to send message");
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-24 bg-panel-light border-t border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">

        {/* Left side same */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-8">

          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 text-brand-blue font-bold text-xs uppercase tracking-wider">
              <span className="w-4 h-2 bg-brand-blue rounded-full"></span>
              Get In Touch
            </div>

            <h2 className="text-3xl sm:text-5xl font-black">
              Let's Initiate Your <br />
              Next Enterprise <br />
              <span className="text-brand-blue">
                Build Framework
              </span>
            </h2>
          </div>

          {/* Socials */}
          <div className="space-y-3">
            <h3 className="inline-flex items-center gap-2 text-brand-blue font-bold text-xs uppercase tracking-wider">
              <span className="w-4 h-2 bg-brand-blue rounded-full"></span>
              Our Socials
            </h3>

            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/binary.bond"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 flex items-center justify-center rounded-full bg-white hover:bg-brand-blue transition-colors overflow-hidden"
              >
                <img
                  src="/insta_logo.png"
                  alt="Instagram"
                  className="w-5 h-5 object-contain"
                />
              </a>

              <a
                href="https://linkedin.com/company/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 flex items-center justify-center rounded-full bg-white hover:bg-brand-blue transition-colors overflow-hidden"
              >
                <img
                  src="/linkedin_logo.png"
                  alt="LinkedIn"
                  className="w-5 h-5 object-contain"
                />
              </a>
            </div>
          </div>

        </div>

        {/* Form */}
        <div className="lg:col-span-7 bg-white rounded-[2.5rem] p-8 shadow-sm">

          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-6"
          >

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

              <div>
                <label className="text-[11px] font-bold">
                  Your Full Name
                </label>

                <input
                  type="text"
                  name="user_name"
                  required
                  placeholder="John Doe"
                  className="w-full bg-panel-light border rounded-xl px-4 py-3"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold">
                  Corporate Email
                </label>

                <input
                  type="email"
                  name="user_email"
                  required
                  placeholder="john@gmail.com"
                  className="w-full bg-panel-light border rounded-xl px-4 py-3"
                />
              </div>

            </div>

            <div>

              <label className="text-[11px] font-bold">
                Project Scope Area
              </label>

              <select
                name="project_type"
                className="w-full bg-panel-light border rounded-xl px-4 py-3"
              >
                <option>Starter Website - ₹4,999</option>
                <option>Business Pro - ₹9,999</option>
                <option>Full Stack Premium - ₹18,999</option>
                <option>Enterprise Elite - ₹59,999</option>
              </select>

            </div>

            <div>

              <label className="text-[11px] font-bold">
                Requirement Details
              </label>

              <textarea
                rows="4"
                name="message"
                required
                placeholder="Describe your project..."
                className="w-full bg-panel-light border rounded-xl px-4 py-3"
              />

            </div>

            <button
              type="submit"
              className="w-full bg-brand-blue text-white py-4 rounded-full flex items-center justify-center gap-2"
            >
              Send Secure Message
              <Send size={12} />
            </button>

          </form>

        </div>
      </div >
    </section >
  );
}
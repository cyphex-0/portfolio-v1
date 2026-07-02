'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/contact.makhdum@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            _subject: formData.subject || "New Message from Portfolio!",
            message: formData.message,
        })
      });

      if (response.ok) {
        setIsSent(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setIsSent(false), 4000);
      } else {
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="contact" 
      className="relative min-h-screen bg-[#050505] py-24 md:py-36 px-4 md:px-8 lg:px-16 overflow-hidden"
    >
      {/* Background warm glowing atmosphere */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] sunset-glow-strong opacity-30 pointer-events-none" />
      <div className="absolute top-[10%] left-[-10%] w-[40vw] h-[40vw] sunset-glow opacity-10 pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-[0.1] pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto relative z-10">
        
        {/* Form & Info Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-stretch">
          
          {/* Left Column: Direct Transmissions Info */}
          <div className="lg:col-span-5 h-full flex flex-col justify-between order-2 lg:order-1">
            
            {/* Section Header */}
            <div>
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex items-center space-x-2.5 mb-4"
              >
                <span className="w-1.5 h-1.5 bg-[#FF5C00] rounded-full" />
                <span className="font-mono text-xs text-[#FF5C00] font-bold tracking-[0.25em] uppercase">05 / CONTACT</span>
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-display font-black text-4xl md:text-6xl lg:text-7xl text-white tracking-tight uppercase mb-8"
              >
                LET&apos;S BUILD <br />
                <span className="text-[#FF5C00]">THE FUTURE</span> <br />
                <span className="text-stroke text-stroke-hover">TOGETHER.</span>
              </motion.h2>

              <p className="text-[#8A8A8A] text-sm md:text-base leading-relaxed">
                Whether you&apos;re launching a startup, scaling a product,
                or exploring AI solutions, I&apos;d love to hear about your ideas.
                Let&apos;s create something impactful.
              </p>
            </div>

            <div className="space-y-6 pt-10 mt-auto">
              {/* Email */}
              <motion.a 
                href="mailto:contact.makhdum@gmail.com"
                whileHover={{ x: 6 }}
                transition={{ duration: 0.2 }}
                className="flex items-center space-x-4 p-4 bg-white/5 border border-white/5 hover:border-[#FF5C00]/20 rounded-2xl transition-all group"
              >
                <div className="w-12 h-12 bg-black rounded-xl border border-white/8 flex items-center justify-center group-hover:bg-[#FF5C00]/10 group-hover:border-[#FF5C00]/30 transition-all">
                  <Mail className="w-5 h-5 text-[#FF5C00]" />
                </div>
                <div>
                  <span className="block font-mono text-[9px] text-[#8A8A8A] uppercase tracking-wider">Email Dispatch</span>
                  <span className="font-display font-bold text-sm text-white hover:text-[#FF8A1D] transition-colors">
                    contact.makhdum@gmail.com
                  </span>
                </div>
              </motion.a>

              {/* WhatsApp */}
              <motion.a 
                href="https://wa.me/8801903458910" 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 6 }}
                transition={{ duration: 0.2 }}
                className="flex items-center space-x-4 p-4 bg-white/5 border border-white/5 hover:border-[#FF5C00]/20 rounded-2xl transition-all group"
              >
                <div className="w-12 h-12 bg-black rounded-xl border border-white/8 flex items-center justify-center group-hover:bg-[#FF5C00]/10 group-hover:border-[#FF5C00]/30 transition-all">
                  <MessageSquare className="w-5 h-5 text-[#FF5C00]" />
                </div>
                <div>
                  <span className="block font-mono text-[9px] text-[#8A8A8A] uppercase tracking-wider">WhatsApp Link</span>
                  <span className="font-display font-bold text-sm text-white hover:text-[#FF8A1D] transition-colors">
                    +880 1903458910
                  </span>
                </div>
              </motion.a>
            </div>
          </div>

          {/* Right Column: Clean Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 bg-[#21232c] rounded-md p-10 md:p-14 shadow-2xl shadow-black/80 order-1 lg:order-2"
          >
            <h3 className="font-display text-3xl text-white tracking-wide mb-10">
              CONTACT
            </h3>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Name"
                  className="w-full bg-transparent border-b border-white/10 focus:border-[#FF5C00] py-2 text-[15px] text-white placeholder-[#8A8A8A] transition-colors outline-none"
                  data-cursor="text"
                />
              </div>

              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  className="w-full bg-transparent border-b border-white/10 focus:border-[#FF5C00] py-2 text-[15px] text-white placeholder-[#8A8A8A] transition-colors outline-none"
                  data-cursor="text"
                />
              </div>

              <div className="relative">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Subject"
                  className="w-full bg-transparent border-b border-white/10 focus:border-[#FF5C00] py-2 text-[15px] text-white placeholder-[#8A8A8A] transition-colors outline-none"
                  data-cursor="text"
                />
              </div>

              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={2}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Message"
                  className="w-full bg-transparent border-b border-white/10 focus:border-[#FF5C00] py-2 text-[15px] text-white placeholder-[#8A8A8A] transition-colors outline-none resize-none"
                  data-cursor="text"
                />
              </div>

              <div className="pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting || isSent}
                  className="px-6 py-2.5 rounded bg-[#FF5C00] hover:bg-[#FF8A1D] text-white text-[15px] font-medium transition-all duration-300 cursor-pointer disabled:opacity-70 disabled:cursor-default"
                >
                  {isSubmitting ? 'Sending...' : isSent ? 'Sent!' : 'Send Message'}
                </button>
              </div>
            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

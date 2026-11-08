'use client';

import React from 'react';
import { motion } from 'motion/react';
import type { ContactFormData } from '../hooks/useContactForm';

export interface ContactFormProps {
  formData: ContactFormData;
  isSubmitting: boolean;
  isSent: boolean;
  error?: string | null;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export function ContactForm({
  formData,
  isSubmitting,
  isSent,
  onChange,
  onSubmit,
}: ContactFormProps) {
  return (
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

      <form onSubmit={onSubmit} className="space-y-8">
        <div className="relative">
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={onChange}
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
            onChange={onChange}
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
            onChange={onChange}
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
            onChange={onChange}
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
  );
}

export default ContactForm;

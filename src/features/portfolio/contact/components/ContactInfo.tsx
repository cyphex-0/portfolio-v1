'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Mail, MessageSquare, Phone } from 'lucide-react';
import { PROFILE_CONFIG } from '@/config/profile.config';
import { CONTACT_DATA } from '../data/contact.data';

export function ContactInfo() {
  return (
    <div className="lg:col-span-5 flex flex-col order-2 lg:order-1">
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
          <span className="font-mono text-xs text-[#FF5C00] font-bold tracking-[0.25em] uppercase">
            05 / CONTACT
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display font-black text-4xl md:text-6xl lg:text-7xl text-white tracking-tight uppercase mb-8"
        >
          {CONTACT_DATA.headline.line1} <br />
          <span className="text-[#FF5C00]">{CONTACT_DATA.headline.line2}</span> <br />
          <span className="text-stroke text-stroke-hover">{CONTACT_DATA.headline.line3}</span>
        </motion.h2>

        <p className="text-[#8A8A8A] text-sm md:text-base leading-relaxed">
          {CONTACT_DATA.description}
        </p>
      </div>

      <div className="space-y-6 pt-10">
        {/* Email */}
        <motion.a
          href={`mailto:${PROFILE_CONFIG.email}`}
          whileHover={{ x: 6 }}
          transition={{ duration: 0.2 }}
          className="flex items-center space-x-4 p-4 bg-white/5 border border-white/5 hover:border-[#FF5C00]/20 rounded-2xl transition-all group"
        >
          <div className="w-12 h-12 bg-black rounded-xl border border-white/8 flex items-center justify-center group-hover:bg-[#FF5C00]/10 group-hover:border-[#FF5C00]/30 transition-all">
            <Mail className="w-5 h-5 text-[#FF5C00]" />
          </div>
          <div>
            <span className="block font-mono text-[9px] text-[#8A8A8A] uppercase tracking-wider">
              {CONTACT_DATA.labels.emailDispatch}
            </span>
            <span className="font-display font-bold text-sm text-white hover:text-[#FF8A1D] transition-colors">
              {PROFILE_CONFIG.email}
            </span>
          </div>
        </motion.a>

        {/* Phone */}
        <motion.a
          href={`tel:${PROFILE_CONFIG.phone}`}
          whileHover={{ x: 6 }}
          transition={{ duration: 0.2 }}
          className="flex items-center space-x-4 p-4 bg-white/5 border border-white/5 hover:border-[#FF5C00]/20 rounded-2xl transition-all group"
        >
          <div className="w-12 h-12 bg-black rounded-xl border border-white/8 flex items-center justify-center group-hover:bg-[#FF5C00]/10 group-hover:border-[#FF5C00]/30 transition-all">
            <Phone className="w-5 h-5 text-[#FF5C00]" />
          </div>
          <div>
            <span className="block font-mono text-[9px] text-[#8A8A8A] uppercase tracking-wider">
              {CONTACT_DATA.labels.phone}
            </span>
            <span className="font-display font-bold text-sm text-white hover:text-[#FF8A1D] transition-colors">
              {PROFILE_CONFIG.phoneFormatted}
            </span>
          </div>
        </motion.a>

        {/* WhatsApp */}
        <motion.a
          href={PROFILE_CONFIG.whatsappUrl}
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
            <span className="block font-mono text-[9px] text-[#8A8A8A] uppercase tracking-wider">
              {CONTACT_DATA.labels.whatsapp}
            </span>
            <span className="font-display font-bold text-sm text-white hover:text-[#FF8A1D] transition-colors">
              {PROFILE_CONFIG.phoneFormatted}
            </span>
          </div>
        </motion.a>
      </div>
    </div>
  );
}

export default ContactInfo;

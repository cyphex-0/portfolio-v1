'use client';

import React from 'react';
import { useContactForm } from '../hooks/useContactForm';
import { ContactInfo } from './ContactInfo';
import { ContactForm } from './ContactForm';

export function Contact() {
  const {
    formData,
    isSubmitting,
    isSent,
    handleInputChange,
    handleSubmit,
  } = useContactForm();

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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          <ContactInfo />
          <ContactForm
            formData={formData}
            isSubmitting={isSubmitting}
            isSent={isSent}
            onChange={handleInputChange}
            onSubmit={handleSubmit}
          />
        </div>
      </div>
    </section>
  );
}

export default Contact;

'use client';

import { useState, useCallback } from 'react';
import { CONTACT_DATA } from '../data/contact.data';

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const initialFormData: ContactFormData = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

export function useContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    },
    []
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      if (!formData.name || !formData.email || !formData.message) return;

      setIsSubmitting(true);
      setError(null);

      try {
        const response = await fetch(CONTACT_DATA.endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            _subject: formData.subject || CONTACT_DATA.defaultSubject,
            message: formData.message,
          }),
        });

        if (response.ok) {
          const data = await response.json().catch(() => null);
          if (data && data.success === 'false') {
            console.error('Form submission failed by API response');
            setError('Submission failed. Please try again.');
          } else {
            setIsSent(true);
            setFormData(initialFormData);
            setTimeout(() => setIsSent(false), 4000);
          }
        } else {
          console.error('Form submission failed with HTTP status:', response.status);
          setError('Submission failed. Please try again.');
        }
      } catch (err) {
        console.error('Error submitting form', err);
        setError('Network error. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData]
  );

  return {
    formData,
    isSubmitting,
    isSent,
    error,
    handleInputChange,
    handleSubmit,
  };
}

export default useContactForm;

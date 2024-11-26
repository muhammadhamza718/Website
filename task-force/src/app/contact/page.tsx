"use client";
// File: src/app/contact/page.tsx
import React, { useState } from 'react';
import "@/styles/components/page.modules.css";
import emailjs from 'emailjs-com';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setIsSubmitting(true);

      // Replace these parameters with your actual service ID, template ID, and user ID
      emailjs.send(
        'service_xrfxi5n',           // Service ID
        'template_0647fby',          // Template ID
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
        },
        'aGp_ldt94_65TG_mr'           // Public key/User ID
      )
        .then(() => {
          setIsSubmitted(true);
          setFormData({ name: '', email: '', message: '' });
          setIsSubmitting(false);
        })
        .catch(() => {
          alert('There was an error sending your message. Please try again.');
          setIsSubmitting(false);
        });
    } else {
      alert('Please fill out all fields.');
    }
  };

  return (
    <div className="text-white min-h-screen flex flex-col items-center justify-center animate-fadeInUp">
      <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
      {isSubmitted ? (
        <p className="text-lg">Thank you for your message! I will get back to you soon.</p>
      ) : (
        <form onSubmit={handleSubmit} className="w-1/2 max-w-lg space-y-6">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
            rows={4}
            required
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      )}
    </div>
  );
}

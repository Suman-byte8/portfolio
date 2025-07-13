import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const serviceId = 'service_g2a9aht';
      const templateId = 'template_302sybj';
      const publicKey = 'gyKhsXpUz8AThy0Kz';

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'sumansahaweb.dev@gmail.com'
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen  text-white px-4 py-10 flex items-center justify-center">
      <div className="w-full max-w-3xl md:max-w-2xl lg:max-w-xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          <h2 className="text-3xl font-bold text-center">Get in Touch</h2>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="bg-green-600 text-white text-sm p-3 rounded-xl">
              Message sent successfully! I'll get back to you soon.
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="bg-red-600 text-white text-sm p-3 rounded-xl">
              Failed to send message. Please try again or contact me directly.
            </div>
          )}

          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full h-14 p-4 rounded-xl bg-[#1d2125] text-white placeholder:text-[#a1abb5] border border-[#3f4750] focus:outline-none focus:border-[#a1abb5]"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full h-14 p-4 rounded-xl bg-[#1d2125] text-white placeholder:text-[#a1abb5] border border-[#3f4750] focus:outline-none focus:border-[#a1abb5]"
          />

          {/* Subject */}
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full h-14 p-4 rounded-xl bg-[#1d2125] text-white placeholder:text-[#a1abb5] border border-[#3f4750] focus:outline-none focus:border-[#a1abb5]"
          />

          {/* Message */}
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="6"
            className="w-full p-4 rounded-xl bg-[#1d2125] text-white placeholder:text-[#a1abb5] border border-[#3f4750] focus:outline-none focus:border-[#a1abb5]"
          />

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full h-12 font-semibold rounded-xl transition-colors ${
              isSubmitting
                ? 'bg-gray-500 text-gray-300 cursor-not-allowed'
                : 'bg-[#d2e2f3] text-[#121417] hover:bg-[#c1d7f0]'
            }`}
          >
            {isSubmitting ? 'Sending...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

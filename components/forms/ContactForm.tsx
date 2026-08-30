'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { ContactFormData } from '@/types/forms';
import { Button } from '@/components/ui/Button';

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.message) {
      setError('Please fill in your Full Name, Phone Number, and Message.');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  if (submitted) {
    return (
      <div className="bg-[#FFF8E7] border border-[#FCE8B2] rounded-xl p-8 text-center space-y-4">
        <div className="w-12 h-12 rounded-full bg-[#0F3B68] text-[#D4A017] flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold text-[#0F3B68]">Inquiry Submitted Successfully</h3>
        <p className="text-sm text-[#5A6B82] max-w-md mx-auto leading-relaxed">
          Thank you for contacting KIRPA INTERNATIONAL. Our team will review your inquiry and respond to your phone or email promptly.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({ fullName: '', email: '', phone: '', subject: '', message: '' });
          }}
          className="text-xs font-bold text-[#0F3B68] underline hover:text-[#C69214] cursor-pointer"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="bg-[#FFF8E7] border border-[#FCE8B2] text-[#9E730E] p-3 rounded-md text-xs font-bold flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0 text-[#C69214]" />
          <span>{error}</span>
        </div>
      )}

      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-[#17202A] mb-1">
          Full Name <span className="text-[#C69214]">*</span>
        </label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="e.g. Ramesh Shrestha"
          className="w-full px-4 py-2.5 bg-[#FAF9F5] border border-[#E2E8F0] rounded-md text-sm text-[#17202A] focus:outline-none focus:border-[#0F3B68] focus:bg-white"
          required
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#17202A] mb-1">
            Phone Number <span className="text-[#C69214]">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+977 98XXXXXXXX"
            className="w-full px-4 py-2.5 bg-[#FAF9F5] border border-[#E2E8F0] rounded-md text-sm text-[#17202A] focus:outline-none focus:border-[#0F3B68] focus:bg-white"
            required
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#17202A] mb-1">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="name@example.com"
            className="w-full px-4 py-2.5 bg-[#FAF9F5] border border-[#E2E8F0] rounded-md text-sm text-[#17202A] focus:outline-none focus:border-[#0F3B68] focus:bg-white"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-[#17202A] mb-1">
          Subject
        </label>
        <select
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-4 py-2.5 bg-[#FAF9F5] border border-[#E2E8F0] rounded-md text-sm text-[#17202A] focus:outline-none focus:border-[#0F3B68] focus:bg-white"
        >
          <option value="">Select inquiry topic...</option>
          <option value="Job Application Inquiry">Job Application Inquiry</option>
          <option value="Document Verification">Document Verification</option>
          <option value="European Partnership">European Partnership (Global Work Specialist)</option>
          <option value="Employer Requirement">Employer Requirement</option>
          <option value="General Query">General Query</option>
        </select>
      </div>

      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-[#17202A] mb-1">
          Message <span className="text-[#C69214]">*</span>
        </label>
        <textarea
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="Please describe your inquiry or requirement..."
          className="w-full px-4 py-2.5 bg-[#FAF9F5] border border-[#E2E8F0] rounded-md text-sm text-[#17202A] focus:outline-none focus:border-[#0F3B68] focus:bg-white resize-y"
          required
        />
      </div>

      <Button type="submit" variant="primary" disabled={loading} className="w-full">
        {loading ? 'Submitting...' : 'Send Message'}
        <Send className="w-4 h-4" />
      </Button>
    </form>
  );
}

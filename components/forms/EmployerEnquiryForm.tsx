'use client';

import React, { useState } from 'react';
import { CheckCircle2, AlertCircle, Send } from 'lucide-react';
import { EmployerEnquiryFormData } from '@/types/forms';
import { Button } from '@/components/ui/Button';

export function EmployerEnquiryForm() {
  const [formData, setFormData] = useState<EmployerEnquiryFormData>({
    fullName: '',
    company: '',
    country: '',
    workEmail: '',
    phone: '',
    industry: '',
    requiredWorkforce: '',
    approximateWorkersCount: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.company || !formData.workEmail || !formData.country) {
      setError('Please fill in Full Name, Company Name, Country, and Work Email.');
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
      <div className="bg-[#EBF3FA] border border-[#D0E2F4] rounded-xl p-8 text-center space-y-4">
        <div className="w-12 h-12 rounded-full bg-[#0F3B68] text-[#D4A017] flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold text-[#0F3B68]">Workforce Enquiry Submitted</h3>
        <p className="text-sm text-[#5A6B82] max-w-md mx-auto leading-relaxed">
          Thank you for providing your workforce specifications to KIRPA INTERNATIONAL. Our corporate recruitment team will review your requirements and get in touch via email or phone.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({
              fullName: '',
              company: '',
              country: '',
              workEmail: '',
              phone: '',
              industry: '',
              requiredWorkforce: '',
              approximateWorkersCount: '',
              message: '',
            });
          }}
          className="text-xs font-bold text-[#0F3B68] underline cursor-pointer"
        >
          Submit another requirement
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

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#17202A] mb-1">
            Full Name <span className="text-[#C69214]">*</span>
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="e.g. Alexander Vance"
            className="w-full px-4 py-2.5 bg-[#FAF9F5] border border-[#E2E8F0] rounded-md text-sm text-[#17202A] focus:outline-none focus:border-[#0F3B68] focus:bg-white"
            required
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#17202A] mb-1">
            Company Name <span className="text-[#C69214]">*</span>
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="e.g. Apex Industrial Group"
            className="w-full px-4 py-2.5 bg-[#FAF9F5] border border-[#E2E8F0] rounded-md text-sm text-[#17202A] focus:outline-none focus:border-[#0F3B68] focus:bg-white"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#17202A] mb-1">
            Country <span className="text-[#C69214]">*</span>
          </label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            placeholder="e.g. Romania, Greece, Bulgaria, UAE"
            className="w-full px-4 py-2.5 bg-[#FAF9F5] border border-[#E2E8F0] rounded-md text-sm text-[#17202A] focus:outline-none focus:border-[#0F3B68] focus:bg-white"
            required
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#17202A] mb-1">
            Work Email <span className="text-[#C69214]">*</span>
          </label>
          <input
            type="email"
            name="workEmail"
            value={formData.workEmail}
            onChange={handleChange}
            placeholder="corporate@company.com"
            className="w-full px-4 py-2.5 bg-[#FAF9F5] border border-[#E2E8F0] rounded-md text-sm text-[#17202A] focus:outline-none focus:border-[#0F3B68] focus:bg-white"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#17202A] mb-1">
            Phone / WhatsApp Number
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+359 88XXXXXXX"
            className="w-full px-4 py-2.5 bg-[#FAF9F5] border border-[#E2E8F0] rounded-md text-sm text-[#17202A] focus:outline-none focus:border-[#0F3B68] focus:bg-white"
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#17202A] mb-1">
            Industry Sector
          </label>
          <select
            name="industry"
            value={formData.industry}
            onChange={handleChange}
            className="w-full px-4 py-2.5 bg-[#FAF9F5] border border-[#E2E8F0] rounded-md text-sm text-[#17202A] focus:outline-none focus:border-[#0F3B68] focus:bg-white"
          >
            <option value="">Select industry...</option>
            <option value="Manufacturing">Manufacturing & Assembly</option>
            <option value="Construction">Construction & Engineering</option>
            <option value="Hospitality">Hospitality & Resort Services</option>
            <option value="Logistics">Logistics & Warehousing</option>
            <option value="Agriculture">Agriculture & Agro-Processing</option>
            <option value="Facility Services">Cleaning & Facility Management</option>
            <option value="Other">Other Category</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#17202A] mb-1">
            Required Job Categories
          </label>
          <input
            type="text"
            name="requiredWorkforce"
            value={formData.requiredWorkforce}
            onChange={handleChange}
            placeholder="e.g. Welders, Masons, Housekeepers"
            className="w-full px-4 py-2.5 bg-[#FAF9F5] border border-[#E2E8F0] rounded-md text-sm text-[#17202A] focus:outline-none focus:border-[#0F3B68] focus:bg-white"
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#17202A] mb-1">
            Approximate Number of Workers
          </label>
          <select
            name="approximateWorkersCount"
            value={formData.approximateWorkersCount}
            onChange={handleChange}
            className="w-full px-4 py-2.5 bg-[#FAF9F5] border border-[#E2E8F0] rounded-md text-sm text-[#17202A] focus:outline-none focus:border-[#0F3B68] focus:bg-white"
          >
            <option value="">Select quantity range...</option>
            <option value="5 - 15">5 – 15 Workers</option>
            <option value="16 - 50">16 – 50 Workers</option>
            <option value="51 - 100">51 – 100 Workers</option>
            <option value="100+">100+ Workers</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-[#17202A] mb-1">
          Workforce Requirement Details
        </label>
        <textarea
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="Please describe salary offer, contract duration, accommodation provision, or specific technical skills required..."
          className="w-full px-4 py-2.5 bg-[#FAF9F5] border border-[#E2E8F0] rounded-md text-sm text-[#17202A] focus:outline-none focus:border-[#0F3B68] focus:bg-white resize-y"
        />
      </div>

      <Button type="submit" variant="primary" disabled={loading} className="w-full">
        {loading ? 'Submitting...' : 'Submit Workforce Requirement'}
        <Send className="w-4 h-4" />
      </Button>
    </form>
  );
}

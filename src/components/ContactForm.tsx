"use client";

import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { Button } from './ui/Button';

export function ContactForm() {
  const [formData, setFormData] = useState({
    business_name: '',
    contact_person: '',
    phone: '',
    email: '',
    product_interest: [] as string[],
    quantity: '',
    message: ''
  });
  
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Handle URL query parameters for pre-filling product interest
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const interest = params.get('interest');
    if (interest && !formData.product_interest.includes(interest)) {
      setFormData(prev => ({
        ...prev,
        product_interest: [...prev.product_interest, interest]
      }));
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleMultiSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const options = Array.from(e.target.selectedOptions, option => option.value);
    setFormData(prev => ({ ...prev, product_interest: options }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const { error } = await supabase
        .from('enquiries')
        .insert([{
          business_name: formData.business_name,
          contact_person: formData.contact_person,
          phone: formData.phone,
          email: formData.email,
          product_interest: formData.product_interest.join(', '),
          quantity: formData.quantity,
          message: formData.message
        }]);

      if (error) throw error;
      
      setStatus('success');
      setFormData({
        business_name: '', contact_person: '', phone: '', email: '', product_interest: [], quantity: '', message: ''
      });
    } catch (err: any) {
      console.error("Submission error:", err);
      setStatus('error');
      setErrorMessage(err.message || 'Something went wrong. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 p-8 text-center rounded-sm">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
        </div>
        <h4 className="text-2xl font-bold text-green-800 mb-2">Enquiry Sent Successfully!</h4>
        <p className="text-green-700 mb-6">Thank you for your interest in Mysha Foods. Our sales team will contact you shortly.</p>
        <Button onClick={() => setStatus('idle')} variant="outline">Send Another Enquiry</Button>
      </div>
    );
  }

  const inputClass = "w-full p-3 border border-brand-graphite/20 bg-brand-cream/50 focus:bg-white focus:outline-none focus:border-brand-saffron focus:ring-1 focus:ring-brand-saffron transition-colors rounded-sm text-brand-charcoal";
  const labelClass = "block text-sm font-semibold text-brand-charcoal mb-2";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="business_name" className={labelClass}>Business Name *</label>
          <input required type="text" id="business_name" name="business_name" value={formData.business_name} onChange={handleChange} className={inputClass} placeholder="e.g. Ocean Blue Restaurant" />
        </div>
        <div>
          <label htmlFor="contact_person" className={labelClass}>Contact Person *</label>
          <input required type="text" id="contact_person" name="contact_person" value={formData.contact_person} onChange={handleChange} className={inputClass} placeholder="Full Name" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className={labelClass}>Phone Number *</label>
          <input required type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className={inputClass} placeholder="+91 98765 43210" />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>Email Address *</label>
          <input required type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={inputClass} placeholder="procurement@business.com" />
        </div>
      </div>

      <div>
        <label htmlFor="product_interest" className={labelClass}>Product Interest (Multiple selection allowed) *</label>
        <select multiple required id="product_interest" name="product_interest" value={formData.product_interest} onChange={handleMultiSelect} className={`${inputClass} h-32`}>
          <option value="Premium Fish">Premium Fish</option>
          <option value="Prawns & Shrimp">Prawns & Shrimp</option>
          <option value="Shellfish">Shellfish</option>
          <option value="Cephalopods">Cephalopods</option>
          <option value="Processed / Value Added">Processed / Value Added</option>
        </select>
        <p className="text-xs text-gray-500 mt-2">Hold Ctrl (Windows) or Command (Mac) to select multiple options.</p>
      </div>

      <div>
        <label htmlFor="quantity" className={labelClass}>Estimated Weekly/Monthly Volume *</label>
        <input required type="text" id="quantity" name="quantity" value={formData.quantity} onChange={handleChange} className={inputClass} placeholder="e.g. 50kg/week" />
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>Additional Requirements / Message</label>
        <textarea id="message" name="message" value={formData.message} onChange={handleChange} className={`${inputClass} h-32 resize-y`} placeholder="Any specific processing, sizing, or delivery requirements?" />
      </div>

      {status === 'error' && (
        <div className="p-4 bg-red-50 text-red-700 border border-red-200 rounded-sm">
          {errorMessage}
        </div>
      )}

      <Button type="submit" variant="primary" size="lg" className="w-full" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Submitting...' : 'Submit Request'}
      </Button>
    </form>
  );
}

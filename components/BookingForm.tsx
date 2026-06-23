"use client";

import { useState } from "react";

interface FormState {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  timeSlot: string;
  notes: string;
}

const initialFormState: FormState = {
  name: "",
  email: "",
  phone: "",
  service: "",
  date: "",
  timeSlot: "",
  notes: "",
};

export default function BookingForm() {
  const [form, setForm] = useState<FormState>(initialFormState);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const validate = () => {
    const newErrors: Partial<FormState> = {};
    if (!form.name.trim()) newErrors.name = "Full name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?[0-9\s-]{7,15}$/.test(form.phone)) {
      newErrors.phone = "Invalid phone number format";
    }
    if (!form.service) newErrors.service = "Please select a service";
    if (!form.date) newErrors.date = "Please select a preferred date";
    if (!form.timeSlot) newErrors.timeSlot = "Please select a preferred time slot";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear validation error when typing/selecting
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccessModal(true);
      setForm(initialFormState);
    }, 1500);
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-100 relative">
      <h3 className="font-display font-bold text-2xl text-slate-900 mb-2">
        Request an Appointment
      </h3>
      <p className="text-slate-500 text-sm font-sans mb-6">
        Fill out this form and our scheduling coordinator will reach out to confirm your booking within 2 hours.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4 font-sans" id="appointment-form">
        {/* Full Name */}
        <div>
          <label htmlFor="name" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="John Doe"
            className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
              errors.name
                ? "border-red-300 focus:border-red-500 focus:ring-red-100"
                : "border-slate-200 focus:border-primary focus:ring-primary/10"
            }`}
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>

        {/* Email & Phone Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                errors.email
                  ? "border-red-300 focus:border-red-500 focus:ring-red-100"
                  : "border-slate-200 focus:border-primary focus:ring-primary/10"
              }`}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="phone" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="(555) 000-0000"
              className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                errors.phone
                  ? "border-red-300 focus:border-red-500 focus:ring-red-100"
                  : "border-slate-200 focus:border-primary focus:ring-primary/10"
              }`}
            />
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
          </div>
        </div>

        {/* Treatment / Service Selection */}
        <div>
          <label htmlFor="service" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
            Select Dental Treatment
          </label>
          <select
            id="service"
            name="service"
            value={form.service}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-xl border text-sm bg-white transition-all focus:outline-none focus:ring-2 ${
              errors.service
                ? "border-red-300 focus:border-red-500 focus:ring-red-100"
                : "border-slate-200 focus:border-primary focus:ring-primary/10"
            }`}
          >
            <option value="">Choose a treatment...</option>
            <option value="General Checkup">Routine General Checkup</option>
            <option value="Orthodontics">Orthodontics & Invisalign</option>
            <option value="Cosmetic Dentistry">Cosmetic Dentistry (Whitening/Veneers)</option>
            <option value="Dental Implants">Implants & Restorative Care</option>
            <option value="Pediatric Dentistry">Pediatric Children&apos;s Dentistry</option>
            <option value="Emergency Care">Urgent Emergency Clinic</option>
          </select>
          {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service}</p>}
        </div>

        {/* Date & Time Slot Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="date" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
              Preferred Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                errors.date
                  ? "border-red-300 focus:border-red-500 focus:ring-red-100"
                  : "border-slate-200 focus:border-primary focus:ring-primary/10"
              }`}
            />
            {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date}</p>}
          </div>
          <div>
            <label htmlFor="timeSlot" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
              Preferred Time Slot
            </label>
            <select
              id="timeSlot"
              name="timeSlot"
              value={form.timeSlot}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-xl border text-sm bg-white transition-all focus:outline-none focus:ring-2 ${
                errors.timeSlot
                  ? "border-red-300 focus:border-red-500 focus:ring-red-100"
                  : "border-slate-200 focus:border-primary focus:ring-primary/10"
              }`}
            >
              <option value="">Select time block...</option>
              <option value="Morning">Morning (8:00 AM - 12:00 PM)</option>
              <option value="Afternoon">Afternoon (12:00 PM - 4:00 PM)</option>
              <option value="Evening">Evening (4:00 PM - 7:00 PM)</option>
            </select>
            {errors.timeSlot && <p className="text-red-500 text-xs mt-1">{errors.timeSlot}</p>}
          </div>
        </div>

        {/* Message Notes */}
        <div>
          <label htmlFor="notes" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
            Symptoms or Special Requests (Optional)
          </label>
          <textarea
            id="notes"
            name="notes"
            rows={3}
            value={form.notes}
            onChange={handleChange}
            placeholder="Tell us a little bit about your appointment goals..."
            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm transition-all focus:outline-none focus:ring-2 focus:border-primary focus:ring-primary/10 resize-none"
          />
        </div>

        {/* Submit button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 rounded-xl bg-primary hover:bg-primary-hover text-white font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-primary/15 hover:shadow-xl hover:shadow-primary/20 disabled:bg-primary/60 cursor-pointer"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              <span>Processing Inquiry...</span>
            </>
          ) : (
            <span>Send Appointment Request</span>
          )}
        </button>
      </form>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 text-center shadow-2xl border border-slate-100 animate-scale-up">
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center mx-auto mb-4 border border-emerald-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="3"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <h4 className="font-display font-bold text-xl text-slate-900 mb-2">
              Inquiry Sent Successfully!
            </h4>
            <p className="text-slate-500 text-sm font-sans mb-6">
              Thank you for requesting an appointment! One of our team representatives will call or text you shortly to finalize your date and time.
            </p>
            <button
              onClick={() => setShowSuccessModal(false)}
              className="px-6 py-2.5 w-full bg-primary hover:bg-primary-hover text-white text-sm font-semibold rounded-full shadow transition-colors"
            >
              Back to Form
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

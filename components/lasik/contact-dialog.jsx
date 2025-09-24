"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Dialog, DialogContent, DialogTitle } from "../ui/dialog";
import { SkeumorphicButton } from "../ui/skeumorphic-button";
import { X } from "lucide-react";
import Image from "next/image";

export default function ContactDialog({ isOpen, onOpenChange }) {
  const router = useRouter();
  const green = "#386641";
  const cream = "#fefae0";

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;

    // Hard block alphabets in phone. Allow leading "+" and digits only.
    if (name === "phone") {
      let v = value.replace(/[^+\d]/g, "");
      if (v.indexOf("+") > 0) v = v.replace(/\+/g, "");
      if (v.lastIndexOf("+") > 0) v = v.replace(/\+/g, "");
      setForm((f) => ({ ...f, phone: v }));
      return;
    }

    setForm((f) => ({ ...f, [name]: value }));
  };

  // Extra guard: block letters before they enter the phone field
  const blockAlphaOnPhone = (e) => {
    const be = e;
    const data = be.data;
    if (data && /[A-Za-z]/.test(data)) {
      be.preventDefault?.();
    }
  };

  const validate = () => {
    const e = {};

    if (!form.name.trim()) e.name = "Name is required.";
    else if (!/^[A-Za-z][A-Za-z\s'-]{1,}$/.test(form.name.trim()))
      e.name = "Use letters, spaces, or - ' only.";

    // Normalize Indian phone
    const digits = form.phone.replace(/\D/g, "");
    let n = digits;
    if (digits.length === 11 && digits.startsWith("0")) n = digits.slice(1);
    if (digits.length === 12 && digits.startsWith("91")) n = digits.slice(2);
    if (digits.length === 13 && digits.startsWith("091")) n = digits.slice(3);

    if (!n) e.phone = "Phone is required.";
    else if (!(n.length === 10 && /^[6-9]\d{9}$/.test(n)))
      e.phone = "Enter a valid 10-digit Indian mobile number.";

    // Validate email if provided
    if (form.email.trim() && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email.trim())) {
      e.email = "Enter a valid email address.";
    }


    setErrors(e);
    return { ok: Object.keys(e).length === 0, n };
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setSubmitError(false); // Reset error state
    const { ok, n } = validate();
    if (!ok) return;
    const payload = {
      name: form.name,
      phone: `+91${n}`,
      email: form.email,
      message: form.message,
      source: "Contact Dialog LASIK Lead",
    };
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      onOpenChange(false); // Close the dialog before navigation
      router.push("/thank-you-lasik");
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError(true);
      // Scroll error into view smoothly
      const errorElement = document.getElementById('dialog-error');
      if (errorElement) {
        errorElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent
        className="max-w-md mx-auto fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-[calc(100%-2rem)] sm:w-full rounded-2xl border shadow-lg p-4 sm:p-6 md:p-7 bg-[#fefae0] border-[#386641]/20"
      >
        <button
          onClick={() => onOpenChange(false)}
          className="absolute right-4 top-4 p-1 rounded-full hover:bg-[#386641]/10 transition-colors"
          aria-label="Close dialog"
        >
          <X className="h-5 w-5" style={{ color: green }} />
        </button>

        <DialogTitle className="sr-only">Contact Form</DialogTitle>

        {submitError && (
          <div id="dialog-error" className="mb-4 px-4 py-3 rounded-lg bg-red-50 border border-red-200">
            <p className="text-sm text-red-600 text-center">
              Unable to submit form. Please try again.
            </p>
          </div>
        )}

        {/* Logo */}
        <div className="flex justify-center mb-3 sm:mb-4">
          <div className="relative w-28 sm:w-32 h-10 sm:h-12">
            <Image
              src="/netram-logo.png"
              alt="Netram Eye Care"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Centered heading */}
        <div className="mb-2 sm:mb-3 text-center">
          <span className="text-base sm:text-lg font-bold text-[#386641]">
            Free LASIK Screening worth ₹5000
          </span>
        </div>

        <h2 className="text-xl sm:text-2xl font-bold text-center font-['Bona_Nova'] text-[#386641]">
          Get LASIK Cost Estimate
        </h2>
        <p className="text-sm sm:text-md text-[#386641]/80 mb-3 sm:mb-4 text-center">
          Book your free screening now.
        </p>

        <form className="space-y-3" onSubmit={onSubmit} noValidate>
          <div>
            <label className="text-sm sm:text-md font-medium text-[#386641]" htmlFor="name">
              Name<span className="text-red-600">*</span>
            </label>
            <input
              id="name"
              name="name"
              className="mt-1 w-full px-3 py-2 sm:py-2.5 rounded-lg border bg-[#386641]/90 text-[#fefae0] text-sm sm:text-md placeholder-[#fefae0]/60"
              placeholder="Enter Name"
              value={form.name}
              onChange={onChange}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-err" : undefined}
              required
              inputMode="text"
              autoComplete="name"
              style={{ fontSize: '16px' }}
            />
            {errors.name && (
              <p id="name-err" className="mt-1 text-sm text-red-600">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label className="text-sm sm:text-md font-medium text-[#386641]" htmlFor="phone">
              Phone<span className="text-red-600">*</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              className="mt-1 w-full px-3 py-2 sm:py-2.5 rounded-lg border bg-[#386641]/90 text-[#fefae0] text-sm sm:text-md placeholder-[#fefae0]/60"
              placeholder="Enter Phone number"
              value={form.phone}
              onChange={onChange}
              onBeforeInput={blockAlphaOnPhone}
              onKeyDown={(e) => {
                if (/^[a-z]$/i.test(e.key)) e.preventDefault();
              }}
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? "phone-err" : undefined}
              required
              inputMode="tel"
              autoComplete="tel"
              maxLength={16}
              style={{ fontSize: '16px' }}
            />
            {errors.phone && (
              <p id="phone-err" className="mt-1 text-sm text-red-600">
                {errors.phone}
              </p>
            )}
          </div>

          <div>
            <label className="text-sm sm:text-md font-medium text-[#386641]" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="mt-1 w-full px-3 py-2 sm:py-2.5 rounded-lg border bg-[#386641]/90 text-[#fefae0] text-sm sm:text-md placeholder-[#fefae0]/60"
              placeholder="Enter Email (Optional)"
              value={form.email}
              onChange={onChange}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-err" : undefined}
              inputMode="email"
              autoComplete="email"
              style={{ fontSize: '16px' }}
            />
            {errors.email && (
              <p id="email-err" className="mt-1 text-sm text-red-600">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label className="text-sm sm:text-md font-medium text-[#386641]" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="mt-1 w-full px-3 py-2 sm:py-2.5 rounded-lg border bg-[#386641]/90 text-[#fefae0] text-sm sm:text-md placeholder-[#fefae0]/60 min-h-[60px]"
              placeholder="Enter Message (Optional)"
              value={form.message}
              onChange={onChange}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-err" : undefined}
              style={{ fontSize: '16px' }}
            />
            {errors.message && (
              <p id="message-err" className="mt-1 text-sm text-red-600">
                {errors.message}
              </p>
            )}
          </div>

          {/* Actions */}
          <div className="mt-4 sm:mt-6">
            <SkeumorphicButton
              type="submit"
              size="default"
              className="w-full py-2 sm:py-2.5 bg-[#386641] text-[#fefae0] hover:bg-[#386641]/90 text-sm sm:text-base"
            >
              Claim Free Screening
            </SkeumorphicButton>
            <p className="text-xs sm:text-sm text-[#386641]/80 text-center mt-2">
              We respect your privacy. No spam, ever.
            </p>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

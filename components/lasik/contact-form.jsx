"use client";

import { useState } from "react";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { Highlight } from "../ui/hero-highlight";
import { useRouter } from "next/navigation";

export default function ContactForm() {
  const router = useRouter();
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
    if (
      form.email.trim() &&
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email.trim())
    ) {
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
      source: "Hero/CTA LASIK Form",
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      // Redirect to thank you page
      router.push("/thank-you-lasik");
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitError(true);
    }
  };

  return (
    <div className="rounded-xl sm:rounded-2xl border shadow-lg p-4 sm:p-6 md:p-7 w-full max-w-md md:ml-auto bg-theme-secondary border-theme-on-light/20 theme-transition">
      {submitError && (
        <div className="mb-4 px-4 py-3 rounded-lg bg-red-50 border border-red-200">
          <p className="text-sm text-red-600 text-center">
            Unable to submit form. Please try again.
          </p>
        </div>
      )}

      <div className="mb-2 sm:mb-3 text-center">
        <span className="inline-block text-base sm:text-xl font-bold text-theme-on-light px-3 sm:px-4 py-3 sm:py-4 mx-auto">
          <Highlight className="from-theme-on-light/80 to-theme-on-light py-1.5 sm:py-2 px-2 whitespace-normal">
            Free LASIK Screening worth ₹5000
          </Highlight>
        </span>
      </div>

      <h2 className="text-xl sm:text-2xl font-bold text-center theme-heading text-theme-on-light">
        Get LASIK Cost Estimate
      </h2>

      <form className="mt-4 sm:mt-5 space-y-3" onSubmit={onSubmit} noValidate>
        <div>
          <label
            className="hidden sm:block text-sm sm:text-md font-medium text-theme-on-light/90"
            htmlFor="name"
          >
            Name<span className="text-red-400">*</span>
          </label>
          <input
            id="name"
            name="name"
            className="mt-1 w-full px-3 py-2 sm:py-2.5 rounded-lg border border-theme-on-light/30 bg-theme-on-light text-theme-on-dark text-sm sm:text-md placeholder-theme-on-dark/70"
            placeholder="Enter Name*"
            value={form.name}
            onChange={onChange}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-err" : undefined}
            required
            inputMode="text"
            autoComplete="name"
          />
          {errors.name && (
            <p id="name-err" className="mt-1 text-sm sm:text-md text-red-300">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label
            className="hidden sm:block text-sm sm:text-md font-medium text-theme-on-light/90"
            htmlFor="phone"
          >
            Phone<span className="text-red-400">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="mt-1 w-full px-3 py-2 sm:py-2.5 rounded-lg border border-theme-on-light/30 bg-theme-on-light text-theme-on-dark text-sm sm:text-md placeholder-theme-on-dark/70"
            placeholder="Enter Phone number*"
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
          />
          {errors.phone && (
            <p id="phone-err" className="mt-1 text-sm sm:text-md text-red-300">
              {errors.phone}
            </p>
          )}
        </div>

        <div>
          <label
            className="hidden sm:block text-sm sm:text-md font-medium text-theme-on-light/90"
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="mt-1 w-full px-3 py-2 sm:py-2.5 rounded-lg border border-theme-on-light/30 bg-theme-on-light text-theme-on-dark text-sm sm:text-md placeholder-theme-on-dark/70"
            placeholder="Enter Email (Optional)"
            value={form.email}
            onChange={onChange}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-err" : undefined}
            inputMode="email"
            autoComplete="email"
          />
          {errors.email && (
            <p id="email-err" className="mt-1 text-sm sm:text-md text-red-300">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label
            className="hidden sm:block text-sm sm:text-md font-medium text-theme-on-light/90"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="mt-1 w-full px-3 py-2 sm:py-2.5 rounded-lg border border-theme-on-light/30 bg-theme-on-light text-theme-on-dark text-sm sm:text-md placeholder-theme-on-dark/70 min-h-[60px]"
            placeholder="Enter Message (Optional)"
            value={form.message}
            onChange={onChange}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-err" : undefined}
          />
          {errors.message && (
            <p
              id="message-err"
              className="mt-1 text-sm sm:text-md text-red-300"
            >
              {errors.message}
            </p>
          )}
        </div>

        {/* Actions */}
        <div className="mt-5 sm:mt-6">
          <ShimmerButton type="submit" className="w-full py-3 sm:py-4">
            <span className="whitespace-pre-wrap text-center text-base sm:text-lg font-semibold leading-none tracking-tight text-[#fefae0]">
              Claim Free Screening
            </span>
          </ShimmerButton>
          <p className="text-sm sm:text-md text-theme-on-light/80 text-center mt-2 theme-body">
            We respect your privacy. No spam, ever.
          </p>
        </div>
      </form>
    </div>
  );
}

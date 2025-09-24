"use client";

import React, { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { motion } from "framer-motion";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { useContactDialog } from "./contact-dialog-provider";

export default function FAQSection() {
  const { openContactDialog } = useContactDialog();
  const accordionRefs = useRef({});

  const handleAccordionChange = (value) => {
    if (value) {
      const index = value.split("-")[1];
      const element = accordionRefs.current[index];
      if (element) {
        setTimeout(() => {
          const elementRect = element.getBoundingClientRect();
          const absoluteElementTop = elementRect.top + window.pageYOffset;
          const middle = absoluteElementTop - window.innerHeight / 4;
          window.scrollTo({
            top: middle,
            behavior: "smooth",
          });
        }, 100);
      }
    }
  };

  const faqs = [
    {
      question: "Are You a suitable candidate for LASIK?",
      answer: (
        <>
          <p className="mb-4">You may be eligible for a LASIK surgery if:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>You're between 21 and 45 years old.</li>
            <li>You're tired of wearing glasses or contact lenses.</li>
            <li>Your prescription has been stable for at least a year.</li>
            <li>You have healthy corneas.</li>
          </ul>
          <p className="mb-6">
            Schedule a consultation to determine your eligibility.
          </p>
          <VideoEmbed id="bOpg4sPFw0o" />
        </>
      ),
      videoId: "bOpg4sPFw0o",
    },
    {
      question: "How is LASIK eye surgery done?",
      answer: (
        <>
          <p className="mb-4">
            LASIK reshapes the cornea to focus light properly without glasses.
            There are 3 main methods:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>
              <strong>Flap-based LASIK</strong> – A thin corneal flap is lifted,
              laser reshaping is done underneath, and the flap is replaced.
            </li>
            <li>
              <strong>Surface ablation (PRK)</strong> – No flap; surface cells
              are removed before laser treatment. Safer for thin corneas, but
              slower recovery.
            </li>
            <li>
              <strong>Lenticule-based (SMILE/SILK)</strong> – A small disc of
              tissue is removed via a tiny incision. Suited for myopia;
              long-term data still emerging.
            </li>
          </ul>
          <p className="mb-6">
            The right technique depends on your cornea's thickness, shape, and
            power — not just the name.
          </p>
          <VideoEmbed id="0qT3bRCxn9s" />
        </>
      ),
      videoId: "0qT3bRCxn9s",
    },
    {
      question: "Can LASIK be done in both eyes at the same time?",
      answer: (
        <>
          <p className="mb-4">
            Yes. Both eyes are treated in the same sitting, which helps you
            recover faster and get back to routine sooner. It's usually not
            covered by insurance unless the prescription is very high.
          </p>
          <p className="mb-6">
            Vision returns the next day, but avoid screens, direct water, and
            bright lights for the first week. Wear sunglasses outside and
            anti-glare lenses for night driving.
          </p>
          <VideoEmbed id="oo8uBI6HBDM" />
        </>
      ),
      videoId: "oo8uBI6HBDM",
    },
    {
      question: "What tests decide whether I'm eligible for LASIK?",
      answer: (
        <>
          <p className="mb-4">
            We run 5 essential tests to confirm eligibility:
          </p>
          <ol className="list-decimal pl-6 space-y-1 mb-4">
            <li>Cycloplegic refraction for accurate power.</li>
            <li>Keratometry to map corneal shape.</li>
            <li>Pachymetry to check corneal thickness.</li>
            <li>Pentacam tomography to rule out corneal weakness.</li>
            <li>Dilated retina exam for peripheral health.</li>
          </ol>
          <p className="mb-6">
            Surgery is advised only if all results fall within safe ranges.
          </p>
          <VideoEmbed id="bOpg4sPFw0o" />
        </>
      ),
      videoId: "bOpg4sPFw0o",
    },
    {
      question: "Is LASIK eye surgery completely safe?",
      answer: (
        <>
          <p className="mb-4">
            LASIK is extremely safe when done after age 21, with a stable
            prescription (preferably ≤ -8 D), and a healthy cornea based on
            topography and thickness checks.
          </p>
          <p className="mb-4">
            The laser acts only on the surface and the procedure is painless.
            Vision improves within 24 hours, though full healing takes 4–6
            weeks. Dryness may last up to 3 months — lubricating drops help.
          </p>
          <VideoEmbed id="94gcL4By1hs" />
        </>
      ),
      videoId: "94gcL4By1hs",
    },
    {
      question: "How is LASIK different from cataract surgery?",
      answer: (
        <>
          <p className="mb-4">
            Both reduce glasses use, but address different problems using
            different tech:
          </p>
          <table className="w-full text-left mb-4">
            <thead>
              <tr className="border-b border-theme-primary">
                <th className="p-2">LASIK</th>
                <th className="p-2">Cataract Surgery</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-2">Laser reshapes cornea</td>
                <td className="p-2">Ultrasound removes lens; IOL implanted</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">For refractive errors, after age 21</td>
                <td className="p-2">
                  For age-related lens clouding, usually post 50
                </td>
              </tr>
              <tr>
                <td className="p-2">No implant; heals in hours–days</td>
                <td className="p-2">Permanent lens implant stays in the eye</td>
              </tr>
            </tbody>
          </table>
          <p className="mb-6">
            Over 50 and LASIK-ineligible? We may recommend clear-lens extraction
            with a multifocal IOL.
          </p>
          <VideoEmbed id="mkFuuBR6TQk" />
        </>
      ),
      videoId: "mkFuuBR6TQk",
    },
  ];

  return (
    <section className="py-16 px-4 bg-theme-secondary theme-transition">
      <div className="mx-auto max-w-6xl">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold theme-heading text-theme-on-light flex flex-col sm:block items-center">
            Common Questions{" "}
            <span className="px-3 mt-2 sm:mt-0 rounded-xl text-theme-on-dark bg-theme-primary inline-block sm:inline">
              About LASIK
            </span>
          </h2>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="mt-12">
          <Accordion
            type="single"
            collapsible
            className="w-full"
            onValueChange={handleAccordionChange}
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                ref={(el) => (accordionRefs.current[index] = el)}
              >
                <AccordionItem value={`item-${index}`} className="relative">
                  <AccordionTrigger className="py-8 text-xl font-extrabold text-theme-on-light hover:no-underline group transition-all border-b border-theme-primary/10 theme-heading text-left sm:text-center px-2 sm:px-0">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="py-8 px-6 sm:px-4 md:px-6 text-theme-on-light text-lg leading-relaxed bg-theme-primary/5 rounded-b-xl theme-body">
                      {faq.answer}
                    </div>
                  </AccordionContent>
                  {index < faqs.length - 1 && (
                    <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-theme-primary/20" />
                  )}
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>

        {/* Bottom Note & CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-center mt-16 flex flex-col items-center justify-center px-4 sm:px-0"
        >
          <h3 className="text-xl sm:text-2xl font-extrabold text-theme-on-light mb-4 theme-heading">
            Still have questions? We're here to help.
          </h3>

          <ShimmerButton
            onClick={openContactDialog}
            className="inline-flex items-center gap-2 text-base sm:text-lg md:text-xl px-6 sm:px-8 py-3 sm:py-4 theme-body"
            background="var(--primary-green)"
          >
            <span className="whitespace-pre-wrap text-center font-semibold leading-none tracking-tight text-theme-on-dark">
              Schedule a Free Consultation
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 inline-block ml-2 transition-transform duration-200 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </ShimmerButton>
          <p className="text-theme-on-light/80 text-base sm:text-lg font-semibold mt-4 theme-body">
            Our team of experts are ready to address all your concerns.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function VideoEmbed({ id }) {
  return (
    <div className="flex justify-center">
      <div className="relative w-full md:w-[55%] pt-[56.25%] md:pt-[30.9375%] overflow-hidden rounded-lg shadow-lg">
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube.com/embed/${id}`}
          title="Netram Eye Foundation Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}

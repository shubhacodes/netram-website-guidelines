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
      const index = value.split('-')[1];
      const element = accordionRefs.current[index];
      if (element) {
        setTimeout(() => {
          const elementRect = element.getBoundingClientRect();
          const absoluteElementTop = elementRect.top + window.pageYOffset;
          const middle = absoluteElementTop - (window.innerHeight / 4);
          window.scrollTo({
            top: middle,
            behavior: 'smooth'
          });
        }, 100); // Small delay to ensure animation starts
      }
    }
  };

  /** ------------------------------------------------------------------
   *  FAQ CONTENT – cataract-focused answers (drawn from cataract.md)
   * ------------------------------------------------------------------ */
  const faqs = [
    {
      question: "What is cataract surgery?",
      answer: (
        <>
          <p className="mb-4">
            A cataract is when the natural lens becomes cloudy, causing blurry or dim vision. Cataract surgery removes this cloudy lens and replaces it with a clear artificial lens (IOL). The procedure typically takes 15–30 minutes under local anesthesia and is stitchless.
          </p>
          <VideoEmbed id="R3SbtnqXGFM" />
        </>
      ),
    },
    {
      question: "What are the types of cataract surgery?",
      answer: (
        <>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>
              <strong>Phacoemulsification (Phaco)</strong> – Ultrasound breaks the lens which is then removed and replaced with an IOL.
            </li>
            <li>
              <strong>Femtosecond Laser-Assisted Cataract Surgery (FLACS)</strong> – Blade-free laser performs precise steps like capsulotomy and lens fragmentation for greater precision and centration.
            </li>
            <li>
              <strong>Micro Incision Cataract Surgery (MICS)</strong> – Our surgeons operate with a sub 2 mm incision, which brings recovery in a few hours.
              
            </li>
          </ul>
          <VideoEmbed id="s7Dn_B70pf8" />
        </>
      ),
    },
    {
      question: "Which lens options can I choose from?",
      answer: (
        <>
          <p className="mb-2">Lens choices depend on your visual needs and lifestyle:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Monofocal</strong> – Clear distance vision; may need glasses for near.</li>
            <li><strong>Multifocal</strong> – Distance and near vision; may have mild halos initially.</li>
            <li><strong>Trifocal</strong> – Near, intermediate, and distance clarity with minimal glare.</li>
            <li><strong>EDOF</strong> – Smooth range from distance to intermediate; great for screens. [Recommended]</li>
            <li><strong>Toric</strong> – Corrects astigmatism; available as mono/multi/EDOF/trifocal.</li>
          </ul>
          <VideoEmbed id="VSThgTnQWSM" />
        </>
      ),
    },
    {
      question: "Is cataract surgery safe? What is recovery like?",
      answer: (
        <>
          <p className="mb-4">
            Modern cataract surgery is highly safe. It's typically painless with topical anesthesia. Most patients see clearer within 24–48 hours, with full healing over a few weeks. Please view the video below for day by day recovery breakdown.
          </p>
          <VideoEmbed id="oV2PS5TBj0k" />
        </>
      ),
    },
    {
      question: "How much does cataract surgery cost in India?",
      answer: (
        <>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Basic (Monofocal):</strong> ₹8,000 – ₹20,000 per eye</li>
            <li><strong>Premium (Multifocal/Toric):</strong> ₹30,000 – ₹1,00,000 per eye</li>
            <li><strong>Laser-Assisted (FLACS):</strong> Additional ₹45,000 per eye</li>
          </ul>
          <p className="mb-4">Your final plan depends on eye health, lifestyle needs, and lens choice.</p>
        </>
      ),
    },
  ];
  

  return (
    <section className="py-16 px-4 bg-[#fefae0]">
      <div className="mx-auto max-w-6xl">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold font-freight text-[#386641] flex flex-col sm:block items-center">
            Common Questions{" "}
            <span className="px-3 mt-2 sm:mt-0 rounded-xl text-[#fefae0] bg-[#386641] inline-block sm:inline">
              About Cataract Surgery
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
                ref={el => accordionRefs.current[index] = el}
              >
                <AccordionItem value={`item-${index}`} className="relative">
                  <AccordionTrigger className="py-8 text-xl font-extrabold text-[#386641] hover:no-underline group transition-all border-b border-[#386641]/10 font-freight text-left sm:text-center px-2 sm:px-0">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="py-8 px-6 sm:px-4 md:px-6 text-[#386641] text-lg leading-relaxed bg-[#386641]/5 rounded-b-xl font-proxima font-medium">
                      {faq.answer}
                    </div>
                  </AccordionContent>
                  {index < faqs.length - 1 && (
                    <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#386641]/20" />
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
          <h3 className="text-xl sm:text-2xl font-extrabold text-[#386641] mb-4 font-freight">
            Still have questions? We're here to help.
          </h3>

          <ShimmerButton
            onClick={openContactDialog}
            className="inline-flex items-center gap-2 text-base sm:text-lg md:text-xl px-6 sm:px-8 py-3 sm:py-4"
          >
            <span className="whitespace-pre-wrap text-center font-semibold leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10">
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
          <p className="text-[#386641]/80 text-base sm:text-lg font-medium mt-4 font-proxima">
            Our team of experts are ready to address all your concerns.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------- */
/* Helper component for responsive video embeds                         */
/* -------------------------------------------------------------------- */
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

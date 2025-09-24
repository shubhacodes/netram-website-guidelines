"use client";

import Script from "next/script";
import { useEffect, useRef } from "react";

export default function GoogleTranslate() {
  const inited = useRef(false);

  if (typeof window !== "undefined" && !window.googleTranslateElementInit) {
    window.googleTranslateElementInit = function googleTranslateElementInit() {
      if (inited.current) return;
      try {
        /* eslint-disable no-new */
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "hi",
            autoDisplay: false,
          },
          "google_translate_element"
        );
        inited.current = true;

        const cookieLang = readLangCookie();
        if (cookieLang && cookieLang !== "en") {
          setTimeout(() => selectGoogleLanguage(cookieLang), 300);
        }
      } catch {
        /* noop */
      }
    };
  }

  useEffect(() => {
    const check = setInterval(() => {
      if (inited.current) { clearInterval(check); return; }
      if (window.google?.translate?.TranslateElement) {
        window.googleTranslateElementInit?.();
        clearInterval(check);
      }
    }, 500);
    return () => clearInterval(check);
  }, []);

  return (
    <>
      <div id="google_translate_element" className="skiptranslate sr-only" aria-hidden="true" />
      <Script
        id="google-translate-script"
        src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />
    </>
  );
}

/* -------- Helpers (named export + global fallback) -------- */

export function selectGoogleLanguage(lang) {
  try {
    const combo = document.querySelector(".goog-te-combo");

    if (lang === "en") {
      clearLangCookie();
      if (combo) {
        combo.value = "";
        combo.dispatchEvent(new Event("change"));
      }
      // Use a longer timeout and force a hard reload
      setTimeout(() => {
        window.location.href = window.location.href.split('#')[0];
      }, 300);
      return true;
    }

    writeLangCookie(lang);
    if (combo) {
      combo.value = lang;
      combo.dispatchEvent(new Event("change"));
      return true;
    }
  } catch {
    /* noop */
  }

  if (lang === "en") clearLangCookie(); else writeLangCookie(lang);
  // Force a clean reload by using href
  window.location.href = window.location.href.split('#')[0];
  return false;
}

// expose safe global fallback
if (typeof window !== "undefined") {
  window.__selectGoogleLanguage = selectGoogleLanguage;
}

function writeLangCookie(lang) {
  const path = `/en/${lang}`;
  const expires = new Date(Date.now() + 365 * 24 * 3600 * 1000).toUTCString();
  const host = location.hostname;
  const bare = host.replace(/^www\./, "");
  const domain = bare.split('.').slice(-2).join('.');  // Get root domain

  // Set for root domain and all subdomains
  document.cookie = `googtrans=${path};expires=${expires};path=/;domain=.${domain}`;
  // Set for current domain
  document.cookie = `googtrans=${path};expires=${expires};path=/;domain=${host}`;
  // Set without domain (for localhost)
  document.cookie = `googtrans=${path};expires=${expires};path=/`;
}

function clearLangCookie() {
  const past = "Thu, 01 Jan 1970 00:00:00 GMT";
  const host = location.hostname;
  const bare = host.replace(/^www\./, "");
  const domain = bare.split('.').slice(-2).join('.');  // Get root domain

  // Clear for root domain and all subdomains
  document.cookie = `googtrans=;expires=${past};path=/;domain=.${domain}`;
  // Clear for current domain
  document.cookie = `googtrans=;expires=${past};path=/;domain=${host}`;
  // Clear without domain (for localhost)
  document.cookie = `googtrans=;expires=${past};path=/`;
}

function readLangCookie() {
  const m = document.cookie.match(/(?:^|; )googtrans=\/[^/]+\/([^;]+)/);
  return m ? decodeURIComponent(m[1]) : "en";
}

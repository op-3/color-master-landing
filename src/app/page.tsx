"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import HowItWorks from "@/components/sections/HowItWorks";
import Download from "@/components/sections/Download";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate elements on scroll
    const sections = gsap.utils.toArray<HTMLElement>(".animate-section");

    sections.forEach((section) => {
      gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={mainRef} className="min-h-screen">
      <Header />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <section className="animate-section">
          <Hero />
        </section>

        <section className="animate-section py-20">
          <Features />
        </section>

        <section className="animate-section py-20 bg-gray-50 dark:bg-gray-900">
          <HowItWorks />
        </section>

        <section className="animate-section py-20 bg-gradient-to-r from-blue-500 to-purple-600">
          <Download />
        </section>
      </div>

      <Footer />

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 p-4 bg-white dark:bg-gray-800 rounded-full 
        shadow-lg hover:shadow-xl transition-all duration-300 z-50"
      >
        <svg
          className="w-6 h-6 text-gray-600 dark:text-gray-300"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  );
}

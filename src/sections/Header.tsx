"use client";

import { useState, useEffect, useRef } from "react";

const SECTIONS = ["home", "projects", "about", "contact"];

export const Header = () => {
  const [activeSection, setActiveSection] = useState("home");
  const sectionIds = useRef(SECTIONS);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      let closest = activeSection;
      let minDist = window.innerHeight;

      for (const id of sectionIds.current) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          const dist = Math.abs(rect.top - window.innerHeight / 3);

          if (dist < minDist && rect.bottom > 0) {
            closest = id;
            minDist = dist;
          }
        }
      }

      setActiveSection(closest);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  return (
    <div className="fixed top-3 w-full z-10 flex justify-center items-center">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        {sectionIds.current.map((id) => (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className={`px-4 py-2 rounded-full transition-colors ${
              activeSection === id ? "bg-white text-gray-900" : "text-white"
            }`}
          >
            {id[0].toUpperCase() + id.slice(1)}
          </button>
        ))}
      </nav>
    </div>
  );
};

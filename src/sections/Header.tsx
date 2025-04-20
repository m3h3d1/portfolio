"use client";

import { useState } from "react";

export const Header = () => {
  const [activeSection, setActiveSection] = useState("home");

  const handleClick = (sectionId: string) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        {["home", "projects", "about", "contact"].map((section) => (
          <button
            key={section}
            className={`nav-item ${
              activeSection === section ? "bg-white text-gray-900" : ""
            }`}
            onClick={() => handleClick(section)}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </button>
        ))}
      </nav>
    </div>
  );
};

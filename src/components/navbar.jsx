import React, { useState, useEffect } from "react";
import K from "../constants/index";
import "../App.css";
import { logo } from "../assets";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState(""); 

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Use IntersectionObserver to track sections in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id); // Set active section ID
          }
        });
      },
      { threshold: 0.2 } 
    );

    // Observe each section
    K.NAVLINKS.forEach((link) => {
      const section = document.getElementById(link.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect(); 
  }, []);

  const handleScrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "scroll" });
      setIsMenuOpen(false); // Close menu after scrolling
    }
  };

  return (
    <div
      className={`w-full ${
        isScrolled ? "fixed top-0 z-50" : "absolute"
      } transition-all`}
    >
      <nav
        className={`menu flex flex-row items-center justify-between text-white ${
          isScrolled
            ? "bg-green-100 shadow-lg"
            : "bg-green-800 bg-opacity-90 backdrop-blur-md"
        } p-2 transition-all duration-300`}
      >
        {/* Brand / Logo */}
        <div className="text-lg font-bold flex-1 md:flex-none flex items-center">
          <img
            src={logo}
            alt="logo"
            className="w-16 h-16 rounded-full border-4 border-green-400 shadow-lg bg-white -mt-1"
            style={{ objectFit: "contain" }}
          />
        </div>

        {/* Navigation Items */}
        <ul
          className="hidden md:flex gap-6 justify-center text-white flex-1"
          role="navigation"
          aria-label="Main navigation"
        >
          {K.NAVLINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`font-semibold transition-all hover:text-red-950  ${
                  activeSection === link.id
                    ? "text-red-950 underline"
                    : "text-white"
                }`}
                onClick={() => handleScrollToSection(link.id)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Toggle Button for Mobile */}
        <button
          className="md:hidden text-white text-lg font-bold flex-none p-2 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <ul
            className="absolute top-10 left-0 w-full bg-white text-[#472710] shadow-md p-4 z-50 flex flex-col items-center gap-4"
            role="navigation"
            aria-label="Mobile navigation"
          >
            {/* Logo */}
            <div className="w-full flex justify-center mb-4">
              <img src={logo} alt="logo" className="w-16 h-16" />
            </div>

            {/* Navigation Links */}
            {K.NAVLINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`font-semibold hover:text-red-950 ${
                    activeSection === link.id ? "text-red-950 underline" : ""
                  }`}
                  onClick={() => handleScrollToSection(link.id)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </div>
  );
};

export default Navbar;

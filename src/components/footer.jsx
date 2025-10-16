import {
  Footer as FlowbiteFooter,
  FooterCopyright,
  FooterDivider,
} from "flowbite-react";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitterX } from "react-icons/bs";
import React from "react";
import { logo } from "../assets";

const Footer = () => {
  return (
    <FlowbiteFooter container className="bg-green-100">
      <div className="w-full max-w-screen-xl mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
          {/* Logo & Description */}
          <div className="flex flex-col items-center md:items-start">
            <img
              src={logo}
              alt="logo"
              className="w-20 h-20 mb-2 rounded-full border-8 border-green-500 shadow-xl bg-green-200"
              style={{ objectFit: "contain" }}
            />
            <span className="text-green-900 font-extrabold text-xl mt-2">
              Mr. Kay Agro Consult
            </span>
            <p className="text-gray-600 mt-2 text-sm max-w-xs">
              Empowering farmers with innovative solutions for a sustainable
              future.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col items-center md:items-start">
            <span className="font-bold text-green-900 mb-2">Quick Links</span>
            <ul className="space-y-1">
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-green-700 transition"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-700 hover:text-green-700 transition"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-700 hover:text-green-700 transition"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-700 hover:text-green-700 transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div className="flex flex-col items-center md:items-start">
            <span className="font-bold text-green-900 mb-2">Resources</span>
            <ul className="space-y-1">
              <li>
                <a
                  href="#services" // FAQ redirects to Services
                  className="text-gray-700 hover:text-green-700 transition"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#about" // Blog redirects to About
                  className="text-gray-700 hover:text-green-700 transition"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#contact" // Careers redirects Contact
                  className="text-gray-700 hover:text-green-700 transition"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#contact" // Privacy Policy redirects to Contact
                  className="text-gray-700 hover:text-green-700 transition"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#contact" // Terms of Service redirects to Contact
                  className="text-gray-700 hover:text-green-700 transition"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="flex flex-col items-center md:items-start">
            <span className="font-bold text-green-900 mb-2">Follow Us</span>
            <div className="flex space-x-4">
              <a
                href="https://web.facebook.com/profile.php?id=61570106694970"
                className="text-green-700 hover:text-blue-600 transition"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsFacebook size={28} />
              </a>
              <a
                href="https://www.instagram.com/mrkayagroconsult/profilecard/?igsh=ejVseGVmejN5b3Js"
                className="text-green-700 hover:text-pink-500 transition"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsInstagram size={28} />
              </a>
              <a
                href="https://www.linkedin.com/company/105736800/admin/dashboard/"
                className="text-green-700 hover:text-blue-800 transition"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsLinkedin size={28} />
              </a>
              <a
                href="https://x.com/"
                className="text-green-700 hover:text-black transition"
                aria-label="X"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsTwitterX size={28} />
              </a>
            </div>
          </div>
        </div>

        <FooterDivider className="my-6" />

        <div className="text-center">
          <FooterCopyright href="https://github.com/bethheal" by="LiT" year={2024} />
        </div>
      </div>
    </FlowbiteFooter>
  );
};

export default Footer;

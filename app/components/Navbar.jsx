import React, { useState, useEffect } from "react";
import { PiChatDotsBold } from "react-icons/pi";
import { RiMenu4Line, RiCloseLine } from "react-icons/ri";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Nav Links Array

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "About", href: "#about" },
    { name: "Resume", href: "#resume" },
    { name: "Contact", href: "#contact" },
  ];

  // Change header background on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-out ${isScrolled ? 'bg-white/30 backdrop-blur-lg shadow-sm' : ""}`}>
      <nav className="flex items-center justify-between max-w-6xl mx-auto w-[90%] py-4">
        {/* Logo */}
        <a href="#" className="text-2xl md:text-3xl font-bold mr-6">
          Parth <span className="text-primary text-3xl">.</span>{" "}
        </a>

        {/* Nav Links */}
        <div className={`hidden min-[825px]:flex items-center gap-4 bg-base shadow-lg opacity-80 px-8 py-3 rounded-full ${isScrolled ? "bg-transparent shadow-none opacity-100" : ""}`}>
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-content text-[15px] font-bold hover:text-content-alter transition-all duration-300 ease-in-out"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop Lets talk button */}
        <a
          href="#"
          className="hidden min-[825px]:flex text-[16px] font-semibold custom-gradient py-3 px-8 text-white rounded-full items-center gap-2 hover:opacity-90 transition-opacity "
        >
          Lets talk <PiChatDotsBold className="text-lg" />
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          aria-label="Toggle Menu"
          className="min-[825px]:hidden p-2 text-gray-700 hover:text-gray-900 transition-colors"
        >
          {/* Close Menu Button */}
          {isMenuOpen ? (
            <div onClick={closeMenu}>
              <RiCloseLine className="text-2xl" />
            </div>
          ) : (
            <div>
              <RiMenu4Line className="text-2xl" />
            </div>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="min-[825px]:hidden fixed w-full top-[80px] z-40">
          <div className="bg-white shadow-lg rounded-2xl mx-4 mt-2 p-6">
            <div className="flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  onClick={closeMenu}
                  href={link.href}
                  className="text-content text-[18px] font-bold hover:text-content-alter py-3 border-b border-gray-100 transition-all duration-300 ease-in-out"
                >
                  {link.name}
                </a>
              ))}
              {/* Mobile Lets talk button */}
              <a
                onClick={closeMenu}
                href="#"
                className="flex text-[16px] font-semibold custom-gradient py-4 px-8 text-white rounded-full items-center justify-center gap-2 mt-4 hover:opacity:90 transition-opacity "
              >
                Lets talk <PiChatDotsBold className="text-lg" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

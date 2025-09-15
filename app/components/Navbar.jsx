import React, { useState, useEffect } from "react";
import { PiChatDotsBold } from "react-icons/pi";
import { RiMenu4Line, RiCloseLine } from "react-icons/ri";
import { AnimatePresence, motion } from "motion/react";

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
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-out ${
        isScrolled ? "bg-white/30 backdrop-blur-lg shadow-sm" : ""
      }`}
    >
      <nav className="flex items-center justify-between max-w-6xl mx-auto w-[90%] py-4">
        {/* Logo */}
        <motion.a
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          href="#"
          className="text-2xl md:text-3xl font-bold mr-6"
        >
          Parth <span className="text-primary text-3xl">.</span>{" "}
        </motion.a>

        {/* Nav Links */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className={`hidden min-[825px]:flex items-center gap-4 bg-base shadow-lg opacity-80 px-8 py-3 rounded-full ${
            isScrolled ? "bg-transparent shadow-none opacity-100" : ""
          }`}
        >
          {navLinks.map((link, index) => (
            <motion.a
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
              key={index}
              href={link.href}
              className="text-content text-[15px] font-bold hover:text-content-alter transition-all duration-300 ease-in-out"
            >
              {link.name}
            </motion.a>
          ))}
        </motion.div>

        {/* Desktop Lets talk button */}
        <motion.a
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          href="#"
          className="hidden min-[825px]:flex text-[16px] font-semibold custom-gradient py-3 px-8 text-white rounded-full items-center gap-2 hover:opacity-90 transition-opacity "
        >
          Lets talk <PiChatDotsBold className="text-lg" />
        </motion.a>

        {/* Mobile Menu Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleMenu}
          aria-label="Toggle Menu"
          className="min-[825px]:hidden p-2 text-gray-700 hover:text-gray-900 transition-colors"
        >
          {/* Close Menu Button */}
          <AnimatePresence mode="wait">
            {isMenuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={closeMenu}
              >
                <RiCloseLine className="text-2xl" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={closeMenu}
              >
                <RiMenu4Line className="text-2xl" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="min-[825px]:hidden fixed w-full top-[80px] z-40"
          >
            <div className="bg-white shadow-lg rounded-2xl mx-4 mt-2 p-6">
              <div className="flex flex-col gap-4">
                {navLinks.map((link, index) => (
                  <motion.a
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    key={index}
                    onClick={closeMenu}
                    href={link.href}
                    className="text-content text-[18px] font-bold hover:text-content-alter py-3 border-b border-gray-100 transition-all duration-300 ease-in-out"
                  >
                    {link.name}
                  </motion.a>
                ))}
                {/* Mobile Lets talk button */}
                <motion.a
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                  onClick={closeMenu}
                  href="#"
                  className="flex text-[16px] font-semibold custom-gradient py-4 px-8 text-white rounded-full items-center justify-center gap-2 mt-4 hover:opacity:90 transition-opacity "
                >
                  Lets talk <PiChatDotsBold className="text-lg" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

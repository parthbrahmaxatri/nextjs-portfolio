import React from "react";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

export const Footer = () => {
  // Social Media Links Array
  const socialIcons = [
    {
      icon: FaLinkedinIn,
      href: "https://www.linkedin.com/in/parth-brahmaxatri/",
    },
    { icon: FaGithub, href: "https://github.com/parthbrahmaxatri" },
    { icon: FaInstagram, href: "https://www.instagram.com/parth_brahmaxatri/" },
  ];
  return (
    <footer className="py-12 px-4 text-center">
      <div className="flex justify-center gap-2 md:gap-6 mb-8">
        {socialIcons.map((social, index) => {
          const IconComponent = social.icon;
          return (
            <a
              href={social.href}
              key={index}
              className="p-4 rounded-2xl border border-outer hover:bg-primary/10 transition-all"
            >
              <IconComponent className="text-xl md:text-2xl text-primary" />
            </a>
          );
        })}
      </div>
      <p className="text-xl md:text-2xl font-semibold text-gradient max-w-3xl mx-auto mb-8">
        Want to know more about me, tell me about your project or just to say
        hello? Drop me a line and I'll get back as soon as possible.
      </p>
      <hr className="border-outer mb-8" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-md text-content">
        <div>
          <p className="font-semibold">Location</p>
          <p>Mumbai, India</p>
        </div>
        <div>
          <p className="font-semibold">Phone</p>
          <p>+91 9408151147</p>
        </div>
        <div>
          <p>Email</p>
          <p className="font-semibold">parthbrahmaxatri007@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};

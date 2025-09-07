import React from "react";
import { PiStarFourFill } from "react-icons/pi";
import { HiDownload } from "react-icons/hi";

export const About = () => {
  return (
    <section className="mt-12 pb-8" id="about">
      {/* Heading */}
      <div className="text-center">
        <p className="text-content font-semibold inline-flex items-center gap-1 border-1 border-outer py-1.5 px-3 rounded-2xl mb-4">
          <PiStarFourFill className="text-lg" />
          About
        </p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gradient mb-8">
          Turning caffeine <br className="md:hidden" /> into clean code
        </h2>
      </div>

      {/* About data */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {/* Card 1 */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center border border-outer">
          <h3 className="text-5xl md:text-6xl font-bold text-gradient mb-2">
            40+
          </h3>
          <p className="text-gray-700 font-medium text-lg">Happy clients</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center border border-outer">
          <h3 className="text-5xl md:text-6xl font-bold text-gradient mb-2">
            3+
          </h3>
          <p className="text-gray-700 font-medium text-lg">
            Years of experience
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center border border-outer">
          <h3 className="text-5xl md:text-6xl font-bold text-gradient mb-2">
            50+
          </h3>
          <p className="text-gray-700 font-medium text-lg">Projects done</p>
        </div>
      </div>

      {/* Content text */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        <div className="lg:col-span-2 space-y-6">
          <p className="text-gray-600 text-lg leading-relaxed">
            I'm not just a developer, I'm the Assistant Regional Manager of code
            quality. My applications run smoother than Kevin's famous chili
            recipe, and my debugging skills are sharper than Dwight's survival
            instincts. I specialize in React, Next.js, and making websites that
            even Michael Scott would call 'World's Best.'
          </p>

          <p className="text-gray-600 text-lg leading-relaxed">
            Every project I tackle gets the full Schrute treatment - intense
            dedication, unwavering focus, and results that would make even
            Angela proud. From frontend magic to backend reliability, I deliver
            digital solutions that are as dependable as Jim showing up to prank
            Dwight every single day.
          </p>

          {/* Download button */}
          <a
            href="/assets/resume.pdf"
            className="custom-gradient py-4 px-8 text-white rounded-full font-semibold flex items-center justify-center gap-2 w-max hover:opacity-90 transition-opacity duration-300"
            download
          >
            Download Resume
            <HiDownload className="text-lg" />{" "}
          </a>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-1 space-y-4">
          <div>
            <p className="text-gray-500 text-sm font-medium mb-1">Name</p>
            <p className="text-gray-800 text-xl font-semibold">
              Parth Brahmaxatri
            </p>
          </div>
          <div>
            <p className="text-gray-500 text-sm font-medium mb-1">Phone</p>
            <p className="text-gray-800 text-xl font-semibold">
              +91 9408151147
            </p>
          </div>
          <div>
            <p className="text-gray-500 text-sm font-medium mb-1">Email</p>
            <p className="text-gray-800 text-xl font-semibold">
              parthbrahmaxatri007@gmail.com
            </p>
          </div>
          <div>
            <p className="text-gray-500 text-sm font-medium mb-1">Location</p>
            <p className="text-gray-800 text-xl font-semibold">Mumbai, India</p>
          </div>
        </div>
      </div>
    </section>
  );
};

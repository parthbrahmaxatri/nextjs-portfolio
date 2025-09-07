import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import { HiOutlineViewGrid, HiDownload } from "react-icons/hi";

export const Hero = () => {
  // Icons array
  const icons = [
    "/assets/icons8-html.svg",
    "/assets/icons8-css.svg",
    "/assets/icons8-sass.svg",
    "/assets/icons8-bootstrap.svg",
    "/assets/icons8-tailwindcss.svg",
    "/assets/icons8-javascript.svg",
    "/assets/icons8-storybook.svg",
    "/assets/icons8-node-js.svg",
    "/assets/icons8-express-js.svg",
    "/assets/icons8-ejs.svg",
    "/assets/icons8-mysql.svg",
    "/assets/icons8-mongodb.svg",
    "/assets/icons8-git.svg",
    "/assets/icons8-aws.svg",
  ];
  return (
    <section>
      <div className="max-w-2xl m-auto flex flex-col items-center justify-center text-center pt-24 md:pt-36 px-4 md:px-0 pb-8 overflow-hidden">
        {/* Profile Image */}
        <div>
          <Image
            src="/assets/profile.png"
            alt="Profile Image"
            className="rounded-full mb-4"
            width={150}
            height={150}
            priority
          />
        </div>

        {/* Name */}
        <h3 className="text-lg md:text-xl font-semibold flex items-center justify-center gap-2">
          I'm Parth Brahmaxatri <span className="inline-block">👋🏻</span>
        </h3>

        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-semibold mt-2 leading-tight">
          Frontend Heavy <br className="md:hidden" /> Full Stack Developer
        </h1>

        {/* Icons Swipe */}
        <div className="relative my-6 md:my-8 w-full mask-r-from-50% mask-l-from-50% overflow-hidden">
          <motion.div
            className="flex gap-4 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 15,
              ease: "linear",
            }}
          >
            {/* Icons Loop */}
            {icons.concat(icons).map((icon, index) => (
              <Image
                src={icon}
                alt="Tech Icon"
                className="md:w-[50px] md:h-[50px]"
                key={index}
                width={40}
                height={40}
              />
            ))}
          </motion.div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <a href="#portfolio" className="custom-gradient w-full md:w-auto py-3 px-8 text-white rounded-full font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity duration-300">
            My Work <HiOutlineViewGrid className="text-lg" />
          </a>
          <a href="#/assets/resume.pdf" download className="w-full md:w-auto py-3 px-8 rounded-full font-semibold border border-content/20 hover:border-content/40 hover:shadow-sm transition-colors duration-300 flex items-center justify-center gap-2">
            My Resume <HiDownload className="text-lg" />
          </a>
        </div>
      </div>
    </section>
  );
};

import React from "react";
import { PiStarFourFill, PiGraduationCapFill } from "react-icons/pi";
import { motion } from "motion/react";

export const Resume = () => {
  // Education array
  const educationData = [
    {
      year: "2018 - 2022",
      title: "B.Tech in Computer Science and Engineering",
      institution: "SRM Institute of Science and Technology",
      description: "",
    },
  ];

  // Work data array
  const workData = [
    {
      year: "2023 - Present",
      title: "Manager",
      company: "Aditya Birla Capital",
      description: "",
    },
    {
      year: "2022 - 2023",
      title: "Graduate Engineer Trainee",
      company: "Aditya Birla Capital",
      description: "",
    },
  ];

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.2 } },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  return (
    <section className="mt-12 pb-8" id="resume">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <p className="text-content font-semibold inline-flex items-center gap-1 border-1 border-outer py-1.5 px-3 rounded-2xl mb-4">
          <PiStarFourFill className="text-lg" />
          Resume
        </p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gradient mb-8">
          Education and practical <br /> experience
        </h2>
      </motion.div>

      {/* Timeline Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 space-y-12">
        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl md:text-2xl font-bold text-content mb-8">
            My education
          </h3>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 custom-gradient opacity-60"></div>
            <div>
              {educationData.map((item, index) => (
                <motion.div
                  className="relative flex items-start space-x-6 pb-8"
                  key={index}
                  variants={item}
                  whileHover={{ x: 10 }}
                >
                  <div className="relative flex-shrink-0">
                    <div className="w-8 h-8 custom-gradient rounded-full flex items-center justify-center">
                      <PiGraduationCapFill className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex item-center space-x-2 mb-2">
                      <span className="text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                        {item.year}
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold text-content">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 mb-2">{item.institution}</p>
                    <p className="text-gray-700 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Work */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl md:text-2xl font-bold text-content mb-8">
            Work Experience
          </h3>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 custom-gradient opacity-60"></div>
            <div>
              {workData.map((item, index) => (
                <motion.div
                  className="relative flex items-start space-x-6 pb-8"
                  key={index}
                  variants={item}
                  whileHover={{ x: 10 }}
                >
                  <div className="relative flex-shrink-0">
                    <div className="w-8 h-8 custom-gradient rounded-full flex items-center justify-center">
                      <PiGraduationCapFill className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex item-center space-x-2 mb-2">
                      <span className="text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                        {item.year}
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold text-content">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 mb-2">{item.company}</p>
                    <p className="text-gray-700 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

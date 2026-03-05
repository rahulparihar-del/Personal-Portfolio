import React from "react";
import { motion } from "framer-motion";

interface GradientTitleProps {
  name: string;
  role: string;
}

const GradientTitle: React.FC<GradientTitleProps> = ({ name, role }) => {
  return (
    <div>
      <motion.p
        className="text-xs sm:text-sm md:text-base font-semibold tracking-[0.2em] uppercase text-[#327280] dark:text-[#5ab4c4] mb-2 sm:mb-3"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        &#9866; Welcome to my portfolio
      </motion.p>
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.15] text-gray-900 dark:text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Hi, I'm{" "}
        <motion.span
          className="bg-gradient-to-r from-[#327280] to-[#1a5c66] bg-clip-text text-transparent"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {name}
        </motion.span>
        <br />
        <motion.span
          className="bg-gradient-to-r from-[#327280] via-[#3a8a8a] to-[#2d6570] bg-clip-text text-transparent whitespace-nowrap"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {role}
        </motion.span>
      </motion.h1>
    </div>
  );
};

export default GradientTitle;

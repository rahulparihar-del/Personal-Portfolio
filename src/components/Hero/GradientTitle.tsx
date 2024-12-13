import React from "react";
import { motion } from "framer-motion";

interface GradientTitleProps {
  name: string;
  role: string;
}

const GradientTitle: React.FC<GradientTitleProps> = ({ name, role }) => {
  return (
    <motion.h1
      className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-black"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      Hi, I'm{" "}
      <motion.span
        style={{ color: "#327280" }}
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {name}
      </motion.span>
      <br />
      <motion.span
        style={{ color: "#327280" }}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        {role}
      </motion.span>
    </motion.h1>
  );
};

export default GradientTitle;

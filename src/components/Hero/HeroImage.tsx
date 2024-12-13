import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaJs, FaGithub } from 'react-icons/fa'; 
import { RiTailwindCssFill } from 'react-icons/ri'; 

interface HeroImageProps {
  src: string;
  alt: string;
}

const HeroImage: React.FC<HeroImageProps> = ({ src, alt }) => {
  return (
    <div className="relative flex justify-center items-center">
      <motion.img
        src={src}
        alt={alt}
        className="rounded-full w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover shadow-xl relative z-10"
        whileHover={{ scale: 1.05 }}
      />

      {/* Display technology icons around the image */}
      <motion.div
        className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Rotating container */}
        <motion.div
          className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center sm:block hidden md:block"
          animate={{ rotate: 360 }}
          transition={{
            duration: 10,  // Slower rotation duration
            repeat: Infinity, // Repeats the rotation indefinitely
            ease: 'linear',
          }}
        >
          {/* Top Icon */}
          <motion.div
            className="text-[#327380] absolute top-[-17%] left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <FaReact size={40} />
          </motion.div>

          {/* Bottom Icon */}
          <motion.div
            className="text-[#327380] absolute bottom-[-17%] left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <FaJs size={40} />
          </motion.div>

          {/* Left Icon */}
          <motion.div
            className="text-[#327380] absolute left-[-0%] top-1/2 transform -translate-y-1/2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <FaGithub size={40} />
          </motion.div>

          {/* Right Icon */}
          <motion.div
            className="text-[#327380] absolute right-[-0%] top-1/2 transform -translate-y-1/2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <RiTailwindCssFill size={40} />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroImage;

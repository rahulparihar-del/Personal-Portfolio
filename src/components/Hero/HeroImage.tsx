import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaReact, FaJs, FaGithub, FaNodeJs, FaDocker } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";

interface HeroImageProps {
  src: string;
  alt: string;
}

const orbitIcons = [
  { Icon: FaReact, color: "#61DAFB", label: "React" },
  { Icon: FaNodeJs, color: "#339933", label: "Node.js" },
  { Icon: FaJs, color: "#F7DF1E", label: "JavaScript" },
  { Icon: SiExpress, color: "#444444", label: "Express" },
  { Icon: RiTailwindCssFill, color: "#06B6D4", label: "Tailwind" },
  { Icon: FaDocker, color: "#2496ED", label: "Docker" },
  { Icon: FaGithub, color: "#181717", label: "GitHub" },
];

const HeroImage: React.FC<HeroImageProps> = ({ src, alt }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative flex flex-col items-center justify-center py-6 sm:py-0"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Decorative dashed ring — hidden on mobile */}
      <motion.div
        className="absolute hidden sm:block w-[310px] h-[310px] md:w-[370px] md:h-[370px] lg:w-[430px] lg:h-[430px] rounded-full border-2 border-dashed border-[#327280]/20 z-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />

      {/* Soft glow — hidden on mobile */}
      <div className="absolute hidden sm:block w-[260px] h-[260px] md:w-[320px] md:h-[320px] lg:w-[380px] lg:h-[380px] rounded-full blur-3xl opacity-15 z-0 bg-[#327280]" />

      {/* Main Image with gradient border */}
      <motion.div
        className="relative z-10 rounded-full p-[3px] bg-gradient-to-br from-[#327280] to-[#1a4a54] shadow-2xl"
        whileHover={{ scale: 1.04 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
      >
        <img
          src={src}
          alt={alt}
          className="rounded-full w-36 h-36 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-[22rem] xl:h-[22rem] object-cover border-4 border-white dark:border-gray-800"
        />
      </motion.div>

      {/* Orbiting tech icons — visible sm and up */}
      <motion.div
        className="absolute inset-0 hidden sm:block"
        animate={isHovered ? { rotate: 0 } : { rotate: 360 }}
        transition={{
          duration: 18,
          repeat: isHovered ? 0 : Infinity,
          ease: "linear",
        }}
      >
        {orbitIcons.map((item, index) => {
          const angle = (360 / orbitIcons.length) * index;
          const rad = (angle * Math.PI) / 180;
          const x = Math.sin(rad);
          const y = -Math.cos(rad);

          return (
            <motion.div
              key={item.label}
              className="absolute"
              style={{
                top: `calc(50% + ${(y * 48).toFixed(2)}%)`,
                left: `calc(50% + ${(x * 48).toFixed(2)}%)`,
                transform: "translate(-50%, -50%)",
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 * index, duration: 0.4 }}
            >
              <motion.div
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-2 sm:p-2.5 md:p-3 flex items-center justify-center cursor-pointer hover:shadow-xl transition-shadow duration-300"
                whileHover={{ scale: 1.25 }}
                animate={isHovered ? { rotate: 0 } : { rotate: -360 }}
                transition={{
                  duration: 18,
                  repeat: isHovered ? 0 : Infinity,
                  ease: "linear",
                }}
              >
                <item.Icon
                  className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
                  style={{ color: item.color }}
                />
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Mobile-only tech strip */}
      <div className="flex sm:hidden justify-center gap-2 mt-5 flex-wrap px-4">
        {orbitIcons.map((item, index) => (
          <motion.div
            key={item.label}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-1.5 flex items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 * index }}
            whileHover={{ scale: 1.15 }}
          >
            <item.Icon className="w-4 h-4" style={{ color: item.color }} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HeroImage;

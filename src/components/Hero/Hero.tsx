import React from "react";
import GradientTitle from "./GradientTitle";
import SocialLinks from "../Projects/SocialLinks";
import HeroImage from "./HeroImage";
import TechStack from "../ui/TechStack";
import { Send } from "lucide-react";
import { MdOutlineFileDownload } from "react-icons/md";
import { motion } from "framer-motion";
import HeroButton from "../ui/HeroButton";
import user from "../../assets/Rahul.jpeg";

const Hero: React.FC = () => {
  return (
    <section
      className="min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-white to-[#e8f4f6] dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 overflow-hidden transition-colors duration-300"
      id="home"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 sm:pt-24 sm:pb-16 md:pt-28 lg:pt-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
          {/* Text content — left side on desktop */}
          <div className="order-2 md:order-1 space-y-5 sm:space-y-6 text-center md:text-left">
            <GradientTitle name="Rahul Parihar" role="Full-Stack Developer" />

            <motion.p
              className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-lg mx-auto md:mx-0"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Passionate about creating elegant solutions to complex problems.
              Specialized in full-stack development with modern technologies
              like React, Node.js, Express.js & Docker.
            </motion.p>

            <motion.div
              className="flex justify-center md:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <SocialLinks />
            </motion.div>

            <TechStack />

            <motion.div
              className="flex flex-col xs:flex-row flex-wrap justify-center md:justify-start gap-3 sm:gap-4 mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <HeroButton href="#contact" variant="primary" icon={Send} target="_self">
                Let's Talk!
              </HeroButton>
              <HeroButton
                href="https://drive.google.com/uc?export=download&id=1iw8dIJGjLPLInKawrU-RTkOQhfnKqEit"
                variant="secondary"
                icon={MdOutlineFileDownload}
                download
                target="_blank"
              >
                Get Resume
              </HeroButton>
            </motion.div>
          </div>

          {/* Image — right side on desktop */}
          <motion.div
            className="order-1 md:order-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <HeroImage src={user} alt="Rahul Parihar" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

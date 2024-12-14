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
    <div className="min-h-[90vh] flex items-center bg-gradient-to-br from-white to-white text-white">
      <div className="container mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <HeroImage src={user} alt="Coding workspace" />
        </div>
        <div className="space-y-8">
          <GradientTitle name="Rahul Parihar" role="Frontend Developer" />
          <p className="text-xl text-black">
            Passionate about creating elegant solutions to complex problems.
            Specialized in full-stack development with modern technologies.
          </p>
          <SocialLinks />
          <TechStack />

          <motion.div
            className="flex flex-wrap gap-4 mt-8 text-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
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
      </div>
    </div>
  );
};

export default Hero;

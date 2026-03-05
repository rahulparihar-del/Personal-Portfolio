import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

const Contact: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gray-50 dark:bg-gray-950 transition-colors duration-300" id="contact">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-[#327280] dark:text-[#5ab4c4] mb-2">
            &#9866; Reach out
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white">
            Get in Touch
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-md mx-auto">
            Have a question or want to work together?
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 max-w-4xl mx-auto">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';

const contactDetails = [
  {
    icon: MapPin,
    title: 'Location',
    details: 'Pune, Maharashtra, India',
    color: '#327280',
  },
  {
    icon: Phone,
    title: 'Phone',
    details: '+91 9929583637',
    color: '#339933',
  },
  {
    icon: Mail,
    title: 'Email',
    details: 'rahulpariharmalii@gmail.com',
    color: '#2496ED',
  },
];

const ContactInfo: React.FC = () => {
  return (
    <div className="space-y-4 sm:space-y-5">
      {contactDetails.map((item, index) => (
        <motion.div
          key={index}
          className="flex items-start gap-4 p-4 sm:p-5 rounded-xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:border-[#327280]/20 dark:hover:border-[#5ab4c4]/30 hover:shadow-md transition-all duration-300"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.4 }}
          whileHover={{ y: -2 }}
        >
          <div
            className="p-2.5 rounded-lg flex-shrink-0"
            style={{ backgroundColor: `${item.color}15` }}
          >
            <item.icon className="w-5 h-5" style={{ color: item.color }} />
          </div>
          <div>
            <h3 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white">{item.title}</h3>
            <p className="mt-0.5 text-sm text-gray-600 dark:text-gray-400">{item.details}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ContactInfo;
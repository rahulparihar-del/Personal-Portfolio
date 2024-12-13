import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

// Example logo URL (replace with actual logo URLs or imports)
const logos = {
  'NonStop io Technologies Pvt. Ltd.': 'https://media.licdn.com/dms/image/v2/C4E0BAQEDwZFjerwtyg/company-logo_200_200/company-logo_200_200/0/1630634779563/nonstop_io_technologies_logo?e=1742428800&v=beta&t=DrDb7dTw_esQLF10xuWraF0ORHGW8yCdsSEBvCw9sP4', // Replace with actual logo URL
};

const experiences = [
  {
    title: 'Front-End Developer Intern',
    company: 'NonStop io Technologies Pvt. Ltd.',
    logo: logos['NonStop io Technologies Pvt. Ltd.'], // Add the logo here
    location: 'Pune, Maharashtra',
    period: 'October 2023 - October 2024',
    description: 'Built dynamic UIs with React.js, optimized code using state management, and delivered high-quality projects on time.',
  },
];

const Experience = () => {
  return (
    <section className="py-20 bg-gray-50" id="experience">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Experience
        </motion.h2>
        <div className="relative flex justify-center">
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="w-full md:w-[600px] p-4 md:px-8 mx-auto">
                <motion.div
                  className="bg-white p-6 rounded-lg shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{exp.title}</h3>
                      <h4 className="text-lg text-[#327380] font-semibold">{exp.company}</h4>
                    </div>
                    {exp.logo && (
                      <img src={exp.logo} alt={`${exp.company} Logo`} className="h-12 w-12" />
                    )}
                  </div>
                  <div className="flex items-center text-gray-600 mt-2 space-x-2">
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center text-gray-600 mt-1 space-x-2">
                    <MapPin size={16} />
                    <span>{exp.location}</span>
                  </div>
                  <p className="mt-4 text-gray-600">{exp.description}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

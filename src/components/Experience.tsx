import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

const logos = {
  'NonStop io Technologies Pvt. Ltd.': 'https://media.instahyre.com/images/profile/base/employer/26707/05cceacc99/1624542674019.webp',
  'Lockated': 'https://lockated.com/assets/login-logo-c04c2578398851fb67c77101fccea9c9a835bed7c4dec0238f7a349f40e57a8b.png',
  'Savvyo': 'https://savvyo.in/favicon.ico',
};

const experiences = [
  {
    title: 'Backend Developer',
    company: 'Savvyo',
    logo: logos['Savvyo'],
    location: 'Pune, Maharashtra, India · Hybrid',
    period: 'February 2026 - Present',
    description: 'Currently working as a backend developer, building robust and scalable server-side solutions and APIs for seamless application performance.',
  },
  {
    title: 'Frontend Developer',
    company: 'Lockated',
    logo: logos['Lockated'],
    location: 'Pune, Maharashtra, India · Hybrid',
    period: 'May 2025 - January 2026',
    description: 'Worked on impactful client-side projects, focusing on building seamless, responsive, and visually engaging web applications with precision.',
  },
  {
    title: 'Front-End Developer Intern',
    company: 'NonStop io Technologies Pvt. Ltd.',
    logo: logos['NonStop io Technologies Pvt. Ltd.'],
    location: 'Pune, Maharashtra',
    period: 'October 2023 - October 2024',
    description: 'Built dynamic UIs with React.js, optimized code using state management, and delivered high-quality projects on time.',
  },
];

const Experience = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-gray-900 transition-colors duration-300" id="experience">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-[#327280] dark:text-[#5ab4c4] mb-2">
            &#9866; My journey
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white">
            Experience
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl p-5 sm:p-6 hover:shadow-lg hover:border-[#327280]/20 dark:hover:border-[#5ab4c4]/30 transition-all duration-300 flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -3 }}
            >
              <div className="flex justify-between items-start gap-3">
                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white leading-tight">{exp.title}</h3>
                  <h4 className="text-sm sm:text-base text-[#327280] dark:text-[#5ab4c4] font-semibold mt-1">{exp.company}</h4>
                </div>
                {exp.logo && (
                  <img
                    src={exp.logo}
                    alt={`${exp.company} Logo`}
                    className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl object-contain bg-white dark:bg-gray-700 border border-gray-100 dark:border-gray-600 p-1 flex-shrink-0"
                  />
                )}
              </div>

              <div className="flex flex-col gap-1.5 mt-3 text-gray-500 dark:text-gray-400 text-xs sm:text-sm">
                <div className="flex items-center gap-1.5">
                  <Calendar size={13} />
                  <span>{exp.period}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin size={13} />
                  <span>{exp.location}</span>
                </div>
              </div>

              <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed flex-1">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

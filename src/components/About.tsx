import { motion } from "framer-motion";
import { Code2, Briefcase, GraduationCap, Server, Container } from "lucide-react";

const highlights = [
  { icon: Code2, color: "#327280", label: "Full-Stack Development" },
  { icon: Server, color: "#339933", label: "Node.js & Express.js" },
  { icon: Container, color: "#2496ED", label: "Docker & DevOps" },
  { icon: Briefcase, color: "#327280", label: "Enthusiastic Learner" },
  { icon: GraduationCap, color: "#327280", label: "React.js Specialist" },
];

const About = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-gray-900 transition-colors duration-300" id="about">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-[#327280] dark:text-[#5ab4c4] mb-2">
            &#9866; Get to know me
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white">
            About Me
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            className="space-y-6 order-2 md:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              I am a Full-Stack Developer passionate about building responsive
              and user-friendly web applications. With expertise in React.js,
              Node.js, Express.js, and modern tools like Docker & Tailwind CSS,
              I craft scalable and maintainable solutions. Currently pursuing
              my MCA to further enhance my skills.
            </p>

            <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  className="flex items-center gap-3 p-3 sm:p-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:border-[#327280]/20 dark:hover:border-[#5ab4c4]/30 hover:shadow-md transition-all duration-300"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  whileHover={{ y: -2 }}
                >
                  <div
                    className="p-2 rounded-lg flex-shrink-0"
                    style={{ backgroundColor: `${item.color}15` }}
                  >
                    <item.icon className="w-5 h-5" style={{ color: item.color }} />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="relative order-1 md:order-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-[#327280]/10 to-[#e8f4f6]/50 rounded-2xl blur-2xl" />
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80"
              alt="Developer workspace"
              className="relative rounded-2xl shadow-xl w-full h-64 sm:h-80 md:h-96 object-cover"
            />
            {/* Decorative accent */}
            <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-[#327280] to-[#1a5c66] rounded-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

import { motion } from 'framer-motion';
import { Code2, Palette, Cpu } from 'lucide-react';

const technologies = [
  { icon: Code2, label: 'React.js' },
  { icon: Palette, label: 'Tailwind' },
  { icon: Cpu, label: 'Node.js' },
];

export default function TechStack() {
  return (
    <motion.div 
      className="flex gap-6 mt-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.6 }}
    >
      {technologies.map((tech) => {
        const Icon = tech.icon;
        return (
          <motion.div
            key={tech.label}
            className="flex items-center gap-2 text-black cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <Icon className="w-5 h-5" />
            <span className="text-sm font-medium">{tech.label}</span>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
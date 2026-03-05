import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { Project } from './types';

interface ProjectCardProps extends Project {
  index: number;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  imageUrl,
  githubUrl,
  liveUrl,
  index,
  onClick,
}) => {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl overflow-hidden cursor-pointer border border-gray-100 dark:border-gray-700 transition-shadow duration-300"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      onClick={onClick}
      whileHover={{ y: -6 }}
    >
      <div className="relative group">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-44 sm:h-48 md:h-52 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 w-full flex justify-end space-x-3">
            <motion.a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/90 rounded-full text-gray-900 hover:bg-white"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Github size={18} />
            </motion.a>
            <motion.a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/90 rounded-full text-gray-900 hover:bg-white"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={18} />
            </motion.a>
          </div>
        </div>
      </div>
      <div className="p-4 sm:p-5 md:p-6">
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
        <p className="mt-2 text-sm sm:text-base text-gray-600 dark:text-gray-400 line-clamp-2">{description}</p>
        <div className="mt-3 sm:mt-4 flex flex-wrap gap-1.5 sm:gap-2">
          {technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 bg-[#327280]/10 text-[#327280] dark:text-[#5ab4c4] rounded-full text-xs sm:text-sm font-medium"
            >
              {tech}
            </span>
          ))}
          {technologies.length > 3 && (
            <span className="px-2.5 py-1 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded-full text-xs sm:text-sm font-medium">
              +{technologies.length - 3}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
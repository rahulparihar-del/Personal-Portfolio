import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, Calendar, Tag } from 'lucide-react';
import { Project } from './types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          onClick={e => e.stopPropagation()}
        >
          <div className="relative">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-t-2xl"
            />
            <button
              onClick={onClose}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 bg-white/90 dark:bg-gray-700/90 rounded-full hover:bg-white dark:hover:bg-gray-600 transition-colors shadow-md"
            >
              <X size={18} />
            </button>
          </div>

          <div className="p-4 sm:p-6 md:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">{project.title}</h2>
            
            <div className="mt-3 flex items-center space-x-4">
              <Calendar size={16} className="text-gray-400 dark:text-gray-500" />
              <span className="text-sm text-gray-500 dark:text-gray-400">2024</span>
            </div>

            <p className="mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              {project.description}
            </p>

            <div className="mt-6">
              <h3 className="text-base sm:text-lg font-semibold flex items-center gap-2 text-gray-900 dark:text-white">
                <Tag size={16} />
                Technologies Used
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-[#327280]/10 text-[#327280] dark:text-[#5ab4c4] rounded-full text-xs sm:text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 sm:mt-8 flex flex-col xs:flex-row gap-3 sm:gap-4">
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-2.5 bg-gray-900 text-white rounded-xl hover:bg-gray-800 text-sm sm:text-base font-medium"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Github size={18} className="mr-2" />
                View Source
              </motion.a>
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-2.5 bg-gradient-to-r from-[#327280] to-[#1a5c66] text-white rounded-xl text-sm sm:text-base font-medium"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <ExternalLink size={18} className="mr-2" />
                Live Demo
              </motion.a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;
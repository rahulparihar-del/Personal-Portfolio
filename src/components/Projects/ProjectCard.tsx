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
      className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      onClick={onClick}
      whileHover={{ y: -5 }}
    >
      <div className="relative group">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
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
              <Github size={20} />
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
              <ExternalLink size={20} />
            </motion.a>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <p className="mt-2 text-gray-600 line-clamp-2">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-[#327380] text-white rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
          {technologies.length > 3 && (
            <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
              +{technologies.length - 3}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { Project } from './types';
import projectOne from '../../assets/projectOne.png';
import projectTwo from '../../assets/projectTwo.png';
import projectThree from '../../assets/projectThree.png';



const projects: Project[] = [
  {
    title: 'E-Book Store Platform',
    description: 'The Codebook eStore is a project built using React and Tailwind CSS. It features a login and registration system using JSON for authentication, and JSON Server is used to simulate backend data for the app. The app leverages Context API for managing global state across components. This project allows users to interact with the eStore, register, log in, and browse items, making it a great example of building a full-stack application with React.',
    technologies: ['React JS', 'Tailwind CSS', 'JSON-AUTH', 'JSON', 'Context-API', 'React-Router'],
    imageUrl: projectOne,
    githubUrl: 'https://github.com/rahulparihar-del/codebook',
    liveUrl: 'https://codebook-rr.netlify.app/',
  },
  {
    title: 'Movievers - Movie Browsing Website',
    description: 'The project is a dynamic movie browsing website developed using React.js, Tailwind CSS, and Redux Toolkit. It integrates the TMDB API to fetch and display movie data, including detailed pages for individual movies. The site is designed to offer a responsive and visually appealing user interface, ensuring a seamless user experience across devices.',
    technologies: ['React JS', 'Tailwind CSS', 'Redux Toolkit', 'TMDB API', 'React-Router'],
    imageUrl: projectTwo,
    githubUrl: 'https://github.com/rahulparihar-del/movievers',
    liveUrl: 'https://movievers-rr.netlify.app/',
  },
  {
    title: 'TaskMate - Task Management App',
    description: 'The Todo Mate project is a task management app developed using React and Tailwind CSS. It allows users to create, edit, and track tasks with deadline management, helping to stay organized and efficient. The app provides a clean, intuitive interface for managing tasks and ensures a smooth user experience for effective task tracking and management.',
    technologies: ['React JS', 'Tailwind CSS', 'React-Router'],
    imageUrl: projectThree,
    githubUrl: 'https://github.com/rahulparihar-del/taskmate',
    liveUrl: 'https://taskmate-ul.netlify.app/',
  },
];

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="py-20 bg-gray-50" id="projects">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold">Featured Projects</h2>
          <p className="mt-4 text-gray-600">
            Here are some of my recent works that showcase my skills and experience
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index} 
              {...project} 
              index={index}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
};

export default Projects;
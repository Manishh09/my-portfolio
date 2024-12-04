import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Project } from './Projects';

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
        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.5, opacity: 0 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
          onClick={e => e.stopPropagation()}
        >
          <div className="relative">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
            >
              <X size={20} />
            </button>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover rounded-t-xl"
            />
          </div>
          
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
            <p className="text-gray-600 mb-6">{project.description}</p>
            
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-2">Key Features</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-2">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex space-x-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                View Code
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Live Demo
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;
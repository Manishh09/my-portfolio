// Desc: Component to display featured projects with modal for more details and links. 
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import ProjectModal from './ProjectModal';

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  live: string;
  features: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: '3D Model Simulation',
    description: 'Interactive 3D simulation platform for machine visualization and analysis',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800',
    technologies: ['Angular', 'Three.js', 'Golang', 'TypeScript'],
    github: 'https://github.com',
    live: 'https://example.com',
    features: [
      '3D model rendering with interactive controls',
      'Real-time simulation of machine operations',
      'Performance optimization for complex 3D scenes',
      
    ]
  },
  {
    id: 2,
    title: 'Data on Cloud',
    description: 'Cloud migration platform for transforming on-premises data infrastructure',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
    technologies: ['Angular','.NET Core', 'MsSQL'],
    github: 'https://github.com',
    live: 'https://example.com',
    features: [
      'Automated data migration workflows',
      'Real-time progress monitoring',
      'Data validation and verification',
      'Cost estimation and optimization'
    ]
  },
  {
    id: 3,
    title: 'MME',
    description: 'Mainframe assessment and analysis platform for enterprise applications',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800',
    technologies: ['Angular', '.NET Core', 'MsSQL'],
    github: 'https://github.com',
    live: 'https://example.com',
    features: [
      'Automated mainframe code analysis',
      'Migration recommendations and strategies',
      'Performance metrics dashboard'
    ]
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg cursor-pointer"
              whileHover={{ y: -5 }}
              onClick={() => setSelectedProject(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-gray-900"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github size={20} className="mr-2" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-gray-900"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={20} className="mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
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
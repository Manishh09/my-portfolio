import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    id: 1,
    role: 'Senior Engineer',
    company: 'BGSW',
    duration: 'Sept 2022 - Present',
    location: 'India',
    description: 'Working as an Angular Developer, building scalable web applications and leading development initiatives.',
  },
  {
    id: 2,
    role: 'Application Development Senior Analyst',
    company: 'Accenture',
    duration: 'Dec 2021 – Aug 2022',
    location: 'India',
    description: 'Led Angular development teams and implemented best practices for large-scale applications.',
  },
  {
    id: 3,
    role: 'Application Development Analyst',
    company: 'Accenture',
    duration: 'Dec 2020 – Dec 2021',
    location: 'India',
    description: 'Developed and maintained Angular applications with focus on performance and user experience.',
  },
  {
    id: 4,
    role: 'Application Development Associate',
    company: 'Accenture',
    duration: 'Jan 2019 – Dec 2020',
    location: 'India',
    description: 'Started career as an Angular Developer, working on various client projects.',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Professional Experience
        </motion.h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200" />
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-1/2 pr-8 pl-4">
                  <motion.div
                    className={`bg-white p-6 rounded-lg shadow-lg ${
                      index % 2 === 0 ? 'text-right' : 'text-left'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h3 className="text-xl font-bold text-gray-900">{exp.role}</h3>
                    <h4 className="text-lg font-semibold text-blue-600 mb-2">
                      {exp.company}
                    </h4>
                    <div className={`flex items-center text-gray-600 text-sm mb-2 space-x-4 ${
                      index % 2 === 0 ? 'justify-end' : 'justify-start'
                    }`}>
                      <span className="flex items-center">
                        <Calendar size={16} className="mr-1" />
                        {exp.duration}
                      </span>
                      <span className="flex items-center">
                        <MapPin size={16} className="mr-1" />
                        {exp.location}
                      </span>
                    </div>
                    <p className="text-gray-600">{exp.description}</p>
                  </motion.div>
                </div>
                <motion.div
                  className="w-4 h-4 bg-blue-600 rounded-full absolute left-1/2 transform -translate-x-1/2 z-10"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                />
                <div className="w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
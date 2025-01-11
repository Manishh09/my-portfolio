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
    <section id="experience" className="py-12 sm:py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.h2
          className="text-2xl sm:text-3xl font-bold  mb-8 sm:mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Professional Experience
        </motion.h2>
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200" />
          
          <div className="space-y-8 md:space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                className={`flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-center`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-full md:w-1/2 px-0 md:px-8">
                  <motion.div
                    className={`bg-white p-4 sm:p-6 rounded-lg shadow-lg ${
                      index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">{exp.role}</h3>
                    <h4 className="text-base sm:text-lg font-semibold text-blue-600 mb-2">
                      {exp.company}
                    </h4>
                    <div className={`flex items-center text-gray-600 text-xs sm:text-sm mb-2 space-x-4 ${
                      index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
                    }`}>
                      <span className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        {exp.duration}
                      </span>
                      <span className="flex items-center">
                        <MapPin size={14} className="mr-1" />
                        {exp.location}
                      </span>
                    </div>
                    <p className="text-sm sm:text-base text-gray-600">{exp.description}</p>
                  </motion.div>
                </div>
                <motion.div
                  className={`hidden md:block w-4 h-4 bg-blue-600 rounded-full absolute ${
                    index % 2 === 0 ? 'right-1/2' : 'left-1/2'
                  } transform -translate-x-1/2 z-10`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                />
                <div className="hidden md:block w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
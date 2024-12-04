import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Palette, Brain } from 'lucide-react';

const skills = [
  {
    icon: <Code className="w-8 h-8 text-blue-600" />,
    title: 'Frontend Development',
    description: 'Angular, TypeScript, RxJS, Material UI',
  },
  {
    icon: <Server className="w-8 h-8 text-blue-600" />,
    title: 'Backend Integration',
    description: 'RESTful APIs, GraphQL, WebSockets',
  },
  {
    icon: <Palette className="w-8 h-8 text-blue-600" />,
    title: 'UI/UX Design',
    description: 'Responsive Design, CSS3, SCSS',
  },
  {
    icon: <Brain className="w-8 h-8 text-blue-600" />,
    title: 'Problem Solving',
    description: 'Algorithms, Performance Optimization',
  },
];

const education = [
  {
    degree: 'B.Tech',
    institution: 'RGUKT, Basar',
    year: '2015-2018',
  },
  {
    degree: 'PUC',
    institution: 'RGUKT, Basar',
    year: '2013-2014',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
            <p className="text-gray-600 mb-6">
              I'm a dedicated Angular Developer with over 4 years of experience in building
              enterprise-level web applications. I specialize in creating efficient, scalable,
              and maintainable solutions using modern Angular practices and patterns.
            </p>
            <p className="text-gray-600 mb-6">
              My journey in software development began at Accenture, where I've grown from an
              associate to a senior role, consistently delivering high-quality solutions and
              mentoring team members.
            </p>

            <div className="mb-8">
              <h4 className="text-xl font-semibold mb-4">Education</h4>
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 * index }}
                >
                  <h5 className="text-lg font-medium">{edu.degree}</h5>
                  <p className="text-gray-600">{edu.institution}</p>
                  <p className="text-gray-500 text-sm">{edu.year}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="flex flex-wrap gap-4"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {['50+ Projects Delivered', '4+ Years Experience'].map((text, index) => (
                <motion.div
                  key={index}
                  className="bg-blue-50 px-4 py-2 rounded-full"
                  variants={item}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-blue-600 font-medium">{text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.img
              src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&q=80&w=800"
              alt="Working at desk"
              className="rounded-lg shadow-xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>
        
        <motion.h3
          className="text-2xl font-semibold text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Technical Skills
        </motion.h3>
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow"
              variants={item}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <motion.div
                className="mb-4"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 * index }}
              >
                {skill.icon}
              </motion.div>
              <h4 className="text-xl font-semibold mb-2">{skill.title}</h4>
              <p className="text-gray-600">{skill.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
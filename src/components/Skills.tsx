import { motion } from "framer-motion";
import {
  Code,
  Server,
  Palette,
  FlaskConical,
  Workflow,
  Brain,
} from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const skills = [
  {
    icon: <Code className="w-8 h-8 text-blue-600" />,
    title: "Frontend Development",
    description: "Angular, TypeScript, RxJS, Angular Material",
  },
  {
    icon: <Server className="w-8 h-8 text-blue-600" />,
    title: "Backend Integration",
    description: "RESTful APIs, Golang, .NET Core WebAPI",
  },
  {
    icon: <Palette className="w-8 h-8 text-blue-600" />,
    title: "UI/UX Design",
    description: "Responsive Design, CSS3, SCSS",
  },
  {
    icon: <FlaskConical className="w-8 h-8 text-blue-600" />,
    title: "Testing",
    description: "Jasmine, Karma",
  },
  {
    icon: <Workflow className="w-8 h-8 text-blue-600" />,
    title: "Automation",
    description: "Cypress",
  },
  {
    icon: <Brain className="w-8 h-8 text-blue-600" />,
    title: "Problem Solving",
    description: "Performance Optimization",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="mx-auto py-20  bg-white">
      <div className="mx-auto px-14">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Technical Skills
        </motion.h2>
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
export default Skills;

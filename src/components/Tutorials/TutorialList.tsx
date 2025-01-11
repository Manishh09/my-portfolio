import { motion, AnimatePresence } from "framer-motion";
import { FaGithub } from "react-icons/fa";

import { SiAngular, SiGo, SiCypress, SiReactivex } from "react-icons/si";

// Tutorials data
const tutorials = [
  {
    title: "Getting Started with Angular 17",
    description: "Learn the latest features of Angular 17.",
    features: [
      "Learn the latest Angular features.",
      "Build components, services, and directives.",
      "Understand modular architecture.",
    ],
    repo: "https://github.com/Manishh09/learning-angular17",
    icon: <SiAngular className="text-red-600 text-3xl" />,
  },
  {
    title: "Golang Fundamentals",
    description: "Understand the basics of Go programming.",
    features: [
      "Explore Go’s syntax and data types.",
      "Write efficient concurrent programs.",
      "Learn error handling and testing.",
    ],
    repo: "https://github.com/Manishh09/learning-golang",
    icon: <SiGo className="text-cyan-500 text-3xl w-10 h-10" />,
  },
  {
    title: "Getting Started with RxJS in Angular",
    description: "Master RxJS for managing async data in Angular apps.",
    features: [
      "Learn Observables and Subjects.",
      "Use operators for data streams.",
      "Manage async data flows in Angular.",
    ],
    repo: "https://github.com/Manishh09/learning-rxjs",
    icon: <SiReactivex className="text-fuchsia-600 text-3xl" />,
  },
  {
    title: "Getting Started with Modern Angular Development",
    description: "Master Signal based architecture in Angular apps.",
    features: [
      "Signals Angular.",
      "Effects",
      "Store",
      "Computed",
      "toSignal",
      "toObservable",
      "linkedSignal API",
      "resource API"
      
    ],
    repo: "https://github.com/Manishh09/learning-angular-signals",
    icon: <SiAngular className="text-purple-500 text-3xl" />,

  },
  {
    title: "Getting Started with Cypress",
    description: "Learn how to write end-to-end tests using Cypress.",
    features: [
      "Write end-to-end tests.",
      "Debug tests effectively.",
      "Integrate with CI/CD pipelines.",
    ],
    repo: "https://github.com/your-profile/cypress-getting-started",
    icon: <SiCypress className="text-teal-500 text-3xl" />,
  },
];

// List animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Delay for child animations
    },
  },
};

//Card animations
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// interface Tutorial {
//   title: string;
//   description: string;
//   features: string[];
//   repo: string;
//   icon: JSX.Element;
// }

const TutorialList = () => {
  // const [selectedTutorial, setSelectedTutorial] = useState<Tutorial | null>(null);

  // const setSelectedProject = (project: SetStateAction<Tutorial | null>) => {
  //   setSelectedTutorial(project);
  // };

  return (
    <AnimatePresence>
      <section id="tutorials" className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto p-2">
          <motion.h2
            className="text-3xl font-bold  mb-12"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Learn with Me
          </motion.h2>

          <motion.div
            className="grid gap-8 md:grid-cols-2"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {tutorials.map((tutorial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
                whileHover={{ y: -5 }}

                // onClick={() => setSelectedProject(tutorial)}
              >
                <div className="flex items-center gap-4 p-6">
                  <div className="flex-shrink-0">{tutorial.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{tutorial.title}</h3>
                    <p className="text-gray-600">{tutorial.description}</p>
                  </div>
                </div>
                {/* <div className="flex flex-wrap gap-2 mb-4 flex-col">
                  {tutorial.features.map((feature, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {feature}
                    </span>
                    
                  ))}
                </div> */}
                <a
                  href={tutorial.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 mb-4 ml-8 flex items-center gap-4 text-blue-500 font-medium  "
                >
                  <FaGithub className="text-lg text-gray-500"  />
                  View on GitHub
                </a>
              </motion.div>
            ))}
          </motion.div>
          {/* Modal */}
          {/* <TutorialCard 
        tutorial={selectedTutorial} 
        onClose={() => setSelectedProject(null)}
      /> */}
        </div>
      </section>
    </AnimatePresence>
  );
};

export default TutorialList;

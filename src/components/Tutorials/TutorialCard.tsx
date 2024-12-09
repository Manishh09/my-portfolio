import { AnimatePresence, motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

interface Tutorial {
  title: string;

  description: string;

  features: string[];

  repo: string;

  icon: JSX.Element;
}

interface TutorialCardProps {
  tutorial: Tutorial | null;

  onClose?: () => void;
}

const TutorialCard: React.FC<TutorialCardProps> = ({ tutorial, onClose }) => {
  if (!tutorial) return null;
  return (
    <AnimatePresence>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {tutorial ? (
        <>
          <h3 className="text-xl font-semibold">{tutorial.title}</h3>
          <p className="mt-2 text-gray-600">{tutorial.description}</p>
          <a
            href={tutorial.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center gap-2 text-blue-500 font-medium hover:underline"
          >
            <FaGithub className="text-lg" />
            View on GitHub
          </a>
        </>
      ) : (
        <p className="text-red-500">Tutorial data is not available.</p>
      )}
    </motion.div>
    </AnimatePresence>
  );
};

export default TutorialCard;

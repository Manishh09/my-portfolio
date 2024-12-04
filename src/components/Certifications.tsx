// Desc: Certifications component to display the certifications with icons and providers.
import { motion } from 'framer-motion';
import { SiAngular } from "react-icons/si";
import { FaGolang } from "react-icons/fa6";
import { VscAzure } from 'react-icons/vsc';



const certifications = [
    {
        name: 'Angular (Intermediate)',
        provider: 'Hackerrank',
        icon: <SiAngular className="text-fuchsia-600" />,
    },
    {
        name: 'Golang (Basic)',
        provider: 'Hackerrank',
        icon: <FaGolang className="text-cyan-500" />,
    },
    {
        name: 'AZ-900: Microsoft Azure Fundamentals',
        provider: 'Microsoft',
        icon: <VscAzure className="text-blue-600" />,
    },
    {
        name: 'SC-900: Microsoft Security Compliance and Identity Fundamentals',
        provider: 'Microsoft',
        icon: <VscAzure className="text-blue-600" />,
    },
];

const Certifications = () => {
    return (
        <div className="container mx-auto p-4">
            <h2 className="text-3xl font-bold text-center mb-8">Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {certifications.map((cert, index) => (
                    <motion.div
                        key={index}
                        className="flex items-center p-4 bg-white shadow-lg rounded-lg flex-col"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <div className="text-4xl mr-4">{cert.icon}</div>
                        <div className="text-lg font-medium">{cert.name}</div>
                        <div className="text-lg mr-4">Provider: {cert.provider}</div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Certifications;
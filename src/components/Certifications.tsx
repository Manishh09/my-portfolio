// Desc: Certifications component to display the certifications with icons and providers.
import { motion } from 'framer-motion';
import { SiAngular } from "react-icons/si";
import { FaGolang } from "react-icons/fa6";
import { VscAzure } from 'react-icons/vsc';
import { FaAward } from 'react-icons/fa';



const certifications = [
    {
        name: 'Angular (Intermediate)',
        provider: 'Hackerrank',
        badgeColor: 'bg-green-100 text-green-800',
        icon: <SiAngular className="text-fuchsia-600" />,
    },
    {
        name: 'Golang (Basic)',
        provider: 'Hackerrank',
        badgeColor: 'bg-green-100 text-green-800',
        icon: <FaGolang className="text-cyan-500 w-9 h-10" />,
    },
    {
        name: 'AZ-900: Microsoft Azure Fundamentals',
        provider: 'Microsoft',
        badgeColor: "bg-blue-100 text-blue-800",
        icon: <VscAzure className="text-blue-600" />,
    },
    {
        name: 'SC-900: Microsoft Security Compliance and Identity Fundamentals',
        provider: 'Microsoft',
        badgeColor: "bg-blue-100 text-blue-800",
        icon: <VscAzure className="text-blue-600" />,
    },
];

const Certifications = () => {
    return (
        <div className="container mx-auto px-4 py-8 sm:py-12">
            <div className="flex flex-row justify-center items-center gap-2 sm:gap-4">
                <FaAward className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-600" aria-hidden="true" />
                <h2 className="text-2xl sm:text-3xl font-bold text-center">Certifications</h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mt-8 p-4 sm:p-8 lg:p-12 bg-gray-50 rounded-lg">
                {certifications.map((cert, index) => (
                    <motion.div
                        key={index}
                        className="flex flex-col p-3 sm:p-4 bg-white shadow-lg rounded-lg"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                            <div className="text-3xl sm:text-4xl">{cert.icon}</div>
                            <div className="flex-1">
                                <div className="text-base sm:text-lg font-medium break-words">{cert.name}</div>
                                <div className="mt-1 sm:mt-2"> 
                                    <span className="text-sm sm:text-base">Issued By</span>                        
                                    <span 
                                        className={`inline-flex items-center px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-xs sm:text-sm font-medium ml-2 ${cert.badgeColor}`}
                                    >
                                        {cert.provider}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Certifications;
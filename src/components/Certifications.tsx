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
        <div className="container mx-auto p-4 ">
            <div className="flex flex-row justify-center gap-4">
            <FaAward className="w-8 h-8 text-indigo-600 items-center" aria-hidden="true" />
            <h2 className="text-3xl font-bold text-center mb-8">Certifications</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-12 bg-gray-50">
                {certifications.map((cert, index) => (
                    <motion.div
                        key={index}
                        className="flex flex-start p-4 bg-white shadow-lg rounded-lg flex-col justify-normal"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <div className="flex flex-row items-center">
                            <div className="text-4xl mr-4">{cert.icon}</div>
                            <div className="flex-col">
                                <div className="text-lg font-medium">{cert.name}</div>
                                <div> Issued By                         
                                    <span 
                                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium ml-2 ${cert.badgeColor}`}
                                    >{cert.provider}
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
import React from 'react';
import { Menu, Github, Linkedin, Mail } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Portfolio</h1>
        <nav className="hidden md:flex space-x-8">
          <a href="#home" className="text-gray-600 hover:text-gray-900">Home</a>
          <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
          <a href="#experience" className="text-gray-600 hover:text-gray-900">Experience</a>
          <a href="#projects" className="text-gray-600 hover:text-gray-900">Projects</a>
          <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
        </nav>
        <div className="flex items-center space-x-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
            <Linkedin size={20} />
          </a>
          <button className="md:hidden">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
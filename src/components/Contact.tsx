// Desc: This file contains the Contact component that displays the contact form and contact information.
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaMobile } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import { FaLocationDot } from 'react-icons/fa6';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.sendForm(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        formRef.current!,
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );

      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
      console.error('EmailJS Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <Toaster position="top-right" />
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-16">
          <motion.h2
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Get In Touch
          </motion.h2>
          <p className="text-gray-600 max-w-2xl">
            Feel free to reach out to me through any of these platforms. I'm always open to discussing new projects, opportunities, or just having a chat.
          </p>
        </div>

        {/* Contact Info Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8">Contact Information</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 max-w-4xl">
            {/* LinkedIn */}
            <motion.a
              href="https://linkedin.com/in/manish-boge-97b024129"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-center space-y-2 p-4 rounded-lg hover:bg-gray-50"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <FaLinkedin className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-semibold">Linkedin</h4>
              <p className="text-gray-600 text-sm">Manish Boge</p>
            </motion.a>

            {/* Email */}
            <motion.a
              href="mailto:my1000088@gmail.com"
              className="flex flex-col items-center text-center space-y-2 p-4 rounded-lg hover:bg-gray-50"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <MdEmail className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-semibold">Email</h4>
              <p className="text-gray-600 text-sm">manishboge@gmail.com</p>
            </motion.a>

            {/* GitHub */}
            <motion.a
              href="https://github.com/Manishh09"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-center space-y-2 p-4 rounded-lg hover:bg-gray-50"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <FaGithub className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-semibold">GitHub</h4>
              <p className="text-gray-600 text-sm">Manish</p>
            </motion.a>

            {/* Mobile */}
            <motion.div
              className="flex flex-col items-center text-center space-y-2 p-4 rounded-lg hover:bg-gray-50"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <FaMobile className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-semibold">Mobile</h4>
              <p className="text-gray-600 text-sm">+91-7893182353</p>
            </motion.div>

            {/* Location */}
            <motion.div
              className="flex flex-col items-center text-center space-y-2 p-4 rounded-lg hover:bg-gray-50"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <FaLocationDot className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-semibold">Location</h4>
              <p className="text-gray-600 text-sm">Hyderabad, Telangana, India</p>
            </motion.div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="max-w-2xl ">
          <h3 className="text-2xl font-semibold mb-8">Send Me a Message</h3>
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              ></textarea>
            </div>
            <motion.button
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github as GitHub, Linkedin, Twitter } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block text-lg text-primary-600 dark:text-primary-400 font-medium mb-4"
          >
            Hello, I'm
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6"
          >
            Berqueno
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-700 dark:text-slate-300 mb-8"
          >
            Full Stack Developer & UI/UX Designer
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-2xl"
          >
            I craft beautiful, functional, and performant digital experiences 
            with modern technologies. Passionate about creating software that 
            solves real-world problems.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <a href="#contact" className="btn btn-primary">
              Get in Touch
            </a>
            <a href="#projects" className="btn btn-outline">
              View My Work
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12 flex items-center space-x-6"
          >
            <a 
              href="https://github.com/Berqueno" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              aria-label="GitHub"
            >
              <GitHub size={24} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={24} />
            </a>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll Down">
          <ChevronDown 
            size={32} 
            className="text-slate-700 dark:text-slate-300"
          />
        </a>
      </div>
      
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-b from-primary-100/30 to-accent-100/30 dark:from-primary-900/10 dark:to-accent-900/10 blur-3xl rounded-full transform translate-x-1/2 -translate-y-1/4 z-0"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-gradient-to-t from-accent-100/30 to-primary-100/30 dark:from-accent-900/10 dark:to-primary-900/10 blur-3xl rounded-full transform -translate-x-1/3 translate-y-1/4 z-0"></div>
    </section>
  );
};
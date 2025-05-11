import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { User, Briefcase, Coffee, Heart } from 'lucide-react';

export const About: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        staggerChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="about" className="section-padding bg-white dark:bg-slate-900">
      <div className="container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 variants={itemVariants} className="section-title">
            About Me
          </motion.h2>
          
          <motion.div variants={itemVariants} className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mb-4">
                <Briefcase size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">5+ Years</h3>
              <p className="text-slate-600 dark:text-slate-400">Professional Experience</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mb-4">
                <Coffee size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">50+ Projects</h3>
              <p className="text-slate-600 dark:text-slate-400">Completed</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mb-4">
                <Heart size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">100%</h3>
              <p className="text-slate-600 dark:text-slate-400">Client Satisfaction</p>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="prose prose-lg dark:prose-invert max-w-none">
            <p>
              I'm a passionate Full Stack Developer with expertise in creating elegant,
              responsive, and performant web applications. With a strong foundation in both
              front-end and back-end technologies, I bridge the gap between design and functionality.
            </p>
            
            <p>
              My journey in software development began over 5 years ago, and since then,
              I've worked with startups, agencies, and established companies to build
              digital products that users love. I approach each project with a focus on
              clean code, modern best practices, and thoughtful user experiences.
            </p>
            
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing
              to open-source projects, or writing about web development on my blog. I'm
              constantly learning and evolving my skill set to stay at the forefront of
              this ever-changing industry.
            </p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="mt-8">
            <a 
              href="/resume.pdf" 
              className="btn btn-outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
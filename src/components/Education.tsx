import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Calendar, Award, Globe } from 'lucide-react';

interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  description: string;
}

export const Education: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const education: EducationItem[] = [
      {
      institution: 'Self-Taught',
      degree: 'Full Stack Developer',
      period: '2020 - Present',
      description:
        'A passionate developer focused on creating beautiful and functional digital experiences using modern web technologies.',
    },
    {
      institution: 'Soon',
      degree: 'Computer Engineering',
      period: '2025 - Present',
      description:
        'Specialized in Human-Computer Interaction and Artificial Intelligence. Graduated with honors.',
    },
  ];

  const certifications = [
    { name: 'AWS Certified Developer', issuer: 'Amazon Web Services', year: 'Soon' },
    { name: 'Professional Scrum Master I', issuer: 'Scrum.org', year: 'Soon' },
    { name: 'Google UX Design Professional Certificate', issuer: 'Google', year: 'Soon' },
    { name: 'React Nanod  egree', issuer: 'Udacity', year: 'Soon' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="education" className="section-padding bg-white dark:bg-slate-900">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title mx-auto">Education & Certifications</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mt-4">
            My academic background and professional certifications that have shaped my
            technical knowledge and expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={containerVariants}
          >
            <div className="flex items-center mb-8">
              <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg text-primary-600 dark:text-primary-400 mr-4">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
                Education
              </h3>
            </div>

            <div className="space-y-6">
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="card border-l-4 border-primary-600 dark:border-primary-400"
                >
                  <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-1">
                    {item.institution}
                  </h4>
                  <h5 className="text-lg font-medium text-primary-600 dark:text-primary-400 mb-2">
                    {item.degree}
                  </h5>
                  <div className="flex items-center text-sm text-slate-600 dark:text-slate-400 mb-3">
                    <Calendar size={16} className="mr-1" />
                    {item.period}
                  </div>
                  <p className="text-slate-700 dark:text-slate-300">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={containerVariants}
          >
            <div className="flex items-center mb-8">
              <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg text-primary-600 dark:text-primary-400 mr-4">
                <Award size={24} />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
                Certifications
              </h3>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="card flex flex-col sm:flex-row sm:items-center gap-4"
                >
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                    <Globe size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                      {cert.name}
                    </h4>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                      <span>{cert.issuer}</span>
                      <span className="hidden sm:block">•</span>
                      <span>{cert.year}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={itemVariants}
              className="mt-8 flex justify-center"
            >
              <a href="#" className="btn btn-outline">
                View All Certifications
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
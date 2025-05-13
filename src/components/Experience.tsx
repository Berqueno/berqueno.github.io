import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin } from 'lucide-react';

interface ExperienceItem {
  company: string;
  position: string;
  period: string;
  location: string;
  description: string[];
}

export const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const experiences: ExperienceItem[] = [
    {
      company: 'Independent Developer',
      position: 'Full Stack Developer',
      period: 'March 2020 - Present',
      location: 'İstanbul, Türkiye',
      description: [
        'Built full-featured web apps from scratch using React, Node.js, and modern databases.',
        'Experienced with TypeScript, Hooks, Context API, and RESTful APIs.',
        'Designed and developed responsive, user-friendly UIs.',
        'Handled frontend, backend, deployment, and maintenance independently.',
      ],
    },
        {
      company: 'Independent Developer',
      position: 'UI / UX Designer',
      period: 'March 2020 - Present',
      location: 'İstanbul, Türkiye',
      description: [
        'I design intuitive, responsive, and pixel-perfect user interfaces.',
        'Using Figma, I craft everything from wireframes to fully polished UI systems.',
        'Designed and developed responsive, user-friendly UIs.',
      ],
    },
        {
      company: 'Independent Developer',
      position: 'Data Scientist',
      period: 'January 2024 - Present',
      location: 'İstanbul, Türkiye',
      description: [
        'Conducted end-to-end data analysis, feature engineering, and model building using Python and SQL.',
        'Optimized model performance through hyperparameter tuning and cross-validation.',
        'Deployed machine learning models via REST APIs using FastAPI and Docker.',
        'Maintained model lifecycle with monitoring, retraining, and performance tracking.',
      ],
    },
        {
      company: 'Independent Developer',
      position: 'AI & Machine Learning Developer',
      period: 'September 2024 - Present',
      location: 'İstanbul, Türkiye',
      description: [
        'Built ML models using Python, Scikit-learn, and Pandas.',
        'Integrated OpenAI and transformer models (GPT, BERT) into apps.',
        'Developed AI-based search and recommendation systems.',
        'Used FastAPI and React to build interactive AI tools.',
      ],
    },
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
    <section id="experience" className="section-padding bg-slate-50 dark:bg-slate-800">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title mx-auto">Work Experience</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mt-4">
            My professional journey in the tech industry. Each role has contributed
            to my growth as a developer and problem solver.
          </p>
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="max-w-3xl mx-auto"
        >
          <div className="relative pl-8 border-l-2 border-primary-200 dark:border-primary-800">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="mb-12 relative"
              >
                <div className="absolute -left-[41px] bg-white dark:bg-slate-800 p-2 rounded-full border-4 border-primary-200 dark:border-primary-800">
                  <div className="w-5 h-5 rounded-full bg-primary-600 dark:bg-primary-400"></div>
                </div>

                <div className="card mb-4 border-l-4 border-primary-600 dark:border-primary-400">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-1">
                    {experience.position}
                  </h3>
                  <h4 className="text-lg font-medium text-primary-600 dark:text-primary-400 mb-3">
                    {experience.company}
                  </h4>

                  <div className="flex flex-col sm:flex-row sm:items-center text-sm text-slate-600 dark:text-slate-400 mb-4 gap-2 sm:gap-6">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      {experience.period}
                    </div>
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-1" />
                      {experience.location}
                    </div>
                  </div>

                  <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300">
                    {experience.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
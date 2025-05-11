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
      company: 'Tech Innovations Inc.',
      position: 'Senior Frontend Developer',
      period: 'January 2023 - Present',
      location: 'San Francisco, CA',
      description: [
        'Lead developer for the company\'s flagship SaaS product, improving performance by 35%',
        'Implemented modern React architecture using hooks, context, and TypeScript',
        'Mentored junior developers and established coding standards and best practices',
        'Collaborated with design team to implement pixel-perfect, responsive UI components',
      ],
    },
    {
      company: 'Digital Solutions LLC',
      position: 'Full Stack Developer',
      period: 'June 2021 - December 2022',
      location: 'Austin, TX',
      description: [
        'Developed and maintained multiple client projects using React, Node.js, and MongoDB',
        'Created RESTful APIs and integrated third-party services for various applications',
        'Implemented authentication systems and ensured security best practices',
        'Participated in agile development process with bi-weekly sprints',
      ],
    },
    {
      company: 'Startup Ventures',
      position: 'Frontend Developer',
      period: 'March 2020 - May 2021',
      location: 'Remote',
      description: [
        'Built responsive and accessible user interfaces using modern JavaScript frameworks',
        'Collaborated with UX designers to implement intuitive user experiences',
        'Optimized application performance and improved page load times by 40%',
        'Participated in code reviews and team knowledge sharing sessions',
      ],
    },
    {
      company: 'CreativeTech Agency',
      position: 'Web Developer Intern',
      period: 'September 2019 - February 2020',
      location: 'Boston, MA',
      description: [
        'Assisted senior developers in building client websites and web applications',
        'Learned modern web development workflows and best practices',
        'Developed small features and fixed bugs in existing projects',
        'Gained experience with version control and collaborative development',
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
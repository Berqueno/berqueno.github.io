import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Globe, Database, Terminal, Paintbrush, Layers } from 'lucide-react';

interface Skill {
  name: string;
  proficiency: number;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
}

export const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const skillCategories: SkillCategory[] = [
    {
      title: 'Frontend',
      icon: <Globe size={24} />,
      skills: [
        { name: 'React', proficiency: 90 },
        { name: 'TypeScript', proficiency: 80 },
        { name: 'JavaScript', proficiency: 85 },
        { name: 'HTML/CSS', proficiency: 95 },
      ],
    },
    {
      title: 'Backend',
      icon: <Code size={24} />,
      skills: [
        { name: 'Node.js', proficiency: 85 },
        { name: 'Python', proficiency: 80 },
        { name: 'Express', proficiency: 85 },
        { name: 'FastAPI', proficiency: 75 },
      ],
    },
    {
      title: 'Databases',
      icon: <Database size={24} />,
      skills: [
        { name: 'MongoDB', proficiency: 85 },
        { name: 'PostgreSQL', proficiency: 80 },
        { name: 'Firebase', proficiency: 75 },
        { name: 'Redis', proficiency: 70 },
      ],
    },
    {
      title: 'Dev Tools',
      icon: <Terminal size={24} />,
      skills: [
        { name: 'Git', proficiency: 90 },
        { name: 'Docker', proficiency: 75 },
        { name: 'CI/CD', proficiency: 70 },
        { name: 'Webpack', proficiency: 75 },
      ],
    },
    {
      title: 'Design',
      icon: <Paintbrush size={24} />,
      skills: [
        { name: 'Figma', proficiency: 85 },
        { name: 'UI/UX', proficiency: 80 },
        { name: 'Responsive Design', proficiency: 90 },
        { name: 'Tailwind CSS', proficiency: 95 },
      ],
    },
    {
      title: 'Other',
      icon: <Layers size={24} />,
      skills: [
        { name: 'AWS', proficiency: 70 },
        { name: 'GraphQL', proficiency: 75 },
        { name: 'Testing', proficiency: 80 },
        { name: 'SEO', proficiency: 65 },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="skills" className="section-padding bg-slate-50 dark:bg-slate-800">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title mx-auto">My Skills</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mt-4">
            Here are the technologies and tools I work with on a daily basis.
            I'm constantly learning and adding new skills to my repertoire.
          </p>
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card hover:border-primary-400 transition-all"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg text-primary-600 dark:text-primary-400">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-slate-700 dark:text-slate-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-slate-600 dark:text-slate-400 text-sm">
                        {skill.proficiency}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.proficiency}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="bg-primary-600 dark:bg-primary-400 h-2 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github as GitHub } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  links: {
    demo?: string;
    github?: string;
  };
}

export const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [filter, setFilter] = useState<string>('All');

  const projects: Project[] = [
    {
      title: 'E-Commerce Platform',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod augue in diam luctus molestie. Fusce commodo tortor dui, sit amet ullamcorper purus efficitur quis.',
      image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      links: {
        demo: 'https://example.com',
        github: 'https://github.com/Berqueno',
      },
    },
    {
      title: 'Task Management App',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod augue in diam luctus molestie. Fusce commodo tortor dui, sit amet ullamcorper purus efficitur quis.',
      image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['React', 'TypeScript', 'Firebase'],
      links: {
        demo: 'https://example.com',
        github: 'https://github.com/Berqueno',
      },
    },
    {
      title: 'Weather Dashboard',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod augue in diam luctus molestie. Fusce commodo tortor dui, sit amet ullamcorper purus efficitur quis.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['JavaScript', 'API', 'CSS'],
      links: {
        demo: 'https://example.com',
        github: 'https://github.com/Berqueno',
      },
    },
    {
      title: 'Social Media Analytics',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod augue in diam luctus molestie. Fusce commodo tortor dui, sit amet ullamcorper purus efficitur quis.',
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['React', 'D3.js', 'Node.js'],
      links: {
        demo: 'https://example.com',
        github: 'https://github.com/Berqueno',
      },
    },
    {
      title: 'Fitness Tracker',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod augue in diam luctus molestie. Fusce commodo tortor dui, sit amet ullamcorper purus efficitur quis.',
      image: 'https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['React Native', 'Firebase', 'API'],
      links: {
        demo: 'https://example.com',
        github: 'https://github.com/Berqueno',
      },
    },
    {
      title: 'Recipe Finder',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod augue in diam luctus molestie. Fusce commodo tortor dui, sit amet ullamcorper purus efficitur quis.',
      image: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['JavaScript', 'API', 'CSS'],
      links: {
        demo: 'https://example.com',
        github: 'https://github.com/Berqueno',
      },
    },
  ];

  const allTags = Array.from(
    new Set(projects.flatMap((project) => project.tags))
  );

  const filteredProjects =
    filter === 'All'
      ? projects
      : projects.filter((project) => project.tags.includes(filter));

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
    <section id="projects" className="section-padding bg-white dark:bg-slate-900">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title mx-auto">My Projects</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mt-4">
            Here are some of my recent projects. Each one was built to solve a specific
            problem or explore new technologies.
          </p>
        </div>

        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          <button
            onClick={() => setFilter('All')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === 'All'
                ? 'bg-primary-600 text-white dark:bg-primary-500'
                : 'bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600'
            }`}
          >
            All
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === tag
                  ? 'bg-primary-600 text-white dark:bg-primary-500'
                  : 'bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div key={index} variants={itemVariants} className="group">
              <div className="card overflow-hidden h-full flex flex-col">
                <div className="relative overflow-hidden h-48 mb-4 rounded-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    {project.links.demo && (
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white rounded-full text-slate-900 hover:bg-primary-100 transition-colors"
                        aria-label="View Demo"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white rounded-full text-slate-900 hover:bg-primary-100 transition-colors"
                        aria-label="View on GitHub"
                      >
                        <GitHub size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="inline-block px-3 py-1 text-xs font-medium bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
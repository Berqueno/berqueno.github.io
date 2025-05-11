import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  slug: string;
  tags: string[];
}

export const Blog: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const blogPosts: BlogPost[] = [
    {
      title: 'Building Accessible Web Applications',
      excerpt:
        'Learn how to make your web applications more accessible for all users, improving usability and compliance with standards.',
      date: 'Apr 15, 2023',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/3277808/pexels-photo-3277808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      slug: 'building-accessible-web-applications',
      tags: ['Accessibility', 'Frontend', 'UX'],
    },
    {
      title: 'React Performance Optimization Techniques',
      excerpt:
        'Discover practical strategies to optimize your React applications for better performance and user experience.',
      date: 'Mar 22, 2023',
      readTime: '8 min read',
      image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      slug: 'react-performance-optimization-techniques',
      tags: ['React', 'Performance', 'JavaScript'],
    },
    {
      title: 'Modern CSS Layout Techniques',
      excerpt:
        'Explore the power of modern CSS with Grid, Flexbox, and custom properties to create responsive and maintainable layouts.',
      date: 'Feb 18, 2023',
      readTime: '5 min read',
      image: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      slug: 'modern-css-layout-techniques',
      tags: ['CSS', 'Frontend', 'Design'],
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
    <section id="blog" className="section-padding bg-slate-50 dark:bg-slate-800">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title mx-auto">From My Blog</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mt-4">
            I write about web development, design, and technology. Here are some of my recent articles.
          </p>
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogPosts.map((post, index) => (
            <motion.div key={index} variants={itemVariants}>
              <article className="card h-full flex flex-col overflow-hidden group hover:shadow-lg transition-shadow">
                <div className="relative h-48 mb-6 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="inline-block px-2 py-1 text-xs font-medium bg-primary-600/80 text-white rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex-grow flex flex-col">
                  <div className="flex items-center text-sm text-slate-600 dark:text-slate-400 mb-3 space-x-4">
                    <span className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      {post.date}
                    </span>
                    <span className="flex items-center">
                      <Clock size={14} className="mr-1" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">
                    <a href={`/blog/${post.slug}`} className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                      {post.title}
                    </a>
                  </h3>

                  <p className="text-slate-600 dark:text-slate-400 mb-4 flex-grow">
                    {post.excerpt}
                  </p>

                  <a
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300 transition-colors mt-auto"
                  >
                    Read More
                    <ArrowRight size={16} className="ml-1" />
                  </a>
                </div>
              </article>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <a href="/blog" className="btn btn-primary">
            View All Posts
          </a>
        </div>
      </div>
    </section>
  );
};
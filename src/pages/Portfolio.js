import React from 'react';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';

const Portfolio = () => {
  const projects = [
    {
      title: "Gedung Perkantoran Modern",
      description: "Pembangunan gedung perkantoran 12 lantai dengan konsep modern dan ramah lingkungan.",
      image: "/images/project1.jpg",
      tags: ["Konstruksi", "Gedung", "Modern", "Green Building"],
    },
    // Tambahkan proyek lainnya di sini
  ];

  return (
    <div className="page-container">
      <Navbar />
      <section className="portfolio-page">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>Portfolio</h1>
            <div className="portfolio-grid">
              {projects.map((project, index) => (
                <motion.div 
                  key={index}
                  className="portfolio-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="portfolio-image">
                    <img src={project.image} alt={project.title} />
                  </div>
                  <div className="portfolio-content">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="portfolio-tags">
                      {project.tags.map((tag, idx) => (
                        <span key={idx} className="tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio; 
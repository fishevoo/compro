import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-container">
        <div className="hero-content">
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>
              PT GIANI BANGUN KREASI
            </h1>
            <p className="hero-description">
              Membangun masa depan dengan inovasi dan kualitas. Kami berkomitmen untuk memberikan 
              layanan konstruksi terbaik dengan standar profesional tertinggi.
            </p>
            <div className="hero-buttons">
              <Link to="/portfolio" className="primary-button">
                Lihat Portfolio
              </Link>
              <Link to="/contact" className="secondary-button">
                Hubungi Kami
              </Link>
            </div>
          </motion.div>
          </div>
        </div>
    </section>
  );
};

export default Hero;

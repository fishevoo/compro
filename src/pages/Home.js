import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "PT GIANI BANGUN KREASI",
      subtitle: "Engineering",
      image: "/images/slide1.jpg", // Gambar engineering
      description: "Solusi engineering terbaik untuk proyek konstruksi Anda"
    },
    {
      title: "PT GIANI BANGUN KREASI",
      subtitle: "General Contractor", // Diubah dari Procurement
      image: "/images/slide2.jpg", // Gambar konstruksi gedung
      description: "Pembangunan dengan standar kualitas terbaik"
    },
    {
      title: "PT GIANI BANGUN KREASI",
      subtitle: "Construction",
      image: "/images/slide3.jpg", // Gambar konstruksi
      description: "Pembangunan dengan standar kualitas terbaik"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000); // Auto slide setiap 5 detik
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="home-page">
      <Navbar />
      
      <section className="hero-slider">
        <div className="slider-container">
          {slides.map((slide, index) => (
            <div 
              key={index} 
              className={`slide ${index === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="slide-content">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h1>{slide.title}</h1>
                  <h2>{slide.subtitle}</h2>
                  <p>{slide.description}</p>
                </motion.div>
              </div>
            </div>
          ))}

          <button className="slider-button prev" onClick={prevSlide}>
            <FaChevronLeft />
          </button>
          <button className="slider-button next" onClick={nextSlide}>
            <FaChevronRight />
          </button>

          <div className="slider-dots">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>About Us</h2>
          </motion.div>
          
          <div className="about-content">
            <p>PT Giani Bangun Kreasi adalah perusahaan yang bergerak di bidang Perdagangan dan Jasa Kontruksi Umum (Pembangunan Jalan dan jembatan serta Gedung dan Perumahan)</p>
          </div>
        </div>
      </section>

      {/* Our Best Services Section */}
      <section className="services-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Our Best Services</h2>
          </motion.div>
          
          <div className="services-grid">
            <div className="service-card">
              <h3>Pekerjaan jalan raya dan jalan tol</h3>
            </div>
            <div className="service-card">
              <h3>Pekerjaan Gedung perkantoran dan perumahan</h3>
            </div>
            <div className="service-card">
              <h3>Pekerjaan jalan dan jembatan</h3>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home; 
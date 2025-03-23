import React from 'react';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      name: "Jasa Sipil",
      description: "Fokus utama Tim Arsitektur dan Sipil ini adalah desain, pembangunan, pemeliharaan dan perbaikan seperti:",
      items: [
        "Persiapan lahan",
        "Jalan",
        "Jembatan",
        "Pagar",
        "Drainase",
        "Pemukiman",
        "Gedung",
        "Pabrik/Industri",
        "Interior/eksterior",
        "Ruko/Perkantoran"
      ]
    }
  ];

  return (
    <div className="page-container">
      <Navbar />
      <section className="services-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>Layanan Kami</h1>
            <p className="service-intro">
              Kami siap memberikan layanan terbaik dalam jasa sipil, hvac, mechanical, 
              electrical untuk bangunan, komersial, perumahan, apartemen, gedung, 
              maupun pabrik di Indonesia
            </p>
          </motion.div>

          <div className="services-content">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                className="service-section"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <h3>{service.name}</h3>
                <p>{service.description}</p>
                <ul className="service-list">
                  {service.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services; 
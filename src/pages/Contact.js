import React from 'react';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaGlobe, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="page-container">
      <Navbar />
      <section className="contact-page">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>Hubungi Kami</h1>
          </motion.div>
          
          <div className="contact-info">
            <div className="company-info">
              <h2>Informasi Perusahaan</h2>
              <div className="info-item">
                <h3>Nama Perusahaan</h3>
                <p>PT Giani Bangun Kreasi</p>
              </div>
              
              <div className="info-item">
                <h3>Bidang Usaha</h3>
                <ul>
                  <li>Strauss Pile / Pondasi Struktur Konstruksi</li>
                  <li>Bangunan / Pasang Paving / Jalan Beton</li>
                  <li>Cat Kanstin dan Cat Paving / Finishing Plafond</li>
                  <li>Finish Plafond / Marka Jalan / Thermoplastic</li>
                  <li>Struktur jalan / Pondasi Warehouse</li>
                  <li>Foto Pekerjaan Struktur Gedung Bertingkat</li>
                </ul>
              </div>

              <div className="info-item">
                <h3>Alamat</h3>
                <p>Jalan Jatinegara Kaum Raya 23 Jakarta</p>
              </div>

              <div className="info-item">
                <h3>Telepon/Handphone</h3>
                <p><a href="tel:+6281213229766">+62 812-1322-9766</a></p>
              </div>

              <div className="info-item">
                <h3>Email</h3>
                <p><a href="mailto:gianibangunkreasi@gmail.com">gianibangunkreasi@gmail.com</a></p>
              </div>

              <div className="info-item">
                <h3>Website</h3>
                <p><a href="https://www.gianibangunkreasi.com" target="_blank" rel="noopener noreferrer">
                  www.gianibangunkreasi.com
                </a></p>
              </div>

              <div className="info-item">
                <h3>Sosial Media</h3>
                <p><a href="https://instagram.com/gianibangunkreasi" target="_blank" rel="noopener noreferrer">
                  @gianibangunkreasi
                </a></p>
              </div>
            </div>

            <div className="contact-form-container">
              <h2>Kirim Pesan</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Nama Lengkap</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    required 
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    required 
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Nomor Telepon</label>
                  <input 
                    type="tel" 
                    id="phone"
                    name="phone"
                    required 
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subjek</label>
                  <input 
                    type="text" 
                    id="subject"
                    name="subject"
                    required 
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Pesan</label>
                  <textarea 
                    id="message"
                    name="message"
                    required
                  ></textarea>
                </div>

                <button type="submit">Kirim Pesan</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 
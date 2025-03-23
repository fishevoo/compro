import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <h3>PT Giani Bangun Kreasi</h3>
          <p>Membangun masa depan dengan inovasi dan kualitas dalam setiap proyek konstruksi.</p>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://instagram.com/gianibangunkreasi" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </div>

        <div className="footer-links">
          <h4>Layanan</h4>
          <ul>
            <li><Link to="/services">Jasa Sipil</Link></li>
            <li><Link to="/services">Konstruksi</Link></li>
            <li><Link to="/services">Renovasi</Link></li>
            <li><Link to="/services">Desain</Link></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Perusahaan</h4>
          <ul>
            <li><Link to="/about">Tentang Kami</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/contact">Kontak</Link></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Kontak</h4>
          <ul>
            <li>Jalan Jatinegara Kaum Raya 23</li>
            <li>Jakarta</li>
            <li>+62 812-1322-9766</li>
            <li>gianibangunkreasi@gmail.com</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 PT Giani Bangun Kreasi. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 
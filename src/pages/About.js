import React from 'react';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="page-container">
      <Navbar />
      <section className="about-page">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>Tentang Kami</h1>
            <div className="about-content">
              <p>
                PT Giani Bangun Kreasi berdiri Tahun 2024 berperan aktif dalam pembangunan di Indonesia. 
                Pengalaman dan pembelajaran mewarnai awal-awal pertumbuhan telah membawa perusahaan terus 
                tumbuh dan berkembang.
              </p>
              <p>
                Komitmen PT Giani Bangun Kreasi untuk menyelesaikan setiap karya konstruksi yang telah 
                dipercayakan tidak lepas dari peran setiap PT Giani Bangun Kreasi dalam melakukan perencanaan, 
                pelaksanaan, pengendalian proyek dengan pendekatan manajemen dan metode konstruksi yang 
                efektif, efisien serta memperhatikan K3LL (Keselamatan Kesehatan Kerja) dan Lingkup Lingkungan.
              </p>
              <p>
                Sebagai wujud dari rangkaian proses pembelajaran dan pengalaman perusahaan kami siap untuk 
                terus memberikan layanan jasa konstruksi untuk ikut serta menghadirkan kesejahteraan bagi 
                bangsa Indonesia.
              </p>

              <div className="vision-mission">
                <div className="vision">
                  <h3>Visi</h3>
                  <p>
                    Menjadi perusahaan kontraktor berorientasi pada kepuasan klien, profesional dan terpercaya
                  </p>
                </div>

                <div className="mission">
                  <h3>Misi</h3>
                  <ol>
                    <li>
                      Merancang dan melaksanakan pekerjaan konstruksi untuk bangunan dengan cermat sehingga 
                      mencapai standard keamanan dan efisiensi yang tinggi dan tahan lama.
                    </li>
                    <li>
                      Menjadikan pelanggan sebagai mitra berkelanjutan.
                    </li>
                    <li>
                      Menciptakan kondisi terbaik bagi karyawan untuk bertumbuh dan berprestasi.
                    </li>
                    <li>
                      Meningkatkan keuntungan perusahaan.
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About; 
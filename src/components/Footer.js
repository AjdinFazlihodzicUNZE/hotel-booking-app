import React, { useEffect, useState } from 'react';
import './Footer.css';

function Footer() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const pageHeight = document.documentElement.offsetHeight;

      if (scrollPosition >= pageHeight - 150) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className={`custom-footer ${visible ? 'footer-visible' : ''}`}>
      <div className="footer-content container">
        <p>&copy; {new Date().getFullYear()} Royale Hotel. All rights reserved.</p>
        <p>
          Designed with <span className="heart">♥</span> by Team Royale
        </p>
        <div className="contact-info">
          <p>Location: Kemal Paşa, 34134 Fatih/İstanbul, Turska</p>
          <p>Contact: +90 36 123 456</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

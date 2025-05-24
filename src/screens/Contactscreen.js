import React from 'react';
import './Contactscreen.css';

function Contactscreen() {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>Have questions or need assistance? We're here to help!</p>

      <form className="contact-form">
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>
     <div style={{ marginTop: '20px' }}>
        <h3 className="section-title">Our Location</h3>
        <div className="map-container">
        <iframe
            title="hotel-location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6021.339073416033!2d28.948605805635452!3d41.01060570581317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab987db1a0409%3A0xf23591537ebdb5!2s%C4%B0stanbul%20Royal%20Hotel!5e0!3m2!1sbs!2sba!4v1748104472889!5m2!1sbs!2sba"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
       </div>
    </div>


    </div>
    
  );
}

export default Contactscreen;

import React from 'react';
import './Contactscreen.css';

function Contactscreen() {
  return (
    <div className="contact-container">
      <h1>Kontaktirajte nas</h1>
      <p>Tu smo za vas – pošaljite nam poruku u nastavku.</p>

      <form className="contact-form">
        <input type="text" placeholder="Vaše ime" required />
        <input type="email" placeholder="Email adresa" required />
        <textarea placeholder="Poruka" rows="5" required></textarea>
        <button type="submit">Pošalji poruku</button>
      </form>
    </div>
  );
}

export default Contactscreen;

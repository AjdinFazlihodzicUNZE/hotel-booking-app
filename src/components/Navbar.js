import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Hotel Royale</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/about-us">O nama</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contact">Kontakt</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/login">Prijava</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/register">Registracija</a>
                        </li>
                        
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar

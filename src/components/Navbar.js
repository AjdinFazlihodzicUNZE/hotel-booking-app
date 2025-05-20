import React from 'react';
import './Navbar.css';

function Navbar() {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    function logout(){
        localStorage.removeItem('currentUser')
        window.location.href="/login"
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Hotel Royale</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">

                        {user ? (
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="userMenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {user.name}
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="userMenu">
                                    <li>
                                        <a className="dropdown-item" href="/booking">Booking</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#" onClick={logout}>Log out</a>
                                    </li>
                                </ul>
                            </li>
                        ) : (<>
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

                        </>)}

                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar

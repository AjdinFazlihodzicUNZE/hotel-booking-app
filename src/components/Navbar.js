import React from 'react';
import './Navbar.css';


function Navbar() {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    function logout() {
        localStorage.removeItem('currentUser')
        window.location.href = "/login"
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-animated">
                <a className="navbar-brand" href="/home">Hotel Royale</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/about-us">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contact">Contact</a>
                        </li>
                        {user ? (
                            <li className="nav-item dropdown">
                                <button
                                    className="nav-link btn btn-link"
                                    id="userMenu"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                    style={{ textDecoration: 'none' }}
                                >
                                    Profile
                                    <span className="custom-arrow">&#9662;</span>
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="userMenu">
                                    <li>
                                        <a className="dropdown-item" href="/profile">Profile</a>
                                    </li>
                                    <li>
                                        <button
                                            className="dropdown-item"
                                            onClick={logout}
                                            style={{ border: 'none', background: 'none', cursor: 'pointer' }}
                                            type="button"
                                        >
                                            Log out
                                        </button>
                                    </li>
                                </ul>
                            </li>
                        ) : (<>

                            <li className="nav-item">
                                <a className="nav-link" href="/login">Log in</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/register">Sign up</a>
                            </li>

                        </>)}

                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar

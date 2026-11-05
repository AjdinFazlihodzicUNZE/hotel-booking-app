import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    function logout() {
        localStorage.removeItem('currentUser')
        window.location.href = "/login"
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-animated">
                 <Link className="navbar-brand" to="/home">Hotel Royale</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/about-us">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
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
                                    {user.name}
                                    <span className="custom-arrow">&#9662;</span>
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="userMenu">
                                    <li>
                                        <Link className="dropdown-item" to="/profile">Profile</Link>
                                    </li>
                                    {user.isAdmin && (
                                        <li>
                                            <Link className="dropdown-item" to="/admin">Admin Panel</Link>
                                        </li>
                                    )}
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
                                <Link className="nav-link" to="/login">Log in</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/register">Sign up</Link>
                            </li>

                        </>)}

                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar

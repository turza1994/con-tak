import React from 'react';
import { Link } from 'react-router-dom';
import '../../index.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-little-grey shadow-sm mb-5" style={{ minHeight: '6vh' }} >
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item mx-2">
                            <Link className="nav-link text-decoration-none text-light-blue" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link className="nav-link text-decoration-none text-light-blue" aria-current="page" to="/">Contact Lists</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
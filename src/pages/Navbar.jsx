import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top px-3">
                <div className="container-fluid">

                    {/* Brand */}
                    <Link className="navbar-brand" to="/">DigiMarket</Link>

                    {/* Mobile Toggle */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Menu */}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/blog">Blog</Link>
                            </li>

                            {/* Dropdown */}
                            <li className="nav-item dropdown">
                                <button
                                    className="nav-link dropdown-toggle btn btn-link"
                                    data-bs-toggle="dropdown"

                                >
                                    Services
                                </button>
                                <ul className="dropdown-menu">

                                    <li>
                                        <Link className="dropdown-item" to="/digiMarketing">
                                            Digital Marketing
                                        </Link>
                                    </li>

                                    <li>
                                        <Link className="dropdown-item" to="/fieldMarketing">
                                            Field Marketing & Traditional Marketing
                                        </Link>
                                    </li>

                                    <li>
                                        <Link className="dropdown-item" to="/webDevelopment">
                                            Web Development
                                        </Link>
                                    </li>

                                </ul>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/gallery">Gallery</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;

import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const servicesRef = useRef(null);
    const collapseRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (servicesRef.current && !servicesRef.current.contains(event.target)) {
                setIsServicesOpen(false);
            }
        };

        const handleEscape = (event) => {
            if (event.key === "Escape") {
                setIsServicesOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleEscape);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleEscape);
        };
    }, []);

    const closeMenus = () => {
        setIsServicesOpen(false);
        if (collapseRef.current) {
            collapseRef.current.classList.remove("show");
        }
    };

    const handleServiceSelect = (path) => {
        closeMenus();
        navigate(path);
    };

    const socialLinks = [
        {
            name: "Twitter",
            href: "https://twitter.com/",
            icon: (
                <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path fill="currentColor" d="M18.244 2H21.5l-7.11 8.128L22.75 22h-6.544l-5.124-6.697L5.222 22H1.964l7.606-8.694L1.55 2h6.71l4.632 6.118L18.244 2zm-1.145 18h1.803L7.278 3.896H5.344L17.1 20z" />
                </svg>
            ),
        },
        {
            name: "Instagram",
            href: "https://www.instagram.com/",
            icon: (
                <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path fill="currentColor" d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2.2A2.8 2.8 0 0 0 4.2 7v10A2.8 2.8 0 0 0 7 19.8h10a2.8 2.8 0 0 0 2.8-2.8V7A2.8 2.8 0 0 0 17 4.2H7zm10.25 1.65a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2.2A2.8 2.8 0 1 0 12 14.8 2.8 2.8 0 0 0 12 9.2z" />
                </svg>
            ),
        },
        {
            name: "Threads",
            href: "https://www.threads.net/",
            icon: (
                <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path fill="currentColor" d="M16.7 11.4c-.1-.1-.2-.1-.3-.2-.1-2.1-1.2-3.3-3-3.4-1.1-.1-2.3.2-3.1.9-.8.7-1.2 1.7-1.3 2.8h2.1c.1-.6.3-1 .7-1.4.4-.3.9-.5 1.5-.5 1.1.1 1.4.8 1.5 1.4-.8-.1-1.7-.1-2.5 0-2.4.2-3.9 1.6-3.8 3.6 0 1 .5 1.9 1.2 2.4.7.5 1.6.8 2.7.8 1.4 0 2.5-.5 3.2-1.5.5-.7.8-1.6.8-2.8.7.4 1 1 1 1.8 0 1.6-1.3 3.2-3.6 3.6-2.4.4-5.4-.4-7.1-2.7-1.6-2.2-1.8-5.8-.1-8.2C7.4 4.4 10.1 3.2 13 3.4c2.7.2 4.9 1.3 6.2 3.4 1.2 1.9 1.4 4.6.5 7-.9 2.4-3 4.4-6.3 4.8l-.2-1.8c2.3-.3 3.8-1.6 4.5-3.5.6-1.7.5-3.7-.4-5.1-.9-1.5-2.4-2.3-4.4-2.4-2.2-.2-4.1.7-5.3 2.3-1.2 1.7-1.1 4.4 0 6 .9 1.3 2.7 2.2 5.2 1.9 1.5-.2 2.3-1.1 2.3-2.1 0-.6-.3-1.1-.9-1.4 0 .4-.1.8-.3 1.1-.3.5-.9.8-1.7.8-.9 0-1.5-.4-1.5-1.2 0-.9.7-1.5 1.9-1.6.7-.1 1.4-.1 2.1.1z" />
                </svg>
            ),
        },
        {
            name: "Facebook",
            href: "https://www.facebook.com/",
            icon: (
                <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path fill="currentColor" d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.87.25-1.46 1.5-1.46H16.7V4.9c-.3-.04-1.3-.12-2.48-.12-2.46 0-4.15 1.5-4.15 4.27V11H7.3v3h2.77v8h3.43z" />
                </svg>
            ),
        },
        {
            name: "LinkedIn",
            href: "https://www.linkedin.com/",
            icon: (
                <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path fill="currentColor" d="M6.94 8.5A1.72 1.72 0 1 1 6.93 5a1.72 1.72 0 0 1 .01 3.44zM5.5 9.8h2.9V19H5.5V9.8zm4.72 0H13v1.26h.04c.39-.74 1.35-1.52 2.79-1.52 2.98 0 3.53 1.96 3.53 4.5V19h-2.9v-4.4c0-1.05-.02-2.4-1.46-2.4-1.46 0-1.68 1.14-1.68 2.32V19h-2.9V9.8z" />
                </svg>
            ),
        },
    ];

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top px-3">
                <div className="container-fluid navbar-shell">

                    {/* Brand */}
                    <Link className="navbar-brand" to="/" onClick={closeMenus}>
                        <span>ASHX</span>
                        {/* <img className="navbar-brand-logo" src={logo} alt="ASHX logo" /> */}
                    </Link>

                    <div className="navbar-socials navbar-socials-inline" aria-label="Social media links">
                        {socialLinks.map((social) => (
                            <a
                                key={social.name}
                                className="navbar-social-link"
                                href={social.href}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={social.name}
                                title={social.name}
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>

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
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                        ref={collapseRef}
                    >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar-links">

                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/" onClick={closeMenus}>Home</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/about" onClick={closeMenus}>About</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/blog" onClick={closeMenus}>Blog</Link>
                            </li>

                            {/* Dropdown */}
                            <li
                                className={`nav-item dropdown ${isServicesOpen ? "show" : ""}`}
                                ref={servicesRef}
                            >
                                <button
                                    className="nav-link dropdown-toggle btn btn-link"
                                    type="button"
                                    aria-expanded={isServicesOpen}
                                    onClick={() => setIsServicesOpen((open) => !open)}
                                >
                                    Services
                                </button>
                                <ul className={`dropdown-menu ${isServicesOpen ? "show" : ""}`}>

                                    <li>
                                        <button
                                            className="dropdown-item"
                                            type="button"
                                            onClick={() => handleServiceSelect("/digiMarketing")}
                                        >
                                            Digital Marketing
                                        </button>
                                    </li>

                                    <li>
                                        <button
                                            className="dropdown-item"
                                            type="button"
                                            onClick={() => handleServiceSelect("/fieldMarketing")}
                                        >
                                            Field Marketing & Traditional Marketing
                                        </button>
                                    </li>

                                    <li>
                                        <button
                                            className="dropdown-item"
                                            type="button"
                                            onClick={() => handleServiceSelect("/webDevelopment")}
                                        >
                                            Web Development
                                        </button>
                                    </li>

                                </ul>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/gallery" onClick={closeMenus}>Gallery</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/contact" onClick={closeMenus}>Contact</Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;

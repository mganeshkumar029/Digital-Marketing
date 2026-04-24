import { Link } from "react-router-dom"
import "../../CSS/Footer.css"

function Footer() {
    return (
        <footer className="decor-footer text-light py-5">
            <div className="container">
                <div className="row gy-4">

                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <h4 className="fw-bold brand-title">ASHX GLOBAL NETWORK</h4>
                        <p className="footer-desc">
                            A leading digital solution provider delivering expert marketing,
                            branding, publication, and business growth strategies.
                        </p>
                    </div>

                    <div className="col-lg-2 col-md-6 col-sm-12">
                        <h6 className="fw-bold">Quick Links</h6>
                        <ul className="list-unstyled mt-3 footer-links">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/blog">Blogs</Link></li>
                            <li><Link to="/gallery">Gallery</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="col-lg-2 col-md-6 col-sm-12">
                        <h6 className="fw-bold">Our Services</h6>
                        <ul className="list-unstyled mt-3 footer-links">
                            <li><Link to="/digiMarketing">Digital Marketing</Link></li>
                            <li><Link to="/fieldMarketing">Field & Traditional Marketing</Link></li>
                            <li><Link to="/webDevelopment">Web Development</Link></li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <h6 className="fw-bold">Contact Us</h6>
                        <p className="mt-3"><i className="bi bi-geo-alt-fill me-2"></i> Mathilagam, Railway Station Rd,
                        Marthandam,Tamilnadu 629165, India
                        </p>
                        <p><i className="bi bi-telephone-fill me-2"></i> +91 8838882401, +91 8610702043</p>
                        <p><i className="bi bi-envelope-fill me-2"></i> ashxglobalnetwork.agn@gmail.com</p>
                    </div>

                </div>

                <hr className="border-light my-4" />

                <div className="text-center small copyright">
                    © 2026 Ashxglobalnetwork. All Rights Reserved.
                </div>
            </div>
        </footer>
    )
}

export default Footer

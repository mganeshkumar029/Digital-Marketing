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
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/Blog">Blogs</a></li>
                            <li><a href="/Gallery">Gallery</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div>

                    <div className="col-lg-2 col-md-6 col-sm-12">
                        <h6 className="fw-bold">Our Services</h6>
                        <ul className="list-unstyled mt-3 footer-links">
                            <li><a href="/digiMarketing">Digital Marketing</a></li>
                            <li><a href="/fieldMarketing">Field & Traditional Marketing</a></li>
                            <li><a href="/webDevelopment">Web Development</a></li>
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

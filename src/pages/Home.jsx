import "../../CSS/Home.css";
import About from "./About";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    return (
        <>
            <section className="hero-section py-5">
                <div className="container">
                    <div className="row align-items-center">

                        {/* LEFT SIDE - TEXT */}
                        <div className="col-lg-6 col-md-6  hero-content">
                            <h1 className="hero-title">
                                <span className="highlight">Driving Growth </span><br />
                                Through<br />
                                <span className="accent">Smart Marketing Solutions</span>
                            </h1>

                            <p className="hero-text">
                                We deliver complete marketing solutions including digital marketing, offline promotions, branding, and high-performance campaigns to help your business grow faster and stronger.Your success is our mission.
                            </p>

                            <button className="hero-btn" onClick={() => navigate("/contact")}>Get Started</button>
                        </div>

                        {/* RIGHT SIDE - IMAGE */}
                        <div className="col-lg-5 col-md-6 d-flex justify-content-end">
                            <div className="hero-image-wrap">
                                <img
                                    src="https://thumbs.dreamstime.com/z/digital-marketing-business-woman-brown-background-digital-marketing-business-woman-122117018.jpg"
                                    alt="hero"
                                    className="hero-image"
                                />
                            </div>
                        </div>

                    </div>
                </div>

                <div className="container">
                    <h2 className="achievements-title">Our Achievements</h2>

                    <div className="achievements-list">
                        <div className="achievement-item">
                            Successfully completed <span>100+</span> marketing campaigns across multiple industries
                        </div>

                        <div className="achievement-item">
                            Helped <span>50+</span> businesses increase online visibility and generate quality leads
                        </div>

                        <div className="achievement-item">
                            Managed social media accounts with <span>10,000+</span> organic audience growth
                        </div>

                        <div className="achievement-item">
                            Delivered high-performing ad campaigns with <span>4x ROI</span>
                        </div>

                        <div className="achievement-item">
                            Built strong brand identity for startups and established companies
                        </div>
                    </div>
                </div>
            </section>


            <About />
        </>
    );
}

export default Home;

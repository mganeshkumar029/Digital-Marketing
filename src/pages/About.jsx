import React from 'react'
import "../../CSS/About.css"

function About() {
    return (

        <div>
            <section className="about-page">
                {/* HEADER */}
                <header className="about-header">
                    <h1>About Us</h1>
                    <p>Who we are & what we stand for</p>
                </header>

                {/* WHO WE ARE */}
                <div className="about-card">
                    <h2>Who We Are</h2>
                    <p>
                        <strong>ASHX-USA GLOBAL NETWORK</strong> is a forward-thinking marketing company
                        dedicated to helping businesses grow through strategic, creative, and
                        technology-driven solutions.
                    </p>
                    <p>
                        Our team consists of skilled professionals in digital marketing, field
                        marketing, traditional promotions, and web development. We operate with
                        a client-first mindset, ensuring every brand receives personalized attention
                        and measurable results.
                    </p>
                </div>

                {/* WHAT WE DO */}
                <div className="about-card">
                    <h2>What We Do</h2>
                    <p>
                        We provide end-to-end marketing services designed to strengthen your brand,
                        enhance engagement, and maximize business potential.
                    </p>

                    <ul>
                        <li><strong>Digital Marketing</strong> – Data-driven strategies, SEO, campaigns, content & ads.</li>
                        <li><strong>Field & Traditional Marketing</strong> – Events, activations & offline brand promotion.</li>
                        <li><strong>Web Development</strong> – Modern, responsive websites built to convert.</li>
                    </ul>
                </div>

                {/* WHY CHOOSE US */}
                <div className="about-card">
                    <h2>Why Choose Us?</h2>
                    <ul>
                        <li>Expert team with global standards</li>
                        <li>Tailored solutions for every business</li>
                        <li>Affordable & impactful plans</li>
                        <li>24/7 dedicated support</li>
                        <li>Proven success across industries</li>
                    </ul>
                </div>

                {/* WHAT WE DELIVER */}
                <div className="about-card">
                    <h2>What We Deliver</h2>
                    <ul>
                        <li>Customized strategic solutions</li>
                        <li>High-quality work & brand consistency</li>
                        <li>Reliable communication and support</li>
                        <li>Measured results to grow your business</li>
                        <li>Long-term value through sustainable marketing</li>
                    </ul>
                </div>

                {/* OUR COMMITMENT */}
                <div className="about-card">
                    <h2>Our Commitment</h2>
                    <p>
                        At <strong>ASHX-USA GLOBAL NETWORK</strong>, we focus on transparency,
                        timely execution, continuous improvement & delivering excellence.
                    </p>
                    <p>
                        Every strategy, design & campaign aligns with your business goals and
                        reflects your brand identity.
                    </p>
                </div>

            </section>
        </div>




    )
}

export default About

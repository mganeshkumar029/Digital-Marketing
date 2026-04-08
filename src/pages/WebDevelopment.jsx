import React from 'react'
import "../../CSS/WebDevelopment.css"
import { resolveAsset } from "../utils/resolveAsset"


function WebDevelopment() {
    return (
        <>

            <div>
                <section className="services-page web-page">

                    <header className="page-header">
                        <h1>Web Development Services</h1>
                        <p>Modern websites built to convert, perform & represent your brand.</p>
                    </header>

                    {/* Web Development – Digital Design */}
                    <div className="service-section">
                        <img src={resolveAsset("client/src/assets/White Blue Teal And Pink Illustrative UXUI Design Services Presentation.png")} alt="Digital Design" />
                        <div className="content">
                            <h2>Digital Design</h2>
                            <p>
                                Modern, visually appealing digital assets crafted to represent your brand’s identity.
                            </p>
                        </div>
                    </div>

                    {/* Graphic Design */}
                    <div className="service-section reverse">
                        <img src={resolveAsset("client/src/assets/White Blue Teal And Pink Illustrative UXUI Design Services Presentation (1).png")} alt="Graphic Design" />
                        <div className="content">
                            <h2>Graphic Design</h2>
                            <p>
                                Professional design solutions including logos, banners, branding kits, and marketing creatives.
                            </p>
                        </div>
                    </div>

                    {/* UI UX */}
                    <div className="service-section">
                        <img src={resolveAsset("client/src/assets/White Blue Teal And Pink Illustrative UXUI Design Services Presentation (2).png")} alt="UI/UX Design" />
                        <div className="content">
                            <h2>UI/UX Design</h2>
                            <p>
                                We create intuitive, user-friendly interfaces that ensure a smooth and engaging user experience.
                            </p>
                        </div>
                    </div>

                    {/* Web Design */}
                    <div className="service-section reverse">
                        <img src={resolveAsset("client/src/assets/White Blue Teal And Pink Illustrative UXUI Design Services Presentation (3).png")} alt="Web Design" />
                        <div className="content">
                            <h2>Web Design</h2>
                            <p>
                                Custom website layouts built to impress, convert, and scale your business.
                            </p>
                        </div>
                    </div>

                    {/* Website Maintenance */}
                    <div className="service-section">
                        <img src={resolveAsset("client/src/assets/White Blue Teal And Pink Illustrative UXUI Design Services Presentation (4).png")} alt="Website Maintenance" />
                        <div className="content">
                            <h2>Website Maintenance</h2>
                            <p>
                                Regular updates, security checks, backups, & performance optimization for smooth long-term operation.
                            </p>
                        </div>
                    </div>

                </section>
            </div>

        </>
    )
}

export default WebDevelopment

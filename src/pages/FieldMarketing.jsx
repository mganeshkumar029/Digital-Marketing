import React from 'react'
import "../../CSS/FieldMarketing.css"
import { resolveAsset } from "../utils/resolveAsset"


function FieldMarketing() {
    return (
        <>
            <section className="services-page field-page">

                <header className="page-header">
                    <h1>Offline & Traditional Marketing</h1>
                    <p>Real-world marketing strategies that create strong brand presence and trust</p>
                </header>


                <div className="service-section">
                    <img src={resolveAsset("client/src/assets/pexels-fauxels-3184292.jpg.jpeg")} alt="Field Marketing" />
                    <div className="content">
                        <h2>1. Field Marketing Services</h2>
                        <ul>
                            <li><strong>Brand Activation & Experiential Marketing</strong> – Live events, pop-ups, demos</li>
                            <li><strong>Sampling & Product Trials</strong> – Encouraging first-hand experience</li>
                            <li><strong>Trade Shows & Exhibitions</strong> – Booths, leads, promotions</li>
                            <li><strong>Merchandising & In-Store Promotions</strong> – Displays & POS setups</li>
                            <li><strong>Street Team & Guerrilla Marketing</strong> – Flyers & creative stunts</li>
                            <li><strong>Mobile Marketing / Roadshows</strong> – Multi-location campaigns</li>
                            <li><strong>Brand Ambassadors & Event Staffing</strong></li>
                            <li><strong>Mystery Shopping & Market Research</strong></li>
                        </ul>
                    </div>
                </div>


                <div className="service-section reverse">
                    <img src={resolveAsset("client/src/assets/pexels-mikael-blomkvist-6476249.jpg.jpeg")} alt="Print Advertising" />
                    <div className="content">
                        <h2>2. Print & Traditional Advertising</h2>
                        <ul>
                            <li>Newspaper & Magazine Ads</li>
                            <li>Flyers, Brochures & Pamphlets</li>
                            <li>Direct Mail Campaigns</li>
                            <li>Billboards & Outdoor Advertising</li>
                            <li>Posters & Signage</li>
                        </ul>
                    </div>
                </div>


                <div className="service-section">
                    <img src={resolveAsset("client/src/assets/pexels-cottonbro-6896221.jpg.jpeg")} alt="Broadcast Media Marketing" />
                    <div className="content">
                        <h2>3. Broadcast Media Marketing</h2>
                        <ul>
                            <li>Television Advertising</li>
                            <li>Radio Advertising</li>
                            <li>Cinema Advertising</li>
                        </ul>
                    </div>
                </div>


                <div className="service-section reverse">
                    <img src={resolveAsset("client/src/assets/pexels-cherubs-22669860.jpg.jpeg")} alt="Event Marketing" />
                    <div className="content">
                        <h2>4. Event Marketing & Sponsorships</h2>
                        <ul>
                            <li>Corporate Events & Product Launches</li>
                            <li>Community Events & Festivals</li>
                            <li>Trade Associations & Networking Events</li>
                        </ul>
                    </div>
                </div>


                <div className="service-section">
                    <img src={resolveAsset("client/src/assets/pexels-rdne-7648045.jpg.jpeg")} alt="Public Relations" />
                    <div className="content">
                        <h2>5. Public Relations (PR)</h2>
                        <ul>
                            <li>Media Relations & Press Coverage</li>
                            <li>Crisis Management & Reputation Building</li>
                            <li>Influencer & Celebrity Endorsements (Offline)</li>
                        </ul>
                    </div>
                </div>


                <div className="service-section reverse">
                    <img src={resolveAsset("client/src/assets/pexels-fauxels-3184416.jpg.jpeg")} alt="Telemarketing" />
                    <div className="content">
                        <h2>6. Telemarketing & Personal Selling</h2>
                        <ul>
                            <li>Cold Calling & Lead Generation</li>
                            <li>Door-to-Door Sales</li>
                            <li>Sales Representatives & Field Teams</li>
                        </ul>
                    </div>
                </div>


                <div className="service-section">
                    <img src={resolveAsset("client/src/assets/pexels-fauxels-3184438.jpg.jpeg")} alt="Sponsorships" />
                    <div className="content">
                        <h2>7. Sponsorships & Partnerships</h2>
                        <ul>
                            <li>Sports & Event Sponsorships</li>
                            <li>Co-Branding & Strategic Partnerships</li>
                        </ul>
                    </div>
                </div>

            </section>

        </>
    )
}

export default FieldMarketing

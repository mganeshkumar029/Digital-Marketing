import React from 'react'
import "../../CSS/digitalMarketing.css"
import { resolveAsset } from "../utils/resolveAsset"
import LazyImage from "../components/LazyImage"

function DigitalMarketing() {
    return (
        <>

            <div>
                <section className="services-page digital-page">

                    {/* Header */}
                    <header className="page-header">
                        <h1>Digital Marketing Services</h1>
                        <p>Powerful strategies designed to grow your brand, visibility & revenue</p>
                    </header>

                    {/* 🔹 AI Search Optimization */}
                    <div className="service-section">
                        <LazyImage src={resolveAsset("client/src/assets/Blue White and Black Modern AI Solutions Presentation.png")} alt="AI Search Optimization" />
                        <div className="content">
                            <h2>AI Search Optimization</h2>
                            <h3>LLM Optimization</h3>
                            <p>
                                Optimize your content for AI-powered search & large language models (LLMs).
                                Appear in AI chat results, increase conversational search visibility, &
                                future-proof your digital presence.
                            </p>
                        </div>
                    </div>

                    {/* 🔹 Advertising */}
                    <div className="service-section reverse">
                        <LazyImage src={resolveAsset("client/src/assets/dm-adv.jpeg")} alt="Advertising" />
                        <div className="content">
                            <h2>Advertising</h2>

                            <ul>
                                <li><strong>Display Ads</strong> – Eye-catching visuals that boost conversions.</li>
                                <li><strong>Native Advertising</strong> – Integrated placements that build trust.</li>
                                <li><strong>PPC (Pay-Per-Click)</strong> – High-ROI ads with precise targeting.</li>
                                <li><strong>Programmatic Advertising</strong> – Automated AI-powered ad buying.</li>
                                <li><strong>Retargeting & Remarketing</strong> – Bring back lost visitors & convert.</li>
                                <li><strong>Video Marketing</strong> – Engaging videos that tell your story.</li>
                            </ul>
                        </div>
                    </div>

                    {/* 🔹 Amazon Marketing */}
                    <div className="service-section">
                        <LazyImage src={resolveAsset("client/src/assets/Untitled design (4) (1).png")} alt="Amazon Marketing" />
                        <div className="content">
                            <h2>Amazon Marketing</h2>
                            <ul>
                                <li><strong>Amazon Advertising</strong> – Boost product visibility & conversions.</li>
                                <li><strong>Amazon SEO</strong> – Rank higher & increase organic marketplace sales.</li>
                            </ul>
                        </div>
                    </div>

                    {/* 🔹 Branding */}
                    <div className="service-section reverse">
                        <LazyImage src={resolveAsset("client/src/assets/pexels-yankrukov-7693716 (2).jpg.jpeg")} alt="Branding" />

                        <div className="content">
                            <h2>Branding</h2>
                            <ul>
                                <li><strong>Online Reputation Management</strong> – Review monitoring & repair.</li>
                                <li>  Branding is the process of creating a unique identity for a business.</li>
                                <li>It includes elements like name, logo, design, messaging, and customer perception.</li>
                                <li>Branding is not just visuals—it’s the overall experience people associate with your business.</li>
                            </ul>
                        </div>
                    </div>

                    {/* 🔹 Content Marketing */}
                    <div className="service-section">
                        <LazyImage src={resolveAsset("client/src/assets/pexels-kindelmedia-7688336.jpg.jpeg")} alt="Content Marketing" />
                        <div className="content">
                            <h2>Content Marketing</h2>
                            <ul>
                                <li><strong>Content Strategy</strong> – Full roadmap for growth.</li>
                                <li><strong>Copywriting</strong> – SEO-friendly persuasive text.</li>
                                <li><strong>Video Production</strong> – High-quality brand videos.</li>
                            </ul>
                        </div>
                    </div>

                    {/* 🔹 Data Analytics */}
                    <div className="service-section reverse">
                        <LazyImage src={resolveAsset("client/src/assets/pexels-yankrukov-7691724.jpg.jpeg")} alt="Data Analytics" />
                        <div className="content">
                            <h2>Data Analytics</h2>
                            <ul>
                                <li><strong>Data Collection & Integration</strong> – Collect data from websites, ads, and social media
Integrate multiple data sources into one system.</li>
                                <li><strong>Performance Tracking</strong> –Track website traffic, user behavior & conversions
Monitor campaign performance in real-time.</li>
                            </ul>
                        </div>
                    </div>

                    {/* 🔹 Marketing Advice */}
                    <div className="service-section">
                        <LazyImage src={resolveAsset("client/src/assets/pexels-fauxels-3184465.jpg.jpeg")} alt="Marketing Advice" />
                        <div className="content">
                            <h2>Marketing Advice</h2>
                            <ul>
                                <li><strong>Business & Market Analysis</strong> – Understand your business goals and challenges
Analyze competitors and industry trends</li>
                                <li><strong>Strategy Developmen</strong> – Customized marketing plans for your brand
Online & offline strategy alignment</li>
                                <li><strong>Brand Positioning</strong> –Build a strong and memorable brand identity</li>
                                <li><strong>Digital Marketing Guidance</strong> – Advice on ads, social media, SEO & content
Platform selection based on your audience</li>
                                <li><strong>Budget Planning & ROI Focus</strong> – Smart budget allocation
Maximize returns on every rupee spent</li>
                                <li><strong>Growth & Scaling Strategy</strong> –Step-by-step growth roadmap
Long-term scaling plans for your business</li>
                                
                            </ul>
                        </div>
                    </div>

                    {/* 🔹 Marketing Automation */}
                    <div className="service-section reverse">
                        <LazyImage src={resolveAsset("client/src/assets/pexels-fauxels-3183150.jpg.jpeg")} alt="Email Marketing" />
                        <div className="content">
                            <h2>Marketing Automation</h2>
                            <ul>
                                <li><strong>Lead Management & CRM Integration</strong> – Capture, track, and manage leads efficiently
Integration with CRM systems for better workflow</li>
                                <li><strong>Customer Journey Automation</strong> – Map and automate user journeys
Trigger-based actions (welcome emails, reminders, offers).</li>
                                <li><strong>Campaign Automation</strong> – Schedule and automate marketing campaigns
Multi-channel automation (email, SMS, social media).</li>
                                
                            </ul>
                        </div>
                    </div>

                    {/* 🔹 Public Relations */}
                    <div className="service-section">
                        <LazyImage src={resolveAsset("client/src/assets/pexels-rdne-8369835.jpg.jpeg")} alt="Public Relations" />
                        <div className="content">
                            <h2>Public Relations</h2>
                            <ul>
                                <li><strong>Media Relations</strong> – Build strong connections with journalists & media outlets
Press coverage in online, print, and digital platforms.</li>
                                <li><strong>Press Release Writing & Distribution</strong> – Professional press release creation
Distribution to relevant media channels.</li>
                                <li><strong>Brand Reputation Management</strong> – Monitor and manage brand image
Handle negative publicity and build trust.</li>
                                <li><strong>Influencer & Celebrity Outreach</strong> – Collaborate with influencers for brand promotion
Strategic partnerships to increase visibility.</li>
                            </ul>
                        </div>
                    </div>

                    {/* 🔹 SEO Services */}
                    <div className="service-section reverse">
                        <LazyImage src={resolveAsset("client/src/assets/pexels-fauxels-3184357 (1).jpg.jpeg")} alt="SEO Services" />
                        <div className="content">
                            <h2>SEO Services</h2>
                            <ul>
                                <li>Backlink Management</li>
                                <li>International SEO</li>
                                <li>Link Building</li>
                                <li>Local SEO</li>
                                <li>Mobile SEO</li>
                                <li>SEO Consulting</li>
                                <li>Search Engine Marketing</li>
                                <li>Shopify SEO</li>
                                <li>Technical SEO</li>
                                <li>WordPress SEO</li>
                                <li>YouTube SEO</li>
                            </ul>
                        </div>
                    </div>

                    {/* 🔹 Social Media Marketing */}
                    <div className="service-section">
                        <LazyImage src={resolveAsset("client/src/assets/pexels-magnus-mueller-1398178-2818118.jpg.jpeg")} alt="Social Media Marketing" />
                        <div className="content">
                            <h2>Social Media Marketing</h2>
                            <ul>
                                <li>LinkedIn Marketing</li>
                                <li>Content Creation</li>
                                <li>Facebook Advertising</li>
                                <li>Instagram Marketing</li>
                                <li>Social Media Monitoring</li>
                                <li>Influencer Marketing</li>
                                <li>Twitter Marketing</li>
                            </ul>
                        </div>
                    </div>

                </section>
            </div>


        </>
    )
}

export default DigitalMarketing

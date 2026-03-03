import React from 'react'
import "../../CSS/digitalMarketing.css"

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
                        <img src="/assets/images/digital/ai-search.jpg" alt="AI Search Optimization" />
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
                        <img src="/assets/images/digital/ads.jpg" alt="Advertising" />
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
                        <img src="/assets/images/digital/amazon.jpg" alt="Amazon Marketing" />
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
                        <img src="/assets/images/digital/branding.jpg" alt="Branding" />
                        <div className="content">
                            <h2>Branding</h2>
                            <ul>
                                <li><strong>Online Reputation Management</strong> – Review monitoring & repair.</li>
                            </ul>
                        </div>
                    </div>

                    {/* 🔹 Content Marketing */}
                    <div className="service-section">
                        <img src="/assets/images/digital/content.png" alt="Content Marketing" />
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
                        <img src="/assets/images/digital/ai-analytics.jpg" alt="Data Analytics" />
                        <div className="content">
                            <h2>Data Analytics</h2>
                            <ul>
                                <li><strong>Machine Learning & AI</strong> – Predictive analytics & targeting.</li>
                            </ul>
                        </div>
                    </div>

                    {/* 🔹 Marketing Advice */}
                    <div className="service-section">
                        <img src="/assets/images/digital/advice.jpg" alt="Marketing Advice" />
                        <div className="content">
                            <h2>Marketing Advice</h2>
                            <ul>
                                <li>Inbound Marketing</li>
                                <li>Lead Generation</li>
                                <li>Market Research</li>
                            </ul>
                        </div>
                    </div>

                    {/* 🔹 Marketing Automation */}
                    <div className="service-section reverse">
                        <img src="/assets/images/digital/email.jpg" alt="Email Marketing" />
                        <div className="content">
                            <h2>Marketing Automation</h2>
                            <ul>
                                <li>Email Marketing – Automated funnels & nurturing.</li>
                            </ul>
                        </div>
                    </div>

                    {/* 🔹 Public Relations */}
                    <div className="service-section">
                        <img src="/assets/images/digital/pr.jpg" alt="Public Relations" />
                        <div className="content">
                            <h2>Public Relations</h2>
                            <ul>
                                <li>Influencer Marketing – Scale reach & trust.</li>
                            </ul>
                        </div>
                    </div>

                    {/* 🔹 SEO Services */}
                    <div className="service-section reverse">
                        <img src="/assets/images/digital/seo.jpg" alt="SEO Services" />
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
                        <img src="/assets/images/digital/social.jpg" alt="Social Media Marketing" />
                        <div className="content">
                            <h2>Social Media Marketing</h2>
                            <ul>
                                <li>LinkedIn Marketing</li>
                                <li>Content Creation</li>
                                <li>Facebook Advertising</li>
                                <li>Instagram Marketing</li>
                                <li>Social Media Monitoring</li>
                                <li>TikTok Influencer Marketing</li>
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

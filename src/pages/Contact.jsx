import React, { useState } from "react";
import "../../CSS/Contact.css";
import LazyImage from "../components/LazyImage";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        agree: false,
    });

    const [submitting, setSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitting(true);

        console.log(formData);

        setTimeout(() => {
            setSubmitting(false);
            alert("Form submitted!");
        }, 1500);
    };

    return (
        <section className=" contact-wrap">
            <div className="contact-grid">

                {/* Form Card */}
                <div className="card card-form">
                    <div className="card-header">
                        <h2>Ready to Grow Your Business?</h2>
                        <p className="muted">
                            Partner with ASHX GLOBAL NETWORK and take your brand to the next level.
                        </p>
                        <p className="muted">
                            We'd love to hear from you — fill the form and we'll respond within
                            1-2 business days.
                        </p>
                    </div>

                    <form className="card-body" onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col">
                                <label className="label">Full name</label>
                                <input
                                    className="input"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your full name"
                                    required
                                />
                            </div>

                            <div className="col">
                                <label className="label">Email</label>
                                <input
                                    className="input"
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="you@example.com"
                                    required
                                />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                                <label className="label">Phone (optional)</label>
                                <input
                                    className="input"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="98xxxxxxx"
                                />
                            </div>

                            <div className="col">
                                <label className="label">Subject</label>
                                <input
                                    className="input"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="Subject"
                                />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                                <label className="label">Message</label>
                                <textarea
                                    className="input input-area"
                                    rows="3"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>
                        </div>

                        <div className="row form-bottom">
                            <label className="checkbox">
                                <input
                                    type="checkbox"
                                    name="agree"
                                    checked={formData.agree}
                                    onChange={handleChange}
                                    required
                                />
                                <span>I agree to the terms and privacy policy</span>
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="btn btn-success"
                            disabled={submitting}
                        >
                            {submitting ? "Sending..." : "Submit"}
                        </button>
                    </form>
                </div>

                {/* Info Card */}
                <aside className="card card-info">
                    <h3>Contact details</h3>
                    <p><strong>Office:</strong> 123 Your Street, City</p>
                    <p><strong>Phone:</strong> +91 8300366911</p>
                    <p><strong>Email:</strong> hello@example.com</p>
                    <hr />
                    {/* <h4>Working hours</h4>
                    <p>Mon - Fri: 9:00 - 18:00</p> */}

                    {/* <LazyImage
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKcoZrpiJ0dCw2vClTyOGKJ6s-SMGwA-Z-Lw&s"
                        alt="office"
                    /> */}
                </aside>
            </div>
        </section>
    );
};

export default Contact;

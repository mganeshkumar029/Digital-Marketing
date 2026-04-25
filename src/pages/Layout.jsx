import Navbar from "./Navbar";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

export default function Layout() {
    const phoneNumber = "+918838882401";
    const [showCallHint, setShowCallHint] = useState(true);
    const { pathname } = useLocation();

    useEffect(() => {
        const timeoutId = window.setTimeout(() => {
            setShowCallHint(false);
        }, 5000);

        return () => window.clearTimeout(timeoutId);
    }, []);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "auto",
        });
    }, [pathname]);

    return (
        <>
            <Navbar />
            <main className="layout-main">
                <Outlet />
            </main>
            <div className="floating-call-wrap">
                {showCallHint && (
                    <span className="floating-call-hint">Click to call</span>
                )}
                <a
                    className="floating-call-button"
                    href={`tel:${phoneNumber}`}
                    aria-label="Call us now"
                    title="Call us now"
                >
                    <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.89.33 1.76.63 2.6a2 2 0 0 1-.45 2.11L8 9.91a16 16 0 0 0 6.09 6.09l1.48-1.29a2 2 0 0 1 2.11-.45c.84.3 1.71.51 2.6.63A2 2 0 0 1 22 16.92z" />
                    </svg>
                </a>
            </div>
            <Footer />
        </>
    );
}

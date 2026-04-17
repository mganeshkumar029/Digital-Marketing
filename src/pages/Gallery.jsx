import "../../CSS/Gallery.css";
import LazyImage from "../components/LazyImage";
import { resolveAsset } from "../utils/resolveAsset";

const galleryItems = [
    {
        title: "Campaign Strategy",
        category: "Digital Marketing",
        image: "pexels-fauxels-3184465.jpg.jpeg",
    },
    {
        title: "Team Planning",
        category: "Brand Growth",
        image: "pexels-fauxels-3184416.jpg.jpeg",
    },
    {
        title: "Creative Review",
        category: "Content",
        image: "pexels-yankrukov-7691724.jpg.jpeg",
    },
    {
        title: "Client Workshop",
        category: "Consulting",
        image: "pexels-rdne-7648045.jpg.jpeg",
    },
    {
        title: "Market Research",
        category: "Field Marketing",
        image: "pexels-kindelmedia-7688336.jpg.jpeg",
    },
    {
        title: "Performance Tracking",
        category: "Analytics",
        image: "pexels-mikael-blomkvist-6476249.jpg.jpeg",
    },
];

const stats = [
    { value: "100+", label: "Campaign moments" },
    { value: "50+", label: "Growing brands" },
    { value: "4x", label: "Performance focus" },
];

function Gallery() {
    return (
        <section className="gallery-page">
            <div className="gallery-shell">
                <div className="gallery-header">
                    <p className="gallery-kicker">Gallery</p>
                    <h1>Marketing moments that move brands forward</h1>
                    <p>
                        A quick look at campaign planning, creative teamwork, client
                        conversations, and growth-focused execution.
                    </p>
                </div>

                <div className="gallery-feature">
                    <div className="gallery-feature-image">
                        <LazyImage
                            src={resolveAsset("pexels-fauxels-3184357 (1).jpg.jpeg")}
                            alt="Marketing team discussing a campaign"
                            loading="eager"
                        />
                    </div>
                    <div className="gallery-feature-copy">
                        <span>Featured Work</span>
                        <h2>Ideas shaped into campaigns</h2>
                        <p>
                            From first strategy notes to live performance checks, every
                            project is built around clear goals and practical momentum.
                        </p>
                        <div className="gallery-stats">
                            {stats.map((stat) => (
                                <div className="gallery-stat" key={stat.label}>
                                    <strong>{stat.value}</strong>
                                    <small>{stat.label}</small>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="gallery-toolbar" aria-label="Gallery categories">
                    <span>Strategy</span>
                    <span>Branding</span>
                    <span>Content</span>
                    <span>Analytics</span>
                </div>

                <div className="gallery-grid">
                    {galleryItems.map((item) => (
                        <article className="gallery-card" key={item.title}>
                            <LazyImage
                                src={resolveAsset(item.image)}
                                alt={`${item.title} session`}
                            />
                            <div className="gallery-card-caption">
                                <span>{item.category}</span>
                                <h3>{item.title}</h3>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Gallery;

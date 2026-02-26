export default function Hero({ onBrowseClick, onContactClick }) {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Find Your Perfect Home in Cambridge</h1>
          <p>Discover premium rental properties tailored to your lifestyle.</p>
          <div className="hero-actions">
            <button className="btn-primary" onClick={onBrowseClick}>
              Browse Properties
            </button>
            <button className="btn-secondary" onClick={onContactClick}>
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

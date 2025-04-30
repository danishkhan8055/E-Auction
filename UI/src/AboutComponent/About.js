import './About.css';

function About() {
  return (
    <div className="about-container">
      {/* Header */}
      <div className="about-header">
        <h1 className="about-title">
          Welcome to <span className="highlight">LuxuryBid</span>
        </h1>
        <p className="about-subtitle">
          Your gateway to elite auctions where exclusivity meets elegance.
        </p>
        <div className="about-divider" />
      </div>

      {/* Cards */}
      <div className="about-grid">
        <div className="about-card">
          <img
            src="https://img.freepik.com/premium-photo/three-vibrant-paper-sculptures-abstract-bird-wings-red-gray-orange-hues_38013-10579.jpg"
            alt="Luxury Auction"
            className="about-image"
          />
          <div className="about-card-body">
            <h3 className="about-card-title">Luxury Art</h3>
            <p className="about-card-text">Discover rare and bold expressions of elegance through exclusive art auctions.</p>
          </div>
        </div>

        <div className="about-card">
          <img
            src="https://th.bing.com/th/id/OIP.pw1yj8Xkyj7TLSshopPUZAAAAA?rs=1&pid=ImgDetMain"
            alt="Luxury Watch"
            className="about-image"
          />
          <div className="about-card-body">
            <h3 className="about-card-title">Luxury Watches</h3>
            <p className="about-card-text">Bid on timeless masterpieces from the world’s most iconic watchmakers.</p>
          </div>
        </div>

        <div className="about-card">
          <img
            src="https://i.pinimg.com/originals/da/c4/4b/dac44b2623c66d6099f3aed85cd71f65.jpg"
            alt="Luxury Car"
            className="about-image"
          />
          <div className="about-card-body">
            <h3 className="about-card-title">Luxury Cars</h3>
            <p className="about-card-text">Explore rare and exotic cars for the ultimate driving and collecting experience.</p>
          </div>
        </div>
      </div>

      {/* Text Section */}
      <div className="about-footer">
        <p className="about-description">
          <strong>LuxuryBid</strong> is your premium destination for high-end auctions — offering handpicked selections of rare luxury goods, artwork, and collector's items.
        </p>

        <ul className="about-list">
          <li>✅ Verified sellers & authentic luxury goods</li>
          <li>✅ Transparent bidding processes</li>
          <li>✅ Secure transactions with buyer protection</li>
          <li>✅ Access to rare, limited-edition items</li>
        </ul>

        <p className="about-cta">Experience elite auctions like never before.</p>
      </div>
    </div>
  );
}

export default About;

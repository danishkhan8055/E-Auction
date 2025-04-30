import "./Content.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Content() {
  return (
    <div className="content-container">
      {/* Hero Section */}
      <motion.div
        className="hero-section"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="display-5 text-uppercase mb-4">
          Welcome to <span className="text-highlight">eAuction</span>
        </h1>
        <h4 className="text-uppercase mb-3 text-body">Your Gateway to Smart Bidding</h4>
        <p className="hero-description">
          Discover, bid, and win exclusive products at unbeatable prices.  
          Join thousands of bidders and sellers on <b>eAuction</b> today!
        </p>
        <div className="cta-buttons">
          <motion.button whileHover={{ scale: 1.1 }} className="btn btn-orange">
            <Link to="/viewcategory">Start Bidding</Link>
          </motion.button>
          <motion.button whileHover={{ scale: 1.1 }} className="btn btn-outline-orange">
            <Link to="/register">Join as Seller</Link>
          </motion.button>
        </div>
      </motion.div>

      {/* Trending Auctions Section */}
      <div className="trending-auctions">
        <h2 className="section-title">🔥 Trending Auctions</h2>
        <div className="auction-list">
          {[
            { img: "https://content.api.news/v3/images/bin/3ec0b74fa448264cebbf133a0a224f7a", title: "Luxury Car Auction", price: "$15,000" },
            { img: "https://th.bing.com/th/id/OIP.pw1yj8Xkyj7TLSshopPUZAAAAA?rs=1&pid=ImgDetMain", title: "Vintage Rolex Watch", price: "$5,000" },
            { img: "https://img.freepik.com/premium-photo/three-vibrant-paper-sculptures-abstract-bird-wings-red-gray-orange-hues_38013-10579.jpg", title: "Exclusive Art Piece", price: "$10,000" },
            { img: "https://i.pinimg.com/originals/da/c4/4b/dac44b2623c66d6099f3aed85cd71f65.jpg", title: "Latest Gadgets", price: "$500" },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="auction-item"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img src={item.img} alt={item.title} />
              <h3>{item.title}</h3>
              <p>Starting at {item.price}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Popular Categories Section */}
      <div className="popular-categories">
        <h2 className="section-title">📢 Popular Categories</h2>
        <div className="category-list">
          {[
            { img: "https://c8.alamy.com/comp/D2GW26/bric-a-brac-antiques-collectibles-on-display-for-sale-in-shop-west-D2GW26.jpg", title: "Antiques" },
            { img: "https://wallpaperaccess.com/full/496189.jpg", title: "Electronics" },
            { img: "https://api.oneworld.id/uploads/Real_Estate_i_Stock_edited_aae30f2583.jpg", title: "Real Estate" },
          ].map((category, index) => (
            <motion.div
              key={index}
              className="category-item"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img src={category.img} alt={category.title} />
              <h3>{category.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>

      
    </div>
  );
}

export default Content;

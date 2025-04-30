import "./Userhome.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Userhome() {
  return (
    <div className="userhome-container">
      {/* Hero Section */}
      <motion.div
        className="hero-section"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="display-5 text-uppercase mb-4">
          Welcome to <span className="text-primary">eAuction</span>
        </h1>
        <h4 className="text-uppercase mb-3 text-body">Find, Bid, and Win!</h4>
        <p className="hero-description">
          eAuction is your go-to online platform for bidding on amazing
          products. Join us and start bidding today!
        </p>
        <div className="cta-buttons">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="btn btn-primary"
          >
            <Link to="/viewcategory">Explore Auctions</Link>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="btn btn-outline-primary"
          >
            <Link to="/apuser">Sell an Item</Link>
          </motion.button>
        </div>
      </motion.div>

      {/* Features Section */}
      <div className="features-container">
        <motion.div
          className="feature-box"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <i className="bi bi-handbag"></i>
          <h3>Wide Range of Products</h3>
          <p>Bid on electronics, collectibles, art, and more.</p>
        </motion.div>
        <motion.div
          className="feature-box"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <i className="bi bi-graph-up"></i>
          <h3>Secure Bidding</h3>
          <p>Transparent bidding process with real-time updates.</p>
        </motion.div>
        <motion.div
          className="feature-box"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <i className="bi bi-wallet2"></i>
          <h3>Earn Money</h3>
          <p>Sell your products to a global audience.</p>
        </motion.div>
      </div>
    </div>
  );
}

export default Userhome;

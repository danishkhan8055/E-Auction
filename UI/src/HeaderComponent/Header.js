import './Header.css';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Auth from '../AuthComponent/Auth';

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

function Header() {
  const [headerContent, setHeaderContent] = useState(null);

  useEffect(() => {
    const role = localStorage.getItem("role");
    let content;

    if (role === "admin") {
      content = (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="container-fluid px-5 d-none d-lg-block">
            <div className="row gx-5">
              <div className="col-lg-4 text-center py-3"></div>
              <div className="col-lg-4 text-center border-start border-end py-3"></div>
              <div className="col-lg-4 text-center py-3">
                <motion.div
                  className="d-inline-flex align-items-center"
                  variants={itemVariants}
                >
                  <div className="text-start">
                    <h6 className="text-uppercase fw-bold">Welcome Admin</h6>
                    <span>{localStorage.getItem("email")}</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      );
    } else if (role === "user") {
      content = (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="container-fluid px-5 d-none d-lg-block">
            <div className="row gx-5">
              <div className="col-lg-4 text-center py-3"></div>
              <div className="col-lg-4 text-center border-start border-end py-3"></div>
              <div className="col-lg-4 text-center py-3">
                <motion.div
                  className="d-inline-flex align-items-center"
                  variants={itemVariants}
                >
                  <div className="text-start">
                    <h6 className="text-uppercase fw-bold">Welcome User</h6>
                    <span>{localStorage.getItem("email")}</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      );
    } else {
      content = (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="container-fluid px-5 d-none d-lg-block">
            <div className="row gx-5">
              <motion.div
                className="col-lg-4 text-center py-3"
                variants={itemVariants}
              >
                <div className="d-inline-flex align-items-center">
                  <i className="bi bi-geo-alt fs-1 text-primary me-3"></i>
                  <div className="text-start">
                    <h6 className="text-uppercase fw-bold">Our Office</h6>
                    <span>X Street, Indore, India</span>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="col-lg-4 text-center border-start border-end py-3"
                variants={itemVariants}
              >
                <div className="d-inline-flex align-items-center">
                  <i className="bi bi-envelope-open fs-1 text-primary me-3"></i>
                  <div className="text-start">
                    <h6 className="text-uppercase fw-bold">Email Us</h6>
                    <span>info@example.com</span>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="col-lg-4 text-center py-3"
                variants={itemVariants}
              >
                <div className="d-inline-flex align-items-center">
                  <i className="bi bi-phone-vibrate fs-1 text-primary me-3"></i>
                  <div className="text-start">
                    <h6 className="text-uppercase fw-bold">Call Us</h6>
                    <span>XXX XXX XXXX</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      );
    }

    setHeaderContent(content);
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div>
      <Auth />
      <AnimatePresence>
        {headerContent}
      </AnimatePresence>
    </div>
  );
}

export default Header;
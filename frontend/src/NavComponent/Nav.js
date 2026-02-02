import "./Nav.css";
import { Link } from "react-router-dom";
import { useMemo } from "react";
import { motion } from "framer-motion";

function Nav() {
  const role = localStorage.getItem("role");

  const fadeIn = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const slideIn = {
    initial: { x: "-100%" },
    animate: { x: 0 },
    transition: { type: "spring", stiffness: 120 },
  };

  const navContent = useMemo(() => {
    return (
      <motion.div {...fadeIn} className="container-fluid sticky-top bg-dark shadow-sm px-5 pe-lg-0">
        <motion.nav {...slideIn} className="navbar navbar-expand-lg navbar-dark py-3">
          <Link to="/" className="navbar-brand">
            <h1 className="m-0 display-4 text-sm text-uppercase sm:text-uppercase text-white">
              <i className="bi bi-building text-primary me-2"></i> eAuction
            </h1>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
              {role === "admin" ? (
                <>
                  <Link className="nav-item nav-link active" to="/admin">Admin Home</Link>
                  <Link className="nav-item nav-link" to="/manageusers">Manage Users</Link>
                  <Dropdown title="Category">
                    <Link className="dropdown-item" to="/addcategory">Add Category</Link>
                    <Link className="dropdown-item" to="/addsubcategory">Add Sub Category</Link>
                  </Dropdown>
                  <Dropdown title="Settings">
                    <Link className="dropdown-item" to="/cpadmin">Change Password</Link>
                    <Link className="dropdown-item" to="/epadmin">Edit Profile</Link>
                  </Dropdown>
                  <Link className="nav-item nav-link logout-btn" to="/logout">Logout <i className="bi bi-arrow-right"></i></Link>
                </>
              ) : role === "user" ? (
                <>
                  <Link className="nav-item nav-link active" to="/user">User Home</Link>
                  <Link className="nav-item nav-link" to="/viewcategory">Search Auction</Link>
                  <Dropdown title="Manage Product">
                    <Link className="dropdown-item" to="/apuser">Add Product</Link>
                    <Link className="dropdown-item" to="/vpuser">View Product</Link>
                  </Dropdown>
                  <Link className="nav-item nav-link logout-btn" to="/logout">Logout <i className="bi bi-arrow-right"></i></Link>
                </>
              ) : (
                <>
                  <Link className="nav-item nav-link active" to="/">Home</Link>
                  <Link className="nav-item nav-link" to="/about">About</Link>
                  <Link className="nav-item nav-link" to="/contact">Contact</Link>
                  <Dropdown title="Service">
                    <Link className="dropdown-item" to="/blog">Blog</Link>
                    <Link className="dropdown-item" to="/portfolio">Portfolio</Link>
                  </Dropdown>
                  <Link className="nav-item nav-link" to="/register">Register</Link>
                  <Link className="nav-item nav-link login-btn" to="/login">Login <i className="bi bi-arrow-right"></i></Link>
                </>
              )}
            </div>
          </div>
        </motion.nav>
      </motion.div>
    );
  }, [role]);

  return <div>{navContent}</div>;
}

// Reusable dropdown component
const Dropdown = ({ title, children }) => (
  <div className="nav-item dropdown ">
    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown">{title}</a>
    <div className="dropdown-menu m-0">{children}</div>
  </div>
);

export default Nav;

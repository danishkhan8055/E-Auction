import "./Footer.css";
import { useState, useEffect } from "react";

function Footer() {
  const [FooterContent, setFooterContent] = useState(null);

  useEffect(() => {
    const updateFooter = () => {
      const role = localStorage.getItem("role");

      if (role === "admin" || role === "user") {
        setFooterContent(null);
      } else {
        setFooterContent(
          <div>
            <div className="footer container-fluid position-relative bg-dark bg-light-radial text-white-50 py-6 px-5">
              <div className="row g-5">
                <div className="col-lg-6 pe-lg-5">
                  <a href="index.html" className="navbar-brand">
                    <h1 className="m-0 display-4 text-uppercase text-white">
                      <i className="bi bi-building text-primary me-2"></i>eAuction
                    </h1>
                  </a>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores velit eius voluptatem provident, ea deserunt veritatis ipsum quia perferendis eaque minima adipisci eum necessitatibus cumque explicabo nemo magni. Necessitatibus, veniam!
                  </p>
                  <p>
                    <i className="fa fa-map-marker-alt me-2"></i>X Street, Indore, India
                  </p>
                  <p>
                    <i className="fa fa-phone-alt me-2"></i>XXX XXX XXXX
                  </p>
                  <p>
                    <i className="fa fa-envelope me-2"></i>info@example.com
                  </p>
                  <div className="d-flex justify-content-start mt-4">
                    <a className="btn btn-lg btn-primary btn-lg-square rounded-0 me-2" href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="btn btn-lg btn-primary btn-lg-square rounded-0 me-2" href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="btn btn-lg btn-primary btn-lg-square rounded-0 me-2" href="#">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a className="btn btn-lg btn-primary btn-lg-square rounded-0" href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
                <div className="col-lg-6 ps-lg-5">
                  <div className="row g-5">
                    <div className="col-sm-6">
                      <h4 className="text-white text-uppercase mb-4">Quick Links</h4>
                      <div className="d-flex flex-column justify-content-start">
                        {["Home", "About Us", "Contact", "Service", "Login"].map((item, index) => (
                          <a key={index} className="text-white-50 mb-2" href="#">
                            <i className="fa fa-angle-right me-2"></i>
                            {item}
                          </a>
                        ))}
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <h4 className="text-white text-uppercase mb-4">Popular Links</h4>
                      <div className="d-flex flex-column justify-content-start">
                        {["Home", "About Us", "Our Services", "Meet The Team", "Contact Us"].map((item, index) => (
                          <a key={index} className="text-white-50 mb-2" href="#">
                            <i className="fa fa-angle-right me-2"></i>
                            {item}
                          </a>
                        ))}
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <h4 className="text-white text-uppercase mb-4">Make Query</h4>
                      <div className="w-100">
                        <div className="input-group">
                          <input type="text" className="form-control border-light" style={{ padding: "20px 30px" }} placeholder="Your Email Address" />
                          <button className="btn btn-primary px-4">Submit</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }
    };

    updateFooter();
    const interval = setInterval(updateFooter, 10000); // Update every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return <>{FooterContent}</>;
}

export default Footer;

import "./Banner.css";
import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showBanner, setShowBanner] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const role = localStorage.getItem("role");
    setShowBanner(role !== "admin" && role !== "user");
  }, []);

  const carouselItems = useMemo(() => [
    {
      id: 1,
      imgSrc: "assets/img/banner_img1.jpg",
      iconClass: "fa fa-home fa-4x text-primary mb-4 d-none d-sm-block",
      title: "Bid Your Dream Product",
      btnText: "Get A Quote",
      btnLink: "/blog"
    },
    {
      id: 2,
      imgSrc: "assets/img/banner_img2.jpg",
      iconClass: "fa fa-tools fa-4x text-primary mb-4 d-none d-sm-block",
      title: "We Are Trusted For Your Auction",
      btnText: "Contact Us",
      btnLink: "/contact"
    },
    {
      id: 3,
      imgSrc: "assets/img/carousel-1.jpg",
      iconClass: "fa fa-gavel fa-4x text-primary mb-4 d-none d-sm-block",
      title: "Best Deals on Auctions",
      btnText: "Explore Now",
      btnLink: "/portfolio"
    },
    {
      id: 4,
      imgSrc: "assets/img/carousel-2.jpg",
      iconClass: "fa fa-star fa-4x text-primary mb-4 d-none d-sm-block",
      title: "Your Trust, Our Commitment",
      btnText: "Learn More",
      btnLink: "/about"
    }
  ], []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [carouselItems.length]);

  return showBanner ? (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1.5 }}
    >
      <div className="container-fluid p-0">
        <div id="header-carousel" className="carousel slide carousel-fade">
          <div className="carousel-inner">
            {carouselItems.map((item, index) => (
              <motion.div
                key={item.id}
                className={`carousel-item ${index === currentSlide ? "active" : ""}`}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: index === currentSlide ? 1 : 0, x: index === currentSlide ? 0 : 100 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <motion.img 
                  className="w-100" 
                  src={item.imgSrc} 
                  height="500" 
                  width="1920" 
                  alt={`Banner ${item.id}`}
                  initial={{ scale: 0.8 }}
                  animate={{ scale: index === currentSlide ? 1 : 0.9 }}
                  transition={{ duration: 1 }}
                />
                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                  <motion.div 
                    className="p-3 text-container text-center"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: index === currentSlide ? 0 : 50, opacity: index === currentSlide ? 1 : 0 }}
                    transition={{ duration: 1 }}
                  >
                    <motion.i 
                      className={item.iconClass}
                      initial={{ rotateY: 180 }}
                      animate={{ rotateY: index === currentSlide ? 0 : 180 }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                    ></motion.i>
                    <motion.h1 
                      className="banner-title text-white mb-md-4"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: index === currentSlide ? 0 : 20, opacity: index === currentSlide ? 1 : 0 }}
                      transition={{ duration: 1, delay: 0.5 }}
                    >
                      {item.title}
                    </motion.h1>
                    <motion.button 
                      onClick={()=>navigate(item.btnLink)} 
                      className="btn-custom"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {item.btnText}
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.button 
            className="carousel-control-prev" 
            type="button" 
            onClick={() => setCurrentSlide((prev) => (prev - 1 + carouselItems.length) % carouselItems.length)}
            whileHover={{ scale: 1.2 }}
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </motion.button>
          <motion.button 
            className="carousel-control-next" 
            type="button" 
            onClick={() => setCurrentSlide((prev) => (prev + 1) % carouselItems.length)}
            whileHover={{ scale: 1.2 }}
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  ) : null;
}

export default Banner;

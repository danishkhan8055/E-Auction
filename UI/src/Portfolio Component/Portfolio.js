import React from 'react';
import './Portfolio.css';

const portfolioItems = [
    {
      id: 1,
      title: 'Luxury Car Auction Platform',
      description: 'Bid on premium and vintage automobiles in real-time with live updates and filters.',
      image: 'https://cdn.rmsothebys.com/7/5/1/4/2/d/75142d2297338947ad736d21150c49e798e9396d.webp',
      tech: ['React', 'Node.js', 'MongoDB'],
    },
    {
      id: 2,
      title: 'Antique Art Bidding Portal',
      description: 'Online auction space for rare and antique artworks with high-resolution previews.',
      image: 'https://startupindiamagazine.com/wp-content/uploads/2022/06/how-auction-houses-and-art-galleries-are-trying-to-beat-the-covid-blues-with-a-digital-push.webp',
      tech: ['Next.js', 'Firebase', 'Cloudinary'],
    },
    {
      id: 3,
      title: 'Live Jewelry Auction App',
      description: 'Real-time bidding on high-end jewelry with secure user verification.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT845SKQSgGs96bka5QE5Fg-zSoobt1YCWATA&s',
      tech: ['React', 'Socket.IO', 'Express'],
    },
    {
      id: 4,
      title: 'eAuction Dashboard for Admins',
      description: 'Manage listings, approve sellers, and monitor bids through an analytics-rich dashboard.',
      image: 'https://cdn.dribbble.com/userupload/10775794/file/original-076b07774c7f20df0815711d8c40ab2e.jpg?resize=400x300',
      tech: ['Redux', 'Chart.js', 'TailwindCSS'],
    },
    {
      id: 5,
      title: 'Auction House Authentication System',
      description: 'Secure login with role-based access control for bidders, sellers, and admins.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvBwhZc5TStViLhqNdTW8b54p_j03Z4Wqhyg&s',
      tech: ['JWT', 'Zod', 'React Hook Form'],
    },
    {
      id: 6,
      title: 'Real Estate Auction Platform',
      description: 'Buy and sell properties with a live countdown, bids history, and verification.',
      image: 'https://www.bidhom.com/blog/wp-content/uploads/2023/11/step-by-step-guide-to-develop-a-successful-auction-platform-for-real-estate.webp',
      tech: ['Vue', 'Node.js', 'MySQL'],
    },
    {
      id: 7,
      title: 'Charity Auction Web App',
      description: 'Platform for NGOs to host fundraisers through live charity auctions.',
      image: 'https://www.founderjar.com/wp-content/uploads/2024/03/1.-CharityBids-Great-Auction-Websites-Example.jpeg',
      tech: ['React', 'GraphQL', 'Apollo'],
    },
    {
      id: 8,
      title: 'Bidding Notifications & Alerts',
      description: 'Stay updated with real-time notifications on winning bids and auction status.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7HdNXl2F1gFI8j-6umz-oEgFhp_ERy11Gtw&s',
      tech: ['Pusher', 'React', 'Redux Toolkit'],
    }
  ];
  

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <h1 className="portfolio-heading">My Work</h1>
      <div className="portfolio-grid">
        {portfolioItems.map((item) => (
          <div className="portfolio-card" key={item.id}>
            <img src={item.image} alt={item.title} className="portfolio-image" />
            <div className="portfolio-content">
              <h3 className="portfolio-title">{item.title}</h3>
              <p className="portfolio-description">{item.description}</p>
              <div className="portfolio-tech">
                {item.tech.map((tech, index) => (
                  <span key={index} className="tech-badge">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;

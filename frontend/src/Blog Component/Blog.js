import React, { useState } from 'react';
import './Blog.css';

const blogData = [
  {
    id: 1,
    title: 'The Rise of Luxury Auctions Online',
    description: 'Discover how digital platforms are revolutionizing the high-end auction industry.',
    fullDescription: 'Luxury auctions are now more accessible than ever with online platforms making it easy to bid on exclusive items from anywhere in the world. These platforms offer live streaming, real-time bidding, and secure payment gateways.',
    image: 'https://images.forbesindia.com/media/images/2023/Aug/img_215955_whatsappimage2023-08-10at01.14.48.jpg',
  },
  {
    id: 2,
    title: 'Top 10 Rare Watches of the Year',
    description: 'Explore the most exclusive and expensive timepieces auctioned this year.',
    fullDescription: 'This year, rare watches broke records at international auctions. Iconic brands like Rolex and Patek Philippe were among the top sellers, offering collectors a chance to own a piece of history.',
    image: 'https://usa.watchpro.com/2018/12/2018-Top-Lots-1-1.jpg',
  },
  {
    id: 3,
    title: 'Why Classic Cars Keep Gaining Value',
    description: 'A deep dive into the investment potential of vintage automobiles.',
    fullDescription: 'Classic cars have become more than just a collector’s item—they’re a reliable investment. With their scarcity and historical significance, many vintage models have appreciated in value over time.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRol6pHlya_xy5PCC8ID_3mw_WPGOc76yd5Og&s',
  },
];

const Blog = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const handleReadMore = (blog) => {
    setSelectedBlog(blog);
  };

  const handleCloseModal = () => {
    setSelectedBlog(null);
  };

  return (
    <div className="blog-container">
      <h1 className="blog-heading">Latest Blog Posts</h1>
      <div className="blog-grid">
        {blogData.map((blog) => (
          <div className="blog-card" key={blog.id}>
            <img src={blog.image} alt={blog.title} className="blog-image" />
            <div className="blog-content">
              <h2 className="blog-title">{blog.title}</h2>
              <p className="blog-description">{blog.description}</p>
              <button className="read-more-btn" onClick={() => handleReadMore(blog)}>
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedBlog && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-modal" onClick={handleCloseModal}>&times;</span>
            <h2 className="modal-title">{selectedBlog.title}</h2>
            <img src={selectedBlog.image} alt={selectedBlog.title} className="modal-image" />
            <p className="modal-description">{selectedBlog.fullDescription}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;

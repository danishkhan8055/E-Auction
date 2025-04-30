import { useState } from 'react';

function About() {
  return (
    <div className="container mx-auto py-12 px-6">
        <div className="grid grid-cols-1 gap-8 text-center">
            <div>
                <h1 className="text-5xl font-extrabold mb-6 text-gray-800">Welcome to LuxuryBid</h1>
                <p className="text-xl text-gray-600 mb-6">Your gateway to the world of elite auctions, where exclusivity meets elegance.</p>
                <hr className="my-6 border-gray-300" />
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                        <img src="https://img.freepik.com/premium-photo/three-vibrant-paper-sculptures-abstract-bird-wings-red-gray-orange-hues_38013-10579.jpg" alt="Luxury Auction" className="w-full h-80 object-cover" />
                    </div>
                    <div className="overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                        <img src="https://th.bing.com/th/id/OIP.pw1yj8Xkyj7TLSshopPUZAAAAA?rs=1&pid=ImgDetMain" alt="Luxury Watch" className="w-full h-80 object-cover" />
                    </div>
                    <div className="overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                        <img src="https://i.pinimg.com/originals/da/c4/4b/dac44b2623c66d6099f3aed85cd71f65.jpg" alt="Luxury Car" className="w-96 h-80 object-cover" />
                    </div>
                </div>
                
                <p className="mt-8 text-lg text-gray-700 leading-relaxed">
                    <strong className="text-gray-900">LuxuryBid</strong> is the ultimate platform for high-end auction enthusiasts, offering a curated selection of luxury items, including rare watches, fine jewelry, high-performance automobiles, and exclusive art pieces. Whether you are a collector or an investor, our auctions bring you unparalleled opportunities.
                </p>
                
                <p className="mt-6 text-lg text-gray-700 leading-relaxed">
                    We ensure a seamless and secure bidding experience with:
                </p>
                <ul className="text-left text-gray-600 space-y-3 mt-4 text-lg">
                    <li>✔ <strong>Verified sellers</strong> and authentic products</li>
                    <li>✔ <strong>Transparent</strong> auction processes</li>
                    <li>✔ <strong>Secure</strong> transactions and buyer protection</li>
                    <li>✔ <strong>Exclusive access</strong> to limited edition items</li>
                </ul>
                
                <p className="mt-8 text-xl text-gray-800 font-semibold">Experience the thrill of luxury bidding today!</p>
            </div>
        </div>
    </div>
  );
}
 
export default About;

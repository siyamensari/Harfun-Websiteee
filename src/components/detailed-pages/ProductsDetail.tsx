import React, { useState, useEffect } from 'react';

interface ProductsDetailProps {
  onClose: () => void;
}

const ProductsDetail: React.FC<ProductsDetailProps> = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const allProducts = [
    {
      title: 'Handcrafted Candles',
      description: 'Beautiful, aromatic candles made with natural waxes and essential oils. Perfect for creating a cozy atmosphere.',
      price: 'Rs. 800 - 1,500',
      category: 'Aromatherapy',
      image: '/assets/candle-making.webp',
      features: ['Natural wax', 'Essential oils', 'Long burning', 'Eco-friendly']
    },
    {
      title: 'Leather Journals',
      description: 'Premium leather-bound journals with hand-stitched binding. Ideal for writing, sketching, or as thoughtful gifts.',
      price: 'Rs. 1,200 - 2,500',
      category: 'Stationery',
      image: '/assets/leather-journal-making.webp',
      features: ['Genuine leather', 'Hand-stitched', 'Quality paper', 'Personalized']
    },
    {
      title: 'Ceramic Pottery',
      description: 'Unique ceramic pieces including vases, bowls, and decorative items. Each piece is handcrafted and one-of-a-kind.',
      price: 'Rs. 1,500 - 3,000',
      category: 'Home Decor',
      image: '/assets/create-with-clay.webp',
      features: ['Hand-thrown', 'Unique designs', 'Food safe', 'Microwave safe']
    },
    {
      title: 'Textile Art',
      description: 'Handwoven textiles, embroidered pieces, and fabric art. Perfect for adding texture and color to your space.',
      price: 'Rs. 2,000 - 4,500',
      category: 'Gifts & Accessories',
      image: '/assets/batik.webp',
      features: ['Handwoven', 'Natural fibers', 'Traditional techniques', 'Washable']
    },
    {
      title: 'Wooden Crafts',
      description: 'Hand-carved wooden items including decorative pieces, functional objects, and artistic sculptures.',
      price: 'Rs. 1,800 - 3,500',
      category: 'Home Decor',
      image: '/assets/wood-working.webp',
      features: ['Sustainable wood', 'Hand-carved', 'Natural finish', 'Durable']
    },
    {
      title: 'Metal Art',
      description: 'Unique metal artworks including wall pieces, sculptures, and functional items. Created using traditional techniques.',
      price: 'Rs. 2,500 - 5,000',
      category: 'Gifts & Accessories',
      image: '/assets/aluminium-art.webp',
      features: ['Hand-forged', 'Unique designs', 'Weather resistant', 'Long-lasting']
    },
    {
      title: 'Glass Art',
      description: 'Beautiful stained glass pieces, fused glass art, and decorative glass items. Each piece catches light beautifully.',
      price: 'Rs. 3,000 - 6,000',
      category: 'Home Decor',
      image: '/assets/crafted-with-passion.webp',
      features: ['Hand-cut glass', 'Vibrant colors', 'Light effects', 'Fragile beauty']
    },
    {
      title: 'Paper Crafts',
      description: 'Handmade paper products including cards, origami, and decorative paper art. Perfect for special occasions.',
      price: 'Rs. 500 - 1,200',
      category: 'Stationery',
      image: '/assets/decoupage.webp',
      features: ['Recycled paper', 'Handmade', 'Eco-friendly', 'Affordable']
    }
  ];



  return (
    <div className="text-white">
      {/* Header */}
      <div className={`text-center mb-12 transition-all duration-700 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Handcrafted Products
        </h1>
        <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
          Discover unique, handmade products created with love by our talented artisans. Each piece tells a story and brings artistic beauty into your everyday life.
        </p>
      </div>



      {/* Products Grid */}
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`} style={{ transitionDelay: '300ms' }}>
        {allProducts.map((product, index) => (
          <div
            key={index}
            className="group bg-gradient-to-br from-green-500/40 via-teal-500/40 to-blue-500/40 backdrop-blur-md rounded-2xl overflow-hidden hover:from-green-500/50 hover:via-teal-500/50 hover:to-blue-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-white/20"
          >
            <div className="relative overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                loading="lazy"
                className="w-full h-48 object-cover rounded-t-2xl group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>


            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-3">
                {product.title}
              </h3>
              <p className="text-white/80 mb-4 leading-relaxed">
                {product.description}
              </p>
              <div className="space-y-2 mb-4">
                {product.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center">
                    <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mr-3"></div>
                    <span className="text-white/70 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* Care Instructions */}
      <div className="mt-16 mb-16">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Product Care Guide</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
            <h3 className="text-xl font-bold text-white mb-4">General Care Tips</h3>
            <ul className="space-y-2 text-white/80">
              <li>• Keep away from direct sunlight and heat sources</li>
              <li>• Clean gently with soft, dry cloths</li>
              <li>• Store in cool, dry places</li>
              <li>• Handle with care to preserve beauty</li>
            </ul>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
            <h3 className="text-xl font-bold text-white mb-4">Material-Specific Care</h3>
            <ul className="space-y-2 text-white/80">
              <li>• Leather: Use leather conditioner periodically</li>
              <li>• Ceramics: Hand wash with mild soap</li>
              <li>• Textiles: Dry clean or gentle hand wash</li>
              <li>• Wood: Avoid excessive moisture</li>
            </ul>
          </div>
        </div>
      </div>

            {/* Purchase Information */}
      <div className="text-center">
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-4">Interested in Purchasing?</h3>
          <p className="text-white/80 mb-6">
            To purchase any of our handcrafted items, please reach out to us directly.
          </p>
                      <div className="bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl p-6 text-white">
              <h4 className="text-lg font-semibold mb-3">Contact Us</h4>
              <div className="space-y-2 text-sm">
                <p>📧 Email: harfunstudio@gmail.com</p>
                <p>📱 Instagram: @harfun.studio</p>
                <p>📍 Visit our studio for in-person shopping</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetail;

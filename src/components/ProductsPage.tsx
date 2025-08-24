import React from 'react';
import { Palette, Gift, Heart, Flame, Book, Sparkles } from 'lucide-react';

const ProductsPage: React.FC = () => {
  const products = [
    {
      title: 'Handcrafted Scented Candles',
      description: 'Premium soy wax candles with unique fragrances, hand-poured in artistic containers.',
      price: 'From PKR 1,200',
      image: 'https://images.pexels.com/photos/4022092/pexels-photo-4022092.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: Flame,
      features: ['Natural soy wax', 'Long-lasting fragrance', 'Reusable containers', 'Various scents'],
    },
    {
      title: 'Stained Glass Art Pieces',
      description: 'Beautiful stained glass decorations perfect for windows, gifts, or home decor.',
      price: 'From PKR 2,500',
      image: 'https://images.pexels.com/photos/3639497/pexels-photo-3639497.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: Sparkles,
      features: ['Hand-cut glass', 'Lead-free soldering', 'Custom designs', 'UV protection'],
    },
    {
      title: 'Leather-Bound Journals',
      description: 'Handmade journals with premium leather covers and high-quality paper.',
      price: 'From PKR 1,800',
      image: 'https://images.pexels.com/photos/891059/pexels-photo-891059.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: Book,
      features: ['Genuine leather', '200 pages', 'Ribbon bookmark', 'Personalization available'],
    },
    {
      title: 'Art Prints Collection',
      description: 'Limited edition prints of original Harfun Studio artworks on premium paper.',
      price: 'From PKR 800',
      image: 'https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: Palette,
      features: ['Archival quality', 'Multiple sizes', 'Limited editions', 'Certificate included'],
    },
    {
      title: 'Ceramic Pottery',
      description: 'Hand-thrown ceramic pieces including bowls, mugs, and decorative items.',
      price: 'From PKR 950',
      image: 'https://images.pexels.com/photos/1139317/pexels-photo-1139317.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: Gift,
      features: ['Food-safe glazes', 'Dishwasher safe', 'Unique patterns', 'Microwave safe'],
    },
    {
      title: 'Custom Gift Sets',
      description: 'Curated collections combining multiple handcrafted items for special occasions.',
      price: 'From PKR 3,000',
      image: 'https://images.pexels.com/photos/4022087/pexels-photo-4022087.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: Heart,
      features: ['Beautifully packaged', 'Custom combinations', 'Gift wrapping', 'Personal notes'],
    },
  ];

  const categories = [
    {
      name: 'Home Decor',
      count: '12 items',
      color: 'from-pink-500 to-red-500',
      description: 'Beautiful pieces to enhance your living space',
    },
    {
      name: 'Gifts & Accessories',
      count: '8 items',
      color: 'from-blue-500 to-indigo-500',
      description: 'Perfect gifts for art lovers and creative minds',
    },
    {
      name: 'Stationery',
      count: '6 items',
      color: 'from-green-500 to-teal-500',
      description: 'Handcrafted journals, notebooks, and writing accessories',
    },
    {
      name: 'Aromatherapy',
      count: '10 items',
      color: 'from-yellow-500 to-orange-500',
      description: 'Scented candles and aromatherapy products',
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
            Handcrafted Products
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-12">
            Discover unique, handmade products created with love by our talented artisans. 
            Each piece tells a story and brings artistic beauty into your everyday life.
          </p>
          <div className="bg-yellow-400/20 backdrop-blur-md rounded-2xl p-6 max-w-2xl mx-auto">
            <p className="text-white font-semibold text-lg">
              📧 To purchase, please contact us on email or Instagram
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Product Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div key={index} className={`bg-gradient-to-br ${category.color} rounded-2xl p-6 text-white hover:scale-105 transition-transform duration-300 shadow-xl`}>
                <h3 className="text-xl font-bold mb-2">
                  {category.name}
                </h3>
                <p className="text-white/90 text-sm mb-3">
                  {category.description}
                </p>
                <span className="text-white/80 text-sm font-medium">
                  {category.count}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-4">
            Featured Products
          </h2>
          <p className="text-white/80 text-center mb-12 text-lg">
            Each product is carefully crafted with attention to detail and artistic flair
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => {
              const IconComponent = product.icon;
              return (
                <div key={index} className="group bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                  <div className="relative overflow-hidden">
                    <img 
                      src={product.image}
                      alt={product.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3">
                      {product.title}
                    </h3>
                    <p className="text-white/80 mb-4 leading-relaxed text-sm">
                      {product.description}
                    </p>
                    <div className="mb-4">
                      <span className="text-yellow-400 font-bold text-lg">
                        {product.price}
                      </span>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-white font-semibold text-sm">Features:</h4>
                      <ul className="grid grid-cols-2 gap-1 text-xs">
                        {product.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-white/70 flex items-center">
                            <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-2"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Artisan Story */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Crafted with Passion
              </h2>
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                Every product in our collection is the result of hours of careful work by our skilled artisans. 
                We believe in preserving traditional craft techniques while adding contemporary design elements 
                that make each piece unique and special.
              </p>
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                From selecting the finest materials to the final finishing touches, we ensure that every 
                product meets our high standards of quality and artistic excellence.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">500+</div>
                  <div className="text-white/70">Products Made</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-400 mb-2">100%</div>
                  <div className="text-white/70">Handcrafted</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3760529/pexels-photo-3760529.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Artisan at work"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full opacity-70 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Care Instructions */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Product Care
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Candles & Ceramics</h3>
              <ul className="space-y-3">
                {[
                  'Keep candles away from drafts and direct sunlight',
                  'Trim wicks to 1/4 inch before lighting',
                  'Ceramics are dishwasher and microwave safe',
                  'Avoid sudden temperature changes',
                ].map((instruction, index) => (
                  <li key={index} className="text-white/80 flex items-start">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    {instruction}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Leather & Glass</h3>
              <ul className="space-y-3">
                {[
                  'Keep leather products away from direct heat',
                  'Clean stained glass with soft, lint-free cloth',
                  'Condition leather journals every 6 months',
                  'Store prints away from direct sunlight',
                ].map((instruction, index) => (
                  <li key={index} className="text-white/80 flex items-start">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    {instruction}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Gift className="w-16 h-16 mx-auto mb-6 text-pink-400" />
          <h2 className="text-4xl font-bold text-white mb-6">
            Bring Art Into Your Life
          </h2>
          <p className="text-xl text-white/80 leading-relaxed mb-8">
            Each purchase supports local artisans and helps preserve traditional crafts. 
            Contact us to learn more about our products or to place a custom order.
          </p>
          <div className="space-y-4">
                          <p className="text-white font-semibold text-lg">
                📧 Email: harfun.studio@gmail.com
              </p>
              <p className="text-white font-semibold text-lg">
                📱 Instagram: @harfun.studio
              </p>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 mt-6">
              <p className="text-white/90 text-sm">
                💝 Custom orders welcome • 🚚 Local delivery available • 🎁 Gift wrapping included
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
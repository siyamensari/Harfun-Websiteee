import React, { useState, useEffect } from 'react';

interface WorkshopsDetailProps {
  onClose: () => void;
}

const WorkshopsDetail: React.FC<WorkshopsDetailProps> = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const workshopTypes = [
    {
      title: 'Public Workshops',
      description: 'Open to everyone, these workshops are perfect for individuals looking to explore their creativity.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
        </svg>
      ),
      color: 'from-blue-500 to-indigo-500',
      features: ['Open enrollment', 'Flexible scheduling', 'Individual attention', 'Group learning']
    },
    {
      title: 'Private Workshops',
      description: 'Exclusive one-on-one or small group sessions tailored to your specific interests and skill level.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      color: 'from-purple-500 to-pink-500',
      features: ['Personalized curriculum', 'Flexible timing', 'One-on-one instruction', 'Custom projects']
    },
    {
      title: 'Corporate Workshops',
      description: 'Team building and creative sessions designed for businesses to inspire innovation and collaboration.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      color: 'from-green-500 to-teal-500',
      features: ['Team building', 'Corporate events', 'Innovation focus', 'Professional development']
    },
    {
      title: 'Destination Workshops',
      description: 'Unique workshops held at special locations, combining art with travel and new experiences.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'from-orange-500 to-red-500',
      features: ['Scenic locations', 'Travel experience', 'Cultural immersion', 'Unique settings']
    }
  ];

  const allWorkshops = [
    {
      title: 'Create with Clay',
      description: 'Shape your imagination with our hands-on sculpting & pottery sessions.',
      duration: '3 hours',
      level: 'Beginner',
      image: '/assets/create-with-clay.webp',
      category: 'Traditional Crafts',
      type: 'Public'
    },
    {
      title: 'Candle Making',
      description: 'Create beautiful, aromatic candles with professional techniques.',
      duration: '2.5 hours',
      level: 'Beginner',
      image: '/assets/candle-making.webp',
      category: 'Home & Lifestyle',
      type: 'Public'
    },
    {
      title: 'Stained Glass Art',
      description: 'Discover the ancient art of stained glass with modern techniques.',
      duration: '4 hours',
      level: 'Intermediate',
      image: '/assets/stained-glass.webp',
      category: 'Glass Art',
      type: 'Public'
    },
    {
      title: 'Leather Journal Making',
      description: 'Craft beautiful, durable journals using traditional techniques.',
      duration: '3.5 hours',
      level: 'Intermediate',
      image: '/assets/leather-journal-making.webp',
      category: 'Stationery',
      type: 'Public'
    },
    {
      title: 'Acrylic Painting',
      description: 'Explore vibrant acrylic painting techniques and methods.',
      duration: '3 hours',
      level: 'Beginner',
      image: '/assets/acrylic-painting.webp',
      category: 'Painting',
      type: 'Public'
    },
    {
      title: 'Truck Art',
      description: 'Learn Pakistani truck decoration with traditional motifs.',
      duration: '4 hours',
      level: 'Advanced',
      image: '/assets/truck-art.webp',
      category: 'Traditional Art',
      type: 'Public'
    },
    {
      title: 'Watercolor Painting',
      description: 'Master the delicate art of watercolor with techniques for landscapes, portraits, and abstract art.',
      duration: '2.5 hours',
      level: 'Beginner+',
      image: '/assets/watercolour-painting.webp',
      category: 'Painting',
      type: 'Public'
    },
    {
      title: 'Wire Sculpting',
      description: 'Create three-dimensional artworks using wire and mixed media techniques.',
      duration: '4 hours',
      level: 'All Levels',
      image: '/assets/wire-sculpting.webp',
      category: '3D Art',
      type: 'Public'
    },
    {
      title: 'Batik Art',
      description: 'Learn traditional and modern textile techniques including dyeing and fabric art.',
      duration: '3.5 hours',
      level: 'Beginner+',
      image: '/assets/batik.webp',
      category: 'Fiber Arts',
      type: 'Public'
    },
    {
      title: 'Print Making',
      description: 'Discover various printmaking techniques including linocut, screen printing, and etching.',
      duration: '3 hours',
      level: 'Intermediate',
      image: '/assets/print-making.webp',
      category: 'Printmaking',
      type: 'Public'
    },
    {
      title: 'Pot Painting',
      description: 'Transform ordinary pots into beautiful works of art with creative painting techniques.',
      duration: '2 hours',
      level: 'Beginner',
      image: '/assets/pot-painting.webp',
      category: 'Home Decor',
      type: 'Public'
    },
    {
      title: 'Jewellery Making',
      description: 'Create stunning jewelry pieces using various materials and techniques.',
      duration: '3.5 hours',
      level: 'Intermediate',
      image: '/assets/jewellery-making.webp',
      category: 'Accessories',
      type: 'Private'
    },
    {
      title: 'Metal Jewellery',
      description: 'Learn metalworking techniques to create unique jewelry pieces.',
      duration: '4 hours',
      level: 'Advanced',
      image: '/assets/metal-jewellery.webp',
      category: 'Accessories',
      type: 'Private'
    },
    {
      title: 'Fabric Jewellery',
      description: 'Create beautiful fabric-based jewelry using traditional and modern techniques.',
      duration: '2.5 hours',
      level: 'Beginner',
      image: '/assets/fabric-jewellery.webp',
      category: 'Accessories',
      type: 'Public'
    },
    {
      title: 'Cross-stitch Jewelry',
      description: 'Learn cross-stitch techniques to create unique jewelry pieces.',
      duration: '3 hours',
      level: 'Beginner+',
      image: '/assets/Cross-stitch-jewelry-tutorial.webp',
      category: 'Accessories',
      type: 'Public'
    },
    {
      title: 'Polymer Clay Jewellery',
      description: 'Create colorful and durable jewelry using polymer clay techniques.',
      duration: '3 hours',
      level: 'Intermediate',
      image: '/assets/polymer-clay-jewellery (1).webp',
      category: 'Accessories',
      type: 'Public'
    },
    {
      title: 'Mask Making',
      description: 'Design and create unique masks using various materials and techniques.',
      duration: '4 hours',
      level: 'All Levels',
      image: '/assets/mask-making.webp',
      category: 'Costume Art',
      type: 'Public'
    },
    {
      title: 'Thread Art',
      description: 'Create beautiful artworks using thread and nails on canvas.',
      duration: '3.5 hours',
      level: 'Intermediate',
      image: '/assets/thread-art.webp',
      category: 'Textile Art',
      type: 'Public'
    },
    {
      title: 'Clock Making',
      description: 'Design and assemble functional clocks with artistic elements.',
      duration: '4 hours',
      level: 'Intermediate+',
      image: '/assets/clock-making.webp',
      category: 'Home Decor',
      type: 'Private'
    },
    {
      title: 'Lamp Making',
      description: 'Create unique lamps with artistic designs and functional lighting.',
      duration: '4.5 hours',
      level: 'Advanced',
      image: '/assets/lamp-making.webp',
      category: 'Home Decor',
      type: 'Private'
    },
    {
      title: 'Resin Art',
      description: 'Explore the fascinating world of resin art with various techniques.',
      duration: '3 hours',
      level: 'Intermediate',
      image: '/assets/resin-art.webp',
      category: 'Mixed Media',
      type: 'Public'
    },
    {
      title: 'Terrarium Making',
      description: 'Create miniature ecosystems in beautiful glass containers.',
      duration: '2.5 hours',
      level: 'Beginner',
      image: '/assets/terrarium.webp',
      category: 'Nature Art',
      type: 'Public'
    },
    {
      title: 'Wood Working',
      description: 'Learn traditional woodworking techniques to create beautiful furniture and decorative pieces.',
      duration: '4 hours',
      level: 'Intermediate',
      image: '/assets/wood-working.webp',
      category: 'Woodcraft',
      type: 'Public'
    },
    {
      title: 'Mirror Painting',
      description: 'Transform mirrors into artistic pieces with creative painting techniques.',
      duration: '3 hours',
      level: 'Intermediate',
      image: '/assets/mirror-painting.webp',
      category: 'Home Decor',
      type: 'Private'
    },
    {
      title: 'Bonsai Art',
      description: 'Learn the ancient art of bonsai tree cultivation and styling.',
      duration: '5 hours',
      level: 'Advanced',
      image: '/assets/bonsai-art.webp',
      category: 'Nature Art',
      type: 'Private'
    },
    {
      title: 'Aluminium Art',
      description: 'Create unique artworks using aluminium and metalworking techniques.',
      duration: '4 hours',
      level: 'Advanced',
      image: '/assets/aluminium-art.webp',
      category: 'Metalwork',
      type: 'Public'
    },
    {
      title: 'Gardening Art',
      description: 'Learn to create beautiful garden designs and landscape art.',
      duration: '3 hours',
      level: 'Beginner',
      image: '/assets/gardening.webp',
      category: 'Nature Art',
      type: 'Public'
    },
    {
      title: 'Decoupage Art',
      description: 'Learn the beautiful art of decoupage to transform everyday objects into works of art.',
      duration: '2.5 hours',
      level: 'Beginner',
      image: '/assets/decoupage.webp',
      category: 'Paper Crafts',
      type: 'Public'
    },
    {
      title: 'Plasta Costa',
      description: 'Create unique artworks using the traditional Plasta Costa technique.',
      duration: '3.5 hours',
      level: 'Intermediate',
      image: '/assets/plasta-costa.webp',
      category: 'Mixed Media',
      type: 'Public'
    },

  ];



  return (
    <div className="text-white">
      {/* Header */}
      <div className={`text-center mb-12 transition-all duration-700 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          All Creative Workshops
        </h1>
        <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
          Discover our complete collection of workshops designed to inspire creativity at every skill level
        </p>
      </div>

      {/* Workshop Types */}
      <div className="mb-16">
        <h2 className={`text-3xl font-bold text-white mb-8 text-center transition-all duration-700 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '200ms' }}>Workshop Types</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {workshopTypes.map((type, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br from-blue-500/40 via-purple-500/40 to-pink-500/40 backdrop-blur-md rounded-2xl p-6 text-white hover:scale-105 transition-all duration-700 transform shadow-xl border border-white/20 hover:from-blue-500/50 hover:via-purple-500/50 hover:to-pink-500/50 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
                              <div className="text-4xl mb-4 text-center bg-gradient-to-br from-blue-500/60 to-purple-500/60 backdrop-blur-md rounded-full w-16 h-16 mx-auto flex items-center justify-center border border-white/20">{type.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-center">{type.title}</h3>
              <p className="text-white/90 text-sm mb-4 leading-relaxed">{type.description}</p>
              <ul className="space-y-1">
                {type.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-white/80 text-xs flex items-center">
                    <span className="w-1.5 h-1.5 bg-white rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>



      {/* Workshops Grid */}
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`} style={{ transitionDelay: '800ms' }}>
        {allWorkshops.map((workshop, index) => (
          <div
            key={index}
            className="group bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="relative overflow-hidden">
              <img
                src={workshop.image}
                alt={workshop.title}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

            </div>
            <div className="p-6">
              <h4 className="text-xl font-bold text-white mb-3">
                {workshop.title}
              </h4>
              <p className="text-white/80 mb-4 leading-relaxed">
                {workshop.description}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-white">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm">{workshop.duration}</span>
                </div>
                <span className="bg-white/20 text-white text-xs px-3 py-1 rounded-full">
                  {workshop.level}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Booking Information */}
      <div className={`mt-16 text-center transition-all duration-700 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`} style={{ transitionDelay: '1000ms' }}>
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Join a Workshop?</h3>
          <p className="text-white/80 mb-6">
            Contact us to book your spot or learn more about our workshop schedule and pricing.
          </p>
          <div className="flex justify-center">
            <button className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkshopsDetail;

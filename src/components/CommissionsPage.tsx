import React from 'react';
import { Palette, Coffee, Building, Home, Star } from 'lucide-react';

interface CommissionsPageProps {
  openLightbox: (image: string, images: string[], index: number) => void;
}

const CommissionsPage: React.FC<CommissionsPageProps> = ({ openLightbox }) => {
  const commissions = [
    {
      title: 'Café Mosaic Mural',
      category: 'Restaurant',
      description: 'A vibrant 12x8 feet mural featuring local Islamabad landmarks, creating an immersive dining atmosphere for customers.',
      image: 'https://images.pexels.com/photos/1260477/pexels-photo-1260477.jpeg?auto=compress&cs=tinysrgb&w=800',
      size: '12x8 feet',
      medium: 'Acrylic on Wall',
    },
    {
      title: 'Corporate Lobby Installation',
      category: 'Corporate',
      description: 'Abstract geometric installation using stained glass elements to represent innovation and growth in the company lobby.',
      image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800',
      size: '15x10 feet',
      medium: 'Mixed Media',
    },
    {
      title: 'Private Residence Artwork',
      category: 'Residential',
      description: 'Custom landscape painting series depicting the four seasons, designed to complement the home\'s interior design.',
      image: 'https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=800',
      size: '4 pieces - 3x4 feet each',
      medium: 'Oil on Canvas',
    },
    {
      title: 'Restaurant Brand Identity',
      category: 'Restaurant', 
      description: 'Complete visual identity including logo design, menu art, and decorative wall pieces for a new Pakistani cuisine restaurant.',
      image: 'https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=800',
      size: 'Various Sizes',
      medium: 'Digital & Traditional',
    },
    {
      title: 'Hotel Suite Artwork',
      category: 'Hospitality',
      description: 'Luxury hotel suite artwork collection featuring local Pakistani cultural motifs and contemporary design elements.',
      image: 'https://images.pexels.com/photos/2693208/pexels-photo-2693208.jpeg?auto=compress&cs=tinysrgb&w=800',
      size: '8 pieces - Various',
      medium: 'Watercolor & Acrylic',
    },
    {
      title: 'Office Space Transformation',
      category: 'Corporate',
      description: 'Complete office makeover with motivational murals, custom furniture art, and inspirational quote installations.',
      image: 'https://images.pexels.com/photos/1047540/pexels-photo-1047540.jpeg?auto=compress&cs=tinysrgb&w=800',
      size: 'Full Office Space',
      medium: 'Mixed Media',
    },
  ];

  const categories = [
    {
      name: 'Restaurants & Cafés',
      icon: Coffee,
      color: 'from-orange-500 to-red-500',
      description: 'Murals, branding, and ambient artworks that enhance dining experiences',
    },
    {
      name: 'Corporate Spaces',
      icon: Building,
      color: 'from-blue-500 to-indigo-500',
      description: 'Professional installations that inspire and motivate teams',
    },
    {
      name: 'Private Residences',
      icon: Home,
      color: 'from-green-500 to-teal-500',
      description: 'Personal artworks that reflect individual style and personality',
    },
  ];

  const allImages = commissions.map(item => item.image);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
            Custom Commissions
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-12">
            Transform your space with bespoke artwork created specifically for you. 
            From intimate residential pieces to large-scale commercial installations, 
            we bring your vision to life.
          </p>
          <div className="bg-yellow-400/20 backdrop-blur-md rounded-2xl p-6 max-w-2xl mx-auto">
            <p className="text-white font-semibold text-lg">
              📧 For commissions, please contact us via email or Instagram
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Commission Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div key={index} className="text-center group">
                  <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    {category.name}
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    {category.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Commission Gallery */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-4">
            Our Portfolio
          </h2>
          <p className="text-white/80 text-center mb-12 text-lg">
            Click on any project to view details and see our craftsmanship up close
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {commissions.map((commission, index) => (
              <div 
                key={index} 
                className="group bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
                onClick={() => openLightbox(commission.image, allImages, index)}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={commission.image}
                    alt={commission.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="bg-white/20 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full">
                      {commission.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">
                    {commission.title}
                  </h3>
                  <p className="text-white/80 mb-4 leading-relaxed text-sm">
                    {commission.description}
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-white/60">Size:</span>
                      <span className="text-white">{commission.size}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/60">Medium:</span>
                      <span className="text-white">{commission.medium}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Our Commission Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Consultation',
                description: 'We discuss your vision, space requirements, and artistic preferences.',
              },
              {
                step: '02',
                title: 'Concept Design',
                description: 'Our artists create initial sketches and digital mockups for your approval.',
              },
              {
                step: '03',
                title: 'Creation',
                description: 'We bring your commissioned artwork to life using premium materials.',
              },
              {
                step: '04',
                title: 'Installation',
                description: 'Professional installation and final touches to perfect your space.',
              },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-yellow-400 to-pink-500 rounded-2xl flex items-center justify-center shadow-xl">
                  <span className="text-2xl font-bold text-white">{process.step}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {process.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial-style Quote */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12">
            <Star className="w-12 h-12 mx-auto mb-6 text-yellow-400" />
            <blockquote className="text-2xl text-white/90 font-light leading-relaxed mb-6">
              "Every commission is a collaborative journey where your vision meets our artistry. 
              We don't just create artwork; we craft experiences that transform spaces and 
              inspire everyone who encounters them."
            </blockquote>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 via-pink-500 to-green-400 mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Palette className="w-16 h-16 mx-auto mb-6 text-red-400" />
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Commission Your Artwork?
          </h2>
          <p className="text-xl text-white/80 leading-relaxed mb-8">
            Let's discuss your project and bring your artistic vision to life. 
            Whether it's a single piece or a complete space transformation, we're here to help.
          </p>
          <div className="space-y-4">
                          <p className="text-white font-semibold text-lg">
                📧 Email: harfun.studio@gmail.com
              </p>
              <p className="text-white font-semibold text-lg">
                📱 Instagram: @harfun.studio
              </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommissionsPage;
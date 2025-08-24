import React from 'react';
import { Image, Calendar, Users, Palette } from 'lucide-react';

interface GalleryPageProps {
  openLightbox: (image: string, images: string[], index: number) => void;
}

const GalleryPage: React.FC<GalleryPageProps> = ({ openLightbox }) => {
  const galleryImages = [
    {
      url: 'https://images.pexels.com/photos/1047540/pexels-photo-1047540.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Workshop',
      title: 'Acrylic Painting Session',
    },
    {
      url: 'https://images.pexels.com/photos/1139317/pexels-photo-1139317.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Workshop',
      title: 'Pottery Making Class',
    },
    {
      url: 'https://images.pexels.com/photos/3639497/pexels-photo-3639497.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Artwork',
      title: 'Stained Glass Creation',
    },
    {
      url: 'https://images.pexels.com/photos/891059/pexels-photo-891059.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Product',
      title: 'Handmade Journals',
    },
    {
      url: 'https://images.pexels.com/photos/4022092/pexels-photo-4022092.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Product',
      title: 'Scented Candles',
    },
    {
      url: 'https://images.pexels.com/photos/1260477/pexels-photo-1260477.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Commission',
      title: 'Restaurant Mural',
    },
    {
      url: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Commission',
      title: 'Corporate Installation',
    },
    {
      url: 'https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Artwork',
      title: 'Landscape Painting',
    },
    {
      url: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Event',
      title: 'Art Exhibition Opening',
    },
    {
      url: 'https://images.pexels.com/photos/3760529/pexels-photo-3760529.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Workshop',
      title: 'Private Art Class',
    },
    {
      url: 'https://images.pexels.com/photos/2693208/pexels-photo-2693208.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Artwork',
      title: 'Abstract Composition',
    },
    {
      url: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Event',
      title: 'Corporate Team Building',
    },
    {
      url: 'https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Event',
      title: 'Destination Workshop',
    },
    {
      url: 'https://images.pexels.com/photos/4022087/pexels-photo-4022087.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Product',
      title: 'Gift Collections',
    },
    {
      url: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Event',
      title: 'Community Art Day',
    },
  ];

  const categories = [
    { name: 'All', count: galleryImages.length, icon: Image },
    { name: 'Workshop', count: galleryImages.filter(img => img.category === 'Workshop').length, icon: Users },
    { name: 'Artwork', count: galleryImages.filter(img => img.category === 'Artwork').length, icon: Palette },
    { name: 'Event', count: galleryImages.filter(img => img.category === 'Event').length, icon: Calendar },
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Workshop': return 'bg-blue-500';
      case 'Artwork': return 'bg-green-500';
      case 'Commission': return 'bg-purple-500';
      case 'Product': return 'bg-yellow-500';
      case 'Event': return 'bg-pink-500';
      default: return 'bg-gray-500';
    }
  };

  const allImages = filteredImages.map(img => img.url);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
            Art Gallery
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-12">
            Journey through our creative world. From intimate workshop moments to grand commissions, 
            this gallery showcases the vibrant life and artistic achievements of Harfun Studio.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`flex items-center px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 ${
                    selectedCategory === category.name
                      ? 'bg-white text-gray-900 shadow-xl'
                      : 'bg-white/10 backdrop-blur-md text-white hover:bg-white/20'
                  }`}
                >
                  <IconComponent className="w-5 h-5 mr-2" />
                  <span className="font-medium">{category.name}</span>
                  <span className="ml-2 text-sm opacity-70">({category.count})</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-square cursor-pointer overflow-hidden rounded-2xl bg-gray-200 hover:scale-105 transition-transform duration-300"
                onClick={() => openLightbox(image.url, allImages, index)}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium text-white ${getCategoryColor(image.category)}`}>
                        {image.category}
                      </span>
                    </div>
                    <h3 className="text-white font-semibold text-sm truncate">
                      {image.title}
                    </h3>
                  </div>
                </div>

                {/* Hover indicator */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Image className="w-4 h-4 text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Our Creative Journey
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-pink-500 to-red-500 rounded-2xl flex items-center justify-center">
                <Users className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">200+</div>
              <div className="text-white/70">Workshops Conducted</div>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center">
                <Palette className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-white/70">Commission Projects</div>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center">
                <Image className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">1000+</div>
              <div className="text-white/70">Artworks Created</div>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center">
                <Calendar className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">4+</div>
              <div className="text-white/70">Years of Creativity</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Moments */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Memorable Moments
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Community Art Days
              </h3>
              <p className="text-white/80 leading-relaxed mb-6">
                Our monthly community events bring together artists of all ages and backgrounds. 
                These sessions celebrate the joy of creating together and showcase the diversity 
                of artistic expression within our community.
              </p>
              <div className="flex items-center text-yellow-400">
                <Calendar className="w-5 h-5 mr-2" />
                <span> Every Weekend at Harfun Studio </span>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Destination Adventures
              </h3>
              <p className="text-white/80 leading-relaxed mb-6">
                Our destination workshops have taken artists to some of Pakistan's most beautiful 
                locations. These immersive experiences combine the inspiration of natural beauty 
                with hands-on artistic creation.
              </p>
              <div className="flex items-center text-blue-400">
                <Users className="w-5 h-5 mr-2" />
                <span>Seasonal outdoor workshops</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Image className="w-16 h-16 mx-auto mb-6 text-purple-400" />
          <h2 className="text-4xl font-bold text-white mb-6">
            Be Part of Our Story
          </h2>
          <p className="text-xl text-white/80 leading-relaxed mb-8">
            Every image in our gallery represents a moment of creativity, learning, and community. 
            Join us and add your own artistic journey to this ever-growing collection.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105">
              Book a Workshop
            </button>
            <button className="bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-full font-semibold hover:bg-white/30 transition-all duration-300 hover:scale-105">
              Follow on Instagram
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
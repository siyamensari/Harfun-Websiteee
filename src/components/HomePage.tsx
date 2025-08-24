import React from 'react';
import { Palette, Users, Award, MapPin, Briefcase, Image, Phone } from 'lucide-react';

interface HomePageProps {
  setCurrentPage: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ setCurrentPage }) => {
  const quickLinks = [
    {
      id: 'workshops',
      title: 'Workshops',
      description: 'Creative sessions for all skill levels',
      icon: Palette,
      color: 'from-pink-500 to-red-500',
    },
    {
      id: 'commissions',
      title: 'Commissions',
      description: 'Custom artwork for your space',
      icon: Award,
      color: 'from-yellow-500 to-orange-500',
    },
    {
      id: 'products',
      title: 'Products',
      description: 'Handcrafted items made with love',
      icon: Image,
      color: 'from-green-500 to-teal-500',
    },
    {
      id: 'internship',
      title: 'Internship',
      description: 'Learn and grow with our team',
      icon: Users,
      color: 'from-blue-500 to-indigo-500',
    },
    {
      id: 'gallery',
      title: 'Gallery',
      description: 'Explore our artistic journey',
      icon: Image,
      color: 'from-purple-500 to-pink-500',
    },
    {
      id: 'contact',
      title: 'Contact',
      description: 'Get in touch with us',
      icon: Phone,
      color: 'from-red-500 to-blue-500',
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-transparent to-blue-500/20"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="mb-8 animate-bounce">
            <div className="w-24 h-24 mx-auto bg-gradient-to-br from-red-500 via-yellow-400 to-blue-500 rounded-full flex items-center justify-center shadow-2xl">
              <Palette className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Harfun Studio
          </h1>
          <p className="text-2xl md:text-3xl text-white/90 mb-8 font-light">
            A space open for all artists
          </p>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed mb-12">
            Welcome to Islamabad's premier art destination where creativity knows no bounds. 
            Join us for workshops, commissions, and a journey into the world of art.
          </p>
          <button 
            onClick={() => setCurrentPage('about')}
            className="bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-full font-semibold hover:bg-white/30 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Discover Our Story
          </button>
        </div>
      </section>

      {/* Brushstroke Divider */}
      <div className="h-8 bg-gradient-to-r from-yellow-400 via-pink-500 to-green-400 opacity-60"></div>

      {/* About Preview */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-white mb-6">
                Where Art Comes Alive
              </h2>
              <p className="text-white/80 text-lg leading-relaxed">
                Founded with a vision to democratize art, Harfun Studio has become a beacon 
                for creativity in Islamabad. We believe that every person has an artist within, 
                waiting to be discovered and nurtured.
              </p>
              <p className="text-white/80 text-lg leading-relaxed">
                From intimate workshops to large-scale commissions, we've created a space 
                where traditional techniques meet modern expression, where beginners learn 
                alongside seasoned artists.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center text-white/90">
                  <Users className="w-5 h-5 mr-2 text-yellow-400" />
                  <span>Inclusive Community</span>
                </div>
                <div className="flex items-center text-white/90">
                  <Award className="w-5 h-5 mr-2 text-pink-400" />
                  <span>Expert Guidance</span>
                </div>
                <div className="flex items-center text-white/90">
                  <MapPin className="w-5 h-5 mr-2 text-green-400" />
                  <span>Prime Location</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1047540/pexels-photo-1047540.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Art Studio"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-yellow-400 to-pink-500 rounded-full opacity-80 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-4">
            Explore Our World
          </h2>
          <p className="text-white/80 text-center mb-12 text-lg">
            Discover all the ways you can be part of the Harfun Studio experience
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {quickLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <div
                  key={link.id}
                  onClick={() => setCurrentPage(link.id)}
                  className="group bg-white/10 backdrop-blur-md rounded-2xl p-8 cursor-pointer hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${link.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {link.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    {link.description}
                  </p>
                  <div className="mt-6 text-white/50 group-hover:text-white transition-colors duration-300">
                    Explore →
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Create Something Beautiful?
          </h2>
          <p className="text-white/80 text-lg mb-8 leading-relaxed">
            Join our community of artists, makers, and dreamers. Whether you're picking up a brush 
            for the first time or you're a seasoned creator, there's a place for you at Harfun Studio.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => setCurrentPage('workshops')}
              className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Book a Workshop
            </button>
            <button 
              onClick={() => setCurrentPage('contact')}
              className="bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-full font-semibold hover:bg-white/30 transition-all duration-300 hover:scale-105"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
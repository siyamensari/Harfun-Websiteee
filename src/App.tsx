import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Lightbox from './components/Lightbox';
import Modal from './components/Modal';
import WorkshopsDetail from './components/detailed-pages/WorkshopsDetail';
import CommissionsDetail from './components/detailed-pages/CommissionsDetail';
import ProductsDetail from './components/detailed-pages/ProductsDetail';
import InternshipsDetail from './components/detailed-pages/InternshipsDetail';
import AboutUsDetail from './components/detailed-pages/AboutUsDetail';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  
  // Modal states
  const [showWorkshopsDetail, setShowWorkshopsDetail] = useState(false);
  const [showCommissionsDetail, setShowCommissionsDetail] = useState(false);
  const [showProductsDetail, setShowProductsDetail] = useState(false);
  const [showInternshipsDetail, setShowInternshipsDetail] = useState(false);
  const [showAboutUsDetail, setShowAboutUsDetail] = useState(false);



  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openLightbox = (image: string, images: string[] = [image], index: number = 0) => {
    setLightboxImage(image);
    setLightboxImages(images);
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    setLightboxImages([]);
    setLightboxIndex(0);
  };

  // Popular Workshops data (first 6)
  const popularWorkshops = [
    {
      title: 'Create with Clay',
      description: 'Shape your imagination with our hands-on sculpting & pottery sessions.',
      duration: '3 hours',
      level: 'Beginner',
      image: '/assets/create-with-clay.webp',
    },
    {
      title: 'Candle Making',
      description: 'Create beautiful, aromatic candles with professional techniques.',
      duration: '2.5 hours',
      level: 'Beginner',
      image: '/assets/candle-making.webp',
    },
    {
      title: 'Stained Glass Art',
      description: 'Discover the ancient art of stained glass with modern techniques.',
      duration: '4 hours',
      level: 'Intermediate',
      image: '/assets/stained-glass-art.webp',
    },
    {
      title: 'Leather Journal Making',
      description: 'Craft beautiful, durable journals using traditional techniques.',
      duration: '3.5 hours',
      level: 'Intermediate',
      image: '/assets/leather-journal-making.webp',
    },
    {
      title: 'Acrylic Painting',
      description: 'Explore vibrant acrylic painting techniques and methods.',
      duration: '3 hours',
      level: 'Beginner',
      image: '/assets/acrylic-painting.webp',
    },
    {
      title: 'Truck Art',
      description: 'Learn Pakistani truck decoration with traditional motifs.',
      duration: '4 hours',
      level: 'Advanced',
      image: '/assets/truck-art.webp',
    },
  ];

  // Calculate gradient based on scroll
  const scrollProgress = Math.min(scrollY / 1000, 1);
  const backgroundStyle = {
    background: `linear-gradient(135deg, 
      #e62e25 0%,
      #e62e25 20%,
      #8e44ad 40%,
      #3498db 60%,
      #1c2033 80%,
      #1c2033 100%
    )`,
  };

  return (
    <div className="min-h-screen transition-all duration-1000 ease-in-out" style={backgroundStyle}>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-white/20">
        <div
          className="h-full transition-all duration-300"
          style={{
            width: `${(scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100}%`,
            background: 'linear-gradient(to right, #e62e25, #e62e25, #8e44ad, #3498db, #1c2033)'
          }}
        ></div>
      </div>

      <Header />

      <main>
        {/* Hero Section */}
        <section id="home" className="pt-16">
          <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-transparent to-blue-500/20"></div>
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
              <div className="mb-8 animate-bounce">
                <img 
                  src="/brand/harfun-logo-white.png" 
                  alt="Harfun Studio Logo" 
                  className="w-24 h-24 mx-auto object-contain bg-transparent"
                  style={{ background: 'transparent' }}
                />
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
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-full font-semibold hover:bg-white/30 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Discover Our Story
              </button>
            </div>
          </div>
        </section>

        {/* Brushstroke Divider */}
        <div className="h-8 opacity-80" style={{ background: 'linear-gradient(to right, #e62e25, #e62e25, #8e44ad, #3498db, #1c2033)' }}></div>

        {/* Quick Links Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-4">
              Explore Our World
            </h2>
            <p className="text-white/80 text-center mb-12 text-lg">
              Discover all the ways you can be part of the Harfun Studio experience
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  id: 'workshops',
                  title: 'Workshops',
                  description: 'Creative sessions for all skill levels',
                  color: 'from-pink-500 to-red-500',
                },
                {
                  id: 'commissions',
                  title: 'Commissions',
                  description: 'Custom artwork for your space',
                  color: 'from-yellow-500 to-orange-500',
                },
                {
                  id: 'products',
                  title: 'Products',
                  description: 'Handcrafted items made with love',
                  color: 'from-green-500 to-teal-500',
                },
                {
                  id: 'internship',
                  title: 'Internship',
                  description: 'Learn and grow with our team',
                  color: 'from-blue-500 to-indigo-500',
                },
                {
                  id: 'about',
                  title: 'About Us',
                  description: 'Our story, values, and team',
                  color: 'from-purple-500 to-pink-500',
                },
                {
                  id: 'contact',
                  title: 'Contact',
                  description: 'Get in touch with us',
                  color: 'from-red-500 to-blue-500',
                },
              ].map((link) => (
                <div
                  key={link.id}
                  onClick={() => document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' })}
                  className="group bg-white/10 backdrop-blur-md rounded-2xl p-8 cursor-pointer hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${link.color} rounded-xl flex items-center justify-center mb-6`}>
                    <img 
                      src="/brand/Harfun_H_Logo.png" 
                      alt="Harfun Studio Logo" 
                      className="w-8 h-8 object-contain"
                    />
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
              ))}
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
                onClick={() => document.getElementById('workshops')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                Book a Workshop
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-full font-semibold hover:bg-white/30 transition-all duration-300 hover:scale-105"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </section>












        {/* Workshops Section */}
        <section id="workshops" className="py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Workshops
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-12">
              Discover your artistic potential through our diverse range of workshops.
              From traditional crafts to modern techniques, we offer something for every creative soul.
            </p>

            {/* Popular Workshops Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {popularWorkshops.map((workshop, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-white/20 via-white/10 to-white/5 backdrop-blur-md rounded-2xl overflow-hidden hover:from-white/30 hover:via-white/20 hover:to-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-white/20"
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

            {/* See More Button */}
            <div className="text-center">
              <button
                onClick={() => setShowWorkshopsDetail(true)}
                className="text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg transform hover:-translate-y-1"
                style={{ background: 'linear-gradient(to right, #e62e25, #fcb415)' }}
              >
                See More
              </button>
            </div>
          </div>
        </section>



        {/* Commissions Section */}
        <section id="commissions" className="py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Commissions
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-12">
              Transform your space with bespoke artwork created specifically for you.
              From intimate residential pieces to large-scale commercial installations,
              we bring your vision to life.
            </p>

            {/* Commission Categories */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  name: 'Restaurants & Cafés',
                  icon: (
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  ),
                  color: 'from-orange-500 to-red-500',
                  description: 'Murals, branding, and ambient artworks that enhance dining experiences',
                },
                {
                  name: 'Corporate Spaces',
                  icon: (
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  ),
                  color: 'from-blue-500 to-indigo-500',
                  description: 'Professional installations that inspire and motivate teams',
                },
                {
                  name: 'Private Residences',
                  icon: (
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  ),
                  color: 'from-green-500 to-teal-500',
                  description: 'Personal artworks that reflect individual style and personality',
                },
              ].map((category, index) => (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-white/30 via-white/20 to-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl border border-white/20 group-hover:from-white/40 group-hover:via-white/30 group-hover:to-white/20">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    {category.name}
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    {category.description}
                  </p>
                </div>
              ))}
            </div>

            {/* See More Button */}
            <div className="text-center">
              <button
                onClick={() => setShowCommissionsDetail(true)}
                className="text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg transform hover:-translate-y-1"
                style={{ background: 'linear-gradient(to right, #e62e25, #fcb415)' }}
              >
                See More
              </button>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Handcrafted Products
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-12">
              Discover unique, handmade products created with love by our talented artisans.
              Each piece tells a story and brings artistic beauty into your everyday life.
            </p>

            {/* Product Categories */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              {[
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
              ].map((category, index) => (
                <div key={index} className="bg-gradient-to-br from-white/20 via-white/10 to-white/5 backdrop-blur-md rounded-2xl p-6 text-white hover:scale-105 transition-transform duration-300 shadow-xl border border-white/20 hover:from-white/30 hover:via-white/20 hover:to-white/10">
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

            {/* See More Button */}
            <div className="text-center">
              <button
                onClick={() => setShowProductsDetail(true)}
                className="text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg transform hover:-translate-y-1"
                style={{ background: 'linear-gradient(to right, #e62e25, #fcb415)' }}
              >
                See More
              </button>
            </div>
          </div>
        </section>

        {/* Internships Section */}
        <section id="internship" className="py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-8">
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-white/30 via-white/20 to-white/10 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl border border-white/20">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Internship Program
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-12">
              Join our supportive community and learn from professional artists while
              working on real projects and developing your unique creative voice.
            </p>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
              {[
                {
                  icon: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>,
                  title: 'Hands-On Experience',
                  description: 'Work directly with professional artists on real projects and commissions.',
                  color: 'from-yellow-500 to-orange-500',
                },
                {
                  icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" /></svg>,
                  title: 'Mentorship',
                  description: 'Receive guidance from experienced artists and industry professionals.',
                  color: 'from-blue-500 to-indigo-500',
                },
                {
                  icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>,
                  title: 'Portfolio Development',
                  description: 'Build a strong portfolio with diverse artworks and techniques.',
                  color: 'from-green-500 to-teal-500',
                },
                {
                  icon: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>,
                  title: 'Creative Community',
                  description: 'Join a supportive network of artists and creative professionals.',
                  color: 'from-pink-500 to-red-500',
                },
              ].map((benefit, index) => (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-white/30 via-white/20 to-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl text-white border border-white/20 group-hover:from-white/40 group-hover:via-white/30 group-hover:to-white/20">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>

            {/* See More Button */}
            <div className="text-center">
              <button
                onClick={() => setShowInternshipsDetail(true)}
                className="text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg transform hover:-translate-y-1"
                style={{ background: 'linear-gradient(to right, #e62e25, #fcb415)' }}
              >
                See More
              </button>
            </div>
          </div>
        </section>







        {/* About Us Section */}
        <section id="about" className="py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              About Us
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-12">
              Born from a passion for democratizing art, Harfun Studio has grown from a simple
              idea into Islamabad's most beloved creative space. Here's how we've built a
              community where every artist can thrive.
            </p>

            {/* Mission Statement */}
            <div className="bg-gradient-to-br from-white/20 via-white/10 to-white/5 backdrop-blur-md rounded-3xl p-12 max-w-4xl mx-auto mb-12 border border-white/20">
              <h3 className="text-3xl font-bold text-white mb-6">Our Mission</h3>
              <p className="text-xl text-white/90 leading-relaxed mb-6">
                "To create an inclusive artistic sanctuary where creativity knows no boundaries,
                where every individual can discover their unique artistic voice, and where the
                transformative power of art enriches lives and builds lasting connections."
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 via-pink-500 to-green-400 mx-auto"></div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
              {[
                { number: '500+', label: 'Conducted Workshops' },
                { number: '50+', label: 'Commission Projects' },
                { number: '1000+', label: 'Artworks Created' },
                { number: '4+', label: 'Years of Creativity' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-white mb-2 bg-gradient-to-br from-white/30 via-white/20 to-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">{stat.number}</div>
                  <div className="text-white/70">{stat.label}</div>
                </div>
              ))}
            </div>



            {/* See More Button */}
            <div className="text-center">
              <button
                onClick={() => setShowAboutUsDetail(true)}
                className="text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg transform hover:-translate-y-1"
                style={{ background: 'linear-gradient(to right, #e62e25, #fcb415)' }}
              >
                See More
              </button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Get In Touch
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-12">
              Ready to start your artistic journey? We'd love to hear from you. 
              Whether you're interested in workshops, commissions, or just want to chat about art, 
              we're here to help bring your creative vision to life.
            </p>

            {/* Contact Methods */}
            <div className="mb-16">
              <h3 className="text-4xl font-bold text-white text-center mb-12">
                Ways to Connect
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    icon: (
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    ),
                    title: 'Email Us',
                    primary: 'harfun.studio@gmail.com',
                    secondary: 'For workshops, commissions, and general inquiries',
                    color: 'from-blue-500 to-indigo-500',
                  },
                  {
                    icon: (
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                      </svg>
                    ),
                    title: 'Follow Us',
                    primary: '@harfun.studio',
                    secondary: 'Daily inspiration and behind-the-scenes content',
                    color: 'from-pink-500 to-red-500',
                  },
                  {
                    icon: (
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    ),
                    title: 'Call Us',
                    primary: '+923360956794',
                    secondary: 'Any day, 12 PM - 11 PM',
                    color: 'from-green-500 to-teal-500',
                  },
                ].map((method, index) => (
                  <div
                    key={index}
                    className="group bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                  >
                    <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${method.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      {method.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {method.title}
                    </h3>
                    {method.title === 'Email Us' ? (
                      <a 
                        href="mailto:harfun.studio@gmail.com" 
                        className="text-xl text-white font-semibold mb-2 hover:text-yellow-300 transition-colors duration-300 cursor-pointer block"
                      >
                        {method.primary}
                      </a>
                    ) : method.title === 'Follow Us' ? (
                      <a 
                        href="https://instagram.com/harfun.studio" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-xl text-white font-semibold mb-2 hover:text-yellow-300 transition-colors duration-300 cursor-pointer block"
                      >
                        {method.primary}
                      </a>
                    ) : (
                      <p className="text-xl text-white font-semibold mb-2">
                        {method.primary}
                      </p>
                    )}
                    <p className="text-white/70 mb-4">
                      {method.secondary}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Studio Information */}
            <div className="mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Studio Hours & Location */}
                <div className="space-y-8">
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
                    <div className="flex items-center mb-6">
                      <svg className="w-8 h-8 text-red-400 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <h3 className="text-2xl font-bold text-white">Visit Our Studio</h3>
                    </div>
                    <div className="space-y-3 text-white/80">
                      <p className="text-lg font-semibold">Harfun Studio</p>
                      <p>Street 3, Lakkwal</p>
                      <p>Bani Gala, Jinnah Road</p>
                      <p>Islamabad, Pakistan</p>
                      <p className="text-sm text-white/60 mt-4">
                        Located in Lakkwal, easily accessible by public transport and car
                      </p>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
                    <div className="flex items-center mb-6">
                      <svg className="w-8 h-8 text-green-400 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <h3 className="text-2xl font-bold text-white">Studio Hours</h3>
                    </div>
                    <div className="space-y-4">
                      {[
                        { day: 'Wednesday - Sunday', hours: '11:00 AM - 7:00 PM' },
                        { day: 'Monday - Tuesday', hours: 'Closed' },
                      ].map((schedule, index) => (
                        <div key={index} className="flex justify-between items-center">
                          <span className="text-white/80">{schedule.day}</span>
                          <span className="text-white font-semibold">{schedule.hours}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-sm text-white/60 mt-4">
                      * Extended hours available for private workshops and events
                    </p>
                  </div>
                </div>

                {/* Interactive Google Maps */}
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Find Us</h3>
                  <div className="w-full h-80 rounded-xl overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.449462086704!2d73.14085297669259!3d33.697316873292756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfc1e938c0759d%3A0xdfd5a67005d57332!2sHarfun%20Studio!5e0!3m2!1sen!2s!4v1756032749266!5m2!1sen!2s"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Harfun Studio Location"
                    />
                  </div>
                  <div className="mt-6 space-y-2">
                    <p className="text-white/80 text-sm">
                      <strong>Landmarks:</strong> Near Jinnah Road and Bani Gala Market
                    </p>
                    <p className="text-white/80 text-sm">
                      <strong>Parking:</strong> Street parking available
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Services & Contact Info */}
            <div className="mb-16">
              <h3 className="text-4xl font-bold text-white text-center mb-12">
                How Can We Help You?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    title: 'Workshop Bookings',
                    description: 'Public, private, corporate, and destination workshops',
                    contact: 'Email or Instagram DM',
                  },
                  {
                    title: 'Commission Inquiries',
                    description: 'Custom artwork for homes, offices, and commercial spaces',
                    contact: 'Email with project details',
                  },
                  {
                    title: 'Product Orders',
                    description: 'Handcrafted candles, journals, stained glass, and more',
                    contact: 'Instagram DM or email',
                  },
                  {
                    title: 'Internship Applications',
                    description: '6-12 weeks programs for aspiring artists',
                    contact: 'harfun.studio@gmail.com',
                  },
                ].map((service, index) => (
                  <div key={index} className="bg-gradient-to-br from-white/20 via-white/10 to-white/5 backdrop-blur-md rounded-2xl p-6 hover:from-white/30 hover:via-white/20 hover:to-white/10 transition-all duration-300 border border-white/20">
                    <h3 className="text-xl font-bold text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-white/80 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-yellow-400 rounded-full mr-3"></div>
                      <span className="text-white/70 text-sm font-medium">
                        Contact: {service.contact}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-16">
              <h3 className="text-4xl font-bold text-white text-center mb-12">
                Quick Answers
              </h3>
              <div className="space-y-6 max-w-4xl mx-auto">
                {[
                  {
                    question: 'How do I book a workshop?',
                    answer: (
                      <>
                        Simply email us at{' '}
                        <a 
                          href="mailto:harfun.studio@gmail.com" 
                          className="text-yellow-300 hover:text-yellow-200 underline transition-colors duration-300"
                        >
                          harfun.studio@gmail.com
                        </a>
                        {' '}or send us a message on{' '}
                        <a 
                          href="https://instagram.com/harfun.studio" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-yellow-300 hover:text-yellow-200 underline transition-colors duration-300"
                        >
                          Instagram @harfun.studio
                        </a>
                        . We'll help you find the perfect workshop for your interests and schedule.
                      </>
                    ),
                  },
                  {
                    question: 'Do you offer private group sessions?',
                    answer: 'Yes! We love hosting private workshops for birthdays, team building, school groups, and special occasions. Contact us to discuss your requirements.',
                  },
                  {
                    question: 'How long does a commission take?',
                    answer: 'Commission timelines vary depending on the scope and complexity of the project. Typically, small pieces take 2-4 weeks, while larger installations may take 6-8 weeks.',
                  },
                  {
                    question: 'Can beginners join your workshops?',
                    answer: 'Absolutely! Our workshops are designed to welcome artists of all skill levels. Our instructors provide guidance tailored to each participant\'s experience level.',
                  },
                ].map((faq, index) => (
                  <div key={index} className="bg-gradient-to-br from-white/20 via-white/10 to-white/5 backdrop-blur-md rounded-xl p-6 border border-white/20">
                    <h3 className="text-lg font-bold text-white mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-white/80 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-white/20 via-white/10 to-white/5 backdrop-blur-md rounded-2xl p-6 max-w-2xl mx-auto border border-white/20">
              <a 
                href="mailto:harfun.studio@gmail.com" 
                className="text-white font-semibold text-lg flex items-center justify-center mb-3 hover:text-yellow-300 transition-colors duration-300 cursor-pointer group"
              >
                <svg className="w-6 h-6 mr-2 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email: harfun.studio@gmail.com
              </a>
              <a 
                href="https://instagram.com/harfun.studio" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white font-semibold text-lg flex items-center justify-center hover:text-yellow-300 transition-colors duration-300 cursor-pointer group"
              >
                <svg className="w-6 h-6 mr-2 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
                Instagram: @harfun.studio
              </a>
            </div>
          </div>
        </section>
      </main>
      
      {/* Back to Top Button */}
      {scrollY > 500 && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-40 w-12 h-12 bg-gradient-to-br from-white/30 via-white/20 to-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:from-white/40 hover:via-white/30 hover:to-white/20 transition-all duration-300 hover:scale-110 shadow-lg border border-white/20"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
      
      <Footer />
      
      {/* Lightbox */}
      {lightboxImage && (
        <Lightbox 
          images={lightboxImages}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onNext={() => setLightboxIndex((lightboxIndex + 1) % lightboxImages.length)}
          onPrev={() => setLightboxIndex((lightboxIndex - 1 + lightboxImages.length) % lightboxImages.length)}
        />
      )}

      {/* Modal Components */}
      <Modal isOpen={showWorkshopsDetail} onClose={() => setShowWorkshopsDetail(false)}>
        <WorkshopsDetail onClose={() => setShowWorkshopsDetail(false)} />
      </Modal>

      <Modal isOpen={showCommissionsDetail} onClose={() => setShowCommissionsDetail(false)}>
        <CommissionsDetail onClose={() => setShowCommissionsDetail(false)} />
      </Modal>

      <Modal isOpen={showProductsDetail} onClose={() => setShowProductsDetail(false)}>
        <ProductsDetail onClose={() => setShowProductsDetail(false)} />
      </Modal>

      <Modal isOpen={showInternshipsDetail} onClose={() => setShowInternshipsDetail(false)}>
        <InternshipsDetail onClose={() => setShowInternshipsDetail(false)} />
      </Modal>

      <Modal isOpen={showAboutUsDetail} onClose={() => setShowAboutUsDetail(false)}>
        <AboutUsDetail onClose={() => setShowAboutUsDetail(false)} />
      </Modal>


    </div>
  );
}

export default App;
import React, { useState, useEffect, useMemo } from 'react';

interface AboutUsDetailProps {
  onClose: () => void;
}

const AboutUsDetail: React.FC<AboutUsDetailProps> = React.memo(({ onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showFullGallery, setShowFullGallery] = useState(false);
  const [visibleGalleryCount, setVisibleGalleryCount] = useState(9); // Show only 9 initially

  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  const timeline = [
    {
      year: '2020',
      title: 'The Foundation',
      description: 'Harfun Studio was established as a sculpture studio and co-working space for artist fellows, creating a nurturing environment where creativity could flourish and artistic communities could thrive.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      year: '2021',
      title: 'Community Building',
      description: 'We began conducting clay workshops and introduced diverse art forms, experimenting with various creative mediums to build a vibrant, inclusive community of artists and art enthusiasts.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
        </svg>
      )
    },
    {
      year: '2022',
      title: 'Organizational Partnerships',
      description: 'Started conducting workshops for NGOs and private organizations including Telenor, S&P Global, Jazz, and many more, expanding our reach and impact across different sectors.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      year: '2023',
      title: 'Artist Collaborations',
      description: 'Forged partnerships with talented artists to conduct their own specialized workshops, and collaborated with touring companies for unique collaborative art retreats.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      )
    },
    {
      year: '2024',
      title: 'Studio-Managed Retreats',
      description: 'Launched our own studio-managed art retreats in beautiful locations around Pakistan, offering immersive creative experiences in inspiring natural settings.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      year: '2025',
      title: 'International Outreach',
      description: 'Expanded our impact by working with different embassies and refugee programs, bringing art therapy and creative expression to diverse communities in need.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  const values = [
    {
      title: 'Accessibility',
      description: 'We believe art should be accessible to everyone, regardless of skill level or background.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
        </svg>
      )
    },
    {
      title: 'Creativity',
      description: 'Fostering creativity and encouraging artistic expression in all its forms.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      )
    },
    {
      title: 'Community',
      description: 'Building a supportive community where artists can learn, grow, and inspire each other.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: 'Quality',
      description: 'Maintaining high standards in everything we do, from materials to instruction.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    },
    {
      title: 'Sustainability',
      description: 'Using eco-friendly materials and promoting sustainable art practices.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
        </svg>
      )
    },
    {
      title: 'Innovation',
      description: 'Embracing new techniques and technologies while honoring traditional art forms.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    }
  ];

  // Memoize team data to prevent re-renders
  const team = useMemo(() => [
    {
      name: 'Abdullah Javed',
      role: 'Co-CEO & Sculptor',
      description: 'Visionary sculptor and co-founder with 15+ years in art therapy and creative workshops. Passionate about making art accessible to everyone.',
      image: '/assets/abdullah.webp'
    },
    {
      name: 'Arsalan Khan',
      role: 'Co-CEO & Sculptor',
      description: 'Creative sculptor and co-founder ensuring sustainable growth while maintaining our artistic integrity. Expert in traditional and modern techniques.',
      image: '/assets/arsalan.webp'
    },
    {
      name: 'Sana Fatima',
      role: 'Operations Manager & Designer',
      description: 'Creative coordinator who brings workshops to life and manages our vibrant community. Expert in textile arts and workshop coordination.',
      image: '/assets/sana.webp'
    }
  ], []);

  // Memoize stats data
  const stats = useMemo(() => [
    { number: '500+', label: 'Conducted Workshops' },
    { number: '50+', label: 'Commission Projects' },
    { number: '1000+', label: 'Artworks Created' },
    { number: '4+', label: 'Years of Creativity' },
    { number: '500+', label: 'Happy Participants' },
    { number: '25+', label: 'Art Forms Taught' }
  ], []);

  return (
    <div className="text-white">
      {/* Header with Close Button */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex-1"></div>
        <button
          onClick={onClose}
          className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200 hover:scale-105"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Header */}
      <div className={`text-center mb-12 transition-all duration-500 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          About Harfun Studio
        </h1>
        <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
          Born from a passion for democratizing art, Harfun Studio has grown from a simple idea into Islamabad's most beloved creative space.
        </p>
      </div>

      {/* Mission Statement */}
      <div className={`bg-white/10 backdrop-blur-md rounded-3xl p-12 max-w-4xl mx-auto mb-16 transition-all duration-500 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}>
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Our Mission</h2>
        <p className="text-xl text-white/90 leading-relaxed mb-6 text-center">
          "To create an inclusive artistic sanctuary where creativity knows no boundaries, where every individual can discover their unique artistic voice, and where the transformative power of art enriches lives and builds lasting connections."
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 via-pink-500 to-green-400 mx-auto"></div>
      </div>

      {/* Timeline */}
      <div className={`mb-16 transition-all duration-500 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}>
        <h2 className="text-3xl font-bold text-white text-center mb-12">Our Journey</h2>
        <div className="space-y-8">
          {timeline.map((milestone, index) => (
            <div key={index} className="flex items-start">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center text-white text-2xl mr-6 flex-shrink-0">
                {milestone.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center mb-2">
                  <span className="text-2xl font-bold text-yellow-400 mr-4">{milestone.year}</span>
                  <h3 className="text-xl font-bold text-white">{milestone.title}</h3>
                </div>
                <p className="text-white/80 leading-relaxed">
                  {milestone.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Values */}
      <div className={`mb-16 transition-all duration-500 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}>
        <h2 className="text-3xl font-bold text-white text-center mb-12">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="group bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-white text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                {value.title}
              </h3>
              <p className="text-white/80 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Team */}
      <div className={`mb-16 transition-all duration-500 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}>
        <h2 className="text-3xl font-bold text-white text-center mb-12">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-48 h-48 mx-auto rounded-full object-cover shadow-2xl group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-red-500/20 to-blue-500/20 group-hover:from-yellow-400/30 group-hover:to-pink-500/30 transition-all duration-300"></div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                {member.name}
              </h3>
              <p className="text-yellow-400 font-semibold mb-4">
                {member.role}
              </p>
              <p className="text-white/70 leading-relaxed mb-4">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Gallery */}
      <div className={`mb-16 transition-all duration-500 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}>
        <h2 className="text-3xl font-bold text-white text-center mb-12">Studio Gallery</h2>
        <p className="text-white/80 text-center mb-8 max-w-2xl mx-auto">
          Take a peek into our creative space and see the magic that happens at Harfun Studio
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {(() => {
            // Gallery images from public/gallery folder
            const galleryImages = [
              '/gallery/_MG_1310.webp',
              '/gallery/_MG_1371.webp',
              '/gallery/_MG_1435.webp',
              '/gallery/_MG_1437.webp',
              '/gallery/_MG_1440.webp',
              '/gallery/_MG_2701.webp',
              '/gallery/_MG_4092.webp',
              '/gallery/_MG_4147.webp',
              '/gallery/_MG_4644.webp',
              '/gallery/_MG_5273.webp',
              '/gallery/_MG_5291.webp',
              '/gallery/_MG_5324.webp',
              '/gallery/_MG_6622.webp',
              '/gallery/_MG_6626.webp',
              '/gallery/_MG_6655.webp',
              '/gallery/_MG_6657.webp',
              '/gallery/_MG_6879.webp',
              '/gallery/_MG_7004.webp',
              '/gallery/_MG_7183.webp'
            ];
            
            // Memoize shuffled array to prevent re-shuffling on every render
            const shuffledImages = useMemo(() => 
              [...galleryImages].sort(() => Math.random() - 0.5), 
              []
            );
            
            // Show images based on visible count
            const imagesToShow = shuffledImages.slice(0, visibleGalleryCount);
            
            return imagesToShow.map((image, index) => (
              <div 
                key={image} // Use image path as key for better React optimization
                className="group relative overflow-hidden rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-200"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={image}
                    alt={`Studio Gallery Image ${index + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                </div>
              </div>
            ));
          })()}
        </div>
        <div className="text-center mt-8">
          {visibleGalleryCount < 19 ? (
            <button 
              onClick={() => setVisibleGalleryCount(prev => Math.min(prev + 9, 19))}
              className="text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg transform hover:-translate-y-1"
              style={{ background: 'linear-gradient(to right, #e62e25, #fcb415)' }}
            >
              Load More Images ({visibleGalleryCount} of 19)
            </button>
          ) : (
            <button 
              onClick={() => setVisibleGalleryCount(9)}
              className="text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg transform hover:-translate-y-1"
              style={{ background: 'linear-gradient(to right, #e62e25, #fcb415)' }}
            >
              Show Less
            </button>
          )}
        </div>
      </div>

      {/* Stats */}
      <div className={`mb-16 transition-all duration-500 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}>
        <h2 className="text-3xl font-bold text-white text-center mb-12">Our Impact</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">{stat.number}</div>
              <div className="text-white/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>



      {/* Contact Information */}
      <div className={`text-center transition-all duration-500 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}>
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-4">Get in Touch</h3>
          <p className="text-white/80 mb-6">
            Want to learn more about Harfun Studio or join our community? We'd love to hear from you!
          </p>
          <div className="flex justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105">
              Visit Studio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

export default AboutUsDetail;

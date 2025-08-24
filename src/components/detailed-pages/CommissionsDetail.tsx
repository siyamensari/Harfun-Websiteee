import React, { useState, useEffect } from 'react';

interface CommissionsDetailProps {
  onClose: () => void;
}

const CommissionsDetail: React.FC<CommissionsDetailProps> = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const commissionTypes = [
    {
      title: 'Restaurants & Cafés',
      description: 'Transform dining spaces with custom murals, branding elements, and ambient artworks that enhance the customer experience.',
      examples: ['Wall murals', 'Menu artwork', 'Interior installations', 'Brand identity pieces'],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Corporate Spaces',
      description: 'Create inspiring work environments with professional installations that motivate teams and reflect company values.',
      examples: ['Lobby installations', 'Conference room art', 'Brand murals', 'Sculptural pieces'],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      color: 'from-blue-500 to-indigo-500'
    },
    {
      title: 'Private Residences',
      description: 'Design personal artworks that reflect individual style and create meaningful connections to your living space.',
      examples: ['Custom paintings', 'Sculptures', 'Wall installations', 'Garden art'],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      color: 'from-green-500 to-teal-500'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Consultation',
      description: 'We discuss your vision, space requirements, and artistic preferences to understand your needs.'
    },
    {
      step: '02',
      title: 'Concept Development',
      description: 'Our artists create initial sketches and concepts based on your brief and space analysis.'
    },
    {
      step: '03',
      title: 'Design Approval',
      description: 'You review and approve the final design concept before we begin production.'
    },
    {
      step: '04',
      title: 'Creation',
      description: 'Our skilled artists bring your vision to life using high-quality materials and techniques.'
    },
    {
      step: '05',
      title: 'Installation',
      description: 'We professionally install your artwork and ensure it perfectly fits your space.'
    }
  ];

  return (
    <div className="text-white">
      {/* Header */}
      <div className={`text-center mb-12 transition-all duration-700 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Custom Commissions
        </h1>
        <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
          Transform your space with bespoke artwork created specifically for you. From intimate residential pieces to large-scale commercial installations.
        </p>
      </div>

      {/* Commission Types */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        {commissionTypes.map((type, index) => (
          <div
            key={index}
            className={`group bg-gradient-to-br from-red-500/40 via-orange-500/40 to-yellow-500/40 backdrop-blur-md rounded-2xl overflow-hidden hover:scale-105 transition-all duration-700 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: `${200 + index * 100}ms` }}
          >
            <div className="p-8 text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-red-500/60 to-orange-500/60 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20">
                {type.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {type.title}
              </h3>
              <p className="text-white/90 mb-6 leading-relaxed">
                {type.description}
              </p>
              <div className="space-y-3">
                {type.examples.map((example, idx) => (
                  <div key={idx} className="flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    <span className="text-white/90 text-sm font-medium">{example}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Process */}
      <div className="mb-16">
        <h2 className={`text-3xl font-bold text-white text-center mb-12 transition-all duration-700 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '600ms' }}>Our Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {processSteps.map((step, index) => (
            <div key={index} className={`text-center group transition-all duration-700 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`} style={{ transitionDelay: `${800 + index * 100}ms` }}>
              <div className="w-20 h-20 bg-gradient-to-br from-pink-500/60 to-red-500/60 backdrop-blur-md rounded-full flex items-center justify-center text-white font-bold text-2xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg border border-white/20 group-hover:from-pink-500/70 group-hover:to-red-500/70">
                {step.step}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                {step.title}
              </h3>
              <p className="text-white/80 leading-relaxed text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>



      {/* Get Started */}
      <div className={`text-center transition-all duration-700 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`} style={{ transitionDelay: '1300ms' }}>
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Your Project?</h3>
          <p className="text-white/80 mb-6">
            Let's discuss your vision and create something extraordinary together. Contact us for a free consultation.
          </p>
          <div className="flex justify-center">
            <button className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105">
              Get Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommissionsDetail;

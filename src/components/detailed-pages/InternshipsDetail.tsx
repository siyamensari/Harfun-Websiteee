import React, { useState, useEffect } from 'react';

const InternshipsDetail: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="text-white">
      {/* Header */}
      <div className={`text-center mb-12 transition-all duration-700 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Internship Program
        </h1>
        <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
          Join our supportive community and learn from professional artists while working on real projects and developing your unique creative voice.
        </p>
      </div>

      {/* Key Benefits */}
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 transition-all duration-700 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`} style={{ transitionDelay: '300ms' }}>
        <div className="text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-yellow-500/60 to-orange-500/60 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-6 border border-white/20">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-4">Hands-On Experience</h3>
          <p className="text-white/80">Work directly with professional artists on real projects and commissions.</p>
        </div>

        <div className="text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500/60 to-indigo-500/60 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-6 border border-white/20">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-4">Mentorship</h3>
          <p className="text-white/80">Receive guidance from experienced artists and industry professionals.</p>
        </div>

        <div className="text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-green-500/60 to-teal-500/60 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-6 border border-white/20">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-4">Portfolio Building</h3>
          <p className="text-white/80">Create a professional portfolio showcasing your skills and growth.</p>
        </div>

        <div className="text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-purple-500/60 to-pink-500/60 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-6 border border-white/20">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-4">Community</h3>
          <p className="text-white/80">Join a network of artists and creative professionals.</p>
        </div>
      </div>

      {/* Program Details */}
      <div className={`mb-16 transition-all duration-700 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`} style={{ transitionDelay: '600ms' }}>
        <h2 className="text-3xl font-bold text-white text-center mb-12">Program Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-500/40 to-indigo-500/40 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <h3 className="text-xl font-bold text-white mb-4">Duration</h3>
            <p className="text-white/80">6-12 week programs with flexible scheduling options.</p>
          </div>
          <div className="bg-gradient-to-br from-green-500/40 to-teal-500/40 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <h3 className="text-xl font-bold text-white mb-4">Requirements</h3>
            <p className="text-white/80">Open to students and recent graduates with a passion for art.</p>
          </div>
        </div>
      </div>

      {/* How to Join */}
      <div className={`mb-16 transition-all duration-700 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`} style={{ transitionDelay: '900ms' }}>
        <h2 className="text-3xl font-bold text-white text-center mb-12">How to Join</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-500/60 to-red-500/60 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-4 border border-white/20">
              <span className="text-white font-bold text-xl">1</span>
            </div>
            <h3 className="text-lg font-bold text-white mb-3">Reach Out</h3>
            <p className="text-white/80 text-sm">Contact us on Instagram @harfun.studio or visit our studio during working hours.</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500/60 to-indigo-500/60 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-4 border border-white/20">
              <span className="text-white font-bold text-xl">2</span>
            </div>
            <h3 className="text-lg font-bold text-white mb-3">Portfolio Review</h3>
            <p className="text-white/80 text-sm">Our team will review your portfolio and assess your artistic potential.</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500/60 to-teal-500/60 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-4 border border-white/20">
              <span className="text-white font-bold text-xl">3</span>
            </div>
            <h3 className="text-lg font-bold text-white mb-3">Interview</h3>
            <p className="text-white/80 text-sm">Meet with our team to discuss your goals and program expectations.</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500/60 to-pink-500/60 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-4 border border-white/20">
              <span className="text-white font-bold text-xl">4</span>
            </div>
            <h3 className="text-lg font-bold text-white mb-3">Welcome!</h3>
            <p className="text-white/80 text-sm">Start your internship journey and join our creative community.</p>
          </div>
        </div>
      </div>

      {/* Apply Now */}
      <div className="text-center">
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Your Journey?</h3>
          <p className="text-white/80 mb-6">
            Join our community of artists and take the first step towards your creative career. Applications are accepted year-round.
          </p>
          <div className="flex justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternshipsDetail;

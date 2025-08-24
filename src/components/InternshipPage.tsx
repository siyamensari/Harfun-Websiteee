import React from 'react';
import { GraduationCap, Star, Users, Award, Clock, Heart } from 'lucide-react';

const InternshipPage: React.FC = () => {
  const benefits = [
    {
      icon: Star,
      title: 'Hands-On Experience',
      description: 'Work directly with professional artists on real projects and commissions.',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Users,
      title: 'Mentorship',
      description: 'Receive guidance from experienced artists and industry professionals.',
      color: 'from-blue-500 to-indigo-500',
    },
    {
      icon: Award,
      title: 'Portfolio Development',
      description: 'Build a strong portfolio with diverse artworks and techniques.',
      color: 'from-green-500 to-teal-500',
    },
    {
      icon: Heart,
      title: 'Creative Community',
      description: 'Join a supportive network of artists and creative professionals.',
      color: 'from-pink-500 to-red-500',
    },
  ];

  const learningAreas = [
    {
      title: 'Traditional Techniques',
      skills: ['Pottery & Ceramics', 'Oil & Acrylic Painting', 'Watercolor Techniques', 'Sketching & Drawing'],
    },
    {
      title: 'Modern Crafts',
      skills: ['Stained Glass Art', 'Candle Making', 'Leather Working', 'Mixed Media'],
    },
    {
      title: 'Business Skills',
      skills: ['Client Communication', 'Project Management', 'Art Marketing', 'Pricing & Sales'],
    },
    {
      title: 'Workshop Assistance',
      skills: ['Teaching Support', 'Event Planning', 'Social Media', 'Customer Service'],
    },
  ];

  const requirements = [
    'Passion for art and creativity',
    'Basic knowledge of at least one art form',
    'Commitment to 3-month minimum program',
    'Available for 20-30 hours per week',
    'Strong communication skills',
    'Willingness to learn and experiment',
  ];

  const applicationSteps = [
    {
      step: '01',
      title: 'Submit Application',
      description: 'Send us your portfolio, CV, and motivation letter via email or Instagram.',
    },
    {
      step: '02',
      title: 'Initial Interview',
      description: 'We\'ll schedule a casual conversation to get to know you better.',
    },
    {
      step: '03',
      title: 'Studio Visit',
      description: 'Visit our studio, meet the team, and see if we\'re a good fit.',
    },
    {
      step: '04',
      title: 'Welcome Aboard',
      description: 'Start your creative journey with us and begin learning!',
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto bg-gradient-to-br from-purple-500 via-pink-400 to-yellow-400 rounded-full flex items-center justify-center shadow-2xl">
              <GraduationCap className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
            Internship Program
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-12">
            Launch your artistic career with hands-on experience at Harfun Studio. 
            Join our supportive community and learn from professional artists while 
            working on real projects and developing your unique creative voice.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Why Intern With Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="text-center group">
                  <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Learning Areas */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-4">
            What You'll Learn
          </h2>
          <p className="text-white/80 text-center mb-12 text-lg">
            Comprehensive training across multiple disciplines to build your artistic expertise
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {learningAreas.map((area, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-6">
                  {area.title}
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {area.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center">
                      <div className="w-3 h-3 bg-gradient-to-br from-yellow-400 to-pink-500 rounded-full mr-3"></div>
                      <span className="text-white/80">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Program Details
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-yellow-400 mr-4 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold mb-2">Duration & Schedule</h4>
                    <p className="text-white/80">6-12 weeks programs, 20-30 hours per week, flexible scheduling</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="w-6 h-6 text-green-400 mr-4 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold mb-2">Small Groups</h4>
                    <p className="text-white/80">Maximum 4 interns per program for personalized attention</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Award className="w-6 h-6 text-pink-400 mr-4 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold mb-2">Certification</h4>
                    <p className="text-white/80">Certificate of completion and letter of recommendation</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3760529/pexels-photo-3760529.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Intern working"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-80 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            What We're Looking For
          </h2>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {requirements.map((requirement, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-4 h-4 bg-gradient-to-br from-green-400 to-blue-500 rounded-full mr-4"></div>
                  <span className="text-white/80">{requirement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            How to Apply
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {applicationSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-red-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-xl">
                  <span className="text-xl font-bold text-white">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            Join Our Alumni Network
          </h2>
          <p className="text-xl text-white/80 leading-relaxed mb-12">
            Our former interns have gone on to establish their own studios, teach art, 
            work in galleries, and pursue successful creative careers. Many maintain 
            ongoing relationships with Harfun Studio as collaborators and friends.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">50+</div>
              <div className="text-white/70">Graduates</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-400 mb-2">85%</div>
              <div className="text-white/70">Career Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">15+</div>
              <div className="text-white/70">Studio Partnerships</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-3xl p-12">
            <GraduationCap className="w-16 h-16 mx-auto mb-6 text-purple-400" />
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-white/80 leading-relaxed mb-8">
              Take the first step towards a rewarding career in the arts. 
              We're excited to hear from passionate individuals who want to grow and learn with us.
            </p>
            <div className="space-y-4">
              <p className="text-white font-semibold text-lg">
                📧 Send your application to: harfun.studio@gmail.com
              </p>
              <p className="text-white font-semibold text-lg">
                📱 Or message us on Instagram: @harfun.studio
              </p>
              <div className="bg-yellow-400/20 backdrop-blur-md rounded-xl p-4 mt-6">
                <p className="text-white/90 text-sm">
                  📎 Include your portfolio, CV, and a brief motivation letter
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InternshipPage;
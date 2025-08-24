import React from 'react';
import { Users, Target, Heart, Clock } from 'lucide-react';

const AboutPage: React.FC = () => {
  const timeline = [
    {
      year: '2020',
      title: 'The Beginning',
      description: 'Harfun Studio was founded with a simple vision: to create an inclusive space where art could flourish and everyone could discover their creative potential.',
    },
    {
      year: '2021',
      title: 'First Workshops',
      description: 'We launched our first public workshops, starting with pottery and painting. The response was overwhelming, with artists of all ages joining our community.',
    },
    {
      year: '2022',
      title: 'Corporate Partnerships',
      description: 'Introduced art therapy sessions for corporations, helping teams bond and reduce stress through creative expression.',
    },
    {
      year: '2023',
      title: 'Expanding Horizons',
      description: 'Added destination workshops and launched our handcrafted product line, bringing Harfun\'s artistic touch to homes across Pakistan.',
    },
    {
              year: '2020',
      title: 'Growing Community',
      description: 'Today, we continue to inspire and nurture artists, with hundreds of workshops completed and countless creative journeys begun.',
    },
  ];

  const team = [
    {
      name: 'Sarah Ahmed',
      role: 'Chief Executive Officer',
      description: 'Visionary artist and educator with 15+ years in art therapy and creative workshops.',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Hassan Ali',
      role: 'Chief Financial Officer', 
      description: 'Business strategist ensuring sustainable growth while maintaining our artistic integrity.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Fatima Khan',
      role: 'Operations Manager',
      description: 'Creative coordinator who brings workshops to life and manages our vibrant community.',
      image: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  const values = [
    {
      icon: Heart,
      title: 'Inclusivity',
      description: 'Art is for everyone, regardless of skill level, background, or experience.',
      color: 'from-pink-500 to-red-500',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'We foster connections between artists and celebrate collective creativity.',
      color: 'from-blue-500 to-indigo-500',
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for the highest quality in everything we create and teach.',
      color: 'from-green-500 to-teal-500',
    },
    {
      icon: Clock,
      title: 'Growth',
      description: 'Every session is an opportunity to learn, improve, and discover new possibilities.',
      color: 'from-yellow-500 to-orange-500',
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
            Our Story
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Born from a passion for democratizing art, Harfun Studio has grown from a simple 
            idea into Islamabad's most beloved creative space. Here's how we've built a 
            community where every artist can thrive.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center group">
                  <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Our Journey
          </h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-red-500 via-yellow-400 to-blue-500"></div>
            
            {timeline.map((item, index) => (
              <div key={index} className="relative pl-20 pb-12 last:pb-0">
                {/* Timeline Dot */}
                <div className="absolute left-5 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <div className="w-4 h-4 bg-gradient-to-br from-red-500 to-blue-500 rounded-full"></div>
                </div>
                
                {/* Content */}
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center mb-3">
                    <span className="text-2xl font-bold text-yellow-400 mr-4">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-bold text-white">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-white/80 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-4">
            Meet Our Team
          </h2>
          <p className="text-white/80 text-center mb-12 text-lg">
            The passionate individuals who make Harfun Studio a place of inspiration and growth
          </p>
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
                <p className="text-white/70 leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12">
            <h2 className="text-4xl font-bold text-white mb-8">
              Our Mission
            </h2>
            <p className="text-xl text-white/90 leading-relaxed mb-6">
              "To create an inclusive artistic sanctuary where creativity knows no boundaries, 
              where every individual can discover their unique artistic voice, and where the 
              transformative power of art enriches lives and builds lasting connections."
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 via-pink-500 to-green-400 mx-auto"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
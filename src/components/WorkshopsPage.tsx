import React from 'react';
import { Palette, Users, Briefcase, MapPin, Clock, Star } from 'lucide-react';

const WorkshopsPage: React.FC = () => {
  const publicWorkshops = [
    {
      title: 'Create with Clay',
      description: 'Shape your imagination with our hands-on sculpting &pottery sessions. Perfect for beginners and experienced artists alike.',
      duration: '3 hours',
      difficulty: 'Beginner-Friendly',
      image: 'https://images.pexels.com/photos/1139317/pexels-photo-1139317.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Scented Candle Making',
      description: 'Create beautiful, aromatic candles while learning about wax types, wicks, and fragrance blending.',
      duration: '3 hours',
      difficulty: 'All Levels',
      image: 'https://images.pexels.com/photos/4022092/pexels-photo-4022092.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Stained Glass Art',
      description: 'Discover the ancient art of stained glass with modern techniques and vibrant colors.',
      duration: '4 hours',
      difficulty: 'Intermediate',
      image: 'https://images.pexels.com/photos/3639497/pexels-photo-3639497.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Leather Journal Crafting',
      description: 'Design and create your own leather-bound journal, complete with personalized covers and binding.',
      duration: '3.5 hours',
      difficulty: 'Beginner-Friendly',
      image: 'https://images.pexels.com/photos/891059/pexels-photo-891059.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Acrylic Painting',
      description: 'Express yourself through vibrant acrylic paints. Learn techniques from color mixing to brush strokes.',
      duration: '2.5 hours',
      difficulty: 'All Levels',
      image: 'https://images.pexels.com/photos/1047540/pexels-photo-1047540.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  const workshopTypes = [
    {
      title: 'Public Workshops',
      icon: Users,
      color: 'from-pink-500 to-red-500',
      description: 'Open sessions for individuals and small groups to explore various art forms in a social setting.',
      features: ['All skill levels welcome', 'Social learning environment', 'Regular schedule', 'Small class sizes'],
    },
    {
      title: 'Private Workshops',
      icon: Star,
      color: 'from-blue-500 to-indigo-500',
      description: 'Customized sessions for schools, birthday parties, or special group events.',
      features: ['Tailored curriculum', 'Flexible scheduling', 'Group discounts', 'Custom themes'],
    },
    {
      title: 'Corporate Workshops',
      icon: Briefcase,
      color: 'from-green-500 to-teal-500',
      description: 'Art therapy sessions designed for team building, stress relief, and enhancing workplace creativity.',
      features: ['Team building focus', 'Stress reduction', 'Leadership through art', 'Workplace wellness'],
    },
    {
      title: 'Destination Workshops',
      icon: MapPin,
      color: 'from-yellow-500 to-orange-500',
      description: 'Immersive art experiences in scenic locations, combining creativity with nature.',
      features: ['Scenic locations', 'Multi-day options', 'All materials included', 'Photography sessions'],
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
            Creative Workshops
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-12">
            Discover your artistic potential through our diverse range of workshops. 
            From traditional crafts to modern techniques, we offer something for every creative soul.
          </p>
          <div className="bg-yellow-400/20 backdrop-blur-md rounded-2xl p-6 max-w-2xl mx-auto">
            <p className="text-white font-semibold text-lg">
              📧 To book a workshop, please contact us via email or Instagram
            </p>
          </div>
        </div>
      </section>

      {/* Workshop Types */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Workshop Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {workshopTypes.map((type, index) => {
              const IconComponent = type.icon;
              return (
                <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
                  <div className={`w-16 h-16 bg-gradient-to-br ${type.color} rounded-xl flex items-center justify-center mb-6`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {type.title}
                  </h3>
                  <p className="text-white/80 mb-6 leading-relaxed">
                    {type.description}
                  </p>
                  <ul className="space-y-2">
                    {type.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-white/70">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Public Workshops Showcase */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-4">
            Popular Public Workshops
          </h2>
          <p className="text-white/80 text-center mb-12 text-lg">
            Join our regular sessions and connect with fellow artists
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {publicWorkshops.map((workshop, index) => (
              <div key={index} className="group bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <div className="relative overflow-hidden">
                  <img 
                    src={workshop.image}
                    alt={workshop.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">
                    {workshop.title}
                  </h3>
                  <p className="text-white/80 mb-4 leading-relaxed">
                    {workshop.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-yellow-400">
                      <Clock className="w-4 h-4 mr-1" />
                      <span className="text-sm">{workshop.duration}</span>
                    </div>
                    <span className="bg-white/20 text-white text-xs px-3 py-1 rounded-full">
                      {workshop.difficulty}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Art Therapy */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Corporate Art Therapy
              </h2>
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                Transform your workplace culture with our specialized art therapy sessions. 
                Designed for teams, these workshops use creative expression to reduce stress, 
                enhance communication, and build stronger professional relationships.
              </p>
              <div className="space-y-4">
                {[
                  'Stress reduction and mindfulness',
                  'Team building through collaboration',
                  'Enhanced creative problem-solving',
                  'Improved workplace communication',
                  'Leadership development through art',
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-3 h-3 bg-gradient-to-br from-yellow-400 to-pink-500 rounded-full mr-3"></div>
                    <span className="text-white/80">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Corporate Workshop"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-400 to-green-500 rounded-full opacity-70 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Destination Workshops */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <img 
                src="https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Destination Workshop"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -top-6 -right-6 w-40 h-40 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full opacity-60 animate-pulse"></div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-white mb-6">
                Destination Workshops
              </h2>
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                Take your creativity to new heights with our destination workshops. 
                Set in Pakistan's most beautiful natural locations, these immersive experiences 
                combine artistic learning with the inspiration of breathtaking landscapes.
              </p>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
                <h4 className="text-white font-semibold mb-3">Popular Destinations:</h4>
                <ul className="space-y-2">
                  {[
                    'Hunza Valley - Mountain Landscapes',
                    'Skardu - Lake Reflections',
                    'Naran Kaghan - Forest Scenes',
                    'Murree Hills - Seasonal Beauty',
                  ].map((destination, index) => (
                    <li key={index} className="text-white/80 flex items-center">
                      <MapPin className="w-4 h-4 mr-2 text-green-400" />
                      {destination}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-3xl p-12">
            <Palette className="w-16 h-16 mx-auto mb-6 text-yellow-400" />
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Start Creating?
            </h2>
            <p className="text-xl text-white/80 leading-relaxed mb-8">
              Join our community of artists and discover your creative potential. 
              Every workshop is a new adventure in artistic expression.
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
        </div>
      </section>
    </div>
  );
};

export default WorkshopsPage;
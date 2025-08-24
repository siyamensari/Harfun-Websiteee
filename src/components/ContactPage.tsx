import React, { useState } from 'react';
import { Mail, Instagram, MapPin, Clock, Phone, Copy, CheckCircle } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text).then(() => {
      if (type === 'email') {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
      } else {
        setCopiedPhone(true);
        setTimeout(() => setCopiedPhone(false), 2000);
      }
    });
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Us',
      primary: 'contact@harfunstudio.com',
      secondary: 'For workshops, commissions, and general inquiries',
      color: 'from-blue-500 to-indigo-500',
      action: () => copyToClipboard('contact@harfunstudio.com', 'email'),
      copied: copiedEmail,
    },
    {
      icon: Instagram,
      title: 'Follow Us',
      primary: '@harfunstudio',
      secondary: 'Daily inspiration and behind-the-scenes content',
      color: 'from-pink-500 to-red-500',
      action: () => window.open('https://instagram.com/harfunstudio', '_blank'),
      copied: false,
    },
    {
      icon: Phone,
      title: 'Call Us',
      primary: '+92 300 1234567',
      secondary: 'Any day, 12 PM - 11 PM',
      color: 'from-green-500 to-teal-500',
      action: () => copyToClipboard('+92 300 1234567', 'phone'),
      copied: copiedPhone,
    },
  ];

  const studioHours = [
    { day: 'Wednesday - Sunday', hours: '11:00 AM - 7:00 PM' },
    { day: 'Monday - Tuesday', hours: 'Closed' },
  ];

  const services = [
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
      contact: 'internships@harfunstudio.com',
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
            Get In Touch
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-12">
            Ready to start your artistic journey? We'd love to hear from you. 
            Whether you're interested in workshops, commissions, or just want to chat about art, 
            we're here to help bring your creative vision to life.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Ways to Connect
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
                  onClick={method.action}
                >
                  <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${method.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {method.title}
                  </h3>
                  <p className="text-xl text-white font-semibold mb-2">
                    {method.primary}
                  </p>
                  <p className="text-white/70 mb-4">
                    {method.secondary}
                  </p>
                  <div className="flex items-center justify-center space-x-2">
                    {method.copied ? (
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    ) : method.icon === Mail || method.icon === Phone ? (
                      <Copy className="w-5 h-5 text-white/50 group-hover:text-white transition-colors duration-300" />
                    ) : null}
                    <span className="text-sm text-white/70 group-hover:text-white transition-colors duration-300">
                      {method.copied ? 'Copied!' : method.icon === Instagram ? 'Follow' : 'Click to copy'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Studio Information */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Studio Hours & Location */}
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <MapPin className="w-8 h-8 text-red-400 mr-4" />
                  <h3 className="text-2xl font-bold text-white">Visit Our Studio</h3>
                </div>
                <div className="space-y-3 text-white/80">
                  <p className="text-lg font-semibold">Harfun Studio</p>
                  <p>Shop No. 15, Ground Floor</p>
                  <p>F-7 Markaz, Blue Area</p>
                  <p>Islamabad, Pakistan</p>
                  <p className="text-sm text-white/60 mt-4">
                    Located in the heart of F-7 Markaz, easily accessible by public transport and car
                  </p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <Clock className="w-8 h-8 text-green-400 mr-4" />
                  <h3 className="text-2xl font-bold text-white">Studio Hours</h3>
                </div>
                <div className="space-y-4">
                  {studioHours.map((schedule, index) => (
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

            {/* Map Placeholder */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Find Us</h3>
              <div className="aspect-square bg-white/5 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-white/40 mx-auto mb-4" />
                  <p className="text-white/60 mb-2">Interactive Map</p>
                  <p className="text-sm text-white/40">
                    F-7 Markaz, Blue Area<br />
                    Islamabad, Pakistan
                  </p>
                </div>
              </div>
              <div className="mt-6 space-y-2">
                <p className="text-white/80 text-sm">
                  <strong>Landmarks:</strong> Near Jinnah Super Market and F-7 Park
                </p>
                <p className="text-white/80 text-sm">
                  <strong>Parking:</strong> Free parking available in F-7 Markaz
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services & Contact Info */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            How Can We Help You?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
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
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Quick Answers
          </h2>
          <div className="space-y-6">
            {[
              {
                question: 'How do I book a workshop?',
                answer: 'Simply email us at contact@harfunstudio.com or send us a message on Instagram @harfunstudio. We\'ll help you find the perfect workshop for your interests and schedule.',
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
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6">
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
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-3xl p-12">
            <Mail className="w-16 h-16 mx-auto mb-6 text-blue-400" />
            <h2 className="text-4xl font-bold text-white mb-6">
              Let's Create Together
            </h2>
            <p className="text-xl text-white/80 leading-relaxed mb-8">
              Whether you're taking your first steps into the art world or you're a seasoned creator, 
              we're here to support your artistic journey. Reach out and let's make something beautiful together.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => copyToClipboard('contact@harfunstudio.com', 'email')}
                className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                {copiedEmail ? 'Email Copied!' : 'Copy Email'}
              </button>
              <button 
                onClick={() => window.open('https://instagram.com/harfunstudio', '_blank')}
                className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                Follow Instagram
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
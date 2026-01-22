import { Recycle, DollarSign, MapPin, Clock, TrendingUp, Leaf, Zap, Shield, ArrowRight, Sparkles, Award, Users } from 'lucide-react';

const HomePage = ({ setCurrentPage }) => (
  <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-cyan-50 to-blue-50 overflow-hidden">
    {/* Animated Background Elements */}
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-green-400/30 to-cyan-400/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
    </div>

    {/* Navigation */}
    <nav className="relative z-10 bg-white/80 backdrop-blur-md border-b border-gray-200/50 sticky top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-cyan-500 rounded-xl blur-md group-hover:blur-lg transition-all"></div>
              <div className="relative bg-gradient-to-r from-green-500 to-cyan-500 p-2 rounded-xl">
                <Recycle className="w-6 h-6 text-white" />
              </div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-green-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Scrapzee
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setCurrentPage('pricing')}
              className="hidden sm:block px-4 py-2 text-gray-700 hover:text-green-600 font-medium transition-colors"
            >
              Pricing
            </button>
            <button
              onClick={() => setCurrentPage('login')}
              className="px-6 py-2.5 bg-gradient-to-r from-green-500 to-cyan-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </nav>

    {/* Hero Section */}
    <div className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg mb-8 border border-green-200/50">
            <Sparkles className="w-4 h-4 text-green-600" />
            <span className="text-sm font-semibold bg-gradient-to-r from-green-600 to-cyan-600 bg-clip-text text-transparent">
              India's #1 Scrap Recycling Platform
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
            <span className="block bg-gradient-to-r from-green-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent animate-gradient">
              Turn Your Scrap
            </span>
            <span className="block mt-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient" style={{ animationDelay: '0.5s' }}>
              Into Cash! 💰
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
            Join <span className="font-bold text-green-600">10,000+</span> smart Indians who are making money while saving the planet. 
            <span className="block mt-2 text-lg text-gray-600">
               Easy •  Fast •  Trusted
            </span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={() => setCurrentPage('login')}
              className="group relative px-8 py-4 bg-gradient-to-r from-green-500 via-cyan-500 to-blue-500 text-white rounded-2xl font-bold text-lg shadow-2xl hover:shadow-green-500/50 transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 via-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="relative flex items-center gap-2">
                Start Earning Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button
              onClick={() => setCurrentPage('pricing')}
              className="px-8 py-4 bg-white/90 backdrop-blur-sm text-gray-800 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl border-2 border-green-200 transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
            >
              <TrendingUp className="w-5 h-5 text-green-600" />
              View Live Prices
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Users, value: '10K+', label: 'Happy Users', color: 'from-green-500 to-emerald-500' },
              { icon: Recycle, value: '50K+', label: 'Tons Recycled', color: 'from-cyan-500 to-blue-500' },
              { icon: DollarSign, value: '₹2Cr+', label: 'Paid Out', color: 'from-purple-500 to-pink-500' },
              { icon: Award, value: '4.9★', label: 'User Rating', color: 'from-yellow-500 to-orange-500' }
            ].map((stat, i) => (
              <div key={i} className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-200/50 transform hover:scale-105 transition-all">
                <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-3 mx-auto`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-3xl font-bold text-gray-800 mb-1">{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* How It Works */}
    <div className="relative bg-white/50 backdrop-blur-sm py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="text-xl text-gray-600">Get cash for your scrap in 3 simple steps</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              step: '1',
              icon: Recycle,
              title: 'List Your Scrap',
              desc: 'Tell us what you have - paper, plastic, metal, or electronics',
              color: 'from-green-400 to-emerald-500',
              bgColor: 'from-green-50 to-emerald-50'
            },
            {
              step: '2',
              icon: Clock,
              title: 'Schedule Pickup',
              desc: 'Choose a convenient time and we will come to your doorstep',
              color: 'from-cyan-400 to-blue-500',
              bgColor: 'from-cyan-50 to-blue-50'
            },
            {
              step: '3',
              icon: DollarSign,
              title: 'Get Paid Instantly',
              desc: 'Receive cash or UPI payment on the spot - no waiting!',
              color: 'from-purple-400 to-pink-500',
              bgColor: 'from-purple-50 to-pink-50'
            }
          ].map((item, i) => (
            <div key={i} className="group relative">
              <div className={`absolute inset-0 bg-gradient-to-br ${item.bgColor} rounded-3xl transform group-hover:scale-105 transition-transform`}></div>
              <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-gray-200/50 transform group-hover:-translate-y-2 transition-all">
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className={`text-5xl font-black bg-gradient-to-br ${item.color} bg-clip-text text-transparent opacity-20`}>
                    {item.step}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Features */}
    <div className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Why Choose Scrapzee?
          </h2>
          <p className="text-xl text-gray-600">The smarter way to recycle and earn</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: DollarSign,
              title: 'Best Market Prices',
              desc: 'Get up to 20% more than traditional scrap dealers with our dynamic pricing',
              color: 'from-green-400 to-emerald-500',
              bgGlow: 'from-green-400/20 to-emerald-400/20'
            },
            {
              icon: MapPin,
              title: 'Doorstep Pickup',
              desc: 'No hassle of transporting scrap - we collect from your location for free',
              color: 'from-cyan-400 to-blue-500',
              bgGlow: 'from-cyan-400/20 to-blue-400/20'
            },
            {
              icon: Clock,
              title: 'Lightning Fast',
              desc: 'Same-day pickup available! Get paid within minutes of collection',
              color: 'from-purple-400 to-pink-500',
              bgGlow: 'from-purple-400/20 to-pink-400/20'
            },
            {
              icon: Shield,
              title: '100% Safe & Secure',
              desc: 'Verified dealers, digital receipts, and secure payment - fully insured',
              color: 'from-orange-400 to-red-500',
              bgGlow: 'from-orange-400/20 to-red-400/20'
            },
            {
              icon: Leaf,
              title: 'Eco-Friendly',
              desc: 'Help reduce landfill waste and carbon footprint - save the planet!',
              color: 'from-teal-400 to-green-500',
              bgGlow: 'from-teal-400/20 to-green-400/20'
            },
            {
              icon: Zap,
              title: 'Digital First',
              desc: 'Track everything on your phone - from request to payment, all digital',
              color: 'from-indigo-400 to-purple-500',
              bgGlow: 'from-indigo-400/20 to-purple-400/20'
            }
          ].map((feat, i) => (
            <div key={i} className="group relative">
              <div className={`absolute inset-0 bg-gradient-to-br ${feat.bgGlow} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity`}></div>
              <div className="relative bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-2xl border border-gray-200/50 transform hover:-translate-y-2 transition-all">
                <div className={`w-14 h-14 bg-gradient-to-br ${feat.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all`}>
                  <feat.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{feat.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Testimonials */}
    <div className="relative bg-gradient-to-br from-green-500 via-cyan-500 to-blue-500 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
            Loved by Thousands
          </h2>
          <p className="text-xl text-white/90">See what our happy customers say</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: 'Priya Sharma',
              role: 'Homemaker, Mumbai',
              text: 'Made ₹5,000 last month just from household scrap! So easy and convenient. Highly recommended! 🌟',
              avatar: '👩'
            },
            {
              name: 'Rajesh Kumar',
              role: 'Shop Owner, Delhi',
              text: 'Best prices in the market! The pickup service is punctual and professional. Great platform! 💯',
              avatar: '👨'
            },
            {
              name: 'Anita Desai',
              role: 'Teacher, Bangalore',
              text: 'Love how I am earning while helping the environment. The app is super user-friendly! 🌱',
              avatar: '👩‍🏫'
            }
          ].map((testimonial, i) => (
            <div key={i} className="bg-white/95 backdrop-blur-sm p-8 rounded-3xl shadow-xl transform hover:scale-105 transition-all">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-cyan-400 rounded-full flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed italic">"{testimonial.text}"</p>
              <div className="flex gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">⭐</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* CTA Section */}
    <div className="relative py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-gradient-to-br from-green-500 via-cyan-500 to-blue-500 rounded-3xl p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
          <div className="relative">
            <Sparkles className="w-16 h-16 text-white mx-auto mb-6 animate-bounce" />
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Ready to Start Earning?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of smart Indians making money from their scrap. It's free, fast, and super easy!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setCurrentPage('login')}
                className="px-8 py-4 bg-white text-gray-800 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all"
              >
                Get Started For Free 
              </button>
              <button
                onClick={() => setCurrentPage('pricing')}
                className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-2xl font-bold text-lg border-2 border-white hover:bg-white/30 transform hover:-translate-y-1 transition-all"
              >
                View Pricing
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Footer */}
    <footer className="relative bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-to-r from-green-500 to-cyan-500 p-2 rounded-xl">
                <Recycle className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">Scrapzee</span>
            </div>
            <p className="text-gray-400">Making recycling rewarding and simple for everyone.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><button onClick={() => setCurrentPage('pricing')} className="hover:text-green-400 transition-colors">Pricing</button></li>
              <li><button onClick={() => setCurrentPage('login')} className="hover:text-green-400 transition-colors">Login</button></li>
              <li><button className="hover:text-green-400 transition-colors">About Us</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Categories</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Paper & Cardboard</li>
              <li>Plastic & Bottles</li>
              <li>Metal & Electronics</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>📧 hello@scrapzee.com</li>
              <li>📱 +91 98765 43xxx</li>
              <li>📍 Belagavi, India</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>© 2026 Scrapzee. All rights reserved. Made in India</p>
        </div>
      </div>
    </footer>

    <style>{`
      @keyframes gradient {
        0%, 100% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
      }
      .animate-gradient {
        background-size: 200% 200%;
        animation: gradient 3s ease infinite;
      }
    `}</style>
  </div>
);

export default HomePage;

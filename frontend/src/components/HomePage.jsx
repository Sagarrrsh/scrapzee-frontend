import { Recycle, TrendingUp, MapPin, Clock, ArrowRight, Sparkles, CheckCircle } from 'lucide-react';

const HomePage = ({ setCurrentPage }) => (
  <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-cyan-50">
    {/* Subtle Background */}
    <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-40">
      <div className="absolute top-20 -left-20 w-72 h-72 bg-green-400/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 -right-20 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl"></div>
    </div>

    {/* Navigation */}
    <nav className="relative z-10 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-r from-green-500 to-cyan-500 p-2 rounded-lg">
              <Recycle className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-cyan-600 bg-clip-text text-transparent">
              Scrapzee
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setCurrentPage('pricing')}
              className="hidden sm:inline-block text-gray-700 hover:text-green-600 font-medium transition-colors"
            >
              Pricing
            </button>
            <button
              onClick={() => setCurrentPage('login')}
              className="px-5 py-2 bg-gradient-to-r from-green-500 to-cyan-500 text-white rounded-lg font-semibold shadow-md hover:shadow-lg transition-all"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </nav>

    {/* Hero Section */}
    <div className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-20">
        <div className="text-center max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full mb-6 border border-green-200">
            <Sparkles className="w-4 h-4 text-green-600" />
            <span className="text-sm font-semibold text-green-700">
              Trusted by 10,000+ Users
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Turn Your Scrap Into
            <span className="block mt-2 bg-gradient-to-r from-green-600 to-cyan-600 bg-clip-text text-transparent">
              Instant Cash 💰
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed">
            Get the best prices for paper, plastic, metal & electronics. 
            <span className="block mt-2 font-semibold text-gray-700">
              Doorstep pickup • Instant payment • 100% Safe
            </span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => setCurrentPage('login')}
              className="px-8 py-4 bg-gradient-to-r from-green-500 to-cyan-500 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
            >
              Get Started Free
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => setCurrentPage('pricing')}
              className="px-8 py-4 bg-white text-gray-700 rounded-xl font-bold text-lg shadow-md hover:shadow-lg border-2 border-gray-200 hover:border-green-300 transition-all"
            >
              View Prices
            </button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto">
            {[
              { value: '10K+', label: 'Users' },
              { value: '₹2Cr+', label: 'Paid Out' },
              { value: '4.9★', label: 'Rating' }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-gray-800">{stat.value}</p>
                <p className="text-sm sm:text-base text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* How It Works */}
    <div className="relative bg-white py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-gray-800">
            How It Works
          </h2>
          <p className="text-lg text-gray-600">Simple, fast, and rewarding</p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
          {[
            {
              step: '1',
              icon: Recycle,
              title: 'List Your Scrap',
              desc: 'Tell us what you have',
              color: 'from-green-500 to-emerald-500'
            },
            {
              step: '2',
              icon: Clock,
              title: 'Schedule Pickup',
              desc: 'Choose your time slot',
              color: 'from-cyan-500 to-blue-500'
            },
            {
              step: '3',
              icon: TrendingUp,
              title: 'Get Paid',
              desc: 'Instant cash or UPI',
              color: 'from-purple-500 to-pink-500'
            }
          ].map((item, i) => (
            <div key={i} className="relative bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all border border-gray-100">
              <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center shadow-md mb-4`}>
                <item.icon className="w-7 h-7 text-white" />
              </div>
              <div className={`absolute top-4 right-4 w-10 h-10 bg-gradient-to-br ${item.color} opacity-10 rounded-full flex items-center justify-center`}>
                <span className="text-2xl font-bold text-gray-800">{item.step}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Features */}
    <div className="relative py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-gray-800">
            Why Choose Us?
          </h2>
          <p className="text-lg text-gray-600">The smart way to recycle</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: TrendingUp,
              title: 'Best Prices',
              desc: 'Get up to 20% more than local dealers',
              color: 'from-green-500 to-emerald-500'
            },
            {
              icon: MapPin,
              title: 'Free Pickup',
              desc: 'Doorstep collection at zero cost',
              color: 'from-cyan-500 to-blue-500'
            },
            {
              icon: Clock,
              title: 'Same Day Service',
              desc: 'Quick pickup and instant payment',
              color: 'from-purple-500 to-pink-500'
            },
            {
              icon: CheckCircle,
              title: '100% Verified',
              desc: 'Trusted dealers and secure payments',
              color: 'from-orange-500 to-red-500'
            },
            {
              icon: Recycle,
              title: 'Eco-Friendly',
              desc: 'Help reduce waste and save planet',
              color: 'from-teal-500 to-green-500'
            },
            {
              icon: Sparkles,
              title: 'Easy to Use',
              desc: 'Simple app with real-time tracking',
              color: 'from-indigo-500 to-purple-500'
            }
          ].map((feat, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all border border-gray-100">
              <div className={`w-12 h-12 bg-gradient-to-br ${feat.color} rounded-lg flex items-center justify-center mb-4 shadow-sm`}>
                <feat.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">{feat.title}</h3>
              <p className="text-gray-600 text-sm">{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* CTA Section */}
    <div className="relative py-16 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-green-500 to-cyan-500 rounded-3xl p-8 sm:p-12 shadow-xl text-center">
          <Sparkles className="w-12 h-12 text-white mx-auto mb-4" />
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Start Earning?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of Indians making money from scrap. Free, fast & easy!
          </p>
          <button
            onClick={() => setCurrentPage('login')}
            className="px-8 py-4 bg-white text-gray-800 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all inline-flex items-center gap-2"
          >
            Get Started Now
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>

    {/* Footer */}
    <footer className="relative bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="bg-gradient-to-r from-green-500 to-cyan-500 p-1.5 rounded-lg">
                <Recycle className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold">Scrapzee</span>
            </div>
            <p className="text-gray-400 text-sm">Making recycling rewarding for everyone.</p>
          </div>
          <div>
            <h4 className="font-bold mb-3 text-sm">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><button onClick={() => setCurrentPage('pricing')} className="hover:text-green-400 transition-colors">Pricing</button></li>
              <li><button onClick={() => setCurrentPage('login')} className="hover:text-green-400 transition-colors">Login</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3 text-sm">Categories</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Paper</li>
              <li>Plastic</li>
              <li>Metal</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3 text-sm">Contact</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>📧 hello@scrapzee.com</li>
              <li> 📍 Belagavi, India</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 text-center text-gray-400 text-sm">
          <p>© 2024 Scrapzee. Made in India</p>
        </div>
      </div>
    </footer>
  </div>
);

export default HomePage;

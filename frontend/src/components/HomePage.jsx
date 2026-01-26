import { Recycle, TrendingUp, Clock, ArrowRight, Sparkles } from 'lucide-react';

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
          <button
            onClick={() => setCurrentPage('login')}
            className="px-5 py-2 bg-gradient-to-r from-green-500 to-cyan-500 text-white rounded-lg font-semibold shadow-md hover:shadow-lg transition-all"
          >
            Sign In
          </button>
        </div>
      </div>
    </nav>

    {/* Hero Section */}
    <div className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-20 pb-16">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full mb-6 border border-green-200">
            <Sparkles className="w-4 h-4 text-green-600" />
            <span className="text-sm font-semibold text-green-700">Trusted by 10,000+ Users</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Turn Your Scrap Into
            <span className="block mt-2 bg-gradient-to-r from-green-600 to-cyan-600 bg-clip-text text-transparent">
              Instant Cash ₹
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 mb-10">
            Best prices • Free pickup • Instant payment
          </p>

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
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-gray-800">How It Works</h2>
          <p className="text-lg text-gray-600">Simple, fast, and rewarding</p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
          {[
            { icon: Recycle, title: 'List Your Scrap', desc: 'Tell us what you have', color: 'from-green-500 to-emerald-500' },
            { icon: Clock, title: 'Schedule Pickup', desc: 'Choose your time slot', color: 'from-cyan-500 to-blue-500' },
            { icon: TrendingUp, title: 'Get Paid ₹', desc: 'Instant cash or UPI', color: 'from-purple-500 to-pink-500' }
          ].map((item, i) => (
            <div key={i} className="relative bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all border border-gray-100">
              <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center shadow-md mb-4`}>
                <item.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;
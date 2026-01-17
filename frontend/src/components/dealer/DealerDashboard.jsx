import { useState, useEffect } from 'react';
import { Package, DollarSign, Clock, CheckCircle, TrendingUp, Loader2, AlertCircle } from 'lucide-react';

const API_BASE = '/api';

const DealerDashboard = ({ user, token, setCurrentPage }) => {
  const [dashboard, setDashboard] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboard();
    const interval = setInterval(fetchDashboard, 10000); // Refresh every 10 seconds
    return () => clearInterval(interval);
  }, []);

  const fetchDashboard = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/dealers/dashboard`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (res.ok) {
        const data = await res.json();
        setDashboard(data);
      }
    } catch (err) {
      console.error('Failed to fetch dashboard', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Dealer Dashboard</h1>
        <p className="text-gray-600 mt-2">Welcome back, {user?.full_name}!</p>
      </div>

      {loading ? (
        <div className="flex justify-center items-center py-20">
          <Loader2 className="w-12 h-12 animate-spin text-green-600" />
        </div>
      ) : dashboard ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { label: 'Total Requests', value: dashboard.stats.total_requests, icon: Package, bgColor: 'bg-blue-100', textColor: 'text-blue-600' },
              { label: 'Accepted', value: dashboard.stats.accepted_requests, icon: Clock, bgColor: 'bg-yellow-100', textColor: 'text-yellow-600' },
              { label: 'Completed', value: dashboard.stats.completed_requests, icon: CheckCircle, bgColor: 'bg-green-100', textColor: 'text-green-600' },
              { label: 'Total Earnings', value: `₹${dashboard.stats.total_earnings.toFixed(2)}`, icon: DollarSign, bgColor: 'bg-purple-100', textColor: 'text-purple-600' }
            ].map((stat, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className={`${stat.bgColor} w-12 h-12 rounded-xl flex items-center justify-center mb-4`}>
                  <stat.icon className={`w-6 h-6 ${stat.textColor}`} />
                </div>
                <p className="text-gray-600 text-sm mb-1">{stat.label}</p>
                <p className="text-2xl md:text-3xl font-bold text-gray-800">{stat.value}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Performance</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl">
                  <div>
                    <p className="text-sm text-gray-600">Total Pickups</p>
                    <p className="text-2xl font-bold text-gray-800">{dashboard.stats.total_pickups}</p>
                  </div>
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <div className="flex justify-between items-center p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl">
                  <div>
                    <p className="text-sm text-gray-600">Rating</p>
                    <p className="text-2xl font-bold text-gray-800">{dashboard.stats.rating.toFixed(1)} ⭐</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Recent Transactions</h2>
              {dashboard.recent_transactions?.length > 0 ? (
                <div className="space-y-3 max-h-64 overflow-y-auto">
                  {dashboard.recent_transactions.map(txn => (
                    <div key={txn.id} className="flex justify-between items-center p-3 border-2 border-gray-100 rounded-xl hover:border-green-200 transition-colors">
                      <div>
                        <p className="font-semibold text-gray-800">Req #{txn.request_id}</p>
                        <p className="text-xs text-gray-500">{new Date(txn.created_at).toLocaleDateString('en-IN')}</p>
                      </div>
                      <p className="font-bold text-green-600">₹{txn.amount.toFixed(2)}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <DollarSign className="w-12 h-12 text-gray-300 mx-auto mb-2" />
                  <p className="text-gray-500">No transactions yet</p>
                </div>
              )}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <button
              onClick={() => setCurrentPage('dealer-available')}
              className="p-6 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <Package className="w-8 h-8 mb-2" />
              <p className="font-bold text-lg">Available Requests</p>
              <p className="text-sm opacity-90">View & Accept New Orders</p>
            </button>
            <button
              onClick={() => setCurrentPage('dealer-requests')}
              className="p-6 bg-white text-gray-800 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border-2 border-green-200"
            >
              <Clock className="w-8 h-8 mb-2 text-green-600" />
              <p className="font-bold text-lg">My Requests</p>
              <p className="text-sm text-gray-600">Manage Accepted Orders</p>
            </button>
            <button
              onClick={() => setCurrentPage('dealer-transactions')}
              className="p-6 bg-white text-gray-800 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border-2 border-purple-200"
            >
              <DollarSign className="w-8 h-8 mb-2 text-purple-600" />
              <p className="font-bold text-lg">Transactions</p>
              <p className="text-sm text-gray-600">View Earning History</p>
            </button>
          </div>
        </>
      ) : (
        <div className="text-center py-20 bg-white rounded-2xl shadow-lg">
          <AlertCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500">Unable to load dashboard data</p>
          <button onClick={fetchDashboard} className="mt-4 px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
            Retry
          </button>
        </div>
      )}
    </div>
  );
};

export default DealerDashboard;
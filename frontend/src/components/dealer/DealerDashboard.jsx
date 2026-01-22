import { useState, useEffect } from 'react';
import { Package, DollarSign, Clock, CheckCircle, TrendingUp, Loader2, AlertCircle, RefreshCw, Award, Target } from 'lucide-react';

const API_BASE = '/api';

const DealerDashboard = ({ user, token, setCurrentPage }) => {
  const [dashboard, setDashboard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async (isRefresh = false) => {
    if (isRefresh) {
      setRefreshing(true);
    } else {
      setLoading(true);
    }
    
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
      setRefreshing(false);
    }
  };

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-center items-center py-20">
          <Loader2 className="w-12 h-12 animate-spin text-green-600" />
        </div>
      </div>
    );
  }

  if (!dashboard) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center py-20 bg-white rounded-2xl shadow-lg">
          <AlertCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500 mb-4">Unable to load dashboard</p>
          <button onClick={() => fetchDashboard()} className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Welcome Back! 👋</h1>
          <p className="text-gray-600">{user?.full_name}</p>
        </div>
        <button
          onClick={() => fetchDashboard(true)}
          disabled={refreshing}
          className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl shadow-md hover:shadow-lg transition-all disabled:opacity-50"
        >
          <RefreshCw className={`w-4 h-4 text-green-600 ${refreshing ? 'animate-spin' : ''}`} />
          <span className="text-sm font-medium text-gray-700">Refresh</span>
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-2xl shadow-lg text-white">
          <Package className="w-8 h-8 mb-3 opacity-80" />
          <p className="text-sm opacity-90 mb-1">Total Orders</p>
          <p className="text-3xl font-bold">{dashboard.stats.total_requests}</p>
        </div>

        <div className="bg-gradient-to-br from-yellow-500 to-orange-500 p-6 rounded-2xl shadow-lg text-white">
          <Clock className="w-8 h-8 mb-3 opacity-80" />
          <p className="text-sm opacity-90 mb-1">Accepted</p>
          <p className="text-3xl font-bold">{dashboard.stats.accepted_requests}</p>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-6 rounded-2xl shadow-lg text-white">
          <CheckCircle className="w-8 h-8 mb-3 opacity-80" />
          <p className="text-sm opacity-90 mb-1">Completed</p>
          <p className="text-3xl font-bold">{dashboard.stats.completed_requests}</p>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-6 rounded-2xl shadow-lg text-white">
          <DollarSign className="w-8 h-8 mb-3 opacity-80" />
          <p className="text-sm opacity-90 mb-1">Earnings</p>
          <p className="text-3xl font-bold">₹{dashboard.stats.total_earnings.toFixed(0)}</p>
        </div>
      </div>

      {/* Performance Card */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <Award className="w-7 h-7 text-yellow-500" />
          Your Performance
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Total Pickups</p>
                <p className="text-4xl font-bold text-gray-800">{dashboard.stats.total_pickups}</p>
              </div>
              <TrendingUp className="w-12 h-12 text-green-600" />
            </div>
          </div>
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Your Rating</p>
                <p className="text-4xl font-bold text-gray-800">{dashboard.stats.rating.toFixed(1)} ⭐</p>
              </div>
              <Target className="w-12 h-12 text-yellow-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Recent Transactions</h2>
        {dashboard.recent_transactions?.length > 0 ? (
          <div className="space-y-3">
            {dashboard.recent_transactions.slice(0, 5).map(txn => (
              <div key={txn.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Request #{txn.request_id}</p>
                    <p className="text-sm text-gray-500">{new Date(txn.created_at).toLocaleDateString('en-IN')}</p>
                  </div>
                </div>
                <p className="text-xl font-bold text-green-600">₹{txn.amount.toFixed(2)}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <DollarSign className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500">No transactions yet</p>
          </div>
        )}
      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-3 gap-6">
        <button
          onClick={() => setCurrentPage('dealer-available')}
          className="bg-gradient-to-br from-blue-500 to-blue-600 p-8 rounded-2xl shadow-lg hover:shadow-xl text-white text-left transform hover:-translate-y-1 transition-all"
        >
          <Package className="w-10 h-10 mb-4" />
          <p className="font-bold text-xl mb-2">Available Orders</p>
          <p className="text-sm opacity-90">Find new pickup requests</p>
        </button>

        <button
          onClick={() => setCurrentPage('dealer-requests')}
          className="bg-gradient-to-br from-purple-500 to-purple-600 p-8 rounded-2xl shadow-lg hover:shadow-xl text-white text-left transform hover:-translate-y-1 transition-all"
        >
          <Clock className="w-10 h-10 mb-4" />
          <p className="font-bold text-xl mb-2">My Orders</p>
          <p className="text-sm opacity-90">Manage accepted orders</p>
        </button>

        <button
          onClick={() => setCurrentPage('dealer-transactions')}
          className="bg-gradient-to-br from-green-500 to-emerald-600 p-8 rounded-2xl shadow-lg hover:shadow-xl text-white text-left transform hover:-translate-y-1 transition-all"
        >
          <DollarSign className="w-10 h-10 mb-4" />
          <p className="font-bold text-xl mb-2">Earnings</p>
          <p className="text-sm opacity-90">View transaction history</p>
        </button>
      </div>
    </div>
  );
};

export default DealerDashboard;
import { useState, useEffect } from 'react';
import { DollarSign, Loader2, TrendingUp, Package } from 'lucide-react';

const API_BASE = '/api';

const DealerTransactions = ({ token }) => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    total: 0,
    thisMonth: 0,
    lastMonth: 0
  });

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/dealers/transactions`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (res.ok) {
        const data = await res.json();
        const txns = data.transactions || [];
        setTransactions(txns);

        // Calculate stats
        const now = new Date();
        const thisMonth = txns.filter(t => {
          const date = new Date(t.created_at);
          return date.getMonth() === now.getMonth() && date.getFullYear() === now.getFullYear();
        }).reduce((sum, t) => sum + t.amount, 0);

        const lastMonth = txns.filter(t => {
          const date = new Date(t.created_at);
          const lastMonthDate = new Date(now.getFullYear(), now.getMonth() - 1);
          return date.getMonth() === lastMonthDate.getMonth() && date.getFullYear() === lastMonthDate.getFullYear();
        }).reduce((sum, t) => sum + t.amount, 0);

        const total = txns.reduce((sum, t) => sum + t.amount, 0);

        setStats({ total, thisMonth, lastMonth });
      }
    } catch (err) {
      console.error('Failed to fetch transactions', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Transaction History</h1>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-12 h-12 animate-spin text-green-600" />
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-purple-100 w-12 h-12 rounded-xl flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-purple-600" />
                  </div>
                  <TrendingUp className="w-5 h-5 text-green-500" />
                </div>
                <p className="text-gray-600 text-sm mb-1">Total Earnings</p>
                <p className="text-3xl font-bold text-gray-800">₹{stats.total.toFixed(2)}</p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-green-100 w-12 h-12 rounded-xl flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-green-600" />
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-1">This Month</p>
                <p className="text-3xl font-bold text-gray-800">₹{stats.thisMonth.toFixed(2)}</p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-1">Last Month</p>
                <p className="text-3xl font-bold text-gray-800">₹{stats.lastMonth.toFixed(2)}</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">All Transactions</h2>
              
              {transactions.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2 border-gray-200">
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Transaction ID</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Request ID</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Date</th>
                        <th className="text-right py-3 px-4 font-semibold text-gray-700">Amount</th>
                        <th className="text-center py-3 px-4 font-semibold text-gray-700">Type</th>
                        <th className="text-center py-3 px-4 font-semibold text-gray-700">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {transactions.map(txn => (
                        <tr key={txn.id} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-4 px-4 text-gray-800">#{txn.id}</td>
                          <td className="py-4 px-4 text-gray-600">Req #{txn.request_id}</td>
                          <td className="py-4 px-4 text-gray-600">
                            {new Date(txn.created_at).toLocaleDateString('en-IN', {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric'
                            })}
                          </td>
                          <td className="py-4 px-4 text-right font-bold text-green-600">
                            ₹{txn.amount.toFixed(2)}
                          </td>
                          <td className="py-4 px-4 text-center">
                            <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
                              {txn.transaction_type}
                            </span>
                          </td>
                          <td className="py-4 px-4 text-center">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                              txn.status === 'completed' ? 'bg-green-100 text-green-700' :
                              txn.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                              'bg-red-100 text-red-700'
                            }`}>
                              {txn.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="text-center py-12">
                  <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500 text-lg">No transactions yet</p>
                  <p className="text-sm text-gray-400 mt-2">Complete some requests to see transactions here</p>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default DealerTransactions;
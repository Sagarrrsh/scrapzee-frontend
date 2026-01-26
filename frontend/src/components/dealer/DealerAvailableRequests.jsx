import { useState, useEffect } from 'react';
import { Package, MapPin, Calendar, Loader2, CheckCircle, AlertCircle, X, RefreshCw, DollarSign } from 'lucide-react';

const API_BASE = '/api';

const DealerAvailableRequests = ({ token, categories, onRequestAccepted }) => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [accepting, setAccepting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    fetchAvailableRequests();
  }, []);

  const fetchAvailableRequests = async (isRefresh = false) => {
    if (isRefresh) {
      setRefreshing(true);
    } else if (requests.length === 0) {
      setLoading(true);
    }
    
    try {
      const res = await fetch(`${API_BASE}/dealers/available-requests`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (res.ok) {
        const data = await res.json();
        setRequests(data.requests || []);
      }
    } catch (err) {
      console.error('Failed to fetch requests', err);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  const handleViewDetails = (request) => {
    setSelectedRequest(request);
    setShowDetails(true);
    setError(null);
    setSuccess(null);
  };

  const handleAcceptRequest = async () => {
    if (!selectedRequest) return;
    setAccepting(true);
    setError(null);
    try {
      const res = await fetch(`${API_BASE}/dealers/requests/${selectedRequest.id}/accept`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      if (res.ok) {
        setSuccess('Order accepted successfully! 🎉');
        setTimeout(() => {
          setShowDetails(false);
          fetchAvailableRequests(true);
          if (onRequestAccepted) onRequestAccepted();
        }, 1500);
      } else {
        const data = await res.json();
        setError(data.error || 'Failed to accept order');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setAccepting(false);
    }
  };

  const getCategoryName = (categoryId) => {
    const cat = categories.find(c => c.id === categoryId);
    return cat ? cat.name : `Category ${categoryId}`;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <h1 className="text-4xl font-bold text-gray-800">Available Orders</h1>
        <button
          onClick={() => fetchAvailableRequests(true)}
          disabled={refreshing}
          className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50"
        >
          <RefreshCw className={`w-4 h-4 ${refreshing ? 'animate-spin' : ''}`} />
          <span className="text-sm font-medium">Refresh</span>
        </button>
      </div>

      {loading ? (
        <div className="flex justify-center items-center py-20">
          <Loader2 className="w-12 h-12 animate-spin text-green-600" />
        </div>
      ) : requests.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {requests.map(req => (
            <div
              key={req.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
              onClick={() => handleViewDetails(req)}
            >
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 text-white rounded-t-2xl">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-bold text-lg">Order #{req.id}</h3>
                    <p className="text-sm opacity-90">{getCategoryName(req.category_id)}</p>
                  </div>
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium">
                    New
                  </span>
                </div>
              </div>

              <div className="p-6 space-y-3">
                <div className="flex items-center gap-3">
                  <Package className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="text-xs text-gray-500">Quantity</p>
                    <p className="font-bold text-gray-800">{req.quantity} kg</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <DollarSign className="w-5 h-5 text-green-600" />
                  <div>
                    <p className="text-xs text-gray-500">Estimated Amount</p>
                    <p className="text-xl font-bold text-green-600">₹{req.estimated_price}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-purple-600 mt-1" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-gray-500 mb-1">Pickup Location</p>
                    <p className="text-sm text-gray-800 line-clamp-2">{req.pickup_address}</p>
                  </div>
                </div>

                {req.pickup_date && (
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-orange-600" />
                    <div>
                      <p className="text-xs text-gray-500">Pickup Date</p>
                      <p className="font-semibold text-gray-800">
                        {new Date(req.pickup_date).toLocaleDateString('en-IN', { 
                          month: 'short', 
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-white rounded-2xl shadow-lg">
          <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500 text-lg mb-4">No available orders at the moment</p>
          <button
            onClick={() => fetchAvailableRequests(true)}
            className="px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
          >
            Refresh Orders
          </button>
        </div>
      )}

      {/* Details Modal */}
      {showDetails && selectedRequest && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50" onClick={() => setShowDetails(false)}>
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Order Details</h2>
                <button
                  onClick={() => setShowDetails(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {error && (
                <div className="mb-4 p-4 bg-red-50 border-l-4 border-red-500 rounded-lg flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-red-700">{error}</p>
                </div>
              )}

              {success && (
                <div className="mb-4 p-4 bg-green-50 border-l-4 border-green-500 rounded-lg flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-green-700">{success}</p>
                </div>
              )}

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-800 text-lg">Order #{selectedRequest.id}</h3>
                  <p className="text-gray-600">{getCategoryName(selectedRequest.category_id)}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-1">Quantity</label>
                    <p className="text-gray-800 font-semibold">{selectedRequest.quantity} kg</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-1">Estimated Price</label>
                    <p className="text-green-600 font-bold text-xl">₹{selectedRequest.estimated_price}</p>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-1">Pickup Address</label>
                  <p className="text-gray-800">{selectedRequest.pickup_address}</p>
                </div>

                {selectedRequest.pickup_date && (
                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-1">Pickup Date</label>
                    <p className="text-gray-800">{new Date(selectedRequest.pickup_date).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                  </div>
                )}

                {selectedRequest.notes && (
                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-1">Notes</label>
                    <p className="text-gray-800">{selectedRequest.notes}</p>
                  </div>
                )}

                <button
                  onClick={handleAcceptRequest}
                  disabled={accepting}
                  className="w-full py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {accepting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Accepting...</span>
                    </>
                  ) : (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      <span>Accept This Order</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DealerAvailableRequests;
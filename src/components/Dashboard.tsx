/**
 * Created by AI Assistant (Senior Dev Mode)
 * File: Dashboard.tsx
 * Description: Dashboard component with order management functionality
 */

import { useState, useEffect } from 'react';

interface DashboardProps {
  onLogout: () => void;
  orderDetails: Array<{
    orderNumber: string;
    productTitle: string;
  }>;
  addOrder: (orderNumber: string, productTitle: string) => void;
  removeOrder: (orderNumber: string) => void;
  updateOrderDetails: (newOrderDetails: Array<{orderNumber: string; productTitle: string}>) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ 
  onLogout, 
  orderDetails, 
  addOrder, 
  removeOrder 
}) => {
  const [newOrderNumber, setNewOrderNumber] = useState('');
  const [newProductTitle, setNewProductTitle] = useState('');
  const [globalState, setGlobalState] = useState(window.__Oralia__);

  // Update global state display every second
  useEffect(() => {
    const interval = setInterval(() => {
      setGlobalState(window.__Oralia__ ? { ...window.__Oralia__ } : undefined);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleAddOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (newOrderNumber.trim() && newProductTitle.trim()) {
      addOrder(newOrderNumber.trim(), newProductTitle.trim());
      setNewOrderNumber('');
      setNewProductTitle('');
    }
  };

  const handleRemoveOrder = (orderNumber: string) => {
    removeOrder(orderNumber);
  };

  return (
    <div className="dashboard-container">
      <h2>Welcome to the Dashboard!</h2>
      <div className="dashboard-content">
        <p>🎉 You are successfully logged in!</p>
        
        <div className="user-info">
          <h3>User Information</h3>
          <p><strong>Status:</strong> Authenticated</p>
          <p><strong>Username:</strong> admin</p>
          <p><strong>Login Time:</strong> {new Date().toLocaleString()}</p>
        </div>

        <div className="order-management">
          <h3>Order Management</h3>
          
          {/* Add New Order Form */}
          <div className="add-order-form">
            <h4>Add New Order</h4>
            <form onSubmit={handleAddOrder}>
              <div className="form-row">
                <input
                  type="text"
                  placeholder="Order Number (e.g., 12345)"
                  value={newOrderNumber}
                  onChange={(e) => setNewOrderNumber(e.target.value)}
                  required
                />
                <input
                  type="text"
                  placeholder="Product Title (e.g., Wireless Mouse)"
                  value={newProductTitle}
                  onChange={(e) => setNewProductTitle(e.target.value)}
                  required
                />
                <button type="submit" className="add-button">
                  Add Order
                </button>
              </div>
            </form>
          </div>

          {/* Current Orders List */}
          <div className="orders-list">
            <h4>Current Orders ({orderDetails.length})</h4>
            {orderDetails.length === 0 ? (
              <p className="no-orders">No orders found. Add some orders above!</p>
            ) : (
              <div className="orders-grid">
                {orderDetails.map((order, index) => (
                  <div key={index} className="order-card">
                    <div className="order-info">
                      <strong className="order-number">#{order.orderNumber}</strong>
                      <span className="product-title">{order.productTitle}</span>
                    </div>
                    <button 
                      onClick={() => handleRemoveOrder(order.orderNumber)}
                      className="remove-button"
                      title="Remove this order"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        
        {/* Live Global State Display */}
        <div className="global-state-display">
          <h3>Live Global State (window.__Oralia__)</h3>
          <p>This updates automatically when you add/remove orders:</p>
          <pre className="code-block">
            {JSON.stringify(globalState, null, 2)}
          </pre>
        </div>
        
        <button onClick={onLogout} className="logout-button">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard; 
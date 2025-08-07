/**
 * Created by AI Assistant (Senior Dev Mode)
 * File: App.tsx
 * Description: Main App component with authentication flow
 */

import useAuth from './hooks/useAuth';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import './App.css';

const App: React.FC = () => {
  const { 
    isAuthenticated, 
    orderDetails, 
    login, 
    logout, 
    addOrder, 
    removeOrder, 
    updateOrderDetails 
  } = useAuth();

  return (
    <div className="app">
      <header className="app-header">
        <h1>🔐 Kaaylabs AI Demo - Authentication System</h1>
        {/* <p>Simple React app with global state management</p> */}
      </header>
      
      <main className="app-main">
        {isAuthenticated ? (
          <Dashboard 
            onLogout={logout}
            orderDetails={orderDetails}
            addOrder={addOrder}
            removeOrder={removeOrder}
            updateOrderDetails={updateOrderDetails}
          />
        ) : (
          <Login onLogin={login} />
        )}
      </main>
      
      {/* <footer className="app-footer">
        <p>Current global state: window.__Oralia__.context.isAuthenticated = {isAuthenticated.toString()}</p>
      </footer> */}
    </div>
  );
};

export default App;

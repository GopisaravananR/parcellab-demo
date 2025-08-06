/**
 * Created by AI Assistant (Senior Dev Mode)
 * File: Dashboard.tsx
 * Description: Dashboard component shown when user is authenticated
 */

interface DashboardProps {
  onLogout: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onLogout }) => {
  return (
    <div className="dashboard-container">
      <h2>Welcome to the Dashboard!</h2>
      <div className="dashboard-content">
        <p>🎉 You are successfully logged in!</p>
        <p>The global state has been updated:</p>
        <pre className="code-block">
          {JSON.stringify(window.__Oralia__, null, 2)}
        </pre>
        
        <div className="user-info">
          <h3>User Information</h3>
          <p><strong>Status:</strong> Authenticated</p>
          <p><strong>Username:</strong> admin</p>
          <p><strong>Login Time:</strong> {new Date().toLocaleString()}</p>
        </div>
        
        <button onClick={onLogout} className="logout-button">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard; 
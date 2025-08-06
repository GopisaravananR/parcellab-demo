/**
 * Created by AI Assistant (Senior Dev Mode)
 * File: Login.tsx
 * Description: Login component with form for authentication
 */

import { useState } from 'react';

interface LoginProps {
  onLogin: (username: string, password: string) => boolean;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState<string>('admin');
  const [password, setPassword] = useState<string>('password');
  const [error, setError] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!username || !password) {
      setError('Please enter both username and password');
      return;
    }

    const success = onLogin(username, password);
    if (!success) {
      setError('Invalid credentials. Try admin/password');
    } else {
      setError('');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username (try: admin)"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password (try: password)"
          />
        </div>
        
        {error && <div className="error-message">{error}</div>}
        
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
      
      <div className="hint">
        <p><strong>Hint:</strong> Use username: <code>admin</code> and password: <code>password</code></p>
      </div>
    </div>
  );
};

export default Login; 
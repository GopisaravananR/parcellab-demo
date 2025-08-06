# 🔐 Oralia Demo - Authentication System

A simple React application demonstrating login/logout functionality with global state management using `window.__Oralia__`.

## 🚀 Features

- **Simple Authentication**: Login with hardcoded credentials
- **Global State Management**: Updates `window.__Oralia__.context.isAuthenticated`
- **Modern UI**: Clean, responsive design with Tailwind-inspired styling
- **TypeScript**: Full type safety throughout the application
- **Vite**: Fast development experience

## 🛠️ Tech Stack

- **React 18** with TypeScript
- **Vite** for build tooling
- **CSS Modules** for styling
- **Custom hooks** for state management

## 📦 Installation & Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser** and navigate to the provided localhost URL (usually `http://localhost:5173`)

## 🔑 Login Credentials

Use these hardcoded credentials to test the login functionality:

- **Username:** `admin`
- **Password:** `password`

## 🌟 How It Works

### Authentication Flow

1. **Login Process:**
   - Enter username and password
   - App validates against hardcoded credentials
   - On success: `window.__Oralia__.context.isAuthenticated = true`
   - User is redirected to the dashboard

2. **Logout Process:**
   - Click the logout button
   - App sets: `window.__Oralia__.context.isAuthenticated = false`
   - User is redirected back to login form

### Global State Management

The application manages a global state object on the window:

```javascript
// When logged in
window.__Oralia__ = {
  context: {
    isAuthenticated: true
  }
};

// When logged out
window.__Oralia__ = {
  context: {
    isAuthenticated: false
  }
};
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Login.tsx          # Login form component
│   └── Dashboard.tsx      # Dashboard shown when authenticated
├── hooks/
│   └── useAuth.ts         # Custom hook for authentication logic
├── types/
│   └── global.ts          # TypeScript definitions for window.__Oralia__
├── App.tsx                # Main application component
├── App.css                # Component-specific styles
├── index.css              # Global styles
└── main.tsx               # Application entry point
```

## 🎨 Features & Components

### Login Component
- Form validation
- Error handling
- User-friendly credential hints
- Responsive design

### Dashboard Component
- Welcome message
- Real-time global state display
- User information panel
- Logout functionality

### Authentication Hook
- State management
- Global window object updates
- Login/logout methods
- TypeScript integration

## 🚦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📝 Development Notes

- The authentication is purely client-side with hardcoded credentials
- No API calls are made - everything is handled in-memory
- The global state persists only during the browser session
- TypeScript ensures type safety for the global window object

## 🔮 Future Enhancements

- [ ] Add remember me functionality
- [ ] Implement session persistence
- [ ] Add more user roles
- [ ] Connect to a real authentication API
- [ ] Add password validation rules

---

Built with ❤️ using React + Vite + TypeScript

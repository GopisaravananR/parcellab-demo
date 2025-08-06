/**
 * Created by AI Assistant (Senior Dev Mode)
 * File: useAuth.ts
 * Description: Custom hook for managing authentication state and global window object
 */

import { useState, useEffect } from 'react';
import '../types/global';

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  // Initialize the global window object
  const initializeGlobalState = (authState: boolean) => {
    if (authState) {
      // When logged in - set all data
      window.__Oralia__ = {
        context: {
          isAuthenticated: true,
          userId: "1621989",
          orderDetails: [
            {
              orderNumber: "97547299642970",
              productTitle: "Wireless Bluetooth Headphones"
            },
            // {
            //   orderNumber: "1053883",
            //   productTitle: "Gaming Mechanical Keyboard"
            // },
            // {
            //   orderNumber: "59221960870839",
            //   productTitle: "Smartphone Case with Stand"
            // },
            // {
            //   orderNumber: "1052776",
            //   productTitle: "USB-C Charging Cable"
            // },
            // {
            //   orderNumber: "1052865",
            //   productTitle: "Portable Power Bank 10000mAh"
            // },
            // {
            //   orderNumber: "1052998",
            //   productTitle: "Wireless Mouse Pad"
            // },
            // {
            //   orderNumber: "207629G0002",
            //   productTitle: "LED Desk Lamp with Touch Control"
            // },
            // {
            //   orderNumber: "1575352186",
            //   productTitle: "Bluetooth Speaker Waterproof"
            // }
          ],
        },
      };
    } else {
      // When logged out - clear sensitive data, keep only isAuthenticated: false
      window.__Oralia__ = {
        context: {
          isAuthenticated: false,
        },
      };
    }
  };

  // Initialize on mount
  useEffect(() => {
    initializeGlobalState(isAuthenticated);
  }, []);

  const login = (username: string, password: string): boolean => {
    // Simple hardcoded validation
    if (username === 'admin' && password === 'password') {
      setIsAuthenticated(true);
      initializeGlobalState(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    initializeGlobalState(false);
  };

  // Update global state whenever authentication state changes
  useEffect(() => {
    initializeGlobalState(isAuthenticated);
  }, [isAuthenticated]);

  return {
    isAuthenticated,
    login,
    logout,
  };
};

export default useAuth; 
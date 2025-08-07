/**
 * Created by AI Assistant (Senior Dev Mode)
 * File: useAuth.ts
 * Description: Custom hook for managing authentication state and global window object
 */

import { useState, useEffect } from 'react';
import '../types/global';

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [orderDetails, setOrderDetails] = useState([
    {
      orderNumber: "97547299642970",
      productTitle: "Wireless Bluetooth Headphones"
    },
    {
      orderNumber: "1053883",
      productTitle: "Gaming Mechanical Keyboard"
    }
    
    // Add more orders here as needed
  ]);

  // Initialize the global window object
  const initializeGlobalState = (authState: boolean) => {
    if (authState) {
      // When logged in - set all data using dynamic orderDetails state
      window.__Oralia__ = {
        context: {
          isAuthenticated: true,
          userId: "1621989",
          orderDetails: orderDetails,
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

  // Function to add a new order
  const addOrder = (orderNumber: string, productTitle: string) => {
    setOrderDetails(prev => [...prev, { orderNumber, productTitle }]);
  };

  // Function to remove an order by orderNumber
  const removeOrder = (orderNumber: string) => {
    setOrderDetails(prev => prev.filter(order => order.orderNumber !== orderNumber));
  };

  // Function to update all orderDetails
  const updateOrderDetails = (newOrderDetails: Array<{orderNumber: string, productTitle: string}>) => {
    setOrderDetails(newOrderDetails);
  };

  // Update global state whenever authentication state OR orderDetails changes
  useEffect(() => {
    initializeGlobalState(isAuthenticated);
  }, [isAuthenticated, orderDetails]);

  return {
    isAuthenticated,
    orderDetails,
    login,
    logout,
    addOrder,
    removeOrder,
    updateOrderDetails,
  };
};

export default useAuth; 
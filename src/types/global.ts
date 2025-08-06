/**
 * Created by AI Assistant (Senior Dev Mode)
 * File: global.ts
 * Description: Global type definitions for window.__Oralia__ object
 */

declare global {
  interface Window {
    __Oralia__?: {
      context: {
        isAuthenticated: boolean;
        userId?: string;
        orderDetails?: Array<{
          orderNumber: string;
          productTitle: string;
        }>;
      };
    };
  }
}

export {}; 
/**
 * Mock Service Integrations for Sumaiya's Creations
 * For production, these would connect to real APIs
 */

// Payment Gateways
export const sslCommerz = {
  initiatePayment: async (amount, currency = 'BDT') => {
    console.log(`[SSLCommerz] Initiating payment for ${amount} ${currency}`);
    return { status: 'success', gatewayUrl: 'https://sandbox.sslcommerz.com/gwprocess/...' };
  },
  verifyPayment: async (valId) => {
    console.log(`[SSLCommerz] Verifying payment ${valId}`);
    return { status: 'VALID' };
  }
};

export const bKash = {
  createPayment: async (amount) => {
    console.log(`[bKash] Creating payment for ${amount} BDT`);
    return { paymentID: 'BKW123456789', status: 'success' };
  }
};

// Logistics & Courier APIs
export const logistics = {
  pathao: {
    createOrder: async (orderData) => {
      console.log('[Pathao] Creating delivery order:', orderData);
      return { consignment_id: 'PATHAO-789' };
    }
  },
  redx: {
    createParcel: async (parcelData) => {
      console.log('[RedX] Creating parcel:', parcelData);
      return { tracking_id: 'REDX-456' };
    }
  },
  steadfast: {
    createOrder: async (orderData) => {
      console.log('[Steadfast] Creating order:', orderData);
      return { order_id: 'SF-123' };
    }
  }
};

// Automation Hub (n8n)
export const automation = {
  triggerOrderFlow: async (order) => {
    console.log('[n8n] Triggering Order Automation Hub');
    // Events triggered:
    // - WhatsApp confirmation
    // - Slack inventory alert
    // - Daily finance report entry
    console.log('- WhatsApp confirmation sent');
    console.log('- Slack inventory alert sent to #kitchen');
    return { status: 'triggered' };
  },
  triggerAbandonedCart: async (cart) => {
    console.log('[n8n] Triggering Abandoned Cart Recovery with 3D link');
    return { status: 'email_scheduled' };
  }
};

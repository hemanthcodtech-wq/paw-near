import React, { createContext, useContext, useState, useEffect } from 'react';

const OrderContext = createContext();

export function OrderProvider({ children }) {
  const [orders, setOrders] = useState([
    {
      id: 'ORD-89421',
      date: 'Today, 09:20 PM',
      timestamp: Date.now() - 1000 * 60 * 12, // 12 mins ago
      status: 'out_for_delivery', // 'placed' | 'accepted' | 'packed' | 'out_for_delivery' | 'delivered'
      statusLabel: 'Out for Delivery',
      deliveryType: 'Instant 20-Min Express',
      store: {
        name: 'Paws & Whiskers Supermart',
        address: 'Road No 10, Jubilee Hills',
        phone: '+91 98480 12345'
      },
      deliveryAddress: {
        shortDisplay: 'Banjara Hills, Hyderabad',
        addressLine1: 'Flat 402, Royal Palms Residency, Road No 12'
      },
      rider: {
        name: 'Suresh Kumar',
        phone: '+91 91234 56789',
        rating: 4.9,
        trips: 1840,
        vehicle: 'Hero Electric (TS09 EK 4821)',
        photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
        currentEta: '8 mins'
      },
      items: [
        {
          id: 'prod-1',
          name: 'Pedigree Adult Dry Dog Food 3kg',
          size: '3kg',
          quantity: 1,
          price: 799,
          image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=200&q=80'
        },
        {
          id: 'prod-2',
          name: 'Nylon Dog Collar (Blue)',
          size: 'Medium (M)',
          quantity: 1,
          price: 299,
          image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=200&q=80'
        }
      ],
      paymentMode: 'UPI (Google Pay)',
      itemTotal: 1098,
      discount: 200,
      deliveryFee: 0,
      platformFee: 9,
      totalAmount: 907,
      deliveryOtp: '4829',
      liveCoordinates: {
        store: { lat: 17.4319, lng: 78.4073 },
        customer: { lat: 17.4156, lng: 78.4350 },
        rider: { lat: 17.4230, lng: 78.4210 }
      }
    },
    {
      id: 'ORD-87310',
      date: '28 Aug 2026, 04:15 PM',
      timestamp: Date.now() - 1000 * 60 * 60 * 24 * 4,
      status: 'delivered',
      statusLabel: 'Delivered',
      deliveryType: 'Instant Delivery',
      store: {
        name: 'Canine Castle Pet Hub',
        address: 'Madhapur, Hyderabad'
      },
      deliveryAddress: {
        shortDisplay: 'Banjara Hills, Hyderabad',
        addressLine1: 'Flat 402, Royal Palms Residency, Road No 12'
      },
      items: [
        {
          id: 'prod-7',
          name: 'Self-Cleaning Slicker Pet Grooming Brush',
          size: 'Standard',
          quantity: 1,
          price: 299,
          image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=200&q=80'
        },
        {
          id: 'prod-4',
          name: 'Rubber Chew Toy (Medium)',
          size: 'Medium (16cm)',
          quantity: 2,
          price: 199,
          image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=200&q=80'
        }
      ],
      paymentMode: 'Cash on Delivery',
      itemTotal: 697,
      discount: 0,
      deliveryFee: 0,
      platformFee: 9,
      totalAmount: 706,
      deliveryOtp: '7193'
    }
  ]);

  const placeOrder = (orderData) => {
    const newId = `ORD-${Math.floor(10000 + Math.random() * 90000)}`;
    const newOrder = {
      id: newId,
      date: 'Just now',
      timestamp: Date.now(),
      status: 'placed',
      statusLabel: 'Order Placed',
      deliveryType: orderData.deliverySpeed || 'Instant 20-Min Express',
      store: {
        name: 'Paws & Whiskers Supermart',
        address: 'Road No 10, Jubilee Hills, Hyderabad',
        phone: '+91 98480 12345'
      },
      deliveryAddress: orderData.deliveryAddress,
      rider: {
        name: 'Suresh Kumar',
        phone: '+91 91234 56789',
        rating: 4.9,
        trips: 1840,
        vehicle: 'Hero Electric (TS09 EK 4821)',
        photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
        currentEta: '18 mins'
      },
      items: orderData.items,
      paymentMode: orderData.paymentMethod,
      itemTotal: orderData.itemsTotal,
      discount: orderData.couponDiscount,
      deliveryFee: orderData.deliveryFee,
      platformFee: orderData.platformFee,
      totalAmount: orderData.finalTotal,
      deliveryOtp: `${Math.floor(1000 + Math.random() * 9000)}`,
      liveCoordinates: {
        store: { lat: 17.4319, lng: 78.4073 },
        customer: { lat: 17.4156, lng: 78.4350 },
        rider: { lat: 17.4319, lng: 78.4073 }
      }
    };

    setOrders(prev => [newOrder, ...prev]);
    return newOrder;
  };

  const getOrderById = (id) => {
    return orders.find(o => o.id === id) || orders[0];
  };

  return (
    <OrderContext.Provider
      value={{
        orders,
        placeOrder,
        getOrderById
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}

export function useOrders() {
  const context = useContext(OrderContext);
  if (!context) throw new Error('useOrders must be used within OrderProvider');
  return context;
}

import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// Global Context Providers
import { AuthProvider } from './context/AuthContext';
import { LocationProvider } from './context/LocationContext';
import { CartProvider, useCart } from './context/CartContext';
import { OrderProvider } from './context/OrderContext';

// Common Layout Components
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import BottomNav from './components/common/BottomNav';
import LocationModal from './components/common/LocationModal';
import AuthModal from './components/common/AuthModal';
import ChatBotWidget from './components/support/ChatBotWidget';
import ScrollToTop from './components/common/ScrollToTop';

// Application Routing
import AppRouter from './routes/AppRouter';

// Toast Notification Indicator
function GlobalToast() {
  const { toastMessage } = useCart();
  if (!toastMessage) return null;

  return (
    <div className="fixed top-20 right-4 z-50 bg-slate-900/90 backdrop-blur-md text-white px-4 py-2.5 rounded-2xl shadow-xl border border-slate-700 text-xs font-bold flex items-center gap-2 animate-in slide-in-from-top-4 fade-in duration-200">
      <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
      <span>{toastMessage}</span>
    </div>
  );
}

// Clean App Layout
export default function App() {
  return (
    <BrowserRouter>
      {/* Auto Scroll to Top on Navigation & Floating Back-To-Top Button */}
      <ScrollToTop />

      <AuthProvider>
        <LocationProvider>
          <CartProvider>
            <OrderProvider>
              <div className="min-h-screen flex flex-col bg-[#FDFBF7] text-slate-800 font-sans selection:bg-amber-500 selection:text-white">
                
                {/* Global Top Navigation */}
                <Header />

                {/* Main Viewport Routed Content */}
                <main className="flex-1 max-w-7xl w-full mx-auto px-3.5 sm:px-6 lg:px-8 pt-3 sm:pt-4 md:pt-6 pb-6">
                  <AppRouter />
                </main>

                {/* Global Footer */}
                <Footer />

                {/* Mobile Bottom Navigation Bar */}
                <BottomNav />

                {/* Global Location & Address Modal */}
                <LocationModal />

                {/* Global Authentication Modal */}
                <AuthModal />

                {/* Global Floating AI Support Chatbot */}
                <ChatBotWidget />

                {/* Global Dynamic Toast */}
                <GlobalToast />
              </div>
            </OrderProvider>
          </CartProvider>
        </LocationProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

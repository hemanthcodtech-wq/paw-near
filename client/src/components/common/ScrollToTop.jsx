import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const { pathname, search } = useLocation();
  const [showScrollTopBtn, setShowScrollTopBtn] = useState(false);

  // Auto scroll to top on page navigation
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [pathname, search]);

  // Monitor window scroll position to display floating back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 320) {
        setShowScrollTopBtn(true);
      } else {
        setShowScrollTopBtn(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTopSmooth = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {showScrollTopBtn && (
        <button
          onClick={scrollToTopSmooth}
          className="fixed bottom-36 md:bottom-24 right-4 sm:right-6 z-40 p-3 bg-slate-900/90 hover:bg-slate-900 text-white rounded-full shadow-xl border border-slate-700/50 hover:border-amber-400 hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center group focus:outline-none"
          title="Back to top"
          aria-label="Scroll back to top"
        >
          <ArrowUp className="w-5 h-5 text-amber-400 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      )}
    </>
  );
}

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Sparkles, 
  Zap, 
  ArrowRight, 
  ShieldCheck, 
  Star, 
  Clock, 
  MapPin, 
  ChevronRight, 
  Truck,
  Heart
} from 'lucide-react';
import { CATEGORIES } from '../../data/categories';
import { PRODUCTS } from '../../data/products';
import { STORES } from '../../data/stores';
import { SALONS } from '../../data/services';
import ProductCard from '../../components/product/ProductCard';
import SalonCard from '../../components/service/SalonCard';
import BookingModal from '../../components/service/BookingModal';
import { useLocationContext } from '../../context/LocationContext';

export default function HomePage() {
  const navigate = useNavigate();
  const { selectedLocation } = useLocationContext();
  const [selectedSalonForBooking, setSelectedSalonForBooking] = React.useState(null);

  const topPicks = PRODUCTS.filter(p => p.isTopPick);
  const accessoriesAndToys = PRODUCTS.filter(p => p.category === 'accessories');

  const [homeSearchQuery, setHomeSearchQuery] = React.useState('');

  const handleMobileSearch = (e) => {
    e.preventDefault();
    if (homeSearchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(homeSearchQuery.trim())}`);
    }
  };

  return (
    <div className="space-y-6 sm:space-y-8 md:space-y-12 pb-16 md:pb-12">
      
      {/* 1. Hero Promo Banner matching UI Reference ("Everything Your Pet Needs, Near You!") */}
      <section className="relative overflow-hidden rounded-3xl bg-[#F7F3EF] border border-amber-200/50 p-5 sm:p-8 md:p-10 shadow-xs group">
        
        {/* Subtle Top-Right Golden Paw Watermark */}
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6 pointer-events-none opacity-25 text-amber-500">
          <svg className="w-16 h-16 sm:w-24 sm:h-24 fill-amber-500" viewBox="0 0 24 24">
            <path d="M12 8.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm-4.5.5a2 2 0 100-4 2 2 0 000 4zm9 0a2 2 0 100-4 2 2 0 000 4zM5.5 12a1.8 1.8 0 100-3.6 1.8 1.8 0 000 3.6zm13 0a1.8 1.8 0 100-3.6 1.8 1.8 0 000 3.6zM12 10.5c-3.2 0-6 2.2-6 5.5 0 2.8 2.5 5 6 5s6-2.2 6-5.5c0-3.3-2.8-5.5-6-5.5z" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center">
          
          {/* Hero Left Content */}
          <div className="md:col-span-7 space-y-3 sm:space-y-4 md:space-y-5 z-10">
            
            {/* Headline matching screenshot */}
            <h1 className="font-heading font-black text-slate-900 text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.12]">
              Everything Your <br />
              <span className="text-[#E5A015]">Pet Needs,</span> <br />
              Near You!
            </h1>

            {/* Subtitle matching screenshot */}
            <p className="text-slate-600 text-xs sm:text-sm md:text-base max-w-md leading-relaxed font-normal">
              Shop food, accessories, medicines & more. Care. Love. Paw Near.
            </p>

            {/* Shop Now Button matching screenshot */}
            <div className="pt-1 sm:pt-2">
              <Link
                to="/products"
                className="px-6 py-2.5 sm:px-7 sm:py-3 bg-[#E5A015] hover:bg-[#D49010] active:scale-95 text-slate-950 font-bold text-sm sm:text-base rounded-xl shadow-xs hover:shadow-md transition-all inline-flex items-center"
              >
                Shop Now
              </Link>
            </div>
          </div>

          {/* Hero Right Visual (Dog + Cat Transparent PNG matching reference) */}
          <div className="md:col-span-5 relative flex justify-center items-center">
            <div className="relative w-full max-w-[280px] sm:max-w-sm md:max-w-md aspect-square flex items-center justify-center">
              
              {/* Main Golden Retriever & Cat Transparent PNG */}
              <img
                src="/images/hero_pets_transparent.png"
                alt="Golden Retriever Dog and Cat"
                className="relative z-10 w-full h-full object-contain transform group-hover:scale-[1.03] transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Shop By Category (Matching UI Template: Grooming, Accessories, Food, Clinic, Medicine, Boarding) */}
      <section className="space-y-3 sm:space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-heading font-black text-slate-900 text-base sm:text-xl md:text-2xl tracking-tight">
            Shop by Category
          </h2>
          <Link
            to="/products"
            className="text-xs sm:text-sm font-bold text-slate-700 hover:text-[#E5A015] flex items-center gap-1 group transition-colors"
          >
            <span>View All</span>
            <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Categories Grid (2 rows x 3 cols matching reference image) */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2.5 sm:gap-4">
          {CATEGORIES.map((category) => (
            <Link
              key={category.id}
              to={category.id === 'grooming' || category.id === 'clinic' || category.id === 'boarding'
                ? `/services?tab=${category.id}`
                : `/category/${category.id}`}
              className="group bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-4 border border-slate-100 shadow-2xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center relative overflow-hidden"
            >
              {/* Category 3D Image Avatar */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mb-1.5 sm:mb-2 overflow-hidden flex items-center justify-center">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Title matching screenshot */}
              <h3 className="font-heading font-bold text-[11px] sm:text-xs md:text-sm text-slate-800 group-hover:text-[#E5A015] transition-colors line-clamp-1">
                {category.name}
              </h3>
            </Link>
          ))}
        </div>
      </section>

      {/* 3. Secondary Promo Banner: Pamper Your Pet with the Best! (Matching Screenshot) */}
      <section className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#0C0F14] via-[#161B22] to-[#0D1117] text-white p-5 sm:p-7 md:p-9 shadow-xl border border-slate-800 group">
        
        {/* Ambient floating bubbles effect */}
        <div className="absolute top-3 left-1/3 w-3 h-3 bg-white/20 rounded-full blur-[1px] animate-pulse" />
        <div className="absolute bottom-6 right-1/4 w-4 h-4 bg-amber-400/20 rounded-full blur-[1px] animate-bounce" style={{ animationDuration: '4s' }} />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 items-center">
          <div className="md:col-span-7 space-y-2 sm:space-y-3 z-10">
            <h2 className="font-heading font-black text-xl sm:text-2xl md:text-3xl text-white tracking-tight">
              Pamper Your Pet <br className="hidden sm:inline" />with the Best!
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-sm">
              Upto 20% OFF on Grooming products
            </p>
            <div className="pt-2">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#E5A015] hover:bg-[#D49010] text-slate-950 font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all active:scale-95"
              >
                <span>Explore Now</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="md:col-span-5 flex justify-center">
            <div className="relative w-40 h-40 sm:w-56 sm:h-56 rounded-2xl overflow-hidden drop-shadow-2xl">
              <img
                src="/images/promo_puppy.jpg"
                alt="Cute puppy in bubble bath tub"
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Top Picks For You (Matching Screenshot: Pedigree, Drools, Grooming Brush) */}
      <section className="space-y-3 sm:space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-heading font-black text-slate-900 text-base sm:text-xl md:text-2xl tracking-tight">
            Top Picks for You
          </h2>
          <Link
            to="/products"
            className="text-xs sm:text-sm font-bold text-slate-700 hover:text-[#E5A015] flex items-center gap-1 group transition-colors"
          >
            <span>View All</span>
            <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Product Grid (3 cards row matching screenshot) */}
        <div className="grid grid-cols-3 gap-2.5 sm:gap-4">
          {topPicks.slice(0, 3).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Interactive Booking Modal */}
      {selectedSalonForBooking && (
        <BookingModal
          salon={selectedSalonForBooking}
          isOpen={!!selectedSalonForBooking}
          onClose={() => setSelectedSalonForBooking(null)}
        />
      )}
    </div>
  );
}

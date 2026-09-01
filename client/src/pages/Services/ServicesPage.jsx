import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Sparkles, 
  MapPin, 
  Star, 
  Calendar, 
  Scissors, 
  HeartHandshake, 
  ShieldCheck,
  Building,
  Filter
} from 'lucide-react';
import { SALONS, SERVICE_FILTER_PILLS } from '../../data/services';
import SalonCard from '../../components/service/SalonCard';
import BookingModal from '../../components/service/BookingModal';

export default function ServicesPage() {
  const [searchParams] = useSearchParams();
  const initialTab = searchParams.get('tab') || 'all';

  const [activePill, setActivePill] = useState(initialTab === 'clinic' ? 'clinic' : initialTab === 'boarding' ? 'boarding' : 'all');
  const [selectedSalon, setSelectedSalon] = useState(null);

  const filteredSalons = SALONS.filter(salon => {
    if (activePill === 'all') return true;
    if (activePill === 'clinic') return salon.type === 'clinic';
    if (activePill === 'boarding') return salon.type === 'boarding';
    // Grooming sub-services
    if (activePill === 'bath') return salon.services.some(s => s.name.toLowerCase().includes('bath'));
    if (activePill === 'haircut') return salon.services.some(s => s.name.toLowerCase().includes('cut') || s.name.toLowerCase().includes('grooming'));
    if (activePill === 'nail') return salon.services.some(s => s.name.toLowerCase().includes('nail'));
    if (activePill === 'spa') return salon.services.some(s => s.name.toLowerCase().includes('spa'));
    return true;
  });

  const groomingPills = [
    { id: 'all', label: 'All' },
    { id: 'bath', label: 'Bath' },
    { id: 'haircut', label: 'Hair Cut' },
    { id: 'nail', label: 'Nail Trim' },
    { id: 'spa', label: 'Spa' }
  ];

  return (
    <div className="space-y-4 sm:space-y-6 pb-12">
      
      {/* Title matching screenshot */}
      <div>
        <h1 className="font-heading font-black text-slate-900 text-xl sm:text-2xl md:text-3xl">
          Pet Grooming
        </h1>
      </div>

      {/* Hero Banner matching screenshot ("Book Grooming at Top-Rated Salons Near You") */}
      <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-[#FFF5EB] border border-amber-200/70 p-4 sm:p-6 flex items-center justify-between gap-4">
        <div className="space-y-1.5 z-10 max-w-[65%]">
          <h2 className="font-heading font-black text-sm sm:text-lg md:text-xl text-slate-900 leading-tight">
            Book Grooming at <br />
            Top-Rated Salons Near You
          </h2>
        </div>

        {/* Hero image banner */}
        <div className="relative w-28 h-20 sm:w-40 sm:h-28 rounded-xl overflow-hidden shadow-xs shrink-0">
          <img
            src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=500&q=80"
            alt="Dog receiving hair cut"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Filter Pills matching screenshot: All, Bath, Hair Cut, Nail Trim, Spa */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
        {groomingPills.map((pill) => {
          const isActive = activePill === pill.id;
          return (
            <button
              key={pill.id}
              onClick={() => setActivePill(pill.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all select-none ${
                isActive
                  ? 'bg-[#E5A015] text-slate-950 shadow-xs font-black'
                  : 'bg-slate-100 hover:bg-amber-50 text-slate-700 border border-transparent'
              }`}
            >
              {pill.label}
            </button>
          );
        })}
      </div>

      {/* Salons & Clinics List matching screenshot */}
      <div className="space-y-3 pt-1">
        <div className="grid grid-cols-1 gap-3">
          {filteredSalons.map((salon) => (
            <SalonCard
              key={salon.id}
              salon={salon}
              onBook={(s) => setSelectedSalon(s)}
            />
          ))}
        </div>
      </div>

      {/* Booking Appointment Modal */}
      {selectedSalon && (
        <BookingModal
          salon={selectedSalon}
          isOpen={!!selectedSalon}
          onClose={() => setSelectedSalon(null)}
        />
      )}
    </div>
  );
}

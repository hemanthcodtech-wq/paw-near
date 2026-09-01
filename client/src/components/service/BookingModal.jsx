import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { 
  X, 
  Clock, 
  Home, 
  Store, 
  CheckCircle2, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export default function BookingModal({ salon, isOpen, onClose }) {
  const { pets } = useAuth();
  
  const [selectedPet, setSelectedPet] = useState(pets[0]?.id || null);
  const [selectedService, setSelectedService] = useState(salon?.services[0]?.id || null);
  const [serviceType, setServiceType] = useState('salon'); // 'salon' | 'home'
  const [selectedDate, setSelectedDate] = useState('Today, 2 Sep');
  const [selectedSlot, setSelectedSlot] = useState('11:00 AM');
  const [bookingComplete, setBookingComplete] = useState(false);
  const [bookingId, setBookingId] = useState('');

  if (!isOpen || !salon) return null;

  const dates = [
    { label: 'Today', date: '2 Sep' },
    { label: 'Tomorrow', date: '3 Sep' },
    { label: 'Thursday', date: '4 Sep' },
    { label: 'Friday', date: '5 Sep' }
  ];

  const slots = [
    '09:30 AM', '11:00 AM', '12:30 PM', '02:30 PM', '04:00 PM', '06:00 PM'
  ];

  const activeServiceObj = salon.services.find(s => s.id === selectedService) || salon.services[0];
  const activePetObj = pets.find(p => p.id === selectedPet) || pets[0];

  const handleConfirm = (e) => {
    e.preventDefault();
    setBookingId(`BKG-${Math.floor(100000 + Math.random() * 900000)}`);
    setBookingComplete(true);
  };

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center bg-slate-950/75 backdrop-blur-xs p-0 sm:p-4 animate-in fade-in duration-200">
      
      {/* Backdrop Click to Close */}
      <div 
        className="absolute inset-0" 
        onClick={() => {
          setBookingComplete(false);
          onClose();
        }} 
      />

      {/* Modal / Drawer Content */}
      <div className="relative z-10 bg-white rounded-t-3xl sm:rounded-3xl w-full max-w-lg shadow-2xl border border-amber-100/80 overflow-hidden max-h-[90vh] sm:max-h-[85vh] flex flex-col animate-in slide-in-from-bottom-6 sm:slide-in-from-bottom-2 duration-300">
        
        {/* Mobile Drag Indicator */}
        <div className="sm:hidden pt-3 pb-1 flex justify-center bg-amber-50/60">
          <div className="w-12 h-1.5 bg-slate-300 rounded-full" />
        </div>

        {/* Modal Sticky Header */}
        <div className="px-5 py-3.5 sm:px-6 sm:py-4 border-b border-slate-100 flex items-center justify-between bg-amber-50/60 shrink-0">
          <div>
            <span className="text-[10px] sm:text-[11px] font-bold text-amber-700 uppercase tracking-wider block">
              Book Pet Grooming
            </span>
            <h3 className="font-heading font-black text-slate-900 text-base sm:text-lg truncate max-w-[280px]">
              {salon.name}
            </h3>
          </div>
          <button
            onClick={() => {
              setBookingComplete(false);
              onClose();
            }}
            className="w-8 h-8 rounded-full bg-white hover:bg-slate-100 text-slate-500 hover:text-slate-800 flex items-center justify-center shadow-xs border border-slate-200/80 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-5 flex-1">
          {bookingComplete ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="font-heading font-black text-slate-900 text-xl">Booking Confirmed!</h4>
              <p className="text-xs text-slate-600 max-w-sm mx-auto">
                Your appointment with <span className="font-bold text-slate-800">{salon.name}</span> for{' '}
                <span className="font-bold text-amber-600">{activePetObj?.name}</span> has been scheduled.
              </p>

              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 text-left space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-500">Booking ID:</span>
                  <span className="font-mono font-bold text-slate-800">{bookingId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Service:</span>
                  <span className="font-bold text-slate-800">{activeServiceObj?.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Date & Slot:</span>
                  <span className="font-bold text-slate-800">{selectedDate} @ {selectedSlot}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Location:</span>
                  <span className="font-bold text-slate-800">
                    {serviceType === 'home' ? 'Home Service (Groomer arrives at doorstep)' : 'Visit Salon Premises'}
                  </span>
                </div>
                <div className="flex justify-between pt-2 border-t border-slate-200">
                  <span className="font-bold text-slate-700">Amount Payable:</span>
                  <span className="font-extrabold text-[#E5A015] text-base">₹{activeServiceObj?.price}</span>
                </div>
              </div>

              <button
                onClick={() => {
                  setBookingComplete(false);
                  onClose();
                }}
                className="w-full py-3 bg-[#E5A015] hover:bg-[#D49010] text-slate-950 font-bold text-sm rounded-xl shadow-md transition-all active:scale-98"
              >
                Done
              </button>
            </div>
          ) : (
            <div className="space-y-5">
              
              {/* Step 1: Select Pet */}
              <div>
                <label className="block text-[11px] font-black text-slate-800 uppercase tracking-wider mb-2">
                  1. Select Your Pet
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  {pets.map((pet) => {
                    const isSelected = selectedPet === pet.id;
                    return (
                      <div
                        key={pet.id}
                        onClick={() => setSelectedPet(pet.id)}
                        className={`p-2.5 sm:p-3 rounded-2xl border cursor-pointer transition-all flex items-center gap-2.5 ${
                          isSelected
                            ? 'border-[#E5A015] bg-amber-50/70 shadow-xs ring-1 ring-[#E5A015]'
                            : 'border-slate-200 hover:border-slate-300 bg-white'
                        }`}
                      >
                        <img
                          src={pet.image}
                          alt={pet.name}
                          className="w-10 h-10 rounded-xl object-cover"
                        />
                        <div className="min-w-0">
                          <div className="font-heading font-black text-xs text-slate-900 truncate">{pet.name}</div>
                          <div className="text-[10px] text-slate-500 truncate">{pet.breed}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Location Mode */}
              <div>
                <label className="block text-[11px] font-black text-slate-800 uppercase tracking-wider mb-2">
                  2. Choose Service Location
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  <button
                    type="button"
                    onClick={() => setServiceType('salon')}
                    className={`p-3 rounded-2xl border text-left transition-all flex items-center gap-2.5 ${
                      serviceType === 'salon'
                        ? 'border-[#E5A015] bg-[#E5A015] text-slate-950 shadow-xs'
                        : 'border-slate-200 bg-slate-50/80 hover:bg-slate-100 text-slate-700'
                    }`}
                  >
                    <Store className={`w-5 h-5 ${serviceType === 'salon' ? 'text-slate-950' : 'text-slate-500'}`} />
                    <div>
                      <div className="text-xs font-black">Visit Salon</div>
                      <div className={`text-[10px] ${serviceType === 'salon' ? 'text-amber-950 font-medium' : 'text-slate-400'}`}>
                        At salon premises
                      </div>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setServiceType('home')}
                    className={`p-3 rounded-2xl border text-left transition-all flex items-center gap-2.5 ${
                      serviceType === 'home'
                        ? 'border-[#E5A015] bg-[#E5A015] text-slate-950 shadow-xs'
                        : 'border-slate-200 bg-slate-50/80 hover:bg-slate-100 text-slate-700'
                    }`}
                  >
                    <Home className={`w-5 h-5 ${serviceType === 'home' ? 'text-slate-950' : 'text-slate-500'}`} />
                    <div>
                      <div className="text-xs font-black">At Home Grooming</div>
                      <div className={`text-[10px] ${serviceType === 'home' ? 'text-amber-950 font-medium' : 'text-slate-400'}`}>
                        Groomer comes to you
                      </div>
                    </div>
                  </button>
                </div>
              </div>

              {/* Step 3: Select Service Package */}
              <div>
                <label className="block text-[11px] font-black text-slate-800 uppercase tracking-wider mb-2">
                  3. Select Service Package
                </label>
                <div className="space-y-2">
                  {salon.services.map((svc) => {
                    const isSelected = selectedService === svc.id;
                    return (
                      <div
                        key={svc.id}
                        onClick={() => setSelectedService(svc.id)}
                        className={`p-3 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                          isSelected
                            ? 'border-[#E5A015] bg-amber-50/70 shadow-xs ring-1 ring-[#E5A015]'
                            : 'border-slate-200 hover:border-slate-300 bg-white'
                        }`}
                      >
                        <div>
                          <div className="text-xs font-black text-slate-900">{svc.name}</div>
                          <div className="text-[11px] text-slate-500 flex items-center gap-1 mt-0.5">
                            <Clock className="w-3 h-3 text-slate-400" />
                            <span>{svc.duration}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-sm font-black text-slate-900">₹{svc.price}</span>
                          {svc.originalPrice && (
                            <span className="text-[10px] text-slate-400 line-through block">
                              ₹{svc.originalPrice}
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Step 4: Choose Date and Slot */}
              <div>
                <label className="block text-[11px] font-black text-slate-800 uppercase tracking-wider mb-2">
                  4. Choose Date & Time Slot
                </label>
                
                {/* Dates */}
                <div className="grid grid-cols-4 gap-2 mb-2.5">
                  {dates.map((d) => {
                    const dateStr = `${d.label}, ${d.date}`;
                    const isSelected = selectedDate === dateStr;
                    return (
                      <button
                        key={d.date}
                        type="button"
                        onClick={() => setSelectedDate(dateStr)}
                        className={`py-2 px-1 rounded-xl text-center transition-all border ${
                          isSelected
                            ? 'border-[#E5A015] bg-[#E5A015] text-slate-950 font-black shadow-xs'
                            : 'border-slate-200 bg-slate-50/80 hover:bg-slate-100 text-slate-700'
                        }`}
                      >
                        <div className="text-[9px] uppercase font-bold tracking-tight">{d.label}</div>
                        <div className="text-xs font-black">{d.date}</div>
                      </button>
                    );
                  })}
                </div>

                {/* Slots */}
                <div className="grid grid-cols-3 gap-2">
                  {slots.map((s) => {
                    const isSelected = selectedSlot === s;
                    return (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setSelectedSlot(s)}
                        className={`py-2 text-xs font-bold rounded-xl transition-all border ${
                          isSelected
                            ? 'border-[#E5A015] bg-amber-50 text-slate-950 ring-1 ring-[#E5A015]'
                            : 'border-slate-200 bg-white hover:border-slate-300 text-slate-700'
                        }`}
                      >
                        {s}
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>
          )}
        </div>

        {/* Modal Sticky Bottom CTA Bar */}
        {!bookingComplete && (
          <div className="p-4 bg-white border-t border-slate-100 shrink-0">
            <button
              onClick={handleConfirm}
              className="w-full py-3.5 bg-[#E5A015] hover:bg-[#D49010] active:scale-98 text-slate-950 font-black text-sm rounded-2xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <span>Confirm Booking (₹{activeServiceObj?.price})</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </div>,
    document.body
  );
}

import React, { useState } from 'react';
import { 
  X, 
  Calendar, 
  Clock, 
  Home, 
  Store, 
  Check, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export default function BookingModal({ salon, isOpen, onClose }) {
  const { pets } = useAuth();
  
  const [selectedPet, setSelectedPet] = useState(pets[0]?.id || null);
  const [selectedService, setSelectedService] = useState(salon?.services[0]?.id || null);
  const [serviceType, setServiceType] = useState('salon'); // 'salon' | 'home'
  const [selectedDate, setSelectedDate] = useState('Today, 2 Sep');
  const [selectedSlot, setSelectedSlot] = useState('11:30 AM');
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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/65 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl w-full max-w-lg shadow-2xl border border-amber-100 overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-amber-50">
          <div>
            <span className="text-[11px] font-bold text-amber-700 uppercase tracking-wider">Book Pet Care</span>
            <h3 className="font-heading font-extrabold text-slate-900 text-lg">{salon.name}</h3>
          </div>
          <button
            onClick={() => {
              setBookingComplete(false);
              onClose();
            }}
            className="w-8 h-8 rounded-full bg-white text-slate-500 hover:text-slate-800 flex items-center justify-center shadow-xs transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-5">
          {bookingComplete ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="font-heading font-black text-slate-900 text-xl">Booking Confirmed!</h4>
              <p className="text-xs text-slate-600 max-w-sm mx-auto">
                Your appointment with <span className="font-bold text-slate-800">{salon.name}</span> for{' '}
                <span className="font-bold text-amber-600">{activePetObj?.name}</span> has been confirmed.
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
                    {serviceType === 'home' ? 'Home Service at Doorstep' : 'Visit Salon'}
                  </span>
                </div>
                <div className="flex justify-between pt-2 border-t border-slate-200">
                  <span className="font-bold text-slate-700">Amount Payable:</span>
                  <span className="font-extrabold text-amber-600 text-sm">₹{activeServiceObj?.price}</span>
                </div>
              </div>

              <button
                onClick={() => {
                  setBookingComplete(false);
                  onClose();
                }}
                className="w-full py-3 bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm rounded-xl shadow-md transition-all"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleConfirm} className="space-y-4">
              
              {/* Step 1: Select Pet */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  1. Select Your Pet
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  {pets.map((pet) => {
                    const isSelected = selectedPet === pet.id;
                    return (
                      <div
                        key={pet.id}
                        onClick={() => setSelectedPet(pet.id)}
                        className={`p-3 rounded-2xl border cursor-pointer transition-all flex items-center gap-2.5 ${
                          isSelected
                            ? 'border-amber-500 bg-amber-50/60 shadow-xs'
                            : 'border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <img
                          src={pet.image}
                          alt={pet.name}
                          className="w-10 h-10 rounded-xl object-cover"
                        />
                        <div>
                          <div className="font-heading font-bold text-xs text-slate-800">{pet.name}</div>
                          <div className="text-[10px] text-slate-500">{pet.breed}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Visit Mode */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  2. Choose Service Location
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setServiceType('salon')}
                    className={`p-3 rounded-2xl border text-left transition-all flex items-center gap-2.5 ${
                      serviceType === 'salon'
                        ? 'border-amber-500 bg-amber-500 text-white shadow-xs'
                        : 'border-slate-200 bg-slate-50 text-slate-700'
                    }`}
                  >
                    <Store className="w-5 h-5" />
                    <div>
                      <div className="text-xs font-bold">Visit Salon</div>
                      <div className={`text-[10px] ${serviceType === 'salon' ? 'text-amber-100' : 'text-slate-400'}`}>
                        At salon premises
                      </div>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setServiceType('home')}
                    className={`p-3 rounded-2xl border text-left transition-all flex items-center gap-2.5 ${
                      serviceType === 'home'
                        ? 'border-amber-500 bg-amber-500 text-white shadow-xs'
                        : 'border-slate-200 bg-slate-50 text-slate-700'
                    }`}
                  >
                    <Home className="w-5 h-5" />
                    <div>
                      <div className="text-xs font-bold">At Home Grooming</div>
                      <div className={`text-[10px] ${serviceType === 'home' ? 'text-amber-100' : 'text-slate-400'}`}>
                        Groomer comes to you
                      </div>
                    </div>
                  </button>
                </div>
              </div>

              {/* Step 3: Select Service Package */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  3. Select Service Package
                </label>
                <div className="space-y-2 max-h-44 overflow-y-auto pr-1">
                  {salon.services.map((svc) => {
                    const isSelected = selectedService === svc.id;
                    return (
                      <div
                        key={svc.id}
                        onClick={() => setSelectedService(svc.id)}
                        className={`p-3 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                          isSelected
                            ? 'border-amber-500 bg-amber-50/50 shadow-xs'
                            : 'border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <div>
                          <div className="text-xs font-bold text-slate-800">{svc.name}</div>
                          <div className="text-[11px] text-slate-500 flex items-center gap-2 mt-0.5">
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3 text-slate-400" /> {svc.duration}
                            </span>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-sm font-extrabold text-slate-900">₹{svc.price}</span>
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
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  4. Choose Date & Time Slot
                </label>
                
                {/* Dates */}
                <div className="grid grid-cols-4 gap-1.5 mb-2.5">
                  {dates.map((d) => {
                    const dateStr = `${d.label}, ${d.date}`;
                    const isSelected = selectedDate === dateStr;
                    return (
                      <button
                        key={d.date}
                        type="button"
                        onClick={() => setSelectedDate(dateStr)}
                        className={`p-2 rounded-xl text-center transition-all border ${
                          isSelected
                            ? 'border-amber-500 bg-amber-500 text-white font-bold'
                            : 'border-slate-200 bg-slate-50 text-slate-700 text-xs'
                        }`}
                      >
                        <div className="text-[10px] uppercase">{d.label}</div>
                        <div className="text-xs font-extrabold">{d.date}</div>
                      </button>
                    );
                  })}
                </div>

                {/* Slots */}
                <div className="grid grid-cols-3 gap-1.5">
                  {slots.map((s) => {
                    const isSelected = selectedSlot === s;
                    return (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setSelectedSlot(s)}
                        className={`py-1.5 text-xs rounded-xl transition-all border ${
                          isSelected
                            ? 'border-amber-500 bg-amber-50 text-amber-800 font-bold border-2'
                            : 'border-slate-200 hover:border-slate-300 text-slate-600'
                        }`}
                      >
                        {s}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-3.5 bg-amber-500 hover:bg-amber-600 active:scale-98 text-white font-bold text-sm rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2 mt-4"
              >
                <span>Confirm Booking (₹{activeServiceObj?.price})</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

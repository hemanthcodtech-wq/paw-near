import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { 
  MapPin, 
  Navigation, 
  Search, 
  X, 
  Check, 
  Plus, 
  Building2, 
  Home, 
  Compass, 
  Loader2 
} from 'lucide-react';
import { useLocationContext } from '../../context/LocationContext';

export default function LocationModal() {
  const { 
    selectedLocation, 
    savedAddresses, 
    isLocationModalOpen, 
    isDetectingGPS, 
    setIsLocationModalOpen, 
    switchLocation, 
    addAddress, 
    detectCurrentLocation 
  } = useLocationContext();

  const [searchQuery, setSearchQuery] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);
  const [newAddr, setNewAddr] = useState({
    type: 'Home',
    tag: '',
    addressLine1: '',
    area: '',
    city: 'Hyderabad',
    pincode: '500081'
  });

  if (!isLocationModalOpen) return null;

  const handleAddNew = (e) => {
    e.preventDefault();
    if (newAddr.addressLine1 && newAddr.area) {
      addAddress({
        ...newAddr,
        name: 'Aarav Sharma',
        phone: '+91 98765 43210',
        state: 'Telangana',
        lat: 17.4200,
        lng: 78.4300
      });
      setShowAddForm(false);
    }
  };

  const filteredAddresses = savedAddresses.filter(addr =>
    addr.shortDisplay.toLowerCase().includes(searchQuery.toLowerCase()) ||
    addr.addressLine1.toLowerCase().includes(searchQuery.toLowerCase()) ||
    addr.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-t-3xl sm:rounded-3xl w-full sm:max-w-lg shadow-2xl border border-slate-100 overflow-hidden max-h-[92vh] sm:max-h-[85vh] flex flex-col animate-in slide-in-from-bottom duration-300">
        
        {/* Mobile Grab Bar */}
        <div className="w-12 h-1.5 bg-slate-200 rounded-full mx-auto my-2 sm:hidden shrink-0" />

        {/* Modal Header */}
        <div className="px-5 sm:px-6 py-3.5 sm:py-4 border-b border-slate-100 flex items-center justify-between bg-gradient-to-r from-amber-500/10 to-orange-500/10 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-2xl bg-amber-500 text-white flex items-center justify-center shadow-md">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading font-black text-slate-900 text-sm sm:text-base">Select Delivery Location</h3>
              <p className="text-[10px] sm:text-xs text-slate-500">Find nearest pet stores & 15-min instant delivery</p>
            </div>
          </div>
          <button
            onClick={() => setIsLocationModalOpen(false)}
            className="w-8 h-8 rounded-full bg-white/80 hover:bg-white text-slate-600 flex items-center justify-center transition-colors shadow-2xs"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-5">
          
          {/* Live GPS Detection Button */}
          <button
            onClick={detectCurrentLocation}
            disabled={isDetectingGPS}
            className="w-full flex items-center justify-between p-4 rounded-2xl bg-amber-50 hover:bg-amber-100/80 border border-amber-200 text-amber-900 transition-all group"
          >
            <div className="flex items-center gap-3 text-left">
              <div className="w-9 h-9 rounded-xl bg-amber-500 text-white flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                {isDetectingGPS ? <Loader2 className="w-4 h-4 animate-spin" /> : <Navigation className="w-4 h-4" />}
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-amber-700">
                  {isDetectingGPS ? 'Detecting via GPS...' : 'Use Current Location'}
                </div>
                <div className="text-xs text-amber-900/70 font-medium">Using Google Maps Location API</div>
              </div>
            </div>
            <span className="text-xs font-bold text-amber-700 underline">Detect</span>
          </button>

          {/* Search Area */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search area, apartment, street or landmark..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 text-sm rounded-xl border border-slate-200 focus:outline-amber-500 focus:bg-white transition-all"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          </div>

          {/* Saved Addresses List */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Saved Addresses</h4>
              <button
                onClick={() => setShowAddForm(!showAddForm)}
                className="text-xs font-bold text-amber-600 hover:text-amber-700 flex items-center gap-1"
              >
                <Plus className="w-3.5 h-3.5" /> Add New
              </button>
            </div>

            {/* Add Address Form */}
            {showAddForm && (
              <form onSubmit={handleAddNew} className="p-4 mb-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
                <div className="text-xs font-bold text-slate-700">Add Delivery Address</div>
                <div className="flex gap-2">
                  {['Home', 'Work', 'Other'].map(type => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setNewAddr({ ...newAddr, type })}
                      className={`px-3 py-1 text-xs rounded-lg font-semibold border ${
                        newAddr.type === type ? 'bg-amber-500 text-white border-amber-500' : 'bg-white text-slate-600 border-slate-200'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
                <input
                  type="text"
                  placeholder="Flat / House / Building Details"
                  value={newAddr.addressLine1}
                  onChange={(e) => setNewAddr({ ...newAddr, addressLine1: e.target.value })}
                  className="w-full px-3 py-2 text-xs bg-white rounded-lg border border-slate-200 focus:outline-amber-500"
                  required
                />
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    placeholder="Area / Locality (e.g. Jubilee Hills)"
                    value={newAddr.area}
                    onChange={(e) => setNewAddr({ ...newAddr, area: e.target.value })}
                    className="px-3 py-2 text-xs bg-white rounded-lg border border-slate-200 focus:outline-amber-500"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Pincode"
                    value={newAddr.pincode}
                    onChange={(e) => setNewAddr({ ...newAddr, pincode: e.target.value })}
                    className="px-3 py-2 text-xs bg-white rounded-lg border border-slate-200 focus:outline-amber-500"
                    required
                  />
                </div>
                <div className="flex justify-end gap-2 pt-1">
                  <button
                    type="button"
                    onClick={() => setShowAddForm(false)}
                    className="px-3 py-1 text-xs text-slate-500 font-semibold"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-1.5 bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold rounded-lg"
                  >
                    Save & Deliver Here
                  </button>
                </div>
              </form>
            )}

            <div className="space-y-2.5">
              {filteredAddresses.map((addr) => {
                const isSelected = selectedLocation.id === addr.id;
                return (
                  <div
                    key={addr.id}
                    onClick={() => switchLocation(addr)}
                    className={`p-3.5 rounded-2xl border cursor-pointer transition-all flex items-start justify-between ${
                      isSelected
                        ? 'border-amber-500 bg-amber-50/50 shadow-xs'
                        : 'border-slate-200 hover:border-amber-300 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                        isSelected ? 'bg-amber-500 text-white' : 'bg-slate-100 text-slate-600'
                      }`}>
                        {addr.type === 'Home' ? <Home className="w-4 h-4" /> : addr.type === 'Work' ? <Building2 className="w-4 h-4" /> : <MapPin className="w-4 h-4" />}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-slate-800">{addr.type}</span>
                          {addr.tag && (
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 font-semibold">
                              {addr.tag}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-slate-600 mt-0.5 line-clamp-1">{addr.addressLine1}</p>
                        <p className="text-[11px] text-slate-400 font-medium">{addr.shortDisplay}</p>
                      </div>
                    </div>
                    {isSelected && (
                      <div className="w-6 h-6 rounded-full bg-amber-500 text-white flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Popular Cities in Coverage */}
          <div className="pt-2 border-t border-slate-100">
            <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Available Delivery Zones</h4>
            <div className="flex flex-wrap gap-1.5">
              {['Banjara Hills', 'Jubilee Hills', 'Madhapur', 'Gachibowli', 'Hitec City', 'Kondapur', 'Kukatpally', 'Secunderabad'].map(zone => (
                <button
                  key={zone}
                  onClick={() => {
                    switchLocation({
                      id: `zone-${zone}`,
                      type: 'Locality',
                      tag: 'Area',
                      addressLine1: `${zone} Main Road`,
                      area: zone,
                      city: 'Hyderabad',
                      state: 'Telangana',
                      pincode: '500081',
                      shortDisplay: `${zone}, Hyderabad`
                    });
                  }}
                  className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-amber-100 hover:text-amber-800 text-[11px] font-semibold text-slate-600 transition-colors"
                >
                  {zone}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}

import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { 
  Users, 
  Plus, 
  Phone, 
  Bike, 
  ShieldCheck, 
  Trash2, 
  X, 
  CheckCircle2, 
  Star, 
  Clock, 
  Search,
  Power
} from 'lucide-react';
import { useVendor } from '../../context/VendorContext';

export default function VendorDeliveryTeamPage() {
  const { deliveryBoys, addDeliveryBoy, updateDeliveryBoyStatus, deleteDeliveryBoy } = useVendor();

  const [showAddModal, setShowAddModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    role: 'delivery_rider', // 'delivery_rider' | 'home_groomer' | 'mobile_vet'
    roleTitle: 'Quick Delivery Partner',
    vehicleType: 'Electric Bike',
    vehicleNumber: '',
    drivingLicence: ''
  });

  const handleCreateDeliveryBoy = (e) => {
    e.preventDefault();
    const roleTitles = {
      delivery_rider: 'Quick Delivery Partner',
      home_groomer: 'Certified Home Pet Groomer',
      mobile_vet: 'Mobile Doctor / Vet Assistant'
    };
    addDeliveryBoy({
      ...formData,
      roleTitle: roleTitles[formData.role] || 'Delivery Partner'
    });
    setFormData({
      name: '',
      phone: '',
      role: 'delivery_rider',
      roleTitle: 'Quick Delivery Partner',
      vehicleType: 'Electric Bike',
      vehicleNumber: '',
      drivingLicence: ''
    });
    setShowAddModal(false);
  };

  const filteredBoys = deliveryBoys.filter(b => 
    b.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    b.phone.includes(searchQuery) ||
    b.vehicleNumber.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="bg-amber-100 text-amber-900 border border-amber-300/80 text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              Fleet & Logistics
            </span>
          </div>
          <h1 className="font-heading font-black text-xl sm:text-2xl text-slate-900 tracking-tight">
            Delivery Team Management
          </h1>
          <p className="text-xs sm:text-sm text-slate-500">
            Create and manage delivery riders, home groomers, and field personnel operating under your store.
          </p>
        </div>

        <button
          onClick={() => setShowAddModal(true)}
          className="px-4 py-2.5 bg-[#FFB703] hover:bg-[#E5A015] text-slate-950 font-black text-xs sm:text-sm rounded-xl shadow-xs transition-all flex items-center gap-1.5 active:scale-95 shrink-0 self-start sm:self-center"
        >
          <Plus className="w-4 h-4 stroke-[3]" />
          <span>Add New Delivery Partner</span>
        </button>
      </div>

      {/* Fleet Summary KPI Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
        <div className="bg-white p-4 rounded-2xl border border-slate-200/90 shadow-xs flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
            <Users className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs text-slate-500 font-bold">Total Delivery Team</span>
            <p className="text-xl font-black text-slate-900">{deliveryBoys.length} Partners</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-200/90 shadow-xs flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs text-slate-500 font-bold">Available for Quick Dispatch</span>
            <p className="text-xl font-black text-emerald-600">
              {deliveryBoys.filter(b => b.status === 'available').length} Active
            </p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-200/90 shadow-xs flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
            <Bike className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs text-slate-500 font-bold">Total Deliveries Completed</span>
            <p className="text-xl font-black text-slate-900">
              {deliveryBoys.reduce((sum, b) => sum + (b.totalDeliveries || 0), 0)} Orders
            </p>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search delivery partners by name, phone or vehicle plate number..."
          className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-4 py-2 text-xs sm:text-sm focus:outline-none focus:border-amber-400"
        />
      </div>

      {/* Delivery Partner Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredBoys.map((boy) => {
          const statusStyles = {
            available: { bg: 'bg-emerald-50 text-emerald-700 border-emerald-200', dot: 'bg-emerald-500', label: 'Available' },
            busy: { bg: 'bg-amber-50 text-amber-700 border-amber-200', dot: 'bg-amber-500', label: 'On Active Delivery' },
            offline: { bg: 'bg-slate-100 text-slate-600 border-slate-200', dot: 'bg-slate-400', label: 'Offline' }
          };
          const st = statusStyles[boy.status] || statusStyles.available;

          return (
            <div
              key={boy.id}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:border-amber-300 transition-all p-4 sm:p-5 space-y-4"
            >
              
              {/* Profile Top Row */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <img
                    src={boy.avatar}
                    alt={boy.name}
                    className="w-12 h-12 rounded-2xl object-cover bg-slate-100 border border-slate-200 shrink-0"
                  />
                  <div>
                    <h3 className="font-heading font-black text-slate-900 text-sm sm:text-base">
                      {boy.name}
                    </h3>
                    <a
                      href={`tel:${boy.phone}`}
                      className="text-xs text-slate-500 hover:text-emerald-600 flex items-center gap-1 mt-0.5"
                    >
                      <Phone className="w-3 h-3 text-slate-400" />
                      <span>{boy.phone}</span>
                    </a>
                  </div>
                </div>

                {/* Status Badge */}
                <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold border ${st.bg}`}>
                  <span className={`w-2 h-2 rounded-full ${st.dot}`} />
                  <span>{st.label}</span>
                </span>
              </div>

              {/* Vehicle & Licence Details */}
              <div className="grid grid-cols-2 gap-2 bg-slate-50 p-3 rounded-xl border border-slate-100 text-xs">
                <div>
                  <span className="text-[10px] text-slate-400 font-bold block">VEHICLE</span>
                  <p className="font-bold text-slate-800 truncate">{boy.vehicleType}</p>
                  <p className="text-[11px] text-slate-500 font-mono">{boy.vehicleNumber}</p>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 font-bold block">DRIVING LICENCE</span>
                  <p className="font-mono text-slate-800 text-[11px] truncate">{boy.drivingLicence}</p>
                  <span className="text-[10px] text-emerald-600 font-bold flex items-center gap-0.5 mt-0.5">
                    <ShieldCheck className="w-3 h-3" /> Verified
                  </span>
                </div>
              </div>

              {/* Stats & Actions */}
              <div className="flex items-center justify-between pt-1 border-t border-slate-100 text-xs">
                <div className="flex items-center gap-3 text-slate-600">
                  <span className="font-bold">
                    📦 {boy.totalDeliveries} Orders
                  </span>
                  <span className="text-slate-300">•</span>
                  <span className="flex items-center gap-1 font-bold text-slate-800">
                    <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                    <span>{boy.rating}</span>
                  </span>
                </div>

                {/* Status Toggle & Remove */}
                <div className="flex items-center gap-2">
                  <select
                    value={boy.status}
                    onChange={(e) => updateDeliveryBoyStatus(boy.id, e.target.value)}
                    className="bg-slate-100 border border-slate-200 text-slate-800 rounded-lg px-2 py-1 text-[11px] font-bold focus:outline-none focus:border-amber-400"
                  >
                    <option value="available">Available</option>
                    <option value="busy">On Delivery</option>
                    <option value="offline">Offline</option>
                  </select>

                  <button
                    onClick={() => {
                      if (confirm(`Remove ${boy.name} from store delivery team?`)) {
                        deleteDeliveryBoy(boy.id);
                      }
                    }}
                    className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                    title="Remove Partner"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
          );
        })}
      </div>

      {/* Add Delivery Partner Modal */}
      {showAddModal && createPortal(
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-slate-950/70 backdrop-blur-sm p-0 sm:p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-t-3xl sm:rounded-3xl w-full sm:max-w-md max-h-[92vh] sm:max-h-[85vh] flex flex-col shadow-2xl border border-slate-100 overflow-hidden animate-in slide-in-from-bottom duration-300">
            
            {/* Mobile Grab Bar */}
            <div className="w-12 h-1.5 bg-slate-200 rounded-full mx-auto my-2 sm:hidden shrink-0" />

            {/* Header */}
            <div className="px-5 sm:px-6 py-3.5 sm:py-4 border-b border-slate-100 flex items-center justify-between shrink-0 bg-white">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-purple-500 to-indigo-600 text-white flex items-center justify-center font-bold shrink-0 shadow-xs">
                  <Users className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-heading font-black text-sm sm:text-base text-slate-900 truncate">
                    Register Delivery Partner
                  </h3>
                  <p className="text-[10px] sm:text-[11px] text-slate-400">
                    Add delivery rider, home groomer or field staff
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowAddModal(false)}
                className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-xl transition-colors shrink-0"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Form Body */}
            <form onSubmit={handleCreateDeliveryBoy} className="flex flex-col min-h-0 flex-1">
              <div className="p-4 sm:p-6 overflow-y-auto overscroll-contain flex-1 space-y-4 text-xs">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Partner Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Ramesh Kumar"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs focus:outline-none focus:border-amber-400 font-medium"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Staff Role & Service Specialization *
                  </label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs focus:outline-none focus:border-amber-400 font-bold text-slate-800"
                  >
                    <option value="delivery_rider">📦 Express Delivery Partner (Package courier)</option>
                    <option value="home_groomer">✂️ Certified Home Pet Groomer (Home visit grooming kit)</option>
                    <option value="mobile_vet">🩺 Mobile Doctor / Vet Assistant (Home health checks)</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Mobile Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs focus:outline-none focus:border-amber-400 font-medium"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      Vehicle Type *
                    </label>
                    <select
                      value={formData.vehicleType}
                      onChange={(e) => setFormData({ ...formData, vehicleType: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-3 text-xs focus:outline-none focus:border-amber-400"
                    >
                      <option value="Electric Bike">Electric Bike</option>
                      <option value="Motorcycle">Motorcycle</option>
                      <option value="Scooter">Scooter</option>
                      <option value="Electric Scooter">Electric Scooter</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      Vehicle Number Plate *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.vehicleNumber}
                      onChange={(e) => setFormData({ ...formData, vehicleNumber: e.target.value.toUpperCase() })}
                      placeholder="TS 09 AB 1234"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs uppercase focus:outline-none focus:border-amber-400 font-mono font-bold"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Driving Licence Number *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.drivingLicence}
                    onChange={(e) => setFormData({ ...formData, drivingLicence: e.target.value.toUpperCase() })}
                    placeholder="DL-0420230099881"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs uppercase focus:outline-none focus:border-amber-400 font-mono font-bold"
                  />
                </div>
              </div>

              {/* Sticky Footer */}
              <div className="px-5 sm:px-6 py-3.5 sm:py-4 border-t border-slate-100 bg-slate-50 flex items-center justify-end gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2.5 bg-white hover:bg-slate-100 text-slate-700 font-bold rounded-xl border border-slate-200 transition-colors text-xs"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 sm:flex-initial px-6 py-2.5 bg-[#FFB703] hover:bg-[#E5A015] text-slate-950 font-black rounded-xl shadow-xs transition-all active:scale-95 text-xs text-center"
                >
                  Create Account
                </button>
              </div>

            </form>

          </div>
        </div>,
        document.body
      )}

    </div>
  );
}

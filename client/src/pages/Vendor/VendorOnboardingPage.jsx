import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Building2, 
  MapPin, 
  FileText, 
  Camera, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  ShieldCheck, 
  Upload, 
  Compass, 
  Clock, 
  Sparkles,
  AlertCircle,
  Eye,
  Store,
  User,
  Phone,
  Mail,
  Stethoscope,
  Scissors,
  Home,
  Check,
  ChevronRight,
  Info
} from 'lucide-react';
import { useVendor } from '../../context/VendorContext';
import Logo from '../../components/common/Logo';

export default function VendorOnboardingPage() {
  const navigate = useNavigate();
  const { vendor, submitOnboardingApplication, setApprovalStatus } = useVendor();

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(vendor.status === 'pending');
  const [gpsLoading, setGpsLoading] = useState(false);
  const [gpsSuccess, setGpsSuccess] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    // 1. Owner & Basic
    fullName: vendor.fullName || '',
    email: vendor.email || '',
    phone: vendor.phone || '',
    password: '••••••••••',
    // 2. Store Details & Multi-Service Selection
    businessTypes: vendor.businessTypes || ['Pet Store & Retail', 'Pet Grooming & Spa'],
    businessType: vendor.businessType || 'Pet Store & Grooming',
    storeName: vendor.storeName || '',
    storeCategory: vendor.storeCategory || 'Pet Food, Accessories, Grooming & Healthcare',
    serviceDeliveryModes: vendor.serviceDeliveryModes || {
      homeServiceEnabled: true,
      clinicVisitEnabled: true,
      homeServiceFee: 99,
      homeServiceRadiusKm: 8
    },
    // 3. Store Licence, PAN & Aadhaar (Section 4.1)
    storeLicenceNumber: vendor.storeLicenceNumber || '',
    licenceType: 'Trade Licence / Veterinary Retail Permit',
    gstin: vendor.gstin || '',
    panNumber: vendor.panNumber || '',
    aadhaarNumber: vendor.aadhaarNumber || '',
    // 4. Real-time store location capture (via Google Maps / GPS)
    location: {
      address: vendor.location?.address || 'Plot 42, Road No. 12, Banjara Hills',
      city: vendor.location?.city || 'Hyderabad',
      pincode: vendor.location?.pincode || '500034',
      lat: vendor.location?.lat || 17.4156,
      lng: vendor.location?.lng || 78.4350,
      landmark: vendor.location?.landmark || 'Opposite Care Hospital'
    },
    // 5. Store Photographs
    photos: {
      storeFront: vendor.photos?.storeFront || '/images/promo_banner_main.jpg',
      interior: vendor.photos?.interior || '/images/promo_puppy.jpg',
      logo: vendor.photos?.logo || '/images/store_vet.jpg'
    }
  });

  const toggleBusinessType = (typeId) => {
    setFormData(prev => {
      const exists = prev.businessTypes.includes(typeId);
      const updated = exists 
        ? prev.businessTypes.filter(t => t !== typeId)
        : [...prev.businessTypes, typeId];
      // Keep at least one
      const finalTypes = updated.length > 0 ? updated : [typeId];
      return {
        ...prev,
        businessTypes: finalTypes,
        businessType: finalTypes.join(', ')
      };
    });
  };

  const toggleDeliveryMode = (mode) => {
    setFormData(prev => ({
      ...prev,
      serviceDeliveryModes: {
        ...prev.serviceDeliveryModes,
        [mode]: !prev.serviceDeliveryModes[mode]
      }
    }));
  };

  const handleDeliveryModeSetting = (key, value) => {
    setFormData(prev => ({
      ...prev,
      serviceDeliveryModes: {
        ...prev.serviceDeliveryModes,
        [key]: value
      }
    }));
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleLocationChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      location: {
        ...prev.location,
        [field]: value
      }
    }));
  };

  // Real-time GPS Location Trigger
  const handleCaptureGPS = () => {
    setGpsLoading(true);
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setFormData(prev => ({
            ...prev,
            location: {
              ...prev.location,
              lat: Number(position.coords.latitude.toFixed(6)),
              lng: Number(position.coords.longitude.toFixed(6))
            }
          }));
          setGpsLoading(false);
          setGpsSuccess(true);
        },
        () => {
          // Accurate default fallback
          setFormData(prev => ({
            ...prev,
            location: {
              ...prev.location,
              lat: 17.4156,
              lng: 78.4350
            }
          }));
          setGpsLoading(false);
          setGpsSuccess(true);
        },
        { enableHighAccuracy: true, timeout: 5000 }
      );
    } else {
      setGpsLoading(false);
      setGpsSuccess(true);
    }
  };

  const handleSubmitApplication = (e) => {
    e.preventDefault();
    submitOnboardingApplication(formData);
    setIsSubmitted(true);
  };

  const steps = [
    { number: 1, title: 'Store & Owner', desc: 'Basic info & contact', icon: Store },
    { number: 2, title: 'Licences & ID', desc: 'Licence, PAN & Aadhaar', icon: FileText },
    { number: 3, title: 'Store Geolocation', desc: 'Google Maps GPS capture', icon: MapPin },
    { number: 4, title: 'Store Photos', desc: 'Exterior & interior gallery', icon: Camera },
    { number: 5, title: 'Review & Submit', desc: 'Admin review submission', icon: CheckCircle2 }
  ];

  // SUBMITTED STATE: Under Admin Review
  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-[#FAF7F2] py-12 px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center font-sans">
        <div className="max-w-2xl w-full bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl text-center space-y-6 animate-in zoom-in-95 duration-300">
          
          {/* Animated Status Icon */}
          <div className="w-20 h-20 rounded-full bg-amber-50 border-4 border-amber-200 text-amber-500 flex items-center justify-center mx-auto shadow-inner">
            <Clock className="w-10 h-10 animate-pulse" />
          </div>

          <div className="space-y-2">
            <span className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-900 border border-amber-300/80 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
              Under Admin Review (Section 4.1)
            </span>
            <h2 className="font-heading font-black text-2xl sm:text-3xl text-slate-900 tracking-tight">
              Application Submitted for Admin Approval!
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto">
              Thank you, <strong>{formData.fullName || 'Store Manager'}</strong>. Your onboarding application for{' '}
              <strong>{formData.storeName || 'Your Pet Store'}</strong> is under verification by the PAW NEAR compliance team.
            </p>
          </div>

          {/* Verification Pipeline Stepper */}
          <div className="bg-slate-50 rounded-2xl p-4 sm:p-5 border border-slate-200/80 text-left space-y-3">
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Verification Pipeline
            </h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
              <div className="bg-white p-3 rounded-xl border border-emerald-200 shadow-2xs">
                <span className="text-[10px] font-bold text-emerald-600 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Step 1
                </span>
                <p className="font-bold text-slate-900 text-xs mt-0.5">Submitted</p>
                <p className="text-[10px] text-slate-400">Application logged</p>
              </div>

              <div className="bg-amber-50 p-3 rounded-xl border border-amber-300 shadow-2xs">
                <span className="text-[10px] font-bold text-amber-700 flex items-center gap-1">
                  <Clock className="w-3 h-3" /> Step 2
                </span>
                <p className="font-bold text-slate-900 text-xs mt-0.5">KYC Check</p>
                <p className="text-[10px] text-slate-600">PAN & Aadhaar match</p>
              </div>

              <div className="bg-white p-3 rounded-xl border border-slate-200 opacity-60">
                <span className="text-[10px] font-bold text-slate-400">Step 3</span>
                <p className="font-bold text-slate-700 text-xs mt-0.5">Licence Audit</p>
                <p className="text-[10px] text-slate-400">Trade permit verify</p>
              </div>

              <div className="bg-white p-3 rounded-xl border border-slate-200 opacity-60">
                <span className="text-[10px] font-bold text-slate-400">Step 4</span>
                <p className="font-bold text-slate-700 text-xs mt-0.5">Store Live</p>
                <p className="text-[10px] text-slate-400">Accept orders</p>
              </div>
            </div>
          </div>

          {/* Submission Key Details */}
          <div className="bg-white rounded-2xl p-4 border border-slate-200 text-left space-y-2 text-xs">
            <div className="flex justify-between py-1 border-b border-slate-100">
              <span className="text-slate-500">Tracking Reference ID:</span>
              <span className="font-mono font-bold text-slate-900">APP-HYD-884920</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-100">
              <span className="text-slate-500">Store Licence & PAN:</span>
              <span className="font-bold text-slate-800">{formData.storeLicenceNumber || 'DL-PET-2024-88492'} • {formData.panNumber || 'ABCPS1234D'}</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-slate-500">Google Maps Geolocation:</span>
              <span className="font-mono text-slate-800 font-bold">{formData.location.lat}, {formData.location.lng}</span>
            </div>
          </div>

          {/* Instant Demo Testing Banner */}
          <div className="p-4 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-300 rounded-2xl text-left space-y-2">
            <div className="flex items-center gap-1.5 text-emerald-800 font-bold text-xs">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>Instant Demo Mode Approval (Skip 24-hr waiting)</span>
            </div>
            <p className="text-[11px] text-slate-600">
              Instantly activate store management (Section 4.2) to post products, manage delivery boys, and assign orders:
            </p>
            <button
              onClick={() => {
                setApprovalStatus('approved');
                navigate('/vendor/dashboard');
              }}
              className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs rounded-xl shadow-xs transition-all flex items-center justify-center gap-2 active:scale-95"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Simulate Admin Instant Approval & Launch Dashboard</span>
            </button>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              onClick={() => navigate('/vendor/dashboard')}
              className="flex-1 py-3 px-4 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm rounded-xl transition-colors"
            >
              Preview Store Dashboard (Under Review)
            </button>
            <Link
              to="/"
              className="flex-1 py-3 px-4 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-bold text-xs sm:text-sm rounded-xl transition-colors flex items-center justify-center"
            >
              Return to Customer App
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF7F2] py-6 sm:py-10 px-4 sm:px-6 lg:px-8 text-slate-900 font-sans selection:bg-[#FFB703] selection:text-slate-950">
      <div className="max-w-4xl mx-auto space-y-6">
        
        {/* Top Navbar */}
        <header className="flex items-center justify-between gap-3 border-b border-slate-200/80 pb-4">
          <div className="flex items-center gap-2">
            <Logo to="/" size="md" />
            <span className="bg-amber-100 text-amber-900 text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider hidden xs:inline-block">
              Partner Onboarding
            </span>
          </div>
          <Link
            to="/vendor/login"
            className="text-xs font-bold text-amber-600 hover:text-amber-700 bg-white border border-slate-200 px-3.5 py-2 rounded-xl shadow-2xs flex items-center gap-1.5 transition-all hover:bg-slate-50"
          >
            <span>Already approved? Sign In</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </header>

        {/* Page Hero Title */}
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="bg-amber-100 text-amber-900 text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              Section 4.1 • Store Registration
            </span>
          </div>
          <h1 className="font-heading font-black text-2xl sm:text-3xl text-slate-900 tracking-tight">
            Vendor Partner Application
          </h1>
          <p className="text-xs sm:text-sm text-slate-500">
            Apply to list your pet store, veterinary clinic or grooming center on PAW NEAR
          </p>
        </div>

        {/* Multi-Step Indicator Progress Bar */}
        <div className="bg-white p-4 sm:p-5 rounded-3xl border border-slate-200/90 shadow-xs space-y-3">
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold text-slate-900">
              Step {currentStep} of 5: <span className="text-amber-600">{steps[currentStep - 1].title}</span>
            </span>
            <span className="text-slate-400 font-semibold">{Math.round((currentStep / 5) * 100)}% Completed</span>
          </div>

          {/* Progress bar line */}
          <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-amber-400 to-[#FB8500] transition-all duration-300 rounded-full"
              style={{ width: `${(currentStep / 5) * 100}%` }}
            />
          </div>

          {/* Steps Pills */}
          <div className="grid grid-cols-5 gap-1.5 pt-1">
            {steps.map((s) => {
              const Icon = s.icon;
              const isDone = currentStep > s.number;
              const isCurrent = currentStep === s.number;
              return (
                <button
                  key={s.number}
                  type="button"
                  onClick={() => setCurrentStep(s.number)}
                  className={`flex flex-col items-center gap-1 p-1.5 sm:p-2 rounded-2xl transition-all text-center ${
                    isCurrent
                      ? 'bg-amber-50 border border-amber-300 text-amber-950 font-bold'
                      : isDone
                      ? 'text-emerald-700 font-semibold hover:bg-slate-50'
                      : 'text-slate-400 hover:text-slate-600'
                  }`}
                >
                  <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs font-bold transition-transform ${
                    isCurrent
                      ? 'bg-[#FFB703] text-slate-950 shadow-xs scale-105'
                      : isDone
                      ? 'bg-emerald-500 text-white'
                      : 'bg-slate-100 text-slate-500'
                  }`}>
                    {isDone ? <Check className="w-4 h-4 stroke-[3]" /> : <Icon className="w-3.5 h-3.5" />}
                  </div>
                  <span className="text-[10px] hidden sm:block truncate w-full font-bold">{s.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Wizard Form Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200/90 shadow-xl shadow-slate-200/50">
          
          {/* STEP 1: Store & Owner Basic Info */}
          {currentStep === 1 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="border-b border-slate-100 pb-4">
                <h3 className="font-heading font-black text-lg sm:text-xl text-slate-900">
                  Step 1: Store & Owner Information
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  Provide your official business identity and registered authorized manager contact.
                </p>
              </div>

              {/* Multi-Select Business Types & Services */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="block text-xs font-bold text-slate-700">
                    Select Your Business Types & Offered Services * (Select Multiple)
                  </label>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-full">
                    {formData.businessTypes.length} Selected
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {[
                    { id: 'Pet Store & Retail', name: 'Pet Store', icon: Store, desc: 'Food & Accessories' },
                    { id: 'Veterinary Clinic & Hospital', name: 'Veterinary Clinic', icon: Stethoscope, desc: 'Doctor & Medical Check' },
                    { id: 'Pet Grooming & Spa', name: 'Pet Grooming', icon: Scissors, desc: 'Wash, Cut & Spa' },
                    { id: 'Pet Boarding & Daycare', name: 'Pet Boarding', icon: Home, desc: 'Hostel & Sitting' }
                  ].map(bt => {
                    const Icon = bt.icon;
                    const isSelected = formData.businessTypes.includes(bt.id);
                    return (
                      <div
                        key={bt.id}
                        onClick={() => toggleBusinessType(bt.id)}
                        className={`p-3.5 rounded-2xl border cursor-pointer text-center flex flex-col items-center gap-1.5 transition-all select-none relative ${
                          isSelected
                            ? 'border-amber-500 bg-amber-50/80 ring-2 ring-amber-300 shadow-xs'
                            : 'border-slate-200 hover:bg-slate-50 hover:border-slate-300'
                        }`}
                      >
                        {isSelected && (
                          <div className="absolute top-2 right-2 w-4 h-4 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center font-bold text-[10px]">
                            ✓
                          </div>
                        )}
                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${isSelected ? 'bg-amber-400 text-slate-950' : 'bg-slate-100 text-slate-600'}`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="font-bold text-xs text-slate-900 leading-tight">{bt.name}</span>
                        <span className="text-[10px] text-slate-500">{bt.desc}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Service Delivery Modes (Home Service vs In-Clinic Visit) */}
              {(formData.businessTypes.includes('Pet Grooming & Spa') || formData.businessTypes.includes('Veterinary Clinic & Hospital')) && (
                <div className="bg-gradient-to-r from-amber-50/70 via-orange-50/60 to-amber-50/70 border border-amber-200/80 rounded-2xl p-4 sm:p-5 space-y-3.5 animate-in fade-in duration-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-heading font-black text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                        <span>🏡 Service Delivery Channels (Home Service vs In-Clinic)</span>
                      </h4>
                      <p className="text-[11px] text-slate-600 mt-0.5">
                        Configure whether your staff can visit customer homes or customers visit your clinic/salon.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    
                    {/* At-Home Service Option */}
                    <div 
                      onClick={() => toggleDeliveryMode('homeServiceEnabled')}
                      className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-start gap-3 ${
                        formData.serviceDeliveryModes.homeServiceEnabled
                          ? 'bg-white border-amber-400 ring-1 ring-amber-300 shadow-2xs'
                          : 'bg-white/60 border-slate-200 opacity-70'
                      }`}
                    >
                      <input 
                        type="checkbox" 
                        checked={formData.serviceDeliveryModes.homeServiceEnabled} 
                        onChange={() => {}} 
                        className="mt-0.5 rounded border-slate-300 text-amber-500 focus:ring-amber-400 accent-amber-500" 
                      />
                      <div className="space-y-1">
                        <span className="font-bold text-xs text-slate-900 block">🏠 At-Home Service Available</span>
                        <p className="text-[11px] text-slate-500 leading-tight">
                          Your groomers / mobile vets visit customer homes with kits for grooming & health checks.
                        </p>
                      </div>
                    </div>

                    {/* In-Clinic / Salon Visit Option */}
                    <div 
                      onClick={() => toggleDeliveryMode('clinicVisitEnabled')}
                      className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-start gap-3 ${
                        formData.serviceDeliveryModes.clinicVisitEnabled
                          ? 'bg-white border-amber-400 ring-1 ring-amber-300 shadow-2xs'
                          : 'bg-white/60 border-slate-200 opacity-70'
                      }`}
                    >
                      <input 
                        type="checkbox" 
                        checked={formData.serviceDeliveryModes.clinicVisitEnabled} 
                        onChange={() => {}} 
                        className="mt-0.5 rounded border-slate-300 text-amber-500 focus:ring-amber-400 accent-amber-500" 
                      />
                      <div className="space-y-1">
                        <span className="font-bold text-xs text-slate-900 block">🏥 In-Clinic / At-Store Visit</span>
                        <p className="text-[11px] text-slate-500 leading-tight">
                          Pet parents bring their pets to your physical clinic, salon or daycare facility.
                        </p>
                      </div>
                    </div>

                  </div>

                  {/* Home Service Config Params */}
                  {formData.serviceDeliveryModes.homeServiceEnabled && (
                    <div className="grid grid-cols-2 gap-3 pt-1 border-t border-amber-200/60">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-700 mb-1">
                          Home Visiting Charge (₹)
                        </label>
                        <input
                          type="number"
                          value={formData.serviceDeliveryModes.homeServiceFee}
                          onChange={(e) => handleDeliveryModeSetting('homeServiceFee', Number(e.target.value))}
                          className="w-full bg-white border border-amber-200 rounded-lg px-2.5 py-1.5 text-xs font-bold text-slate-900 focus:outline-none focus:border-amber-400"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-700 mb-1">
                          Max Home Service Radius (km)
                        </label>
                        <input
                          type="number"
                          value={formData.serviceDeliveryModes.homeServiceRadiusKm}
                          onChange={(e) => handleDeliveryModeSetting('homeServiceRadiusKm', Number(e.target.value))}
                          className="w-full bg-white border border-amber-200 rounded-lg px-2.5 py-1.5 text-xs font-bold text-slate-900 focus:outline-none focus:border-amber-400"
                        />
                      </div>
                    </div>
                  )}

                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Store Owner / Manager Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => handleChange('fullName', e.target.value)}
                      placeholder="e.g. Rajesh Sharma"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-amber-400 focus:bg-white transition-all font-medium"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Pet Store / Business Name *
                  </label>
                  <div className="relative">
                    <Store className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      value={formData.storeName}
                      onChange={(e) => handleChange('storeName', e.target.value)}
                      placeholder="e.g. Paws & Whiskers Supermart"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-amber-400 focus:bg-white transition-all font-medium"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Contact Phone Number (For order alerts) *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-amber-400 focus:bg-white transition-all font-medium"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Official Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      placeholder="store@domain.com"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-amber-400 focus:bg-white transition-all font-medium"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-end pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setCurrentStep(2)}
                  className="px-6 py-2.5 bg-[#FFB703] hover:bg-[#E5A015] text-slate-950 font-black text-xs sm:text-sm rounded-xl shadow-xs transition-all flex items-center gap-2 active:scale-95"
                >
                  <span>Proceed to Licence & ID (PAN/Aadhaar)</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Store Licence, PAN & Aadhaar (Section 4.1) */}
          {currentStep === 2 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="border-b border-slate-100 pb-4">
                <div className="flex items-center gap-2">
                  <h3 className="font-heading font-black text-lg sm:text-xl text-slate-900">
                    Step 2: Store Licence Details, PAN & Aadhaar (Section 4.1)
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  Required verification documents for compliant payouts and municipal trade approvals.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Store Licence / Trade Certificate No. *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.storeLicenceNumber}
                    onChange={(e) => handleChange('storeLicenceNumber', e.target.value)}
                    placeholder="DL-PET-2024-88492"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-amber-400 font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    GSTIN Number (Optional/If Registered)
                  </label>
                  <input
                    type="text"
                    value={formData.gstin}
                    onChange={(e) => handleChange('gstin', e.target.value.toUpperCase())}
                    placeholder="36AABCP1234F1Z8"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-amber-400 uppercase font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Individual PAN Card Number *
                  </label>
                  <input
                    type="text"
                    required
                    maxLength={10}
                    value={formData.panNumber}
                    onChange={(e) => handleChange('panNumber', e.target.value.toUpperCase())}
                    placeholder="ABCPS1234D"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-amber-400 uppercase font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Owner Aadhaar Number *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.aadhaarNumber}
                    onChange={(e) => handleChange('aadhaarNumber', e.target.value)}
                    placeholder="XXXX-XXXX-8921"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-amber-400 font-mono"
                  />
                </div>
              </div>

              {/* Upload Dropzones */}
              <div className="space-y-3 pt-2">
                <label className="block text-xs font-bold text-slate-700">
                  Supporting Verification Proofs (Section 4.1)
                </label>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="bg-slate-50 hover:bg-amber-50/50 border-2 border-dashed border-slate-300 hover:border-amber-400 rounded-2xl p-4 text-center flex flex-col items-center justify-center gap-1.5 transition-all cursor-pointer">
                    <FileText className="w-6 h-6 text-amber-600" />
                    <span className="text-xs font-bold text-slate-900">Trade Licence PDF</span>
                    <span className="text-[10px] text-emerald-600 font-bold flex items-center gap-0.5">
                      <CheckCircle2 className="w-3 h-3" /> Attached
                    </span>
                  </div>

                  <div className="bg-slate-50 hover:bg-amber-50/50 border-2 border-dashed border-slate-300 hover:border-amber-400 rounded-2xl p-4 text-center flex flex-col items-center justify-center gap-1.5 transition-all cursor-pointer">
                    <ShieldCheck className="w-6 h-6 text-emerald-600" />
                    <span className="text-xs font-bold text-slate-900">PAN Card Image</span>
                    <span className="text-[10px] text-emerald-600 font-bold flex items-center gap-0.5">
                      <CheckCircle2 className="w-3 h-3" /> Attached
                    </span>
                  </div>

                  <div className="bg-slate-50 hover:bg-amber-50/50 border-2 border-dashed border-slate-300 hover:border-amber-400 rounded-2xl p-4 text-center flex flex-col items-center justify-center gap-1.5 transition-all cursor-pointer">
                    <Upload className="w-6 h-6 text-blue-600" />
                    <span className="text-xs font-bold text-slate-900">Aadhaar Document</span>
                    <span className="text-[10px] text-emerald-600 font-bold flex items-center gap-0.5">
                      <CheckCircle2 className="w-3 h-3" /> Attached
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex justify-between pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setCurrentStep(1)}
                  className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs sm:text-sm rounded-xl transition-colors flex items-center gap-1.5"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentStep(3)}
                  className="px-6 py-2.5 bg-[#FFB703] hover:bg-[#E5A015] text-slate-950 font-black text-xs sm:text-sm rounded-xl transition-all flex items-center gap-2 active:scale-95"
                >
                  <span>Proceed to Real-Time Location Capture</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Real-Time Store Location Capture (Google Maps GPS) */}
          {currentStep === 3 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="border-b border-slate-100 pb-4">
                <div className="flex items-center gap-2">
                  <h3 className="font-heading font-black text-lg sm:text-xl text-slate-900">
                    Step 3: Real-Time Store Location Capture (Google Maps / GPS)
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  Pinpoint your exact store GPS coordinates for superfast 15-20 min quick delivery calculations.
                </p>
              </div>

              {/* Real-time GPS Trigger Banner */}
              <div className="bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 border border-amber-200 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-2xs">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#FFB703] text-slate-950 flex items-center justify-center font-bold shadow-xs">
                    <Compass className="w-5 h-5 animate-spin" style={{ animationDuration: '6s' }} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Real-Time Store Geolocation</h4>
                    <p className="text-[11px] text-slate-600">
                      Latitude: <span className="font-mono text-slate-900 font-bold">{formData.location.lat}</span> | Longitude: <span className="font-mono text-slate-900 font-bold">{formData.location.lng}</span>
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCaptureGPS}
                  disabled={gpsLoading}
                  className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl shadow-xs transition-all flex items-center gap-1.5 active:scale-95 shrink-0"
                >
                  {gpsLoading ? (
                    <span className="inline-block w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <MapPin className="w-3.5 h-3.5 text-amber-400" />
                      <span>{gpsSuccess ? 'Re-capture GPS Location' : 'Capture Live GPS Location'}</span>
                    </>
                  )}
                </button>
              </div>

              {/* Interactive Visual Map Simulation */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-900 h-56 sm:h-64 flex items-center justify-center shadow-inner">
                {/* Map Grid Pattern */}
                <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:16px_16px]" />
                
                {/* Simulated Roads */}
                <div className="absolute top-1/2 left-0 right-0 h-3 bg-slate-700/80" />
                <div className="absolute top-0 bottom-0 left-1/3 w-3 bg-slate-700/80" />
                <div className="absolute top-0 bottom-0 right-1/4 w-3 bg-slate-700/80" />

                {/* Pulsing Store Pin */}
                <div className="relative z-10 flex flex-col items-center animate-bounce" style={{ animationDuration: '2s' }}>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#FFB703] to-[#FB8500] text-slate-950 flex items-center justify-center shadow-xl border-3 border-white">
                    <Store className="w-6 h-6" />
                  </div>
                  <div className="w-4 h-1.5 bg-black/50 rounded-full blur-[1px] mt-1" />
                </div>

                {/* Radar Ripple Effect */}
                <div className="absolute w-32 h-32 rounded-full border-2 border-amber-400/40 animate-ping pointer-events-none" />

                <div className="absolute bottom-3 left-3 bg-slate-950/85 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-700 text-[11px] font-mono text-slate-300">
                  📍 {formData.location.lat}, {formData.location.lng} (Accuracy: High 99.8%)
                </div>

                <div className="absolute top-3 right-3 bg-emerald-500 text-white px-2.5 py-1 rounded-lg text-[10px] font-bold flex items-center gap-1 shadow-xs">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Google Maps Geocoded</span>
                </div>
              </div>

              {/* Address Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Store Street Address *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.location.address}
                    onChange={(e) => handleLocationChange('address', e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    City *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.location.city}
                    onChange={(e) => handleLocationChange('city', e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Pincode *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.location.pincode}
                    onChange={(e) => handleLocationChange('pincode', e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Landmark / Delivery Direction
                  </label>
                  <input
                    type="text"
                    value={formData.location.landmark}
                    onChange={(e) => handleLocationChange('landmark', e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div className="flex justify-between pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setCurrentStep(2)}
                  className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs sm:text-sm rounded-xl transition-colors flex items-center gap-1.5"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentStep(4)}
                  className="px-6 py-2.5 bg-[#FFB703] hover:bg-[#E5A015] text-slate-950 font-black text-xs sm:text-sm rounded-xl transition-all flex items-center gap-2 active:scale-95"
                >
                  <span>Proceed to Store Photographs</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: Store Photographs */}
          {currentStep === 4 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="border-b border-slate-100 pb-4">
                <h3 className="font-heading font-black text-lg sm:text-xl text-slate-900">
                  Step 4: Store Photographs & Branding (Section 4.1)
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  High-quality photographs of your storefront and shelves build trust with nearby pet parents.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                
                {/* Storefront */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-700">
                    Storefront Exterior (Signboard) *
                  </label>
                  <div className="relative aspect-video rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 group shadow-xs">
                    <img 
                      src={formData.photos.storeFront} 
                      alt="Storefront" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform" 
                    />
                  </div>
                  <span className="text-[10px] text-emerald-600 font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Photo Attached
                  </span>
                </div>

                {/* Interior */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-700">
                    Store Interior & Shelves *
                  </label>
                  <div className="relative aspect-video rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 group shadow-xs">
                    <img 
                      src={formData.photos.interior} 
                      alt="Interior" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform" 
                    />
                  </div>
                  <span className="text-[10px] text-emerald-600 font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Photo Attached
                  </span>
                </div>

                {/* Logo */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-700">
                    Store Brand Logo Icon
                  </label>
                  <div className="relative aspect-video rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 group flex items-center justify-center shadow-xs">
                    <img 
                      src={formData.photos.logo} 
                      alt="Logo" 
                      className="w-16 h-16 rounded-full object-cover border-2 border-amber-400 group-hover:scale-105 transition-transform" 
                    />
                  </div>
                  <span className="text-[10px] text-emerald-600 font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Logo Attached
                  </span>
                </div>
              </div>

              <div className="flex justify-between pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setCurrentStep(3)}
                  className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs sm:text-sm rounded-xl transition-colors flex items-center gap-1.5"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentStep(5)}
                  className="px-6 py-2.5 bg-[#FFB703] hover:bg-[#E5A015] text-slate-950 font-black text-xs sm:text-sm rounded-xl transition-all flex items-center gap-2 active:scale-95"
                >
                  <span>Review Application Summary</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 5: Final Review & Application Submission */}
          {currentStep === 5 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="border-b border-slate-100 pb-4">
                <h3 className="font-heading font-black text-lg sm:text-xl text-slate-900">
                  Step 5: Final Review & Submission for Admin Approval
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  Verify your submitted credentials before transmitting to the PAW NEAR admin team.
                </p>
              </div>

              {/* Summary Card */}
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-3 text-xs sm:text-sm">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pb-3 border-b border-slate-200">
                  <div>
                    <span className="text-slate-400 block text-[11px] font-bold">STORE & OWNER</span>
                    <span className="font-bold text-slate-900">{formData.storeName} ({formData.fullName})</span>
                    <p className="text-slate-500 text-xs mt-0.5">{formData.phone} • {formData.email}</p>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px] font-bold">OFFERED SERVICES</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {formData.businessTypes.map((t, idx) => (
                        <span key={idx} className="bg-amber-100 text-amber-900 font-bold text-[10px] px-2 py-0.5 rounded-full">
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="text-[11px] text-slate-600 mt-1.5 space-y-0.5">
                      {formData.serviceDeliveryModes.homeServiceEnabled && (
                        <p className="text-emerald-700 font-medium">✓ 🏠 At-Home Service Enabled (₹{formData.serviceDeliveryModes.homeServiceFee} fee, max {formData.serviceDeliveryModes.homeServiceRadiusKm}km)</p>
                      )}
                      {formData.serviceDeliveryModes.clinicVisitEnabled && (
                        <p className="text-blue-700 font-medium">✓ 🏥 In-Clinic / At-Store Appointments Accepted</p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pb-3 border-b border-slate-200">
                  <div>
                    <span className="text-slate-400 block text-[11px] font-bold">STORE TRADE LICENCE</span>
                    <span className="font-mono font-bold text-slate-900">{formData.storeLicenceNumber || 'DL-PET-2024-88492'}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px] font-bold">PAN / AADHAAR</span>
                    <span className="font-mono font-bold text-emerald-700">{formData.panNumber || 'ABCPS1234D'} / {formData.aadhaarNumber || 'XXXX-XXXX-8921'}</span>
                  </div>
                </div>

                <div>
                  <span className="text-slate-400 block text-[11px] font-bold">GOOGLE MAPS GPS LOCATION</span>
                  <p className="text-slate-800 font-medium">
                    {formData.location.address}, {formData.location.city} - {formData.location.pincode}
                  </p>
                  <p className="font-mono text-slate-500 text-[11px] mt-0.5">
                    Lat: {formData.location.lat}, Lng: {formData.location.lng}
                  </p>
                </div>

              </div>

              {/* Declaration */}
              <label className="flex items-start gap-2.5 text-xs text-slate-600 cursor-pointer pt-1">
                <input
                  type="checkbox"
                  defaultChecked
                  className="rounded border-slate-300 text-amber-500 focus:ring-amber-400 w-4 h-4 mt-0.5 accent-amber-500"
                />
                <span>
                  I declare that the store details, licences, tax PAN/Aadhaar and location provided above are genuine and accurate as per local municipal trade regulations.
                </span>
              </label>

              <div className="flex justify-between pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setCurrentStep(4)}
                  className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs sm:text-sm rounded-xl transition-colors flex items-center gap-1.5"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>
                <button
                  type="button"
                  onClick={handleSubmitApplication}
                  className="px-8 py-3 bg-[#FFB703] hover:bg-[#E5A015] text-slate-950 font-black text-sm rounded-xl shadow-lg shadow-amber-500/10 transition-all flex items-center gap-2 active:scale-95"
                >
                  <CheckCircle2 className="w-5 h-5 stroke-[2.5]" />
                  <span>Submit Application for Admin Review</span>
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}

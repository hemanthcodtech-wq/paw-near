import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Store, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Lock, 
  Mail, 
  Sparkles, 
  Building2, 
  MapPin, 
  Truck,
  Zap,
  TrendingUp,
  Star,
  Users,
  Eye,
  EyeOff
} from 'lucide-react';
import { useVendor } from '../../context/VendorContext';
import Logo from '../../components/common/Logo';

export default function VendorLoginPage() {
  const navigate = useNavigate();
  const { vendor, setApprovalStatus } = useVendor();
  const [email, setEmail] = useState('rajesh.paws@gmail.com');
  const [password, setPassword] = useState('password123');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate('/vendor/dashboard');
    }, 500);
  };

  const handleQuickDemoApproved = () => {
    setApprovalStatus('approved');
    navigate('/vendor/dashboard');
  };

  const handleQuickDemoPending = () => {
    setApprovalStatus('pending');
    navigate('/vendor/dashboard');
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] flex flex-col justify-between selection:bg-[#FFB703] selection:text-slate-950 font-sans">
      
      {/* Top Navbar */}
      <header className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Logo to="/" size="md" />
          <span className="bg-amber-100 text-amber-900 text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider">
            Vendor Portal
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/vendor/onboarding"
            className="text-xs font-bold text-slate-700 hover:text-[#FB8500] hidden sm:inline-block transition-colors"
          >
            Become a Partner
          </Link>
          <Link
            to="/"
            className="text-xs font-bold text-slate-600 hover:text-slate-900 bg-white border border-slate-200 px-3.5 py-1.5 rounded-xl shadow-2xs transition-all hover:bg-slate-50"
          >
            ← Customer App
          </Link>
        </div>
      </header>

      {/* Main Content Split Section */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 flex items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Brand Showcase & Value Pillars */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-100/80 border border-amber-200 text-amber-950 text-xs font-bold shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Hyderabad's #1 Hyperlocal Pet Commerce Network</span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight leading-[1.15]">
                Grow Your Pet Store with <span className="bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">Instant Delivery</span>
              </h1>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-lg">
                Connect directly with pet parents in your neighborhood. Manage catalog inventory, delivery staff, and live incoming orders in one intuitive dashboard.
              </p>
            </div>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="bg-white/80 backdrop-blur-xs p-3.5 rounded-2xl border border-slate-200/80 shadow-2xs">
                <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold mb-2">
                  <Zap className="w-4 h-4 fill-amber-500" />
                </div>
                <h4 className="font-bold text-slate-900 text-xs sm:text-sm">15-20 Min Delivery</h4>
                <p className="text-[11px] text-slate-500 mt-0.5">Automated rider dispatch to customers within 5km</p>
              </div>

              <div className="bg-white/80 backdrop-blur-xs p-3.5 rounded-2xl border border-slate-200/80 shadow-2xs">
                <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold mb-2">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Direct Store Revenue</h4>
                <p className="text-[11px] text-slate-500 mt-0.5">Zero listing fees & daily automated bank settlements</p>
              </div>
            </div>

            {/* Live Store Social Proof Badge */}
            <div className="flex items-center gap-3 bg-white p-3 rounded-2xl border border-slate-200/80 shadow-2xs max-w-md">
              <div className="flex -space-x-2 shrink-0">
                <img className="w-8 h-8 rounded-full border-2 border-white object-cover" src="/images/store_vet.jpg" alt="Partner 1" />
                <img className="w-8 h-8 rounded-full border-2 border-white object-cover" src="/images/promo_puppy.jpg" alt="Partner 2" />
                <div className="w-8 h-8 rounded-full border-2 border-white bg-amber-400 text-slate-950 font-bold text-[10px] flex items-center justify-center">
                  +48
                </div>
              </div>
              <div className="text-xs">
                <span className="font-bold text-slate-900 block">50+ Verified Pet Stores in Hyderabad</span>
                <span className="text-[11px] text-slate-500">Banjara Hills, Jubilee Hills, Gachibowli & Madhapur</span>
              </div>
            </div>

          </div>

          {/* Right Column: Modern Glassmorphic Login Card */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-200/60 border border-slate-200/90 relative space-y-6">
              
              {/* Card Header */}
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <h2 className="font-heading font-black text-xl sm:text-2xl text-slate-900">
                    Vendor Sign In
                  </h2>
                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" />
                    Secure Portal
                  </span>
                </div>
                <p className="text-xs text-slate-500">
                  Access your store orders, inventory stock, and delivery team.
                </p>
              </div>

              {/* Instant 1-Click Demo Testing Access */}
              <div className="bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 border border-amber-200/80 rounded-2xl p-3.5 space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-amber-950">
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                    Demo One-Click Login
                  </span>
                  <span className="text-[10px] bg-amber-200/80 text-amber-900 px-2 py-0.5 rounded-full">
                    Instant Access
                  </span>
                </div>
                <p className="text-[11px] text-slate-600 leading-snug">
                  Choose a store status mode to test management or review workflows:
                </p>
                <div className="grid grid-cols-2 gap-2 pt-0.5">
                  <button
                    type="button"
                    onClick={handleQuickDemoApproved}
                    className="py-2 px-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold text-xs shadow-xs transition-all flex items-center justify-center gap-1.5 active:scale-95"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Approved Store</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleQuickDemoPending}
                    className="py-2 px-3 bg-white hover:bg-slate-100 text-slate-800 border border-slate-200 rounded-xl font-bold text-xs shadow-xs transition-all flex items-center justify-center gap-1.5 active:scale-95"
                  >
                    <ShieldCheck className="w-3.5 h-3.5 text-amber-500" />
                    <span>Under Review</span>
                  </button>
                </div>
              </div>

              {/* Standard Form */}
              <form onSubmit={handleLogin} className="space-y-4 text-xs">
                <div>
                  <label className="block font-bold text-slate-700 mb-1.5">
                    Store Manager Email / Phone Number
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-amber-400 focus:bg-white transition-all font-medium"
                      placeholder="store@domain.com or +91 98765 43210"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="block font-bold text-slate-700">
                      Password
                    </label>
                    <a
                      href="#forgot"
                      onClick={(e) => { e.preventDefault(); alert('Demo mode: click one of the Demo buttons above or click Sign In.'); }}
                      className="text-[11px] font-bold text-[#FB8500] hover:underline"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-10 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-amber-400 focus:bg-white transition-all font-medium"
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-0.5">
                  <label className="flex items-center gap-2 cursor-pointer text-slate-600">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="rounded border-slate-300 text-amber-500 focus:ring-amber-400 w-3.5 h-3.5 accent-amber-500"
                    />
                    <span>Keep me signed in</span>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3 px-4 bg-[#FFB703] hover:bg-[#E5A015] text-slate-950 font-black text-sm rounded-xl shadow-md shadow-amber-500/10 transition-all active:scale-95 flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <span className="inline-block w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Sign In to Dashboard</span>
                      <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                    </>
                  )}
                </button>
              </form>

              {/* Onboarding Register Banner */}
              <div className="pt-4 border-t border-slate-100 text-center space-y-2">
                <p className="text-xs text-slate-500">
                  New pet store, veterinary clinic or grooming center?
                </p>
                <Link
                  to="/vendor/onboarding"
                  className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-slate-100 hover:bg-amber-50 hover:border-amber-300 text-slate-900 font-bold text-xs rounded-xl border border-slate-200 transition-all group"
                >
                  <Building2 className="w-4 h-4 text-amber-600 group-hover:scale-110 transition-transform" />
                  <span>Apply for Store Onboarding (Admin Approval)</span>
                </Link>
              </div>

            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center text-xs text-slate-400 border-t border-slate-200/60">
        <p>© 2026 PAW NEAR Vendor Partner Portal. Made with ❤️ for Pet Care Professionals.</p>
      </footer>

    </div>
  );
}

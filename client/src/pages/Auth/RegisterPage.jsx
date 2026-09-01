import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  User, 
  Mail, 
  Smartphone, 
  Lock, 
  Eye, 
  EyeOff, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Heart, 
  Plus,
  Zap
} from 'lucide-react';
import Logo from '../../components/common/Logo';
import { useAuth } from '../../context/AuthContext';

export default function RegisterPage() {
  const navigate = useNavigate();
  const { registerUser, loginWithGoogle } = useAuth();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    petName: '',
    petType: 'Dog',
    petBreed: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [hasPet, setHasPet] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      registerUser({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        petName: hasPet ? formData.petName : null,
        petType: hasPet ? formData.petType : null,
        petBreed: hasPet ? formData.petBreed : null
      });
      setIsLoading(false);
      navigate('/');
    }, 600);
  };

  const handleSocialRegister = () => {
    loginWithGoogle();
    navigate('/');
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center py-8 sm:py-12 px-4">
      <div className="w-full max-w-lg bg-white rounded-3xl border border-amber-100 shadow-2xl overflow-hidden relative">
        
        {/* Top Header Banner */}
        <div className="bg-gradient-to-br from-amber-500 via-amber-600 to-orange-500 p-8 text-white text-center relative overflow-hidden">
          <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/15 rounded-full blur-xl pointer-events-none animate-float" />
          
          <div className="flex justify-center mb-3">
            <div className="bg-white p-2.5 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300">
              <Logo size="md" showText={false} to="" />
            </div>
          </div>

          <h1 className="font-heading font-black text-2xl sm:text-3xl text-white tracking-tight">
            Create Pet Parent Account
          </h1>
          <p className="text-xs text-amber-100 mt-1 max-w-sm mx-auto">
            Join PAW NEAR for instant 15-min deliveries, exclusive member deals, and veterinary care!
          </p>

          <div className="inline-flex items-center gap-1.5 mt-3 px-3 py-1 rounded-full bg-white/20 text-white text-[11px] font-bold">
            <Sparkles className="w-3.5 h-3.5 text-amber-200" />
            <span>Get ₹200 OFF on your first order</span>
          </div>
        </div>

        {/* Register Form */}
        <div className="p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Parent Name */}
            <div>
              <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-1.5">
                Full Name
              </label>
              <div className="flex items-center rounded-2xl border border-slate-200 focus-within:border-amber-500 focus-within:ring-3 focus-within:ring-amber-100 px-3.5 py-2.5 bg-slate-50/50 transition-all duration-200">
                <User className="w-4 h-4 text-slate-400 mr-2.5 shrink-0" />
                <input
                  type="text"
                  placeholder="e.g. Aarav Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full text-xs sm:text-sm bg-transparent outline-none font-semibold text-slate-800"
                />
              </div>
            </div>

            {/* Email & Phone grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-1.5">
                  Email Address
                </label>
                <div className="flex items-center rounded-2xl border border-slate-200 focus-within:border-amber-500 focus-within:ring-3 focus-within:ring-amber-100 px-3.5 py-2.5 bg-slate-50/50 transition-all duration-200">
                  <Mail className="w-4 h-4 text-slate-400 mr-2 shrink-0" />
                  <input
                    type="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full text-xs sm:text-sm bg-transparent outline-none font-semibold text-slate-800"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-1.5">
                  Mobile Number
                </label>
                <div className="flex items-center rounded-2xl border border-slate-200 focus-within:border-amber-500 focus-within:ring-3 focus-within:ring-amber-100 px-3.5 py-2.5 bg-slate-50/50 transition-all duration-200">
                  <Smartphone className="w-4 h-4 text-slate-400 mr-2 shrink-0" />
                  <input
                    type="tel"
                    placeholder="10-digit mobile"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    maxLength={10}
                    required
                    className="w-full text-xs sm:text-sm bg-transparent outline-none font-semibold text-slate-800"
                  />
                </div>
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-1.5">
                Create Password
              </label>
              <div className="flex items-center rounded-2xl border border-slate-200 focus-within:border-amber-500 focus-within:ring-3 focus-within:ring-amber-100 px-3.5 py-2.5 bg-slate-50/50 transition-all duration-200">
                <Lock className="w-4 h-4 text-slate-400 mr-2.5 shrink-0" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Min 6 characters"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  required
                  minLength={6}
                  className="w-full text-xs sm:text-sm bg-transparent outline-none font-semibold text-slate-800"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-slate-400 hover:text-slate-600 transition-colors p-1"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Pet Onboarding Section */}
            <div className="p-4 bg-amber-50/60 rounded-3xl border border-amber-200/80 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-base">🐾</span>
                  <div>
                    <h4 className="font-heading font-extrabold text-xs text-slate-900">Add Your First Pet Profile</h4>
                    <p className="text-[10px] text-slate-500">Personalize food, medicines & grooming</p>
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={hasPet}
                  onChange={(e) => setHasPet(e.target.checked)}
                  className="w-4 h-4 accent-amber-500 cursor-pointer"
                />
              </div>

              {hasPet && (
                <div className="space-y-3 pt-2 border-t border-amber-200/60">
                  <div className="flex gap-2">
                    {['Dog', 'Cat', 'Bird / Other'].map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setFormData({ ...formData, petType: type })}
                        className={`flex-1 py-1.5 text-xs font-bold rounded-xl border transition-all ${
                          formData.petType === type
                            ? 'bg-amber-500 text-white border-amber-500 shadow-xs'
                            : 'bg-white text-slate-700 border-slate-200 hover:border-amber-300'
                        }`}
                      >
                        {type === 'Dog' ? '🐶 Dog' : type === 'Cat' ? '🐱 Cat' : '🦜 Other'}
                      </button>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      placeholder="Pet's Name (e.g. Bruno)"
                      value={formData.petName}
                      onChange={(e) => setFormData({ ...formData, petName: e.target.value })}
                      className="px-3 py-2 text-xs bg-white rounded-xl border border-slate-200 outline-none focus:border-amber-500 font-semibold"
                    />
                    <input
                      type="text"
                      placeholder="Breed (e.g. Golden Retriever)"
                      value={formData.petBreed}
                      onChange={(e) => setFormData({ ...formData, petBreed: e.target.value })}
                      className="px-3 py-2 text-xs bg-white rounded-xl border border-slate-200 outline-none focus:border-amber-500 font-semibold"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-4 bg-amber-500 hover:bg-amber-600 active:scale-98 text-white font-extrabold text-sm sm:text-base rounded-2xl shadow-lg hover:shadow-amber-500/25 transition-all duration-200 flex items-center justify-center gap-2 group"
            >
              <span>{isLoading ? 'Creating Account...' : 'Complete Registration'}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Social Registration */}
            <button
              type="button"
              onClick={handleSocialRegister}
              className="w-full py-3 px-4 bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300 rounded-2xl text-xs font-extrabold text-slate-700 flex items-center justify-center gap-3 transition-all duration-200 shadow-xs"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
              </svg>
              <span>Sign up with Google</span>
            </button>

            {/* Already registered */}
            <div className="pt-2 text-center text-xs text-slate-500">
              Already have an account?{' '}
              <Link to="/login" className="font-extrabold text-amber-600 hover:text-amber-700 hover:underline">
                Sign In here
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

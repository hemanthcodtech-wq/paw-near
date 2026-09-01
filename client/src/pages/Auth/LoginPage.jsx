import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Smartphone, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  RefreshCw, 
  Zap, 
  Heart,
  ChevronRight,
  UserCheck
} from 'lucide-react';
import Logo from '../../components/common/Logo';
import { useAuth } from '../../context/AuthContext';

export default function LoginPage() {
  const navigate = useNavigate();
  const { user, loginWithPhone, loginWithEmail, loginWithGoogle } = useAuth();

  const [authMethod, setAuthMethod] = useState('phone'); // 'phone' | 'email'
  const [phoneNumber, setPhoneNumber] = useState('9876543210');
  const [email, setEmail] = useState('aarav@thepawstreet.com');
  const [password, setPassword] = useState('••••••••');
  const [showPassword, setShowPassword] = useState(false);
  const [step, setStep] = useState('input'); // 'input' | 'otp'
  const [otpValues, setOtpValues] = useState(['4', '8', '2', '9']);
  const [timer, setTimer] = useState(30);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let interval = null;
    if (step === 'otp' && timer > 0) {
      interval = setInterval(() => setTimer(t => t - 1), 1000);
    }
    return () => clearInterval(interval);
  }, [step, timer]);

  const handleSendOtp = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStep('otp');
      setTimer(30);
    }, 500);
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      loginWithPhone(phoneNumber, otpValues.join(''));
      setIsLoading(false);
      navigate('/');
    }, 600);
  };

  const handleEmailLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      loginWithEmail(email, password);
      setIsLoading(false);
      navigate('/');
    }, 600);
  };

  const handleSocialLogin = () => {
    loginWithGoogle();
    navigate('/');
  };

  const handleOtpChange = (index, value) => {
    if (value.length <= 1) {
      const newOtp = [...otpValues];
      newOtp[index] = value;
      setOtpValues(newOtp);
      if (value && index < 3) {
        const nextInput = document.getElementById(`login-otp-${index + 1}`);
        if (nextInput) nextInput.focus();
      }
    }
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center py-8 sm:py-12 px-4">
      <div className="w-full max-w-md bg-white rounded-3xl border border-amber-100 shadow-2xl overflow-hidden relative">
        
        {/* Top Gradient Banner with Animated Visual Elements */}
        <div className="bg-gradient-to-br from-amber-500 via-amber-600 to-orange-500 p-8 text-white text-center relative overflow-hidden">
          
          {/* Ambient Decorative Shapes with smooth floating transitions */}
          <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/15 rounded-full blur-xl pointer-events-none animate-float" />
          <div className="absolute -left-6 -bottom-6 w-24 h-24 bg-black/10 rounded-full blur-lg pointer-events-none" />

          {/* Logo container */}
          <div className="flex justify-center mb-3">
            <div className="bg-white p-2.5 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300">
              <Logo size="md" showText={false} to="" />
            </div>
          </div>

          <h1 className="font-heading font-black text-2xl text-white tracking-tight">
            Welcome Back!
          </h1>
          <p className="text-xs text-amber-100 mt-1 max-w-xs mx-auto">
            Login to access express 15-min delivery, saved pet profiles & live tracking
          </p>

          {/* Quick Pet Perks Indicator */}
          <div className="flex items-center justify-center gap-3 mt-4 pt-3 border-t border-white/20 text-[11px] font-semibold text-amber-100">
            <span className="flex items-center gap-1">
              <Zap className="w-3.5 h-3.5 text-amber-200 fill-amber-200 animate-pulse" /> 15-Min Delivery
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-200" /> 100% Genuine
            </span>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="p-6 sm:p-8">
          
          {/* Method Switcher Tabs */}
          {step === 'input' && (
            <div className="flex bg-slate-100 p-1 rounded-2xl mb-6">
              <button
                type="button"
                onClick={() => setAuthMethod('phone')}
                className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-1.5 ${
                  authMethod === 'phone'
                    ? 'bg-white text-slate-900 shadow-md shadow-slate-200/50 scale-[1.02]'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                <Smartphone className={`w-3.5 h-3.5 transition-transform duration-300 ${authMethod === 'phone' ? 'text-amber-500 scale-110' : ''}`} />
                <span>Mobile OTP</span>
              </button>
              
              <button
                type="button"
                onClick={() => setAuthMethod('email')}
                className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-1.5 ${
                  authMethod === 'email'
                    ? 'bg-white text-slate-900 shadow-md shadow-slate-200/50 scale-[1.02]'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                <Mail className={`w-3.5 h-3.5 transition-transform duration-300 ${authMethod === 'email' ? 'text-amber-500 scale-110' : ''}`} />
                <span>Email & Password</span>
              </button>
            </div>
          )}

          {/* Step 1: Input forms */}
          {step === 'input' ? (
            <div className="space-y-4">
              
              {authMethod === 'phone' ? (
                /* Mobile OTP Flow */
                <form onSubmit={handleSendOtp} className="space-y-4">
                  <div>
                    <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-1.5">
                      Mobile Number
                    </label>
                    <div className="flex rounded-2xl border border-slate-200 focus-within:border-amber-500 focus-within:ring-3 focus-within:ring-amber-100 overflow-hidden transition-all duration-200 bg-slate-50/50">
                      <span className="bg-slate-100 px-3.5 py-3 text-xs font-extrabold text-slate-700 flex items-center border-r border-slate-200 shrink-0">
                        🇮🇳 +91
                      </span>
                      <input
                        type="tel"
                        placeholder="Enter 10-digit number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        maxLength={10}
                        required
                        className="w-full px-3.5 py-3 text-sm bg-transparent outline-none font-semibold text-slate-800"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading || phoneNumber.length < 10}
                    className="w-full py-3.5 bg-amber-500 hover:bg-amber-600 active:scale-98 disabled:opacity-50 text-white font-extrabold text-sm rounded-2xl shadow-lg hover:shadow-amber-500/25 transition-all duration-200 flex items-center justify-center gap-2 group"
                  >
                    <span>{isLoading ? 'Sending Code...' : 'Get OTP Code'}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              ) : (
                /* Email & Password Flow */
                <form onSubmit={handleEmailLogin} className="space-y-4">
                  <div>
                    <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-1.5">
                      Email Address
                    </label>
                    <div className="flex items-center rounded-2xl border border-slate-200 focus-within:border-amber-500 focus-within:ring-3 focus-within:ring-amber-100 px-3.5 py-3 bg-slate-50/50 transition-all duration-200">
                      <Mail className="w-4 h-4 text-slate-400 mr-2.5 shrink-0" />
                      <input
                        type="email"
                        placeholder="name@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full text-sm bg-transparent outline-none font-semibold text-slate-800"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-1.5">
                      <label className="text-xs font-extrabold text-slate-700 uppercase tracking-wider">
                        Password
                      </label>
                      <a href="#" className="text-[11px] font-bold text-amber-600 hover:underline">
                        Forgot?
                      </a>
                    </div>
                    <div className="flex items-center rounded-2xl border border-slate-200 focus-within:border-amber-500 focus-within:ring-3 focus-within:ring-amber-100 px-3.5 py-3 bg-slate-50/50 transition-all duration-200">
                      <Lock className="w-4 h-4 text-slate-400 mr-2.5 shrink-0" />
                      <input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full text-sm bg-transparent outline-none font-semibold text-slate-800"
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

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-3.5 bg-amber-500 hover:bg-amber-600 active:scale-98 text-white font-extrabold text-sm rounded-2xl shadow-lg hover:shadow-amber-500/25 transition-all duration-200 flex items-center justify-center gap-2 group"
                  >
                    <span>{isLoading ? 'Signing In...' : 'Sign In'}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}

              {/* Social Login Divider */}
              <div className="relative flex items-center justify-center my-5">
                <div className="border-t border-slate-200 w-full" />
                <span className="bg-white px-3 text-[11px] font-extrabold text-slate-400 uppercase tracking-widest absolute">
                  or connect with
                </span>
              </div>

              {/* Continue with Google */}
              <button
                type="button"
                onClick={handleSocialLogin}
                className="w-full py-3 px-4 bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300 rounded-2xl text-xs font-extrabold text-slate-700 flex items-center justify-center gap-3 transition-all duration-200 shadow-xs hover:shadow-md"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                </svg>
                <span>Continue with Google</span>
              </button>

              {/* Link to Register page */}
              <div className="pt-4 text-center text-xs text-slate-500">
                Don't have an account yet?{' '}
                <Link to="/register" className="font-extrabold text-amber-600 hover:text-amber-700 hover:underline">
                  Create Account
                </Link>
              </div>
            </div>
          ) : (
            /* OTP Verification Step */
            <form onSubmit={handleVerifyOtp} className="space-y-5 text-center">
              <div className="w-14 h-14 bg-amber-100 text-amber-600 rounded-3xl flex items-center justify-center mx-auto mb-2 shadow-inner">
                <Lock className="w-7 h-7" />
              </div>
              <h3 className="font-heading font-black text-slate-900 text-lg">Verify OTP Code</h3>
              <p className="text-xs text-slate-500">
                We sent a 4-digit verification code to <br />
                <span className="font-extrabold text-slate-800">+91 {phoneNumber}</span>
                <button
                  type="button"
                  onClick={() => setStep('input')}
                  className="text-amber-600 ml-2 underline font-bold"
                >
                  Edit
                </button>
              </p>

              {/* 4 Digit Inputs */}
              <div className="flex justify-center gap-3 my-4">
                {otpValues.map((val, idx) => (
                  <input
                    key={idx}
                    id={`login-otp-${idx}`}
                    type="text"
                    maxLength={1}
                    value={val}
                    onChange={(e) => handleOtpChange(idx, e.target.value)}
                    className="w-12 h-14 text-center text-xl font-black bg-slate-50 border-2 border-slate-200 rounded-2xl focus:border-amber-500 focus:bg-white outline-none transition-all duration-200 shadow-inner"
                  />
                ))}
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3.5 bg-amber-500 hover:bg-amber-600 active:scale-98 text-white font-extrabold text-sm rounded-2xl shadow-lg hover:shadow-amber-500/25 transition-all flex items-center justify-center gap-2"
              >
                <span>{isLoading ? 'Verifying...' : 'Verify & Login'}</span>
                <CheckCircle2 className="w-4 h-4" />
              </button>

              <div className="text-xs text-slate-500 flex items-center justify-center gap-2 pt-2">
                {timer > 0 ? (
                  <span>Resend code in <strong className="text-amber-600">{timer}s</strong></span>
                ) : (
                  <button
                    type="button"
                    onClick={() => setTimer(30)}
                    className="text-amber-600 font-bold hover:underline flex items-center gap-1"
                  >
                    <RefreshCw className="w-3.5 h-3.5" /> Resend OTP
                  </button>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

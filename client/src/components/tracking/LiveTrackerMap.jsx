import React, { useState, useEffect } from 'react';
import { Store, Home, Navigation, Sparkles, Shield, Compass, PhoneCall } from 'lucide-react';

export default function LiveTrackerMap({ order }) {
  const [progress, setProgress] = useState(0.65); // 0 to 1 along path

  // Animate rider along the route
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 0.95) return 0.95;
        return p + 0.01;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Compute rider position on SVG path
  // SVG coordinates: Store at (70, 70), Waypoint 1 (180, 110), Waypoint 2 (280, 80), Customer at (380, 220)
  const riderX = 70 + (380 - 70) * progress + Math.sin(progress * Math.PI * 2) * 20;
  const riderY = 70 + (220 - 70) * progress + Math.cos(progress * Math.PI) * 15;

  return (
    <div className="relative w-full h-80 sm:h-96 rounded-3xl bg-slate-900 overflow-hidden shadow-xl border border-slate-800 select-none">
      
      {/* Map Grid Pattern & Roads */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 450 300" preserveAspectRatio="xMidYMid slice">
        <defs>
          {/* Map Grid Pattern */}
          <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
            <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#1e293b" strokeWidth="1" />
          </pattern>
          
          {/* Glowing Line Gradients */}
          <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10B981" />
            <stop offset="50%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#F43F5E" />
          </linearGradient>

          <linearGradient id="pulseGlow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F59E0B" stopOpacity="0" />
            <stop offset="50%" stopColor="#FBBF24" stopOpacity="1" />
            <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Base Map Dark Theme Background */}
        <rect width="100%" height="100%" fill="#0f172a" />
        <rect width="100%" height="100%" fill="url(#grid)" opacity="0.6" />

        {/* Secondary Simulated City Streets */}
        <path d="M 0 50 Q 200 70 450 40" stroke="#1e293b" strokeWidth="6" fill="none" />
        <path d="M 0 160 Q 220 180 450 140" stroke="#1e293b" strokeWidth="8" fill="none" />
        <path d="M 0 250 L 450 270" stroke="#1e293b" strokeWidth="6" fill="none" />
        <path d="M 120 0 L 100 300" stroke="#1e293b" strokeWidth="6" fill="none" />
        <path d="M 260 0 Q 240 150 250 300" stroke="#1e293b" strokeWidth="8" fill="none" />
        <path d="M 360 0 L 370 300" stroke="#1e293b" strokeWidth="6" fill="none" />

        {/* Active Delivery Route Polyline */}
        <path
          id="deliveryPath"
          d="M 70 70 C 140 60, 160 140, 240 120 C 310 100, 320 200, 380 220"
          stroke="#334155"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray="6 6"
          fill="none"
        />

        {/* Traveled Glow Route */}
        <path
          d="M 70 70 C 140 60, 160 140, 240 120 C 310 100, 320 200, 380 220"
          stroke="url(#routeGradient)"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
          opacity="0.9"
        />

        {/* Store Location Marker (Start) */}
        <g transform="translate(70, 70)">
          <circle r="18" fill="#10B981" fillOpacity="0.2" className="animate-ping" />
          <circle r="14" fill="#065F46" stroke="#10B981" strokeWidth="2" />
          <text x="0" y="4" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="bold">🏪</text>
          <rect x="-45" y="-30" width="90" height="20" rx="6" fill="#1e293b" stroke="#334155" />
          <text x="0" y="-17" textAnchor="middle" fill="#10B981" fontSize="9" fontWeight="bold">Local Pet Store</text>
        </g>

        {/* Customer Location Marker (End) */}
        <g transform="translate(380, 220)">
          <circle r="18" fill="#F43F5E" fillOpacity="0.2" className="animate-ping" />
          <circle r="14" fill="#881337" stroke="#F43F5E" strokeWidth="2" />
          <text x="0" y="4" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="bold">🏡</text>
          <rect x="-40" y="20" width="80" height="20" rx="6" fill="#1e293b" stroke="#334155" />
          <text x="0" y="33" textAnchor="middle" fill="#F43F5E" fontSize="9" fontWeight="bold">Your Address</text>
        </g>

        {/* Animated Moving Delivery Rider */}
        <g transform={`translate(${riderX}, ${riderY})`}>
          {/* Radar ripple */}
          <circle r="22" fill="#F59E0B" fillOpacity="0.25" className="animate-radar" />
          <circle r="16" fill="#D97706" stroke="#FEF3C7" strokeWidth="2.5" className="shadow-lg" />
          <text x="0" y="4" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="black">🛵</text>
          
          {/* Rider Label Badge */}
          <rect x="-35" y="-28" width="70" height="18" rx="6" fill="#D97706" />
          <text x="0" y="-16" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="bold">Rider on way</text>
        </g>
      </svg>

      {/* Top Floating ETA Overlay Badge */}
      <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-20 bg-slate-900/90 backdrop-blur-md border border-slate-700/80 rounded-2xl p-2.5 sm:p-3 shadow-xl flex items-center gap-2.5 sm:gap-3 max-w-[200px] sm:max-w-xs">
        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center font-black text-xs sm:text-sm shadow-md animate-pulse shrink-0">
          ⚡
        </div>
        <div className="truncate min-w-0">
          <div className="text-[9px] sm:text-[10px] uppercase font-extrabold tracking-wider text-amber-400 truncate">Swiggy Live Map</div>
          <div className="text-xs sm:text-sm font-extrabold text-white truncate">~8 mins ETA</div>
        </div>
      </div>

      {/* Top Right Live GPS Status */}
      <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 flex items-center gap-1.5 bg-slate-900/90 backdrop-blur-md px-2.5 py-1 rounded-full border border-slate-700 text-[10px] sm:text-[11px] text-emerald-400 font-semibold">
        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400 animate-ping" />
        <span className="hidden xs:inline">Live GPS</span>
      </div>

      {/* Bottom Floating Navigation Speed Bar */}
      <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 z-20 bg-slate-900/95 backdrop-blur-md border border-slate-700/80 rounded-2xl p-2.5 sm:p-4 flex items-center justify-between gap-2 sm:gap-4">
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-amber-400 shrink-0">
            <Navigation className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" style={{ animationDuration: '8s' }} />
          </div>
          <div className="truncate min-w-0">
            <div className="text-[11px] sm:text-xs font-bold text-white truncate">Speed: 28 km/h • Road 36</div>
            <div className="text-[9px] sm:text-[11px] text-slate-400 truncate">Next turn 400m</div>
          </div>
        </div>

        <div className="text-right shrink-0">
          <div className="text-[9px] sm:text-[10px] text-slate-400 uppercase font-semibold">OTP</div>
          <div className="font-mono text-xs sm:text-base font-black text-amber-400 tracking-wider">
            {order?.deliveryOtp || '4829'}
          </div>
        </div>
      </div>
    </div>
  );
}

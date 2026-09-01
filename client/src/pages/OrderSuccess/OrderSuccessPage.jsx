import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  CheckCircle2, 
  MapPin, 
  Clock, 
  Zap, 
  ArrowRight, 
  Sparkles, 
  Package, 
  PhoneCall, 
  Share2 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useOrders } from '../../context/OrderContext';

export default function OrderSuccessPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getOrderById } = useOrders();

  const order = getOrderById(id);

  useEffect(() => {
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.5 }
    });
  }, []);

  return (
    <div className="max-w-2xl mx-auto py-10 px-4 space-y-6 text-center pb-20">
      
      {/* Success Badge */}
      <div className="space-y-3">
        <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
          <CheckCircle2 className="w-12 h-12" />
        </div>
        <span className="text-xs font-black uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
          Order Placed Successfully!
        </span>
        <h1 className="font-heading font-black text-2xl sm:text-3xl text-slate-900">
          Your Furry Baby's Treats are on the Way! 🐾
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
          Order <span className="font-mono font-bold text-slate-800">#{order.id}</span> has been received by{' '}
          <strong className="text-slate-800">{order.store.name}</strong>.
        </p>
      </div>

      {/* Instant Delivery ETA Banner */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-3xl p-5 shadow-lg flex items-center justify-between gap-4 text-left">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center font-black text-xl">
            ⚡
          </div>
          <div>
            <div className="text-[11px] font-bold text-amber-100 uppercase tracking-wider">Estimated Instant Delivery</div>
            <div className="text-lg font-black text-white">Arriving in ~15-20 Minutes</div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-[10px] text-amber-100 uppercase">Delivery OTP</div>
          <div className="font-mono font-black text-lg text-white tracking-widest">{order.deliveryOtp}</div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
        <Link
          to={`/track-order/${order.id}`}
          className="py-4 bg-slate-900 hover:bg-slate-800 active:scale-98 text-white font-extrabold text-sm rounded-2xl shadow-md transition-all flex items-center justify-center gap-2"
        >
          <Zap className="w-4 h-4 text-amber-400" />
          <span>Track Live Order on Map</span>
          <ArrowRight className="w-4 h-4" />
        </Link>

        <Link
          to="/"
          className="py-4 bg-white hover:bg-slate-50 active:scale-98 text-slate-800 border border-slate-200 font-extrabold text-sm rounded-2xl shadow-xs transition-all flex items-center justify-center gap-2"
        >
          <span>Continue Shopping</span>
        </Link>
      </div>

      {/* Order Summary Snapshot */}
      <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-xs text-left space-y-3 text-xs">
        <h4 className="font-heading font-extrabold text-slate-800 uppercase tracking-wider text-xs pb-2 border-b border-slate-100">
          Order Summary (#{order.id})
        </h4>
        <div className="space-y-2">
          {order.items.map((it, idx) => (
            <div key={idx} className="flex items-center justify-between text-slate-700">
              <span className="font-medium">{it.name} (x{it.quantity})</span>
              <span className="font-bold">₹{it.price * it.quantity}</span>
            </div>
          ))}
        </div>
        <div className="pt-2 border-t border-slate-100 flex justify-between font-extrabold text-sm text-slate-900">
          <span>Total Paid ({order.paymentMode})</span>
          <span>₹{order.totalAmount}</span>
        </div>
      </div>
    </div>
  );
}

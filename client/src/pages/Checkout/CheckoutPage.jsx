import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  MapPin, 
  CreditCard, 
  Smartphone, 
  Banknote, 
  ShieldCheck, 
  Zap, 
  Clock, 
  CheckCircle2, 
  ArrowLeft, 
  QrCode,
  Sparkles,
  Lock
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useCart } from '../../context/CartContext';
import { useLocationContext } from '../../context/LocationContext';
import { useOrders } from '../../context/OrderContext';
import { useAuth } from '../../context/AuthContext';

export default function CheckoutPage() {
  const navigate = useNavigate();
  const { items, itemsTotal, deliveryFee, platformFee, couponDiscount, finalTotal, totalSavings, clearCart } = useCart();
  const { selectedLocation, savedAddresses, switchLocation } = useLocationContext();
  const { placeOrder } = useOrders();
  const { user } = useAuth();

  const [deliverySpeed, setDeliverySpeed] = useState('instant'); // 'instant' | 'scheduled'
  const [scheduledSlot, setScheduledSlot] = useState('Tomorrow, 10:00 AM - 12:00 PM');
  const [paymentMethod, setPaymentMethod] = useState('upi_gpay'); // 'upi_gpay' | 'upi_phonepe' | 'upi_paytm' | 'card' | 'cod'
  const [upiId, setUpiId] = useState('aarav@okhdfcbank');
  const [isProcessing, setIsProcessing] = useState(false);

  if (items.length === 0) {
    navigate('/cart');
    return null;
  }

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    setIsProcessing(true);

    setTimeout(() => {
      // Create new active order
      const newOrder = placeOrder({
        deliveryAddress: selectedLocation,
        deliverySpeed: deliverySpeed === 'instant' ? 'Instant 20-Min Express' : `Scheduled (${scheduledSlot})`,
        paymentMethod: paymentMethod === 'cod' ? 'Cash on Delivery' : paymentMethod.startsWith('upi') ? 'UPI' : 'Credit / Debit Card',
        items: items,
        itemsTotal: itemsTotal,
        couponDiscount: couponDiscount,
        deliveryFee: deliveryFee,
        platformFee: platformFee,
        finalTotal: finalTotal
      });

      // Fire celebratory confetti!
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });

      clearCart();
      setIsProcessing(false);
      navigate(`/order-success/${newOrder.id}`);
    }, 1200);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6 pb-20 md:pb-12">
      
      {/* Header & Back */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => navigate('/cart')}
          className="p-2 bg-white rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-slate-700" />
        </button>
        <div>
          <h1 className="font-heading font-black text-2xl sm:text-3xl text-slate-900">Checkout & Payment</h1>
          <p className="text-xs text-slate-500">Secure 256-bit encrypted transaction</p>
        </div>
      </div>

      <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        
        {/* Left Column: Delivery Address, Speed & Payment Selection */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* 1. Delivery Address Selection */}
          <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-heading font-extrabold text-sm text-slate-800 uppercase tracking-wider flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-500 text-white text-xs flex items-center justify-center font-black">1</span>
                Delivery Address
              </h3>
            </div>

            <div className="grid grid-cols-1 gap-2.5">
              {savedAddresses.map((addr) => {
                const isSelected = selectedLocation.id === addr.id;
                return (
                  <div
                    key={addr.id}
                    onClick={() => switchLocation(addr)}
                    className={`p-3.5 rounded-2xl border cursor-pointer transition-all flex items-start justify-between ${
                      isSelected
                        ? 'border-amber-500 bg-amber-50/50 shadow-xs'
                        : 'border-slate-200 hover:border-amber-200 bg-white'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                        isSelected ? 'bg-amber-500 text-white' : 'bg-slate-100 text-slate-600'
                      }`}>
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-slate-800">{addr.type}</span>
                          <span className="text-[10px] text-slate-500 font-semibold">• {addr.name}</span>
                        </div>
                        <p className="text-xs text-slate-600 mt-0.5">{addr.addressLine1}</p>
                        <p className="text-[11px] text-slate-400">{addr.shortDisplay}</p>
                      </div>
                    </div>
                    {isSelected && (
                      <div className="w-5 h-5 rounded-full bg-amber-500 text-white flex items-center justify-center">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* 2. Delivery Speed Options */}
          <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200 shadow-xs space-y-4">
            <h3 className="font-heading font-extrabold text-sm text-slate-800 uppercase tracking-wider flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-amber-500 text-white text-xs flex items-center justify-center font-black">2</span>
              Delivery Speed
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div
                onClick={() => setDeliverySpeed('instant')}
                className={`p-4 rounded-2xl border cursor-pointer transition-all flex flex-col justify-between space-y-2 ${
                  deliverySpeed === 'instant'
                    ? 'border-amber-500 bg-amber-50/60 shadow-xs'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="p-1.5 rounded-lg bg-amber-500 text-white">
                    <Zap className="w-4 h-4" />
                  </span>
                  <span className="text-[10px] font-extrabold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full uppercase">
                    Recommended
                  </span>
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Instant Express (15-20 mins)</div>
                  <p className="text-[11px] text-slate-500">Dispatched immediately from nearest pet store</p>
                </div>
              </div>

              <div
                onClick={() => setDeliverySpeed('scheduled')}
                className={`p-4 rounded-2xl border cursor-pointer transition-all flex flex-col justify-between space-y-2 ${
                  deliverySpeed === 'scheduled'
                    ? 'border-amber-500 bg-amber-50/60 shadow-xs'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="p-1.5 rounded-lg bg-slate-200 text-slate-700">
                    <Clock className="w-4 h-4" />
                  </span>
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Scheduled Slot</div>
                  <p className="text-[11px] text-slate-500">Pick a specific convenient time slot</p>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Payment Mode Selection (UPI, Cards, COD as per SOW 2.3) */}
          <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200 shadow-xs space-y-4">
            <h3 className="font-heading font-extrabold text-sm text-slate-800 uppercase tracking-wider flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-amber-500 text-white text-xs flex items-center justify-center font-black">3</span>
              Select Payment Method
            </h3>

            <div className="space-y-3">
              
              {/* UPI Option */}
              <div
                onClick={() => setPaymentMethod('upi_gpay')}
                className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                  paymentMethod.startsWith('upi')
                    ? 'border-amber-500 bg-amber-50/40'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <Smartphone className="w-5 h-5 text-amber-600" />
                    <div>
                      <div className="text-xs font-bold text-slate-900">UPI Instant Payment (GPay, PhonePe, Paytm, QR)</div>
                      <div className="text-[10px] text-slate-500">Zero transaction charges • Fast refund guarantee</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                    Fastest
                  </span>
                </div>

                {/* UPI Sub-Apps */}
                {paymentMethod.startsWith('upi') && (
                  <div className="pt-2 border-t border-slate-100 space-y-2">
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: 'upi_gpay', name: 'Google Pay', icon: '🟢' },
                        { id: 'upi_phonepe', name: 'PhonePe', icon: '🟣' },
                        { id: 'upi_paytm', name: 'Paytm UPI', icon: '🔵' }
                      ].map((u) => (
                        <button
                          key={u.id}
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setPaymentMethod(u.id);
                          }}
                          className={`p-2 rounded-xl text-xs font-bold border transition-all flex items-center justify-center gap-1.5 ${
                            paymentMethod === u.id
                              ? 'bg-amber-500 text-white border-amber-500 shadow-xs'
                              : 'bg-white text-slate-700 border-slate-200'
                          }`}
                        >
                          <span>{u.icon}</span>
                          <span>{u.name}</span>
                        </button>
                      ))}
                    </div>

                    <div className="pt-2">
                      <input
                        type="text"
                        placeholder="Enter UPI ID (e.g. yourname@okhdfcbank)"
                        value={upiId}
                        onChange={(e) => setUpiId(e.target.value)}
                        className="w-full px-3 py-2 text-xs bg-white rounded-xl border border-slate-200 focus:outline-amber-500 font-medium"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Credit / Debit Cards Option */}
              <div
                onClick={() => setPaymentMethod('card')}
                className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                  paymentMethod === 'card'
                    ? 'border-amber-500 bg-amber-50/40'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <CreditCard className="w-5 h-5 text-slate-700" />
                  <div>
                    <div className="text-xs font-bold text-slate-900">Credit / Debit Card</div>
                    <div className="text-[10px] text-slate-500">Visa, Mastercard, RuPay, Maestro</div>
                  </div>
                </div>
                <div className="flex gap-1 text-xs">
                  💳
                </div>
              </div>

              {/* Cash on Delivery (COD) Option */}
              <div
                onClick={() => setPaymentMethod('cod')}
                className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                  paymentMethod === 'cod'
                    ? 'border-amber-500 bg-amber-50/40'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Banknote className="w-5 h-5 text-emerald-600" />
                  <div>
                    <div className="text-xs font-bold text-slate-900">Cash on Delivery (COD)</div>
                    <div className="text-[10px] text-slate-500">Pay cash or UPI directly to delivery partner at door</div>
                  </div>
                </div>
                <span className="text-xs font-bold text-slate-600">Available</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Order Summary & Place Order CTA */}
        <div className="lg:col-span-5 space-y-4 sticky top-28">
          <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200 shadow-xs space-y-4">
            <h4 className="font-heading font-extrabold text-sm text-slate-800 uppercase tracking-wider pb-3 border-b border-slate-100">
              Order Review ({items.length} items)
            </h4>

            {/* Quick item list */}
            <div className="space-y-3 max-h-48 overflow-y-auto pr-1">
              {items.map((it) => (
                <div key={`${it.id}-${it.selectedSize}`} className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 truncate">
                    <img src={it.image} alt="" className="w-8 h-8 rounded-lg object-contain bg-slate-50" />
                    <span className="truncate max-w-[170px] font-medium text-slate-800">
                      {it.name} (x{it.quantity})
                    </span>
                  </div>
                  <span className="font-bold text-slate-900">₹{it.price * it.quantity}</span>
                </div>
              ))}
            </div>

            {/* Pricing Breakdown */}
            <div className="pt-3 border-t border-slate-100 space-y-2 text-xs">
              <div className="flex justify-between text-slate-600">
                <span>Items Subtotal</span>
                <span>₹{itemsTotal}</span>
              </div>
              {couponDiscount > 0 && (
                <div className="flex justify-between text-emerald-600 font-bold">
                  <span>Coupon Discount</span>
                  <span>- ₹{couponDiscount}</span>
                </div>
              )}
              <div className="flex justify-between text-slate-600">
                <span>Delivery Charge</span>
                <span>{deliveryFee === 0 ? <strong className="text-emerald-600">FREE</strong> : `₹${deliveryFee}`}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Platform Fee</span>
                <span>₹{platformFee}</span>
              </div>
              <div className="pt-2 border-t border-slate-200 flex justify-between items-baseline">
                <span className="font-extrabold text-slate-900 text-sm">To Pay</span>
                <span className="text-2xl font-black text-slate-900">₹{finalTotal}</span>
              </div>
            </div>

            {/* Place Order CTA */}
            <button
              type="submit"
              disabled={isProcessing}
              className="w-full py-4 bg-amber-500 hover:bg-amber-600 active:scale-98 disabled:opacity-50 text-white font-extrabold text-base rounded-2xl shadow-lg hover:shadow-amber-500/25 transition-all flex items-center justify-center gap-2"
            >
              <Lock className="w-4 h-4" />
              <span>{isProcessing ? 'Processing Order...' : `Pay & Place Order (₹${finalTotal})`}</span>
            </button>

            <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 text-center">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>100% Safe Payments • Instant Live Tracking</span>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

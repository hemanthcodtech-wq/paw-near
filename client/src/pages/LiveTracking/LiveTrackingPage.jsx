import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Phone, 
  MessageSquare, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  Navigation, 
  Store, 
  Home, 
  ChevronRight, 
  RotateCcw,
  Sparkles,
  HelpCircle
} from 'lucide-react';
import { useOrders } from '../../context/OrderContext';
import LiveTrackerMap from '../../components/tracking/LiveTrackerMap';

export default function LiveTrackingPage() {
  const { id } = useParams();
  const { getOrderById } = useOrders();

  const order = getOrderById(id);
  const [activeStep, setActiveStep] = useState(3); // 0: Placed, 1: Accepted, 2: Packed, 3: Out for Delivery, 4: Delivered

  const steps = [
    { title: 'Order Placed', time: '09:20 PM', done: true },
    { title: 'Store Accepted', time: '09:22 PM', done: true },
    { title: 'Packed & Dispatched', time: '09:27 PM', done: true },
    { title: 'Out for Delivery', time: '09:30 PM', done: true, active: true },
    { title: 'Delivered', time: 'Estimated 09:42 PM', done: false }
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-6 pb-20 md:pb-12">
      
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 text-xs text-slate-400 font-semibold mb-1">
            <Link to="/" className="hover:text-amber-600">Home</Link>
            <span>/</span>
            <Link to="/account/orders" className="hover:text-amber-600">Orders</Link>
            <span>/</span>
            <span className="text-slate-800 font-bold">Track #{order.id}</span>
          </div>
          <h1 className="font-heading font-black text-2xl sm:text-3xl text-slate-900 flex items-center gap-2">
            <span>Live Order Tracking</span>
            <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold">
              ● Live
            </span>
          </h1>
        </div>

        <Link
          to="/support"
          className="flex items-center gap-1.5 px-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-700 hover:border-amber-400 shadow-xs self-start sm:self-auto"
        >
          <HelpCircle className="w-4 h-4 text-amber-500" />
          <span>Need Help with Order?</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        
        {/* Left Column: Live Map & Rider Card */}
        <div className="lg:col-span-8 space-y-5">
          
          {/* Live Interactive Canvas Map */}
          <LiveTrackerMap order={order} />

          {/* Delivery Rider Details Card matching Swiggy/Blinkit */}
          <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="relative">
                <img
                  src={order.rider?.photo || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'}
                  alt={order.rider?.name}
                  className="w-14 h-14 rounded-2xl object-cover border-2 border-amber-400"
                />
                <span className="absolute -bottom-1 -right-1 bg-amber-500 text-white text-[9px] font-black px-1 rounded-md">
                  ★ {order.rider?.rating || '4.9'}
                </span>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-heading font-extrabold text-slate-900 text-base">{order.rider?.name}</h4>
                  <span className="text-[10px] bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 rounded-full border border-emerald-200">
                    Vaccinated
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-0.5">
                  SwiftPaw Delivery Partner • {order.rider?.vehicle}
                </p>
                <div className="text-[11px] text-slate-400 font-medium mt-1">
                  1,800+ 5-star deliveries in Banjara Hills
                </div>
              </div>
            </div>

            {/* Direct Contact Actions */}
            <div className="flex items-center gap-2.5 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100">
              <a
                href={`tel:${order.rider?.phone}`}
                className="flex-1 sm:flex-initial px-4 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs transition-all active:scale-95"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Rider</span>
              </a>

              <Link
                to="/support"
                className="flex-1 sm:flex-initial px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all"
              >
                <MessageSquare className="w-3.5 h-3.5 text-slate-500" />
                <span>Chat</span>
              </Link>
            </div>
          </div>

          {/* Real-Time Order Timeline Steps */}
          <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200 shadow-xs space-y-4">
            <h3 className="font-heading font-extrabold text-sm text-slate-800 uppercase tracking-wider">
              Order Status Progression
            </h3>

            <div className="relative pl-6 space-y-6 before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-amber-200">
              {steps.map((step, idx) => (
                <div key={idx} className="relative flex items-start justify-between text-xs">
                  <div className={`absolute -left-6 top-0.5 w-5 h-5 rounded-full flex items-center justify-center ${
                    step.done
                      ? 'bg-amber-500 text-white ring-4 ring-amber-100'
                      : 'bg-slate-200 text-slate-400'
                  }`}>
                    {step.done ? <CheckCircle2 className="w-3 h-3 stroke-[3]" /> : <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />}
                  </div>

                  <div>
                    <h5 className={`font-bold ${step.done ? 'text-slate-900' : 'text-slate-400'}`}>
                      {step.title}
                    </h5>
                    <p className="text-[11px] text-slate-400">{step.time}</p>
                  </div>

                  {step.active && (
                    <span className="text-[10px] font-extrabold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md animate-pulse">
                      In Progress
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Order Items & Delivery Location */}
        <div className="lg:col-span-4 space-y-4">
          
          {/* Destination Address */}
          <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-xs space-y-3">
            <h4 className="font-heading font-extrabold text-xs text-slate-800 uppercase tracking-wider">
              Delivery Address
            </h4>
            <div className="flex items-start gap-3 text-xs">
              <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                <Home className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold text-slate-800 block">{order.deliveryAddress.shortDisplay}</span>
                <span className="text-slate-500 text-[11px]">{order.deliveryAddress.addressLine1}</span>
              </div>
            </div>
          </div>

          {/* Items In Order */}
          <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-xs space-y-3">
            <h4 className="font-heading font-extrabold text-xs text-slate-800 uppercase tracking-wider pb-2 border-b border-slate-100">
              Items in this Delivery ({order.items.length})
            </h4>

            <div className="space-y-3">
              {order.items.map((it, idx) => (
                <div key={idx} className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 truncate">
                    <img src={it.image} alt="" className="w-9 h-9 rounded-xl object-contain bg-slate-50 border border-slate-100" />
                    <div className="truncate max-w-[140px]">
                      <div className="font-bold text-slate-800 truncate">{it.name}</div>
                      <div className="text-[10px] text-slate-400">Qty: {it.quantity}</div>
                    </div>
                  </div>
                  <span className="font-black text-slate-900">₹{it.price * it.quantity}</span>
                </div>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-100 flex justify-between font-black text-sm text-slate-900">
              <span>Total Paid</span>
              <span>₹{order.totalAmount}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  TrendingUp, 
  ShoppingBag, 
  Package, 
  Users, 
  Plus, 
  ArrowRight, 
  Clock, 
  CheckCircle2, 
  AlertTriangle, 
  Zap, 
  Phone, 
  MapPin, 
  ChevronRight,
  Eye,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { useVendor } from '../../context/VendorContext';

export default function VendorDashboardPage() {
  const navigate = useNavigate();
  const { vendor, metrics, orders, products, deliveryBoys, updateOrderStatus } = useVendor();

  const recentOrders = orders.slice(0, 4);

  return (
    <div className="space-y-6">
      
      {/* Welcome Banner with Store Highlights */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden shadow-xl border border-slate-800">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="bg-amber-400 text-slate-950 text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                Store Dashboard
              </span>
              <span className="text-xs text-slate-400">
                {new Date().toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'short' })}
              </span>
            </div>
            <h1 className="font-heading font-black text-2xl sm:text-3xl text-white tracking-tight">
              Welcome back, {vendor.fullName.split(' ')[0]}! 👋
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              {vendor.storeName} is currently{' '}
              <strong className={vendor.isStoreOpen ? 'text-emerald-400' : 'text-rose-400'}>
                {vendor.isStoreOpen ? 'ONLINE & ACCEPTING ORDERS' : 'PAUSED / OFFLINE'}
              </strong>
              . You have <span className="text-amber-400 font-bold">{metrics.activeOrdersCount} live orders</span> awaiting dispatch.
            </p>
          </div>

          {/* Quick Primary Actions */}
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              to="/vendor/products?action=new"
              className="px-4 py-2.5 bg-[#FFB703] hover:bg-[#E5A015] text-slate-950 font-black text-xs sm:text-sm rounded-xl shadow-md transition-all flex items-center gap-1.5 active:scale-95"
            >
              <Plus className="w-4 h-4 stroke-[3]" />
              <span>Add New Product</span>
            </Link>
            <Link
              to="/vendor/orders"
              className="px-4 py-2.5 bg-slate-700/80 hover:bg-slate-700 text-white font-bold text-xs sm:text-sm rounded-xl border border-slate-600 transition-colors flex items-center gap-1.5"
            >
              <ShoppingBag className="w-4 h-4 text-amber-400" />
              <span>Live Orders Board</span>
            </Link>
          </div>
        </div>
      </div>

      {/* KPI Metric Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        
        {/* Today's Sales */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-5 border border-slate-200/80 shadow-xs hover:border-amber-300 transition-all">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500">Today's Revenue</span>
            <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <TrendingUp className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-2.5">
            <div className="text-xl sm:text-2xl font-black text-slate-900 font-heading">
              ₹{metrics.todayRevenue.toLocaleString('en-IN')}
            </div>
            <p className="text-[11px] text-emerald-600 font-bold flex items-center gap-1 mt-0.5">
              <span>+18%</span>
              <span className="text-slate-400 font-normal">vs yesterday</span>
            </p>
          </div>
        </div>

        {/* Live Active Orders */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-5 border border-slate-200/80 shadow-xs hover:border-amber-300 transition-all">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500">Live Orders</span>
            <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
              <ShoppingBag className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-2.5">
            <div className="text-xl sm:text-2xl font-black text-slate-900 font-heading">
              {metrics.activeOrdersCount}
            </div>
            <p className="text-[11px] text-amber-700 font-bold flex items-center gap-1 mt-0.5">
              <span>⚡ 15m Delivery</span>
              <span className="text-slate-400 font-normal">SLA Target</span>
            </p>
          </div>
        </div>

        {/* Active Products & Stock */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-5 border border-slate-200/80 shadow-xs hover:border-amber-300 transition-all">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500">Store Products</span>
            <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <Package className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-2.5">
            <div className="text-xl sm:text-2xl font-black text-slate-900 font-heading">
              {metrics.totalProductsCount}
            </div>
            <p className="text-[11px] text-slate-500 font-medium flex items-center gap-1 mt-0.5">
              <span className="text-emerald-600 font-bold">{metrics.activeProductsCount} active</span>
              {metrics.outOfStockCount > 0 && (
                <span className="text-rose-500 font-bold">• {metrics.outOfStockCount} out of stock</span>
              )}
            </p>
          </div>
        </div>

        {/* Delivery Staff Active */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-5 border border-slate-200/80 shadow-xs hover:border-amber-300 transition-all">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500">Delivery Fleet</span>
            <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
              <Users className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-2.5">
            <div className="text-xl sm:text-2xl font-black text-slate-900 font-heading">
              {metrics.activeDeliveryBoysCount} / {metrics.totalDeliveryBoysCount}
            </div>
            <p className="text-[11px] text-slate-500 font-medium flex items-center gap-1 mt-0.5">
              <span className="text-purple-600 font-bold">
                {deliveryBoys.filter(d => d.status === 'available').length} available
              </span>
              <span className="text-slate-400 font-normal">for dispatch</span>
            </p>
          </div>
        </div>
      </div>

      {/* Main Grid: Live Orders & Store Operations */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left 2 Cols: Live Incoming Orders Queue */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h2 className="font-heading font-black text-base sm:text-lg text-slate-900">
                Incoming & Live Orders
              </h2>
              <span className="bg-amber-100 text-amber-900 text-xs font-bold px-2 py-0.5 rounded-full">
                {metrics.activeOrdersCount} Pending
              </span>
            </div>
            <Link
              to="/vendor/orders"
              className="text-xs font-bold text-amber-600 hover:text-amber-700 flex items-center gap-0.5"
            >
              <span>View All Orders</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="space-y-3">
            {recentOrders.map((order) => {
              const assignedBoy = deliveryBoys.find(b => b.id === order.assignedDeliveryBoyId);
              
              const statusBadges = {
                new: { label: 'New Order', bg: 'bg-rose-100 text-rose-800 border-rose-200' },
                preparing: { label: 'Preparing', bg: 'bg-amber-100 text-amber-800 border-amber-200' },
                ready: { label: 'Ready for Pickup', bg: 'bg-blue-100 text-blue-800 border-blue-200' },
                out_for_delivery: { label: 'Out for Delivery', bg: 'bg-purple-100 text-purple-800 border-purple-200' },
                delivered: { label: 'Delivered', bg: 'bg-emerald-100 text-emerald-800 border-emerald-200' }
              };

              const badge = statusBadges[order.orderStatus] || { label: order.orderStatus, bg: 'bg-slate-100 text-slate-800 border-slate-200' };

              return (
                <div 
                  key={order.id} 
                  className="bg-white rounded-2xl border border-slate-200/90 p-4 sm:p-5 shadow-xs hover:border-amber-300 transition-all space-y-3"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-slate-900 text-xs sm:text-sm">
                        {order.id}
                      </span>
                      <span className={`text-[10px] font-black px-2.5 py-0.5 rounded-full border ${badge.bg}`}>
                        {badge.label}
                      </span>
                      <span className="text-[11px] text-slate-400">
                        {new Date(order.placedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>

                    <div className="text-right">
                      <span className="font-black text-slate-900 text-sm sm:text-base">
                        ₹{order.totalAmount}
                      </span>
                      <span className="text-[10px] text-slate-400 block font-medium">
                        {order.paymentMethod}
                      </span>
                    </div>
                  </div>

                  {/* Customer & Items Summary */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs bg-slate-50/80 p-3 rounded-xl border border-slate-100">
                    <div>
                      <p className="font-bold text-slate-900">{order.customerName}</p>
                      <p className="text-slate-500 text-[11px] truncate flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
                        <span>{order.customerAddress}</span>
                      </p>
                    </div>

                    <div>
                      <span className="text-[11px] font-semibold text-slate-400 block">Items:</span>
                      <p className="text-slate-700 font-medium truncate text-[11px]">
                        {order.items.map(i => `${i.quantity}x ${i.name}`).join(', ')}
                      </p>
                    </div>
                  </div>

                  {/* Delivery Boy Assignment Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                    <div className="flex items-center gap-2 text-xs">
                      {assignedBoy ? (
                        <div className="flex items-center gap-2 bg-emerald-50 text-emerald-800 border border-emerald-200 px-3 py-1 rounded-xl font-medium">
                          <img src={assignedBoy.avatar} alt={assignedBoy.name} className="w-5 h-5 rounded-full object-cover" />
                          <span>Assigned: <strong>{assignedBoy.name}</strong> ({assignedBoy.vehicleNumber})</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-1.5 text-amber-700 font-medium text-xs">
                          <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />
                          <span>No delivery partner assigned yet</span>
                        </div>
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      <Link
                        to={`/vendor/orders?orderId=${order.id}`}
                        className="px-3.5 py-1.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl shadow-xs transition-colors"
                      >
                        {assignedBoy ? 'Manage Order' : 'Assign Partner'}
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right 1 Col: Store Quick Management & Delivery Team status */}
        <div className="space-y-6">
          
          {/* Quick Management Shortlinks */}
          <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 p-5 shadow-xs space-y-3">
            <h3 className="font-heading font-black text-sm text-slate-900">
              Store Quick Controls
            </h3>
            <div className="space-y-2">
              <Link
                to="/vendor/products"
                className="flex items-center justify-between p-3 rounded-xl hover:bg-amber-50 border border-slate-100 hover:border-amber-200 transition-all text-xs font-bold text-slate-800 group"
              >
                <div className="flex items-center gap-2.5">
                  <Package className="w-4 h-4 text-amber-600" />
                  <span>Update Stock & Catalog</span>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
              </Link>

              <Link
                to="/vendor/delivery-team"
                className="flex items-center justify-between p-3 rounded-xl hover:bg-amber-50 border border-slate-100 hover:border-amber-200 transition-all text-xs font-bold text-slate-800 group"
              >
                <div className="flex items-center gap-2.5">
                  <Users className="w-4 h-4 text-purple-600" />
                  <span>Delivery Team & Fleet</span>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
              </Link>

              <Link
                to="/vendor/store-profile"
                className="flex items-center justify-between p-3 rounded-xl hover:bg-amber-50 border border-slate-100 hover:border-amber-200 transition-all text-xs font-bold text-slate-800 group"
              >
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Store Licence & Verification</span>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Delivery Team Quick Availability Roster */}
          <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 p-5 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-heading font-black text-sm text-slate-900">
                Delivery Partner Roster
              </h3>
              <Link to="/vendor/delivery-team" className="text-xs font-bold text-amber-600 hover:underline">
                Manage
              </Link>
            </div>

            <div className="space-y-2.5">
              {deliveryBoys.map(boy => {
                const statusStyles = {
                  available: { text: 'Available', dot: 'bg-emerald-500' },
                  busy: { text: 'On Delivery', dot: 'bg-amber-500' },
                  offline: { text: 'Offline', dot: 'bg-slate-400' }
                };
                const st = statusStyles[boy.status] || statusStyles.available;
                return (
                  <div key={boy.id} className="flex items-center justify-between text-xs p-2 rounded-xl hover:bg-slate-50 transition-colors">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <img src={boy.avatar} alt={boy.name} className="w-7 h-7 rounded-full object-cover" />
                      <div className="truncate">
                        <p className="font-bold text-slate-900 truncate">{boy.name}</p>
                        <p className="text-[10px] text-slate-400">{boy.vehicleType} • {boy.vehicleNumber}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 shrink-0">
                      <span className={`w-2 h-2 rounded-full ${st.dot}`} />
                      <span className="text-[11px] font-bold text-slate-600">{st.text}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}

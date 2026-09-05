import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, LayoutGrid, ShoppingBag, Heart, User } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function BottomNav() {
  const { wishlist } = useCart();

  const navItems = [
    { label: 'Home', path: '/', icon: Home },
    { label: 'Categories', path: '/products', icon: LayoutGrid },
    { label: 'Orders', path: '/account/orders', icon: ShoppingBag },
    { label: 'Wishlist', path: '/account/wishlist', icon: Heart, badge: wishlist.length },
    { label: 'Account', path: '/account', icon: User }
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/90 shadow-[0_-4px_25px_rgba(0,0,0,0.08)] px-2 py-1.5 pb-[max(0.5rem,env(safe-area-inset-bottom))]">
      <nav className="flex items-center justify-around">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.label}
              to={item.path}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center py-1 px-2.5 rounded-2xl transition-all relative select-none min-w-[54px] ${
                  isActive
                    ? 'text-slate-950 font-black'
                    : 'text-slate-500 hover:text-slate-800 font-medium'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <div className="relative">
                    <div className={`p-1.5 rounded-xl transition-all duration-200 ${isActive ? 'bg-[#FFB703] text-slate-950 scale-105 shadow-xs ring-2 ring-amber-300/50' : 'hover:bg-slate-100'}`}>
                      <Icon className={`w-5 h-5 ${isActive ? 'stroke-[2.5]' : 'stroke-[1.8px]'}`} />
                    </div>
                    {item.badge > 0 && (
                      <span className="absolute -top-1 -right-1.5 bg-rose-500 text-white text-[9px] font-black min-w-[16px] h-4 rounded-full flex items-center justify-center border-2 border-white shadow-xs">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <span className={`text-[10px] mt-0.5 tracking-tight ${isActive ? 'font-black text-slate-950' : 'font-medium text-slate-500'}`}>{item.label}</span>
                </>
              )}
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
}

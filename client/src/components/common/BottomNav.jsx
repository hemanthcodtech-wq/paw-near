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
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/80 shadow-lg px-2 py-1 pb-safe">
      <nav className="flex items-center justify-around">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.label}
              to={item.path}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all relative select-none ${
                  isActive
                    ? 'text-[#E5A015] font-bold scale-105'
                    : 'text-slate-500 hover:text-slate-800 font-medium'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <div className="relative">
                    <Icon className={`w-5 h-5 ${isActive ? 'fill-[#E5A015] stroke-[#E5A015]' : 'stroke-[1.8px]'}`} />
                    {item.badge > 0 && (
                      <span className="absolute -top-1 -right-2 bg-rose-500 text-white text-[9px] font-bold w-3.5 h-3.5 rounded-full flex items-center justify-center">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <span className="text-[10px] mt-0.5 tracking-tight font-semibold">{item.label}</span>
                </>
              )}
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
}

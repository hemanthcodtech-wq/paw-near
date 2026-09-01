import React from 'react';
import { Star, MapPin, Sparkles, ChevronRight } from 'lucide-react';

export default function SalonCard({ salon, onBook }) {
  return (
    <div
      onClick={() => onBook(salon)}
      className="bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-4 border border-slate-200/80 hover:border-[#E5A015] hover:shadow-md transition-all duration-200 cursor-pointer flex items-center gap-3 sm:gap-4 group"
    >
      {/* Salon Photo Thumbnail */}
      <div className="w-18 h-18 sm:w-22 sm:h-22 rounded-2xl relative overflow-hidden bg-slate-100 shrink-0">
        <img
          src={salon.image}
          alt={salon.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Salon Info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-heading font-black text-slate-900 text-sm sm:text-base group-hover:text-amber-600 transition-colors truncate">
            {salon.name}
          </h3>
        </div>

        {/* Rating and Distance Row matching screenshot */}
        <div className="flex items-center justify-between text-xs text-slate-500 mt-1">
          <div className="flex items-center gap-1">
            <span className="text-amber-500 font-bold">★</span>
            <span className="font-extrabold text-slate-800">{salon.rating}</span>
            <span className="text-slate-400">({salon.reviewsCount})</span>
          </div>

          <span className="text-[11px] text-slate-500 font-medium">{salon.distance} away</span>
        </div>

        {/* Promo Discount Tag if available */}
        {salon.discountTag && (
          <div className="mt-1.5">
            <span className="inline-block bg-emerald-50 text-emerald-700 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full border border-emerald-200/60">
              {salon.discountTag}
            </span>
          </div>
        )}
      </div>

      <div className="text-slate-300 group-hover:text-amber-500 transition-colors shrink-0">
        <ChevronRight className="w-5 h-5" />
      </div>
    </div>
  );
}

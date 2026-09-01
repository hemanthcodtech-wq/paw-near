import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Heart, Plus, Minus, ShoppingBag, Zap } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function ProductCard({ product, layout = 'grid' }) {
  const { items, addToCart, updateQuantity, toggleWishlist, isWishlisted } = useCart();

  const wishlisted = isWishlisted(product.id);
  
  // Check if item is already in cart
  const cartItem = items.find(item => item.id === product.id);
  const inCartQty = cartItem ? cartItem.quantity : 0;

  const defaultSize = product.selectedSize || (product.sizes && product.sizes[0]?.size) || 'Standard';
  const displayPrice = product.sizes ? (product.sizes.find(s => s.isDefault)?.price || product.price) : product.price;
  const displayMrp = product.sizes ? (product.sizes.find(s => s.isDefault)?.mrp || product.mrp) : product.mrp;

  return (
    <div className="group bg-white rounded-3xl border border-slate-200/80 hover:border-amber-300 hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden relative p-3.5 sm:p-4">
      
      {/* Top Media Container */}
      <div className="relative aspect-square w-full bg-white overflow-hidden flex items-center justify-center p-2">
        
        {/* Instant delivery pill */}
        {product.isInstantDelivery && (
          <div className="absolute top-1 left-1 z-10 bg-[#F59E0B] text-white text-[10px] sm:text-[11px] font-black px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-xs">
            <Zap className="w-2.5 h-2.5 fill-white" />
            <span>{product.deliveryTimeMinutes || 15}m</span>
          </div>
        )}

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleWishlist(product.id);
          }}
          className="absolute top-1 right-1 z-10 w-8 h-8 rounded-full bg-white shadow-xs border border-slate-100 flex items-center justify-center text-slate-400 hover:text-rose-500 transition-all active:scale-90"
          title={wishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
        >
          <Heart className={`w-4 h-4 transition-colors ${wishlisted ? 'text-rose-500 fill-rose-500' : ''}`} />
        </button>

        {/* Product Image Link */}
        <Link to={`/product/${product.id}`} className="w-full h-full flex items-center justify-center">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
          />
        </Link>
      </div>

      {/* Product Content Details */}
      <div className="flex-1 flex flex-col justify-between pt-2.5">
        <div>
          {/* Brand & Distance */}
          <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1">
            <span className="font-bold uppercase tracking-wider text-slate-500">{product.brand}</span>
            <span className="text-[11px] text-slate-400 font-medium">{product.storeDistance || '0.8 km'}</span>
          </div>

          {/* Title */}
          <Link to={`/product/${product.id}`}>
            <h4 className="font-heading font-black text-slate-900 text-xs sm:text-sm line-clamp-1 hover:text-amber-600 transition-colors leading-snug">
              {product.shortName || product.name}
            </h4>
          </Link>
        </div>

        {/* Price & Rating Bottom Row */}
        <div className="mt-2.5 flex items-center justify-between">
          <span className="text-base sm:text-lg font-black text-slate-900">
            ₹{displayPrice}
          </span>

          <div className="flex items-center gap-1 text-xs font-bold text-slate-800">
            <span>{product.rating}</span>
            <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
          </div>
        </div>

        {/* Quick Add CTA Bar with Full Pill Rounded Stepper matching screenshot */}
        <div className="mt-3">
          {inCartQty > 0 ? (
            <div className="flex items-center justify-between bg-[#E5A015] hover:bg-[#D49010] text-slate-950 font-black rounded-full overflow-hidden shadow-xs px-4 py-1.5 text-xs sm:text-sm transition-colors">
              <button
                onClick={() => updateQuantity(product.id, cartItem.selectedSize, -1)}
                className="p-0.5 hover:scale-125 active:scale-90 transition-transform font-black"
                aria-label="Decrease quantity"
              >
                <Minus className="w-3.5 h-3.5 stroke-[2.5]" />
              </button>
              <span className="text-xs sm:text-sm font-black">{inCartQty}</span>
              <button
                onClick={() => updateQuantity(product.id, cartItem.selectedSize, 1)}
                className="p-0.5 hover:scale-125 active:scale-90 transition-transform font-black"
                aria-label="Increase quantity"
              >
                <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
              </button>
            </div>
          ) : (
            <button
              onClick={() => addToCart(product, defaultSize, 1)}
              className="w-full py-1.5 bg-amber-50/90 hover:bg-[#E5A015] text-amber-900 hover:text-slate-950 rounded-full text-xs font-bold transition-all duration-200 flex items-center justify-center gap-1 active:scale-95 border border-amber-200 hover:border-[#E5A015] shadow-2xs"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

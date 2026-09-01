import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { 
  Store, 
  Star, 
  MapPin, 
  Clock, 
  Zap, 
  ShieldCheck, 
  Phone, 
  Search, 
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { STORES } from '../../data/stores';
import { PRODUCTS } from '../../data/products';
import ProductCard from '../../components/product/ProductCard';

export default function StoresPage() {
  const { storeId } = useParams();
  const [searchQuery, setSearchQuery] = useState('');

  // If a specific storeId is provided, show that store's detailed showcase
  if (storeId) {
    const store = STORES.find(s => s.id === storeId) || STORES[0];
    const storeProducts = PRODUCTS.filter(p => p.storeId === store.id || p.storeId === 'store-1');

    return (
      <div className="space-y-8 pb-12">
        {/* Store Profile Header */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <img
                src={store.image}
                alt={store.name}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover border border-amber-200 shrink-0"
              />
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h1 className="font-heading font-black text-slate-900 text-xl sm:text-2xl">{store.name}</h1>
                  {store.isVerified && (
                    <span className="p-1 rounded-full bg-emerald-100 text-emerald-600" title="Verified Store">
                      <ShieldCheck className="w-4 h-4" />
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-500">{store.category} • {store.address}</p>
                <div className="flex flex-wrap items-center gap-3 pt-1 text-xs">
                  <span className="flex items-center gap-1 bg-amber-50 text-amber-800 px-2 py-0.5 rounded-md font-bold">
                    <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                    {store.rating} ({store.reviewsCount} reviews)
                  </span>
                  <span className="font-semibold text-slate-600 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-amber-500" />
                    {store.distance}
                  </span>
                  <span className="font-bold text-emerald-600 flex items-center gap-1">
                    <Zap className="w-3.5 h-3.5" />
                    {store.eta} instant delivery
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <div className="p-3 bg-amber-50 rounded-2xl border border-amber-200 text-xs">
                <span className="font-bold text-amber-900 block">Timings</span>
                <span className="text-slate-600">{store.timing}</span>
              </div>
            </div>
          </div>

          {/* Store Specialities */}
          <div className="flex flex-wrap gap-2 pt-6 mt-6 border-t border-slate-100">
            {store.featuredTags.map((tag, idx) => (
              <span key={idx} className="text-xs font-semibold px-3 py-1 bg-slate-50 rounded-xl text-slate-700 border border-slate-200">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Store Catalog */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-heading font-black text-slate-900 text-xl">
              Products Available at this Store ({storeProducts.length})
            </h2>
            <Link to="/products" className="text-xs font-bold text-amber-600 hover:underline">
              View All Products
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {storeProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Directory of all stores
  const filteredStores = STORES.filter(s =>
    s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6 pb-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="font-heading font-black text-slate-900 text-2xl sm:text-3xl">
            Nearby Verified Pet Stores
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Instant 15-20 min delivery from local pet shops & pharmacies in Hyderabad
          </p>
        </div>

        <div className="relative w-full md:w-80">
          <input
            type="text"
            placeholder="Search stores by name or area..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-amber-500"
          />
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredStores.map((store) => (
          <div
            key={store.id}
            className="bg-white rounded-3xl p-5 border border-slate-200/80 hover:border-amber-400 hover:shadow-lg transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-start gap-4">
                <img
                  src={store.image}
                  alt={store.name}
                  className="w-20 h-20 rounded-2xl object-cover border border-slate-100 shrink-0 group-hover:scale-105 transition-transform"
                />
                <div className="space-y-1 flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-heading font-bold text-slate-900 text-base group-hover:text-amber-600 transition-colors">
                      {store.name}
                    </h3>
                    <span className="flex items-center gap-1 bg-amber-50 text-amber-800 px-2 py-0.5 rounded-lg text-xs font-bold">
                      <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                      {store.rating}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500">{store.category}</p>
                  <p className="text-[11px] text-slate-400">{store.address}</p>
                  <div className="flex items-center gap-3 pt-1 text-xs font-semibold">
                    <span className="text-slate-600 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-amber-500" /> {store.distance}
                    </span>
                    <span className="text-emerald-600 flex items-center gap-1 font-bold">
                      <Zap className="w-3 h-3" /> {store.eta}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-slate-100">
                {store.featuredTags.map((tag, idx) => (
                  <span key={idx} className="text-[10px] font-semibold bg-amber-50/70 text-amber-900 px-2 py-0.5 rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500">Free delivery on ₹{store.freeDeliveryAbove}+</span>
              <Link
                to={`/store/${store.id}`}
                className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs rounded-xl shadow-xs transition-all flex items-center gap-1 group-hover:gap-1.5"
              >
                <span>View Store Catalog</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

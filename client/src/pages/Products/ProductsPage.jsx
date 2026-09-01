import React, { useState, useMemo } from 'react';
import { useSearchParams, useParams, Link } from 'react-router-dom';
import { 
  Search, 
  SlidersHorizontal, 
  Grid, 
  List, 
  X, 
  ChevronDown, 
  Star, 
  Zap,
  Filter
} from 'lucide-react';
import { PRODUCTS } from '../../data/products';
import { CATEGORIES } from '../../data/categories';
import ProductCard from '../../components/product/ProductCard';

export default function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { categoryId } = useParams();

  const searchQuery = searchParams.get('search') || '';
  const activeCategory = categoryId || searchParams.get('category') || 'accessories';

  const [activeSubcategory, setActiveSubcategory] = useState('All');
  const [selectedPetType, setSelectedPetType] = useState('All');
  const [selectedSort, setSelectedSort] = useState('popular');
  const [priceMax, setPriceMax] = useState(3000);
  const [instantDeliveryOnly, setInstantDeliveryOnly] = useState(false);
  const [viewMode, setViewMode] = useState('grid');
  const [showMobileFilterModal, setShowMobileFilterModal] = useState(false);

  // Subcategories matching the current category or fallback to Accessories pills
  const subcategoryPills = useMemo(() => {
    if (activeCategory === 'accessories') {
      return ['All', 'Collars', 'Leashes', 'Toys', 'Beds', 'Harnesses'];
    }
    const foundCat = CATEGORIES.find(c => c.id === activeCategory);
    return foundCat ? ['All', ...foundCat.subcategories] : ['All', 'Collars', 'Leashes', 'Toys', 'Beds'];
  }, [activeCategory]);

  // Filter products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(prod => {
      // Category match
      if (activeCategory && activeCategory !== 'all' && prod.category !== activeCategory && !searchQuery) {
        return false;
      }
      // Subcategory match
      if (activeSubcategory !== 'All' && prod.subcategory !== activeSubcategory) {
        return false;
      }
      // Search match
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        const matchName = prod.name.toLowerCase().includes(q);
        const matchBrand = prod.brand.toLowerCase().includes(q);
        const matchCat = prod.category.toLowerCase().includes(q);
        if (!matchName && !matchBrand && !matchCat) return false;
      }
      // Pet Type match
      if (selectedPetType !== 'All' && !prod.petType.includes(selectedPetType)) {
        return false;
      }
      // Price limit
      if (prod.price > priceMax) {
        return false;
      }
      // Instant Delivery
      if (instantDeliveryOnly && !prod.isInstantDelivery) {
        return false;
      }
      return true;
    }).sort((a, b) => {
      if (selectedSort === 'price_asc') return a.price - b.price;
      if (selectedSort === 'price_desc') return b.price - a.price;
      if (selectedSort === 'rating') return b.rating - a.rating;
      if (selectedSort === 'discount') return b.discountPercent - a.discountPercent;
      return (b.isTopPick ? 1 : 0) - (a.isTopPick ? 1 : 0);
    });
  }, [activeCategory, activeSubcategory, searchQuery, selectedPetType, priceMax, instantDeliveryOnly, selectedSort]);

  const currentCategoryObj = CATEGORIES.find(c => c.id === activeCategory);
  const pageTitle = searchQuery
    ? `Results for "${searchQuery}"`
    : currentCategoryObj ? currentCategoryObj.name : 'Pet Accessories';

  return (
    <div className="space-y-6 pb-12">
      
      {/* Page Title */}
      <div>
        <h1 className="font-heading font-black text-slate-900 text-xl sm:text-2xl md:text-3xl">
          {pageTitle}
        </h1>
      </div>

      {/* Search Input Bar with Filter Button matching screenshot */}
      <div className="flex items-center gap-2.5">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search accessories..."
            value={searchQuery}
            onChange={(e) => setSearchParams(e.target.value ? { search: e.target.value } : {})}
            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200/80 rounded-2xl text-xs font-semibold text-slate-800 placeholder-slate-400 outline-none focus:border-[#E5A015] focus:bg-white shadow-2xs"
          />
        </div>

        <button
          onClick={() => setShowMobileFilterModal(true)}
          className="p-2.5 bg-slate-50 hover:bg-slate-100 border border-slate-200/80 rounded-2xl text-slate-700 shadow-2xs transition-colors shrink-0"
          title="Filter Options"
        >
          <SlidersHorizontal className="w-4 h-4 text-slate-600" />
        </button>
      </div>

      {/* Subcategory Filter Pills with Grid/List Toggle matching screenshot */}
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-0.5 flex-1">
          {subcategoryPills.map((subcat) => {
            const isActive = activeSubcategory === subcat;
            return (
              <button
                key={subcat}
                onClick={() => setActiveSubcategory(subcat)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all select-none ${
                  isActive
                    ? 'bg-[#E5A015] text-slate-950 shadow-xs'
                    : 'bg-slate-100 hover:bg-amber-50 text-slate-700 border border-transparent hover:border-amber-300'
                }`}
              >
                {subcat}
              </button>
            );
          })}
        </div>

        {/* List/Grid View Button */}
        <button
          onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
          className="p-2 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-xl transition-colors shrink-0"
          title="Toggle View"
        >
          {viewMode === 'grid' ? <List className="w-4 h-4" /> : <Grid className="w-4 h-4" />}
        </button>
      </div>

      {/* Main Content Area: Sidebar Filters + Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* Desktop Sidebar Filters */}
        <aside className="hidden md:block md:col-span-3 space-y-6 bg-white p-5 rounded-3xl border border-slate-200/80 shadow-xs h-fit sticky top-28">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <h3 className="font-heading font-extrabold text-sm text-slate-800 flex items-center gap-2">
              <Filter className="w-4 h-4 text-amber-500" />
              Filter By
            </h3>
            <button
              onClick={() => {
                setActiveSubcategory('All');
                setSelectedPetType('All');
                setPriceMax(3000);
                setInstantDeliveryOnly(false);
              }}
              className="text-[11px] font-bold text-amber-600 hover:underline"
            >
              Reset
            </button>
          </div>

          {/* Instant 15-Min Delivery Toggle */}
          <div className="flex items-center justify-between p-3 rounded-2xl bg-amber-50/70 border border-amber-200">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-600 fill-amber-500" />
              <span className="text-xs font-bold text-amber-900">Instant 15-Min</span>
            </div>
            <input
              type="checkbox"
              checked={instantDeliveryOnly}
              onChange={(e) => setInstantDeliveryOnly(e.target.checked)}
              className="w-4 h-4 accent-amber-500 rounded cursor-pointer"
            />
          </div>

          {/* Pet Type Filter */}
          <div>
            <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Pet Type</h4>
            <div className="space-y-1.5">
              {['All', 'Dog', 'Cat'].map((type) => (
                <label
                  key={type}
                  className="flex items-center justify-between text-xs text-slate-600 hover:text-slate-900 cursor-pointer p-1.5 rounded-lg hover:bg-slate-50"
                >
                  <span className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="petType"
                      checked={selectedPetType === type}
                      onChange={() => setSelectedPetType(type)}
                      className="accent-amber-500"
                    />
                    <span>{type === 'All' ? 'All Pets' : `${type}s`}</span>
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Range Slider */}
          <div>
            <div className="flex justify-between items-center text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              <span>Max Price</span>
              <span className="text-amber-600 font-extrabold">₹{priceMax}</span>
            </div>
            <input
              type="range"
              min={100}
              max={3000}
              step={50}
              value={priceMax}
              onChange={(e) => setPriceMax(Number(e.target.value))}
              className="w-full accent-amber-500 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-400 mt-1">
              <span>₹100</span>
              <span>₹3,000+</span>
            </div>
          </div>

          {/* Categories Quick Switcher */}
          <div>
            <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">All Categories</h4>
            <div className="space-y-1">
              {CATEGORIES.map((cat) => (
                <Link
                  key={cat.id}
                  to={`/category/${cat.id}`}
                  className={`block px-2.5 py-1.5 rounded-xl text-xs font-medium transition-colors ${
                    activeCategory === cat.id ? 'bg-amber-50 text-amber-800 font-bold' : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {cat.icon} {cat.name}
                </Link>
              ))}
            </div>
          </div>
        </aside>

        {/* Product Cards Grid */}
        <main className="md:col-span-9">
          {filteredProducts.length === 0 ? (
            <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 space-y-3">
              <div className="w-16 h-16 rounded-full bg-amber-50 text-amber-500 flex items-center justify-center mx-auto text-2xl">
                🔍
              </div>
              <h3 className="font-heading font-extrabold text-slate-800 text-lg">No Products Found</h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                We couldn't find any products matching your current filters. Try resetting the filters or searching for something else.
              </p>
              <button
                onClick={() => {
                  setActiveSubcategory('All');
                  setSelectedPetType('All');
                  setPriceMax(3000);
                  setInstantDeliveryOnly(false);
                }}
                className="px-4 py-2 bg-amber-500 text-white rounded-xl text-xs font-bold shadow-xs hover:bg-amber-600"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className={
              viewMode === 'grid'
                ? 'grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4'
                : 'space-y-3'
            }>
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} layout={viewMode} />
              ))}
            </div>
          )}
        </main>
      </div>

      {/* Mobile Filter Modal */}
      {showMobileFilterModal && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-slate-900/60 backdrop-blur-xs p-0 sm:p-4">
          <div className="bg-white rounded-t-3xl sm:rounded-3xl w-full max-w-md p-6 space-y-4 max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="font-heading font-extrabold text-base text-slate-800">Filter Products</h3>
              <button
                onClick={() => setShowMobileFilterModal(false)}
                className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-slate-500"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Instant Delivery */}
            <div className="flex items-center justify-between p-3 rounded-2xl bg-amber-50 border border-amber-200">
              <span className="text-xs font-bold text-amber-900">⚡ Instant 15-Min Delivery Only</span>
              <input
                type="checkbox"
                checked={instantDeliveryOnly}
                onChange={(e) => setInstantDeliveryOnly(e.target.checked)}
                className="w-4 h-4 accent-amber-500"
              />
            </div>

            {/* Pet Type */}
            <div>
              <div className="text-xs font-bold text-slate-700 uppercase mb-2">Pet Type</div>
              <div className="flex gap-2">
                {['All', 'Dog', 'Cat'].map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedPetType(type)}
                    className={`flex-1 py-2 text-xs font-bold rounded-xl border ${
                      selectedPetType === type ? 'bg-amber-500 text-white border-amber-500' : 'bg-slate-50 text-slate-700 border-slate-200'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Max Price */}
            <div>
              <div className="flex justify-between text-xs font-bold mb-1">
                <span>Max Price</span>
                <span className="text-amber-600 font-extrabold">₹{priceMax}</span>
              </div>
              <input
                type="range"
                min={100}
                max={3000}
                step={50}
                value={priceMax}
                onChange={(e) => setPriceMax(Number(e.target.value))}
                className="w-full accent-amber-500"
              />
            </div>

            <button
              onClick={() => setShowMobileFilterModal(false)}
              className="w-full py-3 bg-amber-500 text-white font-bold text-sm rounded-xl shadow-md"
            >
              Apply Filters ({filteredProducts.length} items)
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

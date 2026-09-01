export const PRODUCTS = [
  {
    id: 'prod-1',
    name: 'Pedigree Adult Dry Dog Food (Meat & Rice)',
    shortName: 'Pedigree Adult Dry Dog Food',
    category: 'food',
    subcategory: 'Dog Food',
    petType: 'Dog',
    brand: 'Pedigree',
    price: 799,
    mrp: 999,
    discountPercent: 20,
    rating: 4.6,
    reviewsCount: 450,
    isTopPick: true,
    isInstantDelivery: true,
    deliveryTimeMinutes: 20,
    storeId: 'store-1',
    storeName: 'Paws & Whiskers Supermart',
    storeDistance: '1.2 km',
    image: '/images/prod_pedigree.jpg',
    gallery: [
      '/images/prod_pedigree.jpg',
      '/images/cat_food.jpg'
    ],
    sizes: [
      { size: '1kg', price: 299, mrp: 350 },
      { size: '3kg', price: 799, mrp: 999, isDefault: true },
      { size: '10kg', price: 2499, mrp: 2999 }
    ],
    selectedSize: '3kg',
    inStock: true,
    stockCount: 24,
    features: [
      { icon: '🥣', title: 'Healthy Digestion', desc: 'Prebiotics for gut health' },
      { icon: '🛡️', title: 'Stronger Immunity', desc: 'Enriched with Vitamin E' },
      { icon: '✨', title: 'Shiny Coat', desc: 'Omega 6 + Zinc balance' }
    ],
    description: 'Complete & balanced food for adult dogs to keep them healthy, active and energetic. Formulated by pet nutritionists with high quality proteins and essential minerals.',
    feedingGuide: 'Adult (10-25kg): 200g - 350g daily. Divide into 2 balanced meals with fresh clean drinking water available at all times.',
    composition: 'Real Chicken, Rice, Whole Grain Cereals, Vegetable Oils, Fish Oil, Essential Vitamins & Minerals.'
  },
  {
    id: 'prod-2',
    name: 'Drools Chicken & Egg Adult Dog Food (3kg)',
    shortName: 'Drools Chicken & Egg 3kg',
    category: 'food',
    subcategory: 'Dog Food',
    petType: 'Dog',
    brand: 'Drools',
    price: 699,
    mrp: 899,
    discountPercent: 22,
    rating: 4.5,
    reviewsCount: 380,
    isTopPick: true,
    isInstantDelivery: true,
    deliveryTimeMinutes: 15,
    storeId: 'store-2',
    storeName: 'Canine Castle Pet Hub',
    storeDistance: '0.8 km',
    image: '/images/prod_drools.jpg',
    gallery: [
      '/images/prod_drools.jpg',
      '/images/cat_food.jpg'
    ],
    sizes: [
      { size: '3kg', price: 699, mrp: 899, isDefault: true },
      { size: '10kg', price: 1999, mrp: 2499 }
    ],
    selectedSize: '3kg',
    inStock: true,
    stockCount: 18,
    features: [
      { icon: '🍗', title: 'Real Chicken & Egg', desc: 'Rich source of high digestible protein' },
      { icon: '🦴', title: 'Strong Bones & Teeth', desc: 'Optimal Calcium & Phosphorus' },
      { icon: '🌿', title: 'Healthy Skin & Coat', desc: 'Enriched with Omega 3 & 6 fatty acids' }
    ],
    description: 'Drools Chicken and Egg adult dog food contains real chicken which is our number 1 ingredient to help maintain lean muscles and active stamina.',
    feedingGuide: 'Medium dogs: 250g - 400g daily in 2 separate bowls.',
    composition: 'Real Chicken, Whole Dried Eggs, Long Grain Rice, Beet Pulp, Vitamin Premix.'
  },
  {
    id: 'prod-3',
    name: 'Wooden Self-Cleaning Pet Grooming Slicker Brush',
    shortName: 'Pet Grooming Brush',
    category: 'accessories',
    subcategory: 'Grooming Tools',
    petType: 'Dog',
    brand: 'PawComfort',
    price: 299,
    mrp: 499,
    discountPercent: 40,
    rating: 4.7,
    reviewsCount: 520,
    isTopPick: true,
    isInstantDelivery: true,
    deliveryTimeMinutes: 15,
    storeId: 'store-1',
    storeName: 'Paws & Whiskers Supermart',
    storeDistance: '1.2 km',
    image: '/images/prod_brush.jpg',
    gallery: [
      '/images/prod_brush.jpg',
      '/images/cat_grooming.jpg'
    ],
    sizes: [
      { size: 'Standard', price: 299, mrp: 499, isDefault: true }
    ],
    selectedSize: 'Standard',
    inStock: true,
    stockCount: 30,
    features: [
      { icon: '🪵', title: 'Ergonomic Wood Grip', desc: 'Handcrafted smooth beechwood handle' },
      { icon: '🪮', title: 'Gentle Rounded Bristles', desc: 'Detangles without scratching skin' },
      { icon: '✨', title: 'Reduces Shedding 90%', desc: 'Traps loose undercoat easily' }
    ],
    description: 'Professional grade slicker brush for dogs and cats. Gently glides through mats, tangles, and dead fur while stimulating natural skin oils.',
    feedingGuide: 'Brush gently in the direction of fur growth 2-3 times a week.',
    composition: 'Natural Beechwood handle + Anti-corrosion stainless steel bent wire pins.'
  },
  {
    id: 'acc-1',
    name: 'Nylon Adjustable Dog Collar with Padded Lining (Blue)',
    shortName: 'Nylon Dog Collar',
    category: 'accessories',
    subcategory: 'Collars',
    petType: 'Dog',
    brand: 'PawComfort',
    price: 299,
    mrp: 399,
    discountPercent: 25,
    rating: 4.5,
    reviewsCount: 180,
    isTopPick: true,
    isInstantDelivery: true,
    deliveryTimeMinutes: 15,
    storeId: 'store-2',
    storeName: 'Canine Castle Pet Hub',
    storeDistance: '0.8 km',
    image: '/images/prod_collar_blue.jpg',
    gallery: ['/images/prod_collar_blue.jpg'],
    sizes: [
      { size: 'Medium (M)', price: 299, mrp: 399, isDefault: true }
    ],
    selectedSize: 'Medium (M)',
    inStock: true,
    stockCount: 20,
    features: [
      { icon: '🪢', title: 'Heavy Duty Nylon', desc: 'Durable tear-resistant weave' },
      { icon: '🧽', title: 'Soft Neoprene Padding', desc: 'Prevents neck chafing' }
    ],
    description: 'Ultra-durable, premium nylon collar designed for everyday walking and training comfort.',
    feedingGuide: 'Adjust strap so two fingers comfortably fit between collar and pet neck.',
    composition: '100% High Density Nylon + Zinc Alloy D-Ring'
  },
  {
    id: 'acc-2',
    name: 'Heavy Duty Retractable Dog Leash (5 Meters / 16ft)',
    shortName: 'Retractable Dog Leash',
    category: 'accessories',
    subcategory: 'Leashes',
    petType: 'Dog',
    brand: 'FlexiPaw',
    price: 499,
    mrp: 699,
    discountPercent: 28,
    rating: 4.6,
    reviewsCount: 310,
    isTopPick: true,
    isInstantDelivery: true,
    deliveryTimeMinutes: 25,
    storeId: 'store-1',
    storeName: 'Paws & Whiskers Supermart',
    storeDistance: '1.2 km',
    image: '/images/prod_leash_black.jpg',
    gallery: ['/images/prod_leash_black.jpg'],
    sizes: [
      { size: '5m (Up to 30kg)', price: 499, mrp: 699, isDefault: true }
    ],
    selectedSize: '5m (Up to 30kg)',
    inStock: true,
    stockCount: 19,
    features: [
      { icon: '🛑', title: 'One-Touch Brake', desc: 'Instant lock & release thumb trigger' },
      { icon: '🔄', title: '360° Tangle Free', desc: 'Smooth retraction inlet' }
    ],
    description: 'Gives your furry companion the freedom of open exploration while keeping you in full safe control.',
    feedingGuide: 'Not suitable for chewing.',
    composition: 'ABS Casing + Stainless Steel Internal Spring'
  },
  {
    id: 'prod-4',
    name: 'Durable Rubber Bone Chew Toy with Dental Ridges (Blue)',
    shortName: 'Rubber Chew Toy',
    category: 'accessories',
    subcategory: 'Toys',
    petType: 'Dog',
    brand: 'KONG & Co',
    price: 199,
    mrp: 299,
    discountPercent: 33,
    rating: 4.4,
    reviewsCount: 140,
    isTopPick: false,
    isInstantDelivery: true,
    deliveryTimeMinutes: 20,
    storeId: 'store-3',
    storeName: 'Pet Paradise Mall',
    storeDistance: '2.1 km',
    image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=800&q=80'
    ],
    sizes: [
      { size: 'Medium (16cm)', price: 199, mrp: 299, isDefault: true }
    ],
    selectedSize: 'Medium (16cm)',
    inStock: true,
    stockCount: 40,
    features: [
      { icon: '🦷', title: 'Cleans Teeth', desc: 'Massage gums while chewing' },
      { icon: '🌱', title: '100% Non-Toxic', desc: 'Natural food-grade rubber' }
    ],
    description: 'Satisfies your dog’s natural instinct to chew, relieves anxiety and boredom.',
    feedingGuide: 'Wash with warm water after play sessions.',
    composition: 'Natural Vulcanized Rubber'
  },
  {
    id: 'prod-5',
    name: 'Orthopedic Donut Pet Bed with Memory Foam (Medium)',
    shortName: 'Pet Bed (Medium)',
    category: 'accessories',
    subcategory: 'Beds',
    petType: 'Dog & Cat',
    brand: 'CozyPaws',
    price: 899,
    mrp: 1199,
    discountPercent: 25,
    rating: 4.6,
    reviewsCount: 220,
    isTopPick: false,
    isInstantDelivery: true,
    deliveryTimeMinutes: 30,
    storeId: 'store-2',
    storeName: 'Canine Castle Pet Hub',
    storeDistance: '0.8 km',
    image: 'https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?auto=format&fit=crop&w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?auto=format&fit=crop&w=800&q=80'
    ],
    sizes: [
      { size: 'Medium (70cm)', price: 899, mrp: 1199, isDefault: true }
    ],
    selectedSize: 'Medium (70cm)',
    inStock: true,
    stockCount: 12,
    features: [
      { icon: '☁️', title: 'Deep Sleep Cloud', desc: 'Ultra-soft plush faux fur' },
      { icon: '💧', title: 'Waterproof Bottom', desc: 'Anti-slip dotted base' }
    ],
    description: 'Specially engineered raised rim creates a sense of security and head/neck support.',
    feedingGuide: 'Shake vigorously upon unboxing.',
    composition: 'Faux Fur Velvet + PP Cotton filling'
  },
  {
    id: 'prod-6',
    name: 'Drools Chicken and Egg Adult Dog Food 3kg',
    shortName: 'Drools Chicken & Egg 3kg',
    category: 'food',
    subcategory: 'Dog Food',
    petType: 'Dog',
    brand: 'Drools',
    price: 699,
    mrp: 850,
    discountPercent: 18,
    rating: 4.5,
    reviewsCount: 380,
    isTopPick: true,
    isInstantDelivery: true,
    deliveryTimeMinutes: 20,
    storeId: 'store-1',
    storeName: 'Paws & Whiskers Supermart',
    storeDistance: '1.2 km',
    image: 'https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?auto=format&fit=crop&w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?auto=format&fit=crop&w=800&q=80'
    ],
    sizes: [
      { size: '1.2kg', price: 299, mrp: 350 },
      { size: '3kg', price: 699, mrp: 850, isDefault: true },
      { size: '10kg', price: 2199, mrp: 2600 }
    ],
    selectedSize: '3kg',
    inStock: true,
    stockCount: 18,
    features: [
      { icon: '🍗', title: 'Real Chicken & Egg', desc: 'Builds lean muscle mass' },
      { icon: '🦴', title: 'Strong Bones & Teeth', desc: 'Optimum calcium to phosphorus ratio' },
      { icon: '⚡', title: 'High Energy Formula', desc: 'Keeps active dogs lively' }
    ],
    description: 'Drools Chicken and Egg Adult Dog Food is designed to offer wholesome nutrition with clean digestibility and great palatability that dogs love.',
    feedingGuide: 'Mix gradually with previous diet over 7 days.',
    composition: 'Chicken, Egg, Whole Grain Wheat, Corn, Organic Minerals'
  },
  {
    id: 'prod-7',
    name: 'Self-Cleaning Slicker Pet Grooming Brush for Dogs & Cats',
    shortName: 'Pet Grooming Brush',
    category: 'grooming',
    subcategory: 'Accessories',
    petType: 'Dog & Cat',
    brand: 'GroomPro',
    price: 299,
    mrp: 450,
    discountPercent: 33,
    rating: 4.7,
    reviewsCount: 195,
    isTopPick: true,
    isInstantDelivery: true,
    deliveryTimeMinutes: 15,
    storeId: 'store-2',
    storeName: 'Canine Castle Pet Hub',
    storeDistance: '0.8 km',
    image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80'
    ],
    sizes: [
      { size: 'Standard (One Size)', price: 299, mrp: 450, isDefault: true }
    ],
    selectedSize: 'Standard (One Size)',
    inStock: true,
    stockCount: 30,
    features: [
      { icon: '🔘', title: '1-Click Eject Button', desc: 'Instantly sheds gathered hair' },
      { icon: '💆', title: 'Massage Massage Pins', desc: 'Protective plastic tips on wire bristles' },
      { icon: '🛡️', title: 'Anti-Slip Grip', desc: 'Comfortable silicone handle' }
    ],
    description: 'Gently removes loose undercoat hair, knots and trapped dirt without scratching your pet’s sensitive skin. Perfect for short and long-haired pets.',
    feedingGuide: 'Brush along the natural direction of the coat.',
    composition: 'Stainless Steel Bristles, ABS Shell, Silicone Handle'
  },
  {
    id: 'prod-8',
    name: 'Herbal Anti-Tick & Flea Pet Shampoo 500ml (Neem & Aloe)',
    shortName: 'Anti-Tick & Flea Shampoo',
    category: 'medicine',
    subcategory: 'Flea & Tick',
    petType: 'Dog & Cat',
    brand: 'VetNaturals',
    price: 349,
    mrp: 450,
    discountPercent: 22,
    rating: 4.8,
    reviewsCount: 260,
    isTopPick: false,
    isInstantDelivery: true,
    deliveryTimeMinutes: 20,
    storeId: 'store-4',
    storeName: 'Apollo Pet Pharmacy & Care',
    storeDistance: '1.5 km',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80'
    ],
    sizes: [
      { size: '200ml', price: 189, mrp: 240 },
      { size: '500ml', price: 349, mrp: 450, isDefault: true }
    ],
    selectedSize: '500ml',
    inStock: true,
    stockCount: 22,
    features: [
      { icon: '🌿', title: '100% Herbal Actives', desc: 'Neem, Tea tree & Eucalyptus' },
      { icon: '🛡️', title: 'Repels Ticks & Fleas', desc: 'Effective against larvae and eggs' },
      { icon: '✨', title: 'Soothes Itchy Skin', desc: 'Moisturizing Aloe Vera soothing base' }
    ],
    description: 'Ayurvedic medicated pet shampoo formulated to gently eliminate ticks, fleas, and lice while conditioning the coat for a silky soft finish.',
    feedingGuide: 'Wet coat, apply generously, massage for 5-10 mins before rinsing with lukewarm water.',
    composition: 'Neem Oil, Tea Tree Extract, Aloe Barbadensis, Glycerin'
  },
  {
    id: 'prod-9',
    name: 'Whiskas Ocean Fish Adult Wet & Dry Cat Food 1.2kg',
    shortName: 'Whiskas Ocean Fish Cat Food',
    category: 'food',
    subcategory: 'Cat Food',
    petType: 'Cat',
    brand: 'Whiskas',
    price: 399,
    mrp: 499,
    discountPercent: 20,
    rating: 4.7,
    reviewsCount: 310,
    isTopPick: true,
    isInstantDelivery: true,
    deliveryTimeMinutes: 20,
    storeId: 'store-1',
    storeName: 'Paws & Whiskers Supermart',
    storeDistance: '1.2 km',
    image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=800&q=80'
    ],
    sizes: [
      { size: '450g', price: 160, mrp: 199 },
      { size: '1.2kg', price: 399, mrp: 499, isDefault: true },
      { size: '3kg', price: 899, mrp: 1100 }
    ],
    selectedSize: '1.2kg',
    inStock: true,
    stockCount: 16,
    features: [
      { icon: '🐟', title: 'Real Ocean Fish', desc: 'High protein for agile feline body' },
      { icon: '👀', title: 'Taurine & Vitamin A', desc: 'Sharpened vision and cardiac health' },
      { icon: '💧', title: 'Urinary Tract Care', desc: 'Balanced mineral levels' }
    ],
    description: 'Whiskas Ocean Fish recipe provides balanced nutrition for adult cats aged 1+ with crunchy pockets filled with real savory fish center.',
    feedingGuide: 'Adult Cat (3-4kg): 50-60g dry kibbles daily or combine with 1 Whiskas wet pouch.',
    composition: 'Real Ocean Fish, Whole Grains, Taurine, Vitamin Blend'
  }
];

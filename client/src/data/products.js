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
  , {
    id: 'prod-1001',
    name: 'Premium Cat Accessories Pack 1',
    shortName: 'Cat accessories 1',
    category: 'accessories',
    subcategory: 'General',
    petType: 'Cat',
    brand: 'PetCare Co.',
    price: 1867,
    mrp: 2250,
    discountPercent: 17,
    rating: 3.9,
    reviewsCount: 801,
    isTopPick: true,
    isInstantDelivery: true,
    deliveryTimeMinutes: 39,
    storeId: 'store-2',
    storeName: 'Canine Castle Pet Hub',
    storeDistance: '0.7 km',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80'
    ],
    sizes: [
      { size: 'Standard', price: 1867, mrp: 2250, isDefault: true }
    ],
    selectedSize: 'Standard',
    inStock: true,
    stockCount: 37,
    description: 'High quality Cat accessories product for everyday use.'
  }
  , {
    id: 'prod-1002',
    name: 'Premium Bird Medicine Pack 2',
    shortName: 'Bird medicine 2',
    category: 'medicine',
    subcategory: 'General',
    petType: 'Bird',
    brand: 'PetCare Co.',
    price: 1324,
    mrp: 1634,
    discountPercent: 19,
    rating: 5.0,
    reviewsCount: 889,
    isTopPick: false,
    isInstantDelivery: true,
    deliveryTimeMinutes: 34,
    storeId: 'store-3',
    storeName: 'Pet Paradise Express',
    storeDistance: '4.9 km',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80'
    ],
    sizes: [
      { size: 'Standard', price: 1324, mrp: 1634, isDefault: true }
    ],
    selectedSize: 'Standard',
    inStock: true,
    stockCount: 31,
    description: 'High quality Bird medicine product for everyday use.'
  }
  , {
    id: 'prod-1003',
    name: 'Premium Fish Grooming Pack 3',
    shortName: 'Fish grooming 3',
    category: 'grooming',
    subcategory: 'General',
    petType: 'Fish',
    brand: 'PetCare Co.',
    price: 621,
    mrp: 975,
    discountPercent: 36,
    rating: 4.1,
    reviewsCount: 331,
    isTopPick: false,
    isInstantDelivery: true,
    deliveryTimeMinutes: 39,
    storeId: 'store-4',
    storeName: 'Apollo Pet Pharmacy & Health',
    storeDistance: '0.6 km',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80'
    ],
    sizes: [
      { size: 'Standard', price: 621, mrp: 975, isDefault: true }
    ],
    selectedSize: 'Standard',
    inStock: true,
    stockCount: 14,
    description: 'High quality Fish grooming product for everyday use.'
  }
  , {
    id: 'prod-1004',
    name: 'Premium Dog Food Pack 4',
    shortName: 'Dog food 4',
    category: 'food',
    subcategory: 'General',
    petType: 'Dog',
    brand: 'PetCare Co.',
    price: 1135,
    mrp: 1568,
    discountPercent: 28,
    rating: 4.5,
    reviewsCount: 807,
    isTopPick: true,
    isInstantDelivery: true,
    deliveryTimeMinutes: 12,
    storeId: 'store-1',
    storeName: 'Paws & Whiskers Supermart',
    storeDistance: '0.8 km',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80'
    ],
    sizes: [
      { size: 'Standard', price: 1135, mrp: 1568, isDefault: true }
    ],
    selectedSize: 'Standard',
    inStock: true,
    stockCount: 40,
    description: 'High quality Dog food product for everyday use.'
  }
  , {
    id: 'prod-1005',
    name: 'Premium Cat Accessories Pack 5',
    shortName: 'Cat accessories 5',
    category: 'accessories',
    subcategory: 'General',
    petType: 'Cat',
    brand: 'PetCare Co.',
    price: 2135,
    mrp: 2394,
    discountPercent: 11,
    rating: 3.7,
    reviewsCount: 799,
    isTopPick: false,
    isInstantDelivery: true,
    deliveryTimeMinutes: 38,
    storeId: 'store-2',
    storeName: 'Canine Castle Pet Hub',
    storeDistance: '4.9 km',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80'
    ],
    sizes: [
      { size: 'Standard', price: 2135, mrp: 2394, isDefault: true }
    ],
    selectedSize: 'Standard',
    inStock: true,
    stockCount: 26,
    description: 'High quality Cat accessories product for everyday use.'
  }
  , {
    id: 'prod-1006',
    name: 'Premium Bird Medicine Pack 6',
    shortName: 'Bird medicine 6',
    category: 'medicine',
    subcategory: 'General',
    petType: 'Bird',
    brand: 'PetCare Co.',
    price: 827,
    mrp: 1314,
    discountPercent: 37,
    rating: 3.8,
    reviewsCount: 843,
    isTopPick: false,
    isInstantDelivery: true,
    deliveryTimeMinutes: 15,
    storeId: 'store-3',
    storeName: 'Pet Paradise Express',
    storeDistance: '2.9 km',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80'
    ],
    sizes: [
      { size: 'Standard', price: 827, mrp: 1314, isDefault: true }
    ],
    selectedSize: 'Standard',
    inStock: true,
    stockCount: 3,
    description: 'High quality Bird medicine product for everyday use.'
  }
  , {
    id: 'prod-1007',
    name: 'Premium Fish Grooming Pack 7',
    shortName: 'Fish grooming 7',
    category: 'grooming',
    subcategory: 'General',
    petType: 'Fish',
    brand: 'PetCare Co.',
    price: 1796,
    mrp: 1994,
    discountPercent: 10,
    rating: 3.9,
    reviewsCount: 261,
    isTopPick: false,
    isInstantDelivery: true,
    deliveryTimeMinutes: 39,
    storeId: 'store-4',
    storeName: 'Apollo Pet Pharmacy & Health',
    storeDistance: '3.3 km',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80'
    ],
    sizes: [
      { size: 'Standard', price: 1796, mrp: 1994, isDefault: true }
    ],
    selectedSize: 'Standard',
    inStock: true,
    stockCount: 22,
    description: 'High quality Fish grooming product for everyday use.'
  }
  , {
    id: 'prod-1008',
    name: 'Premium Dog Food Pack 8',
    shortName: 'Dog food 8',
    category: 'food',
    subcategory: 'General',
    petType: 'Dog',
    brand: 'PetCare Co.',
    price: 1255,
    mrp: 1799,
    discountPercent: 30,
    rating: 3.5,
    reviewsCount: 165,
    isTopPick: false,
    isInstantDelivery: true,
    deliveryTimeMinutes: 30,
    storeId: 'store-1',
    storeName: 'Paws & Whiskers Supermart',
    storeDistance: '5.4 km',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80'
    ],
    sizes: [
      { size: 'Standard', price: 1255, mrp: 1799, isDefault: true }
    ],
    selectedSize: 'Standard',
    inStock: true,
    stockCount: 48,
    description: 'High quality Dog food product for everyday use.'
  }
  , {
    id: 'prod-1009',
    name: 'Premium Cat Accessories Pack 9',
    shortName: 'Cat accessories 9',
    category: 'accessories',
    subcategory: 'General',
    petType: 'Cat',
    brand: 'PetCare Co.',
    price: 1456,
    mrp: 1865,
    discountPercent: 22,
    rating: 4.8,
    reviewsCount: 995,
    isTopPick: true,
    isInstantDelivery: true,
    deliveryTimeMinutes: 37,
    storeId: 'store-2',
    storeName: 'Canine Castle Pet Hub',
    storeDistance: '5.4 km',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80'
    ],
    sizes: [
      { size: 'Standard', price: 1456, mrp: 1865, isDefault: true }
    ],
    selectedSize: 'Standard',
    inStock: true,
    stockCount: 40,
    description: 'High quality Cat accessories product for everyday use.'
  }
  , {
    id: 'prod-10010',
    name: 'Premium Bird Medicine Pack 10',
    shortName: 'Bird medicine 10',
    category: 'medicine',
    subcategory: 'General',
    petType: 'Bird',
    brand: 'PetCare Co.',
    price: 1320,
    mrp: 1548,
    discountPercent: 15,
    rating: 3.7,
    reviewsCount: 24,
    isTopPick: true,
    isInstantDelivery: true,
    deliveryTimeMinutes: 10,
    storeId: 'store-3',
    storeName: 'Pet Paradise Express',
    storeDistance: '1.8 km',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80'
    ],
    sizes: [
      { size: 'Standard', price: 1320, mrp: 1548, isDefault: true }
    ],
    selectedSize: 'Standard',
    inStock: true,
    stockCount: 13,
    description: 'High quality Bird medicine product for everyday use.'
  }
  , {
    id: 'prod-10011',
    name: 'Premium Fish Grooming Pack 11',
    shortName: 'Fish grooming 11',
    category: 'grooming',
    subcategory: 'General',
    petType: 'Fish',
    brand: 'PetCare Co.',
    price: 1216,
    mrp: 1372,
    discountPercent: 11,
    rating: 3.9,
    reviewsCount: 690,
    isTopPick: false,
    isInstantDelivery: true,
    deliveryTimeMinutes: 35,
    storeId: 'store-4',
    storeName: 'Apollo Pet Pharmacy & Health',
    storeDistance: '0.6 km',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80'
    ],
    sizes: [
      { size: 'Standard', price: 1216, mrp: 1372, isDefault: true }
    ],
    selectedSize: 'Standard',
    inStock: true,
    stockCount: 29,
    description: 'High quality Fish grooming product for everyday use.'
  }
  , {
    id: 'prod-10012',
    name: 'Premium Dog Food Pack 12',
    shortName: 'Dog food 12',
    category: 'food',
    subcategory: 'General',
    petType: 'Dog',
    brand: 'PetCare Co.',
    price: 969,
    mrp: 1389,
    discountPercent: 30,
    rating: 4.7,
    reviewsCount: 569,
    isTopPick: true,
    isInstantDelivery: true,
    deliveryTimeMinutes: 35,
    storeId: 'store-1',
    storeName: 'Paws & Whiskers Supermart',
    storeDistance: '1.1 km',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80'
    ],
    sizes: [
      { size: 'Standard', price: 969, mrp: 1389, isDefault: true }
    ],
    selectedSize: 'Standard',
    inStock: true,
    stockCount: 35,
    description: 'High quality Dog food product for everyday use.'
  }
  , {
    id: 'prod-10013',
    name: 'Premium Cat Accessories Pack 13',
    shortName: 'Cat accessories 13',
    category: 'accessories',
    subcategory: 'General',
    petType: 'Cat',
    brand: 'PetCare Co.',
    price: 1615,
    mrp: 2015,
    discountPercent: 20,
    rating: 3.7,
    reviewsCount: 682,
    isTopPick: false,
    isInstantDelivery: true,
    deliveryTimeMinutes: 18,
    storeId: 'store-2',
    storeName: 'Canine Castle Pet Hub',
    storeDistance: '4.9 km',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80'
    ],
    sizes: [
      { size: 'Standard', price: 1615, mrp: 2015, isDefault: true }
    ],
    selectedSize: 'Standard',
    inStock: true,
    stockCount: 14,
    description: 'High quality Cat accessories product for everyday use.'
  }
  , {
    id: 'prod-10014',
    name: 'Premium Bird Medicine Pack 14',
    shortName: 'Bird medicine 14',
    category: 'medicine',
    subcategory: 'General',
    petType: 'Bird',
    brand: 'PetCare Co.',
    price: 215,
    mrp: 648,
    discountPercent: 67,
    rating: 4.3,
    reviewsCount: 236,
    isTopPick: false,
    isInstantDelivery: true,
    deliveryTimeMinutes: 37,
    storeId: 'store-3',
    storeName: 'Pet Paradise Express',
    storeDistance: '2.4 km',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80'
    ],
    sizes: [
      { size: 'Standard', price: 215, mrp: 648, isDefault: true }
    ],
    selectedSize: 'Standard',
    inStock: true,
    stockCount: 8,
    description: 'High quality Bird medicine product for everyday use.'
  }
  , {
    id: 'prod-10015',
    name: 'Premium Fish Grooming Pack 15',
    shortName: 'Fish grooming 15',
    category: 'grooming',
    subcategory: 'General',
    petType: 'Fish',
    brand: 'PetCare Co.',
    price: 1622,
    mrp: 1723,
    discountPercent: 6,
    rating: 4.6,
    reviewsCount: 38,
    isTopPick: true,
    isInstantDelivery: true,
    deliveryTimeMinutes: 31,
    storeId: 'store-4',
    storeName: 'Apollo Pet Pharmacy & Health',
    storeDistance: '1.2 km',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80'
    ],
    sizes: [
      { size: 'Standard', price: 1622, mrp: 1723, isDefault: true }
    ],
    selectedSize: 'Standard',
    inStock: true,
    stockCount: 22,
    description: 'High quality Fish grooming product for everyday use.'
  }
  , {
    id: 'prod-10016',
    name: 'Premium Dog Food Pack 16',
    shortName: 'Dog food 16',
    category: 'food',
    subcategory: 'General',
    petType: 'Dog',
    brand: 'PetCare Co.',
    price: 620,
    mrp: 719,
    discountPercent: 14,
    rating: 3.0,
    reviewsCount: 772,
    isTopPick: false,
    isInstantDelivery: true,
    deliveryTimeMinutes: 37,
    storeId: 'store-1',
    storeName: 'Paws & Whiskers Supermart',
    storeDistance: '2.8 km',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80'
    ],
    sizes: [
      { size: 'Standard', price: 620, mrp: 719, isDefault: true }
    ],
    selectedSize: 'Standard',
    inStock: true,
    stockCount: 1,
    description: 'High quality Dog food product for everyday use.'
  }
  , {
    id: 'prod-10017',
    name: 'Premium Cat Accessories Pack 17',
    shortName: 'Cat accessories 17',
    category: 'accessories',
    subcategory: 'General',
    petType: 'Cat',
    brand: 'PetCare Co.',
    price: 1742,
    mrp: 1844,
    discountPercent: 6,
    rating: 3.8,
    reviewsCount: 377,
    isTopPick: true,
    isInstantDelivery: true,
    deliveryTimeMinutes: 35,
    storeId: 'store-2',
    storeName: 'Canine Castle Pet Hub',
    storeDistance: '2.6 km',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80'
    ],
    sizes: [
      { size: 'Standard', price: 1742, mrp: 1844, isDefault: true }
    ],
    selectedSize: 'Standard',
    inStock: true,
    stockCount: 22,
    description: 'High quality Cat accessories product for everyday use.'
  }
  , {
    id: 'prod-10018',
    name: 'Premium Bird Medicine Pack 18',
    shortName: 'Bird medicine 18',
    category: 'medicine',
    subcategory: 'General',
    petType: 'Bird',
    brand: 'PetCare Co.',
    price: 1756,
    mrp: 2071,
    discountPercent: 15,
    rating: 4.6,
    reviewsCount: 285,
    isTopPick: true,
    isInstantDelivery: true,
    deliveryTimeMinutes: 29,
    storeId: 'store-3',
    storeName: 'Pet Paradise Express',
    storeDistance: '0.9 km',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80'
    ],
    sizes: [
      { size: 'Standard', price: 1756, mrp: 2071, isDefault: true }
    ],
    selectedSize: 'Standard',
    inStock: true,
    stockCount: 32,
    description: 'High quality Bird medicine product for everyday use.'
  }
  , {
    id: 'prod-10019',
    name: 'Premium Fish Grooming Pack 19',
    shortName: 'Fish grooming 19',
    category: 'grooming',
    subcategory: 'General',
    petType: 'Fish',
    brand: 'PetCare Co.',
    price: 492,
    mrp: 903,
    discountPercent: 46,
    rating: 3.4,
    reviewsCount: 756,
    isTopPick: false,
    isInstantDelivery: true,
    deliveryTimeMinutes: 36,
    storeId: 'store-4',
    storeName: 'Apollo Pet Pharmacy & Health',
    storeDistance: '2.3 km',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80'
    ],
    sizes: [
      { size: 'Standard', price: 492, mrp: 903, isDefault: true }
    ],
    selectedSize: 'Standard',
    inStock: true,
    stockCount: 49,
    description: 'High quality Fish grooming product for everyday use.'
  }
  , {
    id: 'prod-10020',
    name: 'Premium Dog Food Pack 20',
    shortName: 'Dog food 20',
    category: 'food',
    subcategory: 'General',
    petType: 'Dog',
    brand: 'PetCare Co.',
    price: 799,
    mrp: 1200,
    discountPercent: 33,
    rating: 4.5,
    reviewsCount: 585,
    isTopPick: false,
    isInstantDelivery: true,
    deliveryTimeMinutes: 18,
    storeId: 'store-1',
    storeName: 'Paws & Whiskers Supermart',
    storeDistance: '2.0 km',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80'
    ],
    sizes: [
      { size: 'Standard', price: 799, mrp: 1200, isDefault: true }
    ],
    selectedSize: 'Standard',
    inStock: true,
    stockCount: 42,
    description: 'High quality Dog food product for everyday use.'
  }
  , {
    id: 'prod-10021',
    name: 'Premium Cat Accessories Pack 21',
    shortName: 'Cat accessories 21',
    category: 'accessories',
    subcategory: 'General',
    petType: 'Cat',
    brand: 'PetCare Co.',
    price: 1814,
    mrp: 2183,
    discountPercent: 17,
    rating: 4.8,
    reviewsCount: 513,
    isTopPick: true,
    isInstantDelivery: true,
    deliveryTimeMinutes: 25,
    storeId: 'store-2',
    storeName: 'Canine Castle Pet Hub',
    storeDistance: '5.4 km',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80'
    ],
    sizes: [
      { size: 'Standard', price: 1814, mrp: 2183, isDefault: true }
    ],
    selectedSize: 'Standard',
    inStock: true,
    stockCount: 48,
    description: 'High quality Cat accessories product for everyday use.'
  }
  , {
    id: 'prod-10022',
    name: 'Premium Bird Medicine Pack 22',
    shortName: 'Bird medicine 22',
    category: 'medicine',
    subcategory: 'General',
    petType: 'Bird',
    brand: 'PetCare Co.',
    price: 335,
    mrp: 632,
    discountPercent: 47,
    rating: 4.7,
    reviewsCount: 228,
    isTopPick: false,
    isInstantDelivery: true,
    deliveryTimeMinutes: 19,
    storeId: 'store-3',
    storeName: 'Pet Paradise Express',
    storeDistance: '3.1 km',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80'
    ],
    sizes: [
      { size: 'Standard', price: 335, mrp: 632, isDefault: true }
    ],
    selectedSize: 'Standard',
    inStock: true,
    stockCount: 40,
    description: 'High quality Bird medicine product for everyday use.'
  }
  , {
    id: 'prod-10023',
    name: 'Premium Fish Grooming Pack 23',
    shortName: 'Fish grooming 23',
    category: 'grooming',
    subcategory: 'General',
    petType: 'Fish',
    brand: 'PetCare Co.',
    price: 626,
    mrp: 910,
    discountPercent: 31,
    rating: 4.4,
    reviewsCount: 547,
    isTopPick: true,
    isInstantDelivery: true,
    deliveryTimeMinutes: 24,
    storeId: 'store-4',
    storeName: 'Apollo Pet Pharmacy & Health',
    storeDistance: '2.9 km',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80'
    ],
    sizes: [
      { size: 'Standard', price: 626, mrp: 910, isDefault: true }
    ],
    selectedSize: 'Standard',
    inStock: true,
    stockCount: 5,
    description: 'High quality Fish grooming product for everyday use.'
  }
  , {
    id: 'prod-10024',
    name: 'Premium Dog Food Pack 24',
    shortName: 'Dog food 24',
    category: 'food',
    subcategory: 'General',
    petType: 'Dog',
    brand: 'PetCare Co.',
    price: 2070,
    mrp: 2462,
    discountPercent: 16,
    rating: 3.6,
    reviewsCount: 796,
    isTopPick: false,
    isInstantDelivery: true,
    deliveryTimeMinutes: 26,
    storeId: 'store-1',
    storeName: 'Paws & Whiskers Supermart',
    storeDistance: '3.4 km',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80'
    ],
    sizes: [
      { size: 'Standard', price: 2070, mrp: 2462, isDefault: true }
    ],
    selectedSize: 'Standard',
    inStock: true,
    stockCount: 9,
    description: 'High quality Dog food product for everyday use.'
  }
  , {
    id: 'prod-10025',
    name: 'Premium Cat Accessories Pack 25',
    shortName: 'Cat accessories 25',
    category: 'accessories',
    subcategory: 'General',
    petType: 'Cat',
    brand: 'PetCare Co.',
    price: 1122,
    mrp: 1354,
    discountPercent: 17,
    rating: 3.9,
    reviewsCount: 260,
    isTopPick: false,
    isInstantDelivery: true,
    deliveryTimeMinutes: 19,
    storeId: 'store-2',
    storeName: 'Canine Castle Pet Hub',
    storeDistance: '1.8 km',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80'
    ],
    sizes: [
      { size: 'Standard', price: 1122, mrp: 1354, isDefault: true }
    ],
    selectedSize: 'Standard',
    inStock: true,
    stockCount: 28,
    description: 'High quality Cat accessories product for everyday use.'
  }
  , {
    id: 'prod-10026',
    name: 'Premium Bird Medicine Pack 26',
    shortName: 'Bird medicine 26',
    category: 'medicine',
    subcategory: 'General',
    petType: 'Bird',
    brand: 'PetCare Co.',
    price: 1267,
    mrp: 1590,
    discountPercent: 20,
    rating: 4.1,
    reviewsCount: 312,
    isTopPick: false,
    isInstantDelivery: true,
    deliveryTimeMinutes: 21,
    storeId: 'store-3',
    storeName: 'Pet Paradise Express',
    storeDistance: '4.8 km',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80'
    ],
    sizes: [
      { size: 'Standard', price: 1267, mrp: 1590, isDefault: true }
    ],
    selectedSize: 'Standard',
    inStock: true,
    stockCount: 25,
    description: 'High quality Bird medicine product for everyday use.'
  }
  , {
    id: 'prod-10027',
    name: 'Premium Fish Grooming Pack 27',
    shortName: 'Fish grooming 27',
    category: 'grooming',
    subcategory: 'General',
    petType: 'Fish',
    brand: 'PetCare Co.',
    price: 566,
    mrp: 668,
    discountPercent: 15,
    rating: 3.4,
    reviewsCount: 139,
    isTopPick: true,
    isInstantDelivery: true,
    deliveryTimeMinutes: 17,
    storeId: 'store-4',
    storeName: 'Apollo Pet Pharmacy & Health',
    storeDistance: '5.3 km',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80'
    ],
    sizes: [
      { size: 'Standard', price: 566, mrp: 668, isDefault: true }
    ],
    selectedSize: 'Standard',
    inStock: true,
    stockCount: 31,
    description: 'High quality Fish grooming product for everyday use.'
  }
  , {
    id: 'prod-10028',
    name: 'Premium Dog Food Pack 28',
    shortName: 'Dog food 28',
    category: 'food',
    subcategory: 'General',
    petType: 'Dog',
    brand: 'PetCare Co.',
    price: 1237,
    mrp: 1603,
    discountPercent: 23,
    rating: 4.0,
    reviewsCount: 60,
    isTopPick: false,
    isInstantDelivery: true,
    deliveryTimeMinutes: 15,
    storeId: 'store-1',
    storeName: 'Paws & Whiskers Supermart',
    storeDistance: '2.2 km',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80'
    ],
    sizes: [
      { size: 'Standard', price: 1237, mrp: 1603, isDefault: true }
    ],
    selectedSize: 'Standard',
    inStock: true,
    stockCount: 46,
    description: 'High quality Dog food product for everyday use.'
  }
  , {
    id: 'prod-10029',
    name: 'Premium Cat Accessories Pack 29',
    shortName: 'Cat accessories 29',
    category: 'accessories',
    subcategory: 'General',
    petType: 'Cat',
    brand: 'PetCare Co.',
    price: 265,
    mrp: 652,
    discountPercent: 59,
    rating: 3.7,
    reviewsCount: 582,
    isTopPick: false,
    isInstantDelivery: true,
    deliveryTimeMinutes: 31,
    storeId: 'store-2',
    storeName: 'Canine Castle Pet Hub',
    storeDistance: '2.8 km',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80'
    ],
    sizes: [
      { size: 'Standard', price: 265, mrp: 652, isDefault: true }
    ],
    selectedSize: 'Standard',
    inStock: true,
    stockCount: 39,
    description: 'High quality Cat accessories product for everyday use.'
  }
  , {
    id: 'prod-10030',
    name: 'Premium Bird Medicine Pack 30',
    shortName: 'Bird medicine 30',
    category: 'medicine',
    subcategory: 'General',
    petType: 'Bird',
    brand: 'PetCare Co.',
    price: 1439,
    mrp: 1958,
    discountPercent: 27,
    rating: 3.5,
    reviewsCount: 144,
    isTopPick: false,
    isInstantDelivery: true,
    deliveryTimeMinutes: 18,
    storeId: 'store-3',
    storeName: 'Pet Paradise Express',
    storeDistance: '0.6 km',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80'
    ],
    sizes: [
      { size: 'Standard', price: 1439, mrp: 1958, isDefault: true }
    ],
    selectedSize: 'Standard',
    inStock: true,
    stockCount: 7,
    description: 'High quality Bird medicine product for everyday use.'
  }
  , {
    id: 'prod-10031',
    name: 'Premium Fish Grooming Pack 31',
    shortName: 'Fish grooming 31',
    category: 'grooming',
    subcategory: 'General',
    petType: 'Fish',
    brand: 'PetCare Co.',
    price: 839,
    mrp: 1388,
    discountPercent: 40,
    rating: 4.3,
    reviewsCount: 392,
    isTopPick: false,
    isInstantDelivery: true,
    deliveryTimeMinutes: 33,
    storeId: 'store-4',
    storeName: 'Apollo Pet Pharmacy & Health',
    storeDistance: '2.5 km',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80'
    ],
    sizes: [
      { size: 'Standard', price: 839, mrp: 1388, isDefault: true }
    ],
    selectedSize: 'Standard',
    inStock: true,
    stockCount: 39,
    description: 'High quality Fish grooming product for everyday use.'
  }
  , {
    id: 'prod-10032',
    name: 'Premium Dog Food Pack 32',
    shortName: 'Dog food 32',
    category: 'food',
    subcategory: 'General',
    petType: 'Dog',
    brand: 'PetCare Co.',
    price: 1878,
    mrp: 2147,
    discountPercent: 13,
    rating: 4.2,
    reviewsCount: 956,
    isTopPick: false,
    isInstantDelivery: true,
    deliveryTimeMinutes: 11,
    storeId: 'store-1',
    storeName: 'Paws & Whiskers Supermart',
    storeDistance: '3.6 km',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80'
    ],
    sizes: [
      { size: 'Standard', price: 1878, mrp: 2147, isDefault: true }
    ],
    selectedSize: 'Standard',
    inStock: true,
    stockCount: 28,
    description: 'High quality Dog food product for everyday use.'
  }
  , {
    id: 'prod-10033',
    name: 'Premium Cat Accessories Pack 33',
    shortName: 'Cat accessories 33',
    category: 'accessories',
    subcategory: 'General',
    petType: 'Cat',
    brand: 'PetCare Co.',
    price: 844,
    mrp: 1244,
    discountPercent: 32,
    rating: 4.0,
    reviewsCount: 420,
    isTopPick: false,
    isInstantDelivery: true,
    deliveryTimeMinutes: 15,
    storeId: 'store-2',
    storeName: 'Canine Castle Pet Hub',
    storeDistance: '2.4 km',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80'
    ],
    sizes: [
      { size: 'Standard', price: 844, mrp: 1244, isDefault: true }
    ],
    selectedSize: 'Standard',
    inStock: true,
    stockCount: 21,
    description: 'High quality Cat accessories product for everyday use.'
  }
  , {
    id: 'prod-10034',
    name: 'Premium Bird Medicine Pack 34',
    shortName: 'Bird medicine 34',
    category: 'medicine',
    subcategory: 'General',
    petType: 'Bird',
    brand: 'PetCare Co.',
    price: 1257,
    mrp: 1437,
    discountPercent: 13,
    rating: 3.2,
    reviewsCount: 497,
    isTopPick: true,
    isInstantDelivery: true,
    deliveryTimeMinutes: 32,
    storeId: 'store-3',
    storeName: 'Pet Paradise Express',
    storeDistance: '5.4 km',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80'
    ],
    sizes: [
      { size: 'Standard', price: 1257, mrp: 1437, isDefault: true }
    ],
    selectedSize: 'Standard',
    inStock: true,
    stockCount: 37,
    description: 'High quality Bird medicine product for everyday use.'
  }
  , {
    id: 'prod-10035',
    name: 'Premium Fish Grooming Pack 35',
    shortName: 'Fish grooming 35',
    category: 'grooming',
    subcategory: 'General',
    petType: 'Fish',
    brand: 'PetCare Co.',
    price: 613,
    mrp: 859,
    discountPercent: 29,
    rating: 4.0,
    reviewsCount: 71,
    isTopPick: false,
    isInstantDelivery: true,
    deliveryTimeMinutes: 34,
    storeId: 'store-4',
    storeName: 'Apollo Pet Pharmacy & Health',
    storeDistance: '3.6 km',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80'
    ],
    sizes: [
      { size: 'Standard', price: 613, mrp: 859, isDefault: true }
    ],
    selectedSize: 'Standard',
    inStock: true,
    stockCount: 22,
    description: 'High quality Fish grooming product for everyday use.'
  }
  , {
    id: 'prod-10036',
    name: 'Premium Dog Food Pack 36',
    shortName: 'Dog food 36',
    category: 'food',
    subcategory: 'General',
    petType: 'Dog',
    brand: 'PetCare Co.',
    price: 933,
    mrp: 1447,
    discountPercent: 36,
    rating: 4.2,
    reviewsCount: 717,
    isTopPick: false,
    isInstantDelivery: true,
    deliveryTimeMinutes: 34,
    storeId: 'store-1',
    storeName: 'Paws & Whiskers Supermart',
    storeDistance: '1.0 km',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80'
    ],
    sizes: [
      { size: 'Standard', price: 933, mrp: 1447, isDefault: true }
    ],
    selectedSize: 'Standard',
    inStock: true,
    stockCount: 26,
    description: 'High quality Dog food product for everyday use.'
  }
  , {
    id: 'prod-10037',
    name: 'Premium Cat Accessories Pack 37',
    shortName: 'Cat accessories 37',
    category: 'accessories',
    subcategory: 'General',
    petType: 'Cat',
    brand: 'PetCare Co.',
    price: 700,
    mrp: 841,
    discountPercent: 17,
    rating: 3.4,
    reviewsCount: 333,
    isTopPick: true,
    isInstantDelivery: true,
    deliveryTimeMinutes: 17,
    storeId: 'store-2',
    storeName: 'Canine Castle Pet Hub',
    storeDistance: '4.4 km',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80'
    ],
    sizes: [
      { size: 'Standard', price: 700, mrp: 841, isDefault: true }
    ],
    selectedSize: 'Standard',
    inStock: true,
    stockCount: 14,
    description: 'High quality Cat accessories product for everyday use.'
  }
  , {
    id: 'prod-10038',
    name: 'Premium Bird Medicine Pack 38',
    shortName: 'Bird medicine 38',
    category: 'medicine',
    subcategory: 'General',
    petType: 'Bird',
    brand: 'PetCare Co.',
    price: 1617,
    mrp: 1880,
    discountPercent: 14,
    rating: 3.9,
    reviewsCount: 683,
    isTopPick: false,
    isInstantDelivery: true,
    deliveryTimeMinutes: 31,
    storeId: 'store-3',
    storeName: 'Pet Paradise Express',
    storeDistance: '3.8 km',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80'
    ],
    sizes: [
      { size: 'Standard', price: 1617, mrp: 1880, isDefault: true }
    ],
    selectedSize: 'Standard',
    inStock: true,
    stockCount: 47,
    description: 'High quality Bird medicine product for everyday use.'
  }
  , {
    id: 'prod-10039',
    name: 'Premium Fish Grooming Pack 39',
    shortName: 'Fish grooming 39',
    category: 'grooming',
    subcategory: 'General',
    petType: 'Fish',
    brand: 'PetCare Co.',
    price: 1339,
    mrp: 1707,
    discountPercent: 22,
    rating: 4.3,
    reviewsCount: 69,
    isTopPick: false,
    isInstantDelivery: true,
    deliveryTimeMinutes: 27,
    storeId: 'store-4',
    storeName: 'Apollo Pet Pharmacy & Health',
    storeDistance: '1.7 km',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80'
    ],
    sizes: [
      { size: 'Standard', price: 1339, mrp: 1707, isDefault: true }
    ],
    selectedSize: 'Standard',
    inStock: true,
    stockCount: 7,
    description: 'High quality Fish grooming product for everyday use.'
  }
  , {
    id: 'prod-10040',
    name: 'Premium Dog Food Pack 40',
    shortName: 'Dog food 40',
    category: 'food',
    subcategory: 'General',
    petType: 'Dog',
    brand: 'PetCare Co.',
    price: 324,
    mrp: 711,
    discountPercent: 54,
    rating: 3.6,
    reviewsCount: 701,
    isTopPick: false,
    isInstantDelivery: true,
    deliveryTimeMinutes: 17,
    storeId: 'store-1',
    storeName: 'Paws & Whiskers Supermart',
    storeDistance: '4.5 km',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80'
    ],
    sizes: [
      { size: 'Standard', price: 324, mrp: 711, isDefault: true }
    ],
    selectedSize: 'Standard',
    inStock: true,
    stockCount: 19,
    description: 'High quality Dog food product for everyday use.'
  }
  , {
    id: 'prod-10041',
    name: 'Premium Cat Accessories Pack 41',
    shortName: 'Cat accessories 41',
    category: 'accessories',
    subcategory: 'General',
    petType: 'Cat',
    brand: 'PetCare Co.',
    price: 374,
    mrp: 634,
    discountPercent: 41,
    rating: 3.7,
    reviewsCount: 347,
    isTopPick: false,
    isInstantDelivery: true,
    deliveryTimeMinutes: 39,
    storeId: 'store-2',
    storeName: 'Canine Castle Pet Hub',
    storeDistance: '4.9 km',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80'
    ],
    sizes: [
      { size: 'Standard', price: 374, mrp: 634, isDefault: true }
    ],
    selectedSize: 'Standard',
    inStock: true,
    stockCount: 9,
    description: 'High quality Cat accessories product for everyday use.'
  }
  , {
    id: 'prod-10042',
    name: 'Premium Bird Medicine Pack 42',
    shortName: 'Bird medicine 42',
    category: 'medicine',
    subcategory: 'General',
    petType: 'Bird',
    brand: 'PetCare Co.',
    price: 431,
    mrp: 779,
    discountPercent: 45,
    rating: 3.1,
    reviewsCount: 374,
    isTopPick: false,
    isInstantDelivery: true,
    deliveryTimeMinutes: 30,
    storeId: 'store-3',
    storeName: 'Pet Paradise Express',
    storeDistance: '2.4 km',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80'
    ],
    sizes: [
      { size: 'Standard', price: 431, mrp: 779, isDefault: true }
    ],
    selectedSize: 'Standard',
    inStock: true,
    stockCount: 31,
    description: 'High quality Bird medicine product for everyday use.'
  }
  , {
    id: 'prod-10043',
    name: 'Premium Fish Grooming Pack 43',
    shortName: 'Fish grooming 43',
    category: 'grooming',
    subcategory: 'General',
    petType: 'Fish',
    brand: 'PetCare Co.',
    price: 330,
    mrp: 642,
    discountPercent: 49,
    rating: 3.5,
    reviewsCount: 184,
    isTopPick: false,
    isInstantDelivery: true,
    deliveryTimeMinutes: 35,
    storeId: 'store-4',
    storeName: 'Apollo Pet Pharmacy & Health',
    storeDistance: '3.5 km',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80'
    ],
    sizes: [
      { size: 'Standard', price: 330, mrp: 642, isDefault: true }
    ],
    selectedSize: 'Standard',
    inStock: true,
    stockCount: 23,
    description: 'High quality Fish grooming product for everyday use.'
  }
  , {
    id: 'prod-10044',
    name: 'Premium Dog Food Pack 44',
    shortName: 'Dog food 44',
    category: 'food',
    subcategory: 'General',
    petType: 'Dog',
    brand: 'PetCare Co.',
    price: 1365,
    mrp: 1461,
    discountPercent: 7,
    rating: 4.0,
    reviewsCount: 683,
    isTopPick: false,
    isInstantDelivery: true,
    deliveryTimeMinutes: 28,
    storeId: 'store-1',
    storeName: 'Paws & Whiskers Supermart',
    storeDistance: '0.6 km',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80'
    ],
    sizes: [
      { size: 'Standard', price: 1365, mrp: 1461, isDefault: true }
    ],
    selectedSize: 'Standard',
    inStock: true,
    stockCount: 44,
    description: 'High quality Dog food product for everyday use.'
  }
  , {
    id: 'prod-10045',
    name: 'Premium Cat Accessories Pack 45',
    shortName: 'Cat accessories 45',
    category: 'accessories',
    subcategory: 'General',
    petType: 'Cat',
    brand: 'PetCare Co.',
    price: 1931,
    mrp: 2472,
    discountPercent: 22,
    rating: 3.2,
    reviewsCount: 100,
    isTopPick: true,
    isInstantDelivery: true,
    deliveryTimeMinutes: 36,
    storeId: 'store-2',
    storeName: 'Canine Castle Pet Hub',
    storeDistance: '3.3 km',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80'
    ],
    sizes: [
      { size: 'Standard', price: 1931, mrp: 2472, isDefault: true }
    ],
    selectedSize: 'Standard',
    inStock: true,
    stockCount: 45,
    description: 'High quality Cat accessories product for everyday use.'
  }
  , {
    id: 'prod-10046',
    name: 'Premium Bird Medicine Pack 46',
    shortName: 'Bird medicine 46',
    category: 'medicine',
    subcategory: 'General',
    petType: 'Bird',
    brand: 'PetCare Co.',
    price: 789,
    mrp: 1243,
    discountPercent: 37,
    rating: 3.6,
    reviewsCount: 80,
    isTopPick: true,
    isInstantDelivery: true,
    deliveryTimeMinutes: 23,
    storeId: 'store-3',
    storeName: 'Pet Paradise Express',
    storeDistance: '3.6 km',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80'
    ],
    sizes: [
      { size: 'Standard', price: 789, mrp: 1243, isDefault: true }
    ],
    selectedSize: 'Standard',
    inStock: true,
    stockCount: 16,
    description: 'High quality Bird medicine product for everyday use.'
  }
  , {
    id: 'prod-10047',
    name: 'Premium Fish Grooming Pack 47',
    shortName: 'Fish grooming 47',
    category: 'grooming',
    subcategory: 'General',
    petType: 'Fish',
    brand: 'PetCare Co.',
    price: 1226,
    mrp: 1367,
    discountPercent: 10,
    rating: 4.8,
    reviewsCount: 955,
    isTopPick: false,
    isInstantDelivery: true,
    deliveryTimeMinutes: 36,
    storeId: 'store-4',
    storeName: 'Apollo Pet Pharmacy & Health',
    storeDistance: '1.6 km',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80'
    ],
    sizes: [
      { size: 'Standard', price: 1226, mrp: 1367, isDefault: true }
    ],
    selectedSize: 'Standard',
    inStock: true,
    stockCount: 49,
    description: 'High quality Fish grooming product for everyday use.'
  }
  , {
    id: 'prod-10048',
    name: 'Premium Dog Food Pack 48',
    shortName: 'Dog food 48',
    category: 'food',
    subcategory: 'General',
    petType: 'Dog',
    brand: 'PetCare Co.',
    price: 2070,
    mrp: 2558,
    discountPercent: 19,
    rating: 3.5,
    reviewsCount: 938,
    isTopPick: false,
    isInstantDelivery: true,
    deliveryTimeMinutes: 13,
    storeId: 'store-1',
    storeName: 'Paws & Whiskers Supermart',
    storeDistance: '3.8 km',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80'
    ],
    sizes: [
      { size: 'Standard', price: 2070, mrp: 2558, isDefault: true }
    ],
    selectedSize: 'Standard',
    inStock: true,
    stockCount: 8,
    description: 'High quality Dog food product for everyday use.'
  }
  , {
    id: 'prod-10049',
    name: 'Premium Cat Accessories Pack 49',
    shortName: 'Cat accessories 49',
    category: 'accessories',
    subcategory: 'General',
    petType: 'Cat',
    brand: 'PetCare Co.',
    price: 1661,
    mrp: 1722,
    discountPercent: 4,
    rating: 4.0,
    reviewsCount: 597,
    isTopPick: false,
    isInstantDelivery: true,
    deliveryTimeMinutes: 15,
    storeId: 'store-2',
    storeName: 'Canine Castle Pet Hub',
    storeDistance: '4.0 km',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80'
    ],
    sizes: [
      { size: 'Standard', price: 1661, mrp: 1722, isDefault: true }
    ],
    selectedSize: 'Standard',
    inStock: true,
    stockCount: 48,
    description: 'High quality Cat accessories product for everyday use.'
  }
  , {
    id: 'prod-10050',
    name: 'Premium Bird Medicine Pack 50',
    shortName: 'Bird medicine 50',
    category: 'medicine',
    subcategory: 'General',
    petType: 'Bird',
    brand: 'PetCare Co.',
    price: 278,
    mrp: 800,
    discountPercent: 65,
    rating: 3.7,
    reviewsCount: 963,
    isTopPick: false,
    isInstantDelivery: true,
    deliveryTimeMinutes: 39,
    storeId: 'store-3',
    storeName: 'Pet Paradise Express',
    storeDistance: '1.2 km',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80'
    ],
    sizes: [
      { size: 'Standard', price: 278, mrp: 800, isDefault: true }
    ],
    selectedSize: 'Standard',
    inStock: true,
    stockCount: 37,
    description: 'High quality Bird medicine product for everyday use.'
  }
];

import React, { createContext, useContext, useState, useEffect } from 'react';
import { PRODUCTS } from '../data/products';

const VendorContext = createContext();

const INITIAL_VENDOR = {
  id: 'vendor-101',
  fullName: 'Rajesh Sharma',
  email: 'rajesh.paws@gmail.com',
  phone: '+91 98765 43210',
  storeName: 'Paws & Whiskers Supermart & Pet Clinic',
  businessTypes: ['Pet Store & Retail', 'Pet Grooming & Spa', 'Veterinary Clinic & Hospital'],
  businessType: 'Pet Store, Grooming & Veterinary Clinic',
  storeCategory: 'Pet Food, Accessories, Grooming & Healthcare',
  storeLicenceNumber: 'DL-PET-2024-88492',
  gstin: '36AABCP1234F1Z8',
  panNumber: 'ABCPS1234D',
  aadhaarNumber: 'XXXX-XXXX-8921',
  serviceDeliveryModes: {
    homeServiceEnabled: true,
    clinicVisitEnabled: true,
    homeServiceFee: 99,
    homeServiceRadiusKm: 8,
    homeGroomingSlots: ['09:30 AM', '11:30 AM', '02:30 PM', '04:30 PM'],
    clinicDoctorSlots: ['10:00 AM', '12:00 PM', '03:00 PM', '05:00 PM', '06:30 PM']
  },
  location: {
    address: 'Plot 42, Road No. 12, Banjara Hills, Hyderabad, Telangana',
    city: 'Hyderabad',
    pincode: '500034',
    lat: 17.4156,
    lng: 78.4350,
    landmark: 'Opposite Care Hospital'
  },
  photos: {
    storeFront: '/images/promo_banner_main.jpg',
    interior: '/images/promo_puppy.jpg',
    logo: '/images/store_vet.jpg'
  },
  status: 'approved', // 'pending' | 'approved' | 'rejected'
  submittedAt: '2026-09-01T10:30:00Z',
  approvedAt: '2026-09-02T14:15:00Z',
  isStoreOpen: true,
  rating: 4.8,
  totalReviews: 650,
  commissionRate: 8 // %
};

const INITIAL_DELIVERY_BOYS = [
  {
    id: 'db-1',
    name: 'Vikram Singh',
    phone: '+91 91234 56789',
    role: 'delivery_rider', // 'delivery_rider' | 'home_groomer' | 'mobile_vet'
    roleTitle: 'Quick Delivery Partner',
    vehicleType: 'Electric Bike',
    vehicleNumber: 'TS 09 AB 4521',
    drivingLicence: 'DL-0420190012345',
    status: 'available', // 'available' | 'busy' | 'offline'
    rating: 4.9,
    totalDeliveries: 428,
    joinedDate: '2025-11-10',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80'
  },
  {
    id: 'db-2',
    name: 'Suresh Kumar',
    phone: '+91 98765 12345',
    role: 'delivery_rider',
    roleTitle: 'Express Rider',
    vehicleType: 'Motorcycle',
    vehicleNumber: 'TS 08 EF 8812',
    drivingLicence: 'DL-0420210087654',
    status: 'busy',
    currentOrderId: 'ORD-7821',
    rating: 4.7,
    totalDeliveries: 310,
    joinedDate: '2026-01-15',
    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=150&auto=format&fit=crop&q=80'
  },
  {
    id: 'db-3',
    name: 'Rahul Sharma (Groomer)',
    phone: '+91 94567 89012',
    role: 'home_groomer',
    roleTitle: 'Certified Home Pet Groomer',
    vehicleType: 'Service Scooter with Grooming Kit',
    vehicleNumber: 'TS 07 CD 3390',
    drivingLicence: 'DL-0420200054321',
    status: 'available',
    rating: 4.9,
    totalDeliveries: 165,
    joinedDate: '2026-02-10',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80'
  },
  {
    id: 'db-4',
    name: 'Dr. Anita Joshi (Vet)',
    phone: '+91 99887 76655',
    role: 'mobile_vet',
    roleTitle: 'Mobile Vet / Health Inspector',
    vehicleType: 'Clinic Mobile Van',
    vehicleNumber: 'TS 10 GH 6641',
    drivingLicence: 'DL-0420220033221',
    status: 'available',
    rating: 4.95,
    totalDeliveries: 92,
    joinedDate: '2026-04-01',
    avatar: 'https://images.unsplash.com/photo-1594824813688-66d483424177?w=150&auto=format&fit=crop&q=80'
  }
];

const INITIAL_SERVICES = [
  // 1. Home Grooming Service
  {
    id: 'srv-h1',
    name: 'Doorstep Luxury Full Spa & Breed Haircut',
    shortName: 'Full Spa & Styling',
    category: 'Grooming',
    deliveryMode: 'home_service', // 'home_service' | 'clinic_visit' | 'both'
    price: 1299,
    mrp: 1599,
    durationMinutes: 60,
    petType: 'Dog & Cat',
    isActive: true,
    rating: 4.9,
    reviewsCount: 124,
    image: '/images/cat_grooming.jpg',
    description: 'Complete grooming session right at your doorstep in our sanitized, air-conditioned grooming mobile unit. Stress-free & 1-on-1 pet care.',
    features: [
      'Warm Hydrobath with Organic Herbal Shampoo',
      'Blow Dry & Gentle De-matting Coat Brush',
      'Customized Breed Haircut & Sanitary Trim',
      'Nail Clipping, Paw Pad Moisturizing Balm',
      'Ear Cleaning & Fragrance Mist'
    ],
    visitingFee: 99,
    tags: ['Doorstep Van', 'Organic Spa', 'Most Popular']
  },
  // 2. Home Medical Checkup
  {
    id: 'srv-h2',
    name: 'At-Home Senior & Adult Pet Doctor Consultation',
    shortName: 'At-Home Doctor Visit',
    category: 'Veterinary',
    deliveryMode: 'home_service',
    price: 899,
    mrp: 1100,
    durationMinutes: 40,
    petType: 'Dog, Cat, Small Pets',
    isActive: true,
    rating: 4.95,
    reviewsCount: 88,
    image: '/images/store_vet.jpg',
    description: 'Experienced licensed veterinarian visits your home for a comprehensive physical examination, vitals, nutrition review, and digital prescription.',
    features: [
      'Cardiac, Respiratory & Temperature Vitals Check',
      'Abdominal Palpation & Joint Mobility Exam',
      'Eyes, Ears & Dental Tartar Assessment',
      'Digital E-Prescription sent directly to WhatsApp/App',
      'Diet, Nutrition & De-worming Guidance'
    ],
    visitingFee: 99,
    tags: ['Certified Vet', 'Doorstep Care', 'Low Stress']
  },
  // 3. Home Puppy / Kitten Vaccination
  {
    id: 'srv-h3',
    name: 'Doorstep Puppy / Kitten Core Vaccination & Deworming',
    shortName: 'Home Vaccination Package',
    category: 'Veterinary',
    deliveryMode: 'home_service',
    price: 1099,
    mrp: 1399,
    durationMinutes: 30,
    petType: 'Puppies & Kittens',
    isActive: true,
    rating: 4.9,
    reviewsCount: 95,
    image: '/images/promo_puppy.jpg',
    description: 'Cold-chain maintained vaccines delivered and administered at your residence by a registered mobile vet with vaccination passport update.',
    features: [
      '7-in-1 DHPPiL or Feline Tricat Core Vaccine',
      'Cold-Chain Temperature Monitored Delivery',
      'Pre-vaccine Health & Temperature Screening',
      'Oral Deworming Dosage included',
      'Official Vaccination Certificate & Passport Stamp'
    ],
    visitingFee: 99,
    tags: ['Cold-Chain', 'Vaccine Passport', 'Puppy Care']
  },
  // 4. Home Anti-Tick & Flea Wash
  {
    id: 'srv-h4',
    name: 'Anti-Tick & Flea Medicated Eradication Bath (Mobile Van)',
    shortName: 'Anti-Tick Deep Wash',
    category: 'Grooming',
    deliveryMode: 'home_service',
    price: 999,
    mrp: 1250,
    durationMinutes: 45,
    petType: 'Dogs',
    isActive: true,
    rating: 4.85,
    reviewsCount: 76,
    image: '/images/prod_shampoo.jpg',
    description: 'Intense anti-parasitic botanical wash combined with manual tick extraction and soothing skin coat conditioner to relieve itching.',
    features: [
      'Herbal Neem & Tea Tree Medicated Bath',
      'Manual Deep Tick & Flea Removal',
      'Coat Deshedding & De-knotting',
      'Antiseptic Soothing Spray on hotspots',
      'Post-treatment Tick Prevention Guidance'
    ],
    visitingFee: 99,
    tags: ['Medicated', 'Flea Relief', 'Doorstep']
  },
  // 5. In-Clinic Doctor Consultation
  {
    id: 'srv-c1',
    name: 'In-Clinic Comprehensive Veterinary Consultation',
    shortName: 'In-Clinic Doctor Visit',
    category: 'Veterinary',
    deliveryMode: 'clinic_visit', // In-Clinic Visit
    price: 499,
    mrp: 650,
    durationMinutes: 25,
    petType: 'All Pets',
    isActive: true,
    rating: 4.88,
    reviewsCount: 310,
    image: '/images/store_vet.jpg',
    description: 'Visit our Banjara Hills modern clinic for complete medical diagnostics, in-house pharmacy, and comprehensive veterinary care.',
    features: [
      'Consultation with Senior Veterinary Surgeon',
      'Weight, Blood Pressure & Vitals Profiling',
      'Immediate Laboratory Sample Collection',
      'In-Clinic Pharmacy Dispensing',
      'Instant Diagnostic Recommendations'
    ],
    visitingFee: 0,
    tags: ['In-Clinic', 'Pharmacy on Site', 'Walk-in / Appt']
  },
  // 6. In-Clinic Dental Scaling
  {
    id: 'srv-c2',
    name: 'In-Clinic Ultrasonic Dental Scaling & Oral Polish',
    shortName: 'Dental Scaling & Polish',
    category: 'Veterinary',
    deliveryMode: 'clinic_visit',
    price: 2499,
    mrp: 3200,
    durationMinutes: 60,
    petType: 'Dogs & Cats',
    isActive: true,
    rating: 4.92,
    reviewsCount: 54,
    image: '/images/store_vet.jpg',
    description: 'Professional ultrasonic tartar and plaque removal under mild sedation with fluoride polishing for healthy gums and fresh breath.',
    features: [
      'Ultrasonic Subgingival Tartar Removal',
      'Gingival Pocket Cleansing & Antiseptic Flush',
      'Tooth Surface Fluoride Polishing',
      'Pre-procedure Anesthesia Safety Check',
      'Oral Health Home-Care Kit Provided'
    ],
    visitingFee: 0,
    tags: ['Dental Suite', 'Ultrasonic', 'Fresh Breath']
  },
  // 7. In-Clinic Diagnostics (Ultrasound & X-Ray)
  {
    id: 'srv-c3',
    name: 'In-Clinic Digital Ultrasound Scan & 2-View X-Ray',
    shortName: 'Ultrasound & X-Ray Diagnostic',
    category: 'Veterinary',
    deliveryMode: 'clinic_visit',
    price: 1850,
    mrp: 2300,
    durationMinutes: 45,
    petType: 'Dogs & Cats',
    isActive: true,
    rating: 4.95,
    reviewsCount: 68,
    image: '/images/store_vet.jpg',
    description: 'High-frequency abdominal ultrasound and digital radiography imaging with certified radiologist interpretation within 60 minutes.',
    features: [
      'Abdominal Ultrasound Soft-Tissue Exam',
      '2-Angle High-Definition Digital X-Ray Film',
      'Immediate Digital Report & WhatsApp PDF Delivery',
      'Specialist Consultation on Scan Findings',
      'Non-Invasive Gentle Positioning'
    ],
    visitingFee: 0,
    tags: ['In-House Radiology', 'Fast Results', 'High Precision']
  },
  // 8. In-Clinic Breed Show Styling & Spa
  {
    id: 'srv-c4',
    name: 'In-Clinic Luxury Aromatherapy Grooming & Breed Cut',
    shortName: 'In-Salon Aroma Spa & Cut',
    category: 'Grooming',
    deliveryMode: 'clinic_visit',
    price: 1499,
    mrp: 1899,
    durationMinutes: 75,
    petType: 'Dogs & Cats',
    isActive: true,
    rating: 4.9,
    reviewsCount: 145,
    image: '/images/store_grooming.jpg',
    description: 'Full pampering salon experience with aromatherapy essential oils, jacuzzi bath, precision scissor styling, and paw pedicure.',
    features: [
      'Aromatherapy Jacuzzi Bath with Lavender Oils',
      'High-Velocity Fluff Drying & De-shedding',
      'Master Stylist Scissor Breed Haircut',
      'Pawdicure with Deep Moisturizing Wax',
      'Photo-booth Pet Portrait Souvenir'
    ],
    visitingFee: 0,
    tags: ['Salon Spa', 'Master Stylist', 'Jacuzzi Bath']
  }
];

const INITIAL_ORDERS = [
  // 1. Home Grooming Service Booking
  {
    id: 'BKG-9101',
    orderType: 'home_service', // 'product_delivery' | 'home_service' | 'clinic_visit'
    serviceCategory: 'Grooming',
    serviceName: 'Doorstep Luxury Full Spa & Breed Haircut',
    petName: 'Bruno (Golden Retriever, 2 yrs)',
    customerName: 'Ananya Deshmukh',
    customerPhone: '+91 98230 44551',
    customerAddress: 'Villa 14, Rainbow Meadows, Jubilee Hills (2.2 km)',
    scheduledSlot: 'Today, 03:00 PM',
    items: [
      { id: 'srv-h1', name: 'At-Home Full Spa & Haircut (Mobile Van)', quantity: 1, price: 1299 },
      { id: 'srv-h4', name: 'Anti-Tick & Flea Wash Add-on', quantity: 1, price: 299 }
    ],
    totalAmount: 1598,
    paymentMethod: 'Prepaid (UPI - GPay)',
    paymentStatus: 'Paid',
    orderStatus: 'ready', // 'new' | 'preparing' | 'ready' | 'out_for_delivery' | 'delivered' | 'cancelled'
    assignedDeliveryBoyId: 'db-3', // Assigned to Rahul Sharma (Certified Home Groomer)
    placedAt: '2026-09-05T12:30:00Z',
    notes: 'Please bring hypoallergenic shampoo. Golden retriever is very friendly.'
  },
  // 2. In-Clinic Veterinary Consultation
  {
    id: 'BKG-9102',
    orderType: 'clinic_visit',
    serviceCategory: 'Veterinary',
    serviceName: 'In-Clinic Comprehensive Veterinary Consultation',
    petName: 'Coco (Shih Tzu, 1 yr)',
    customerName: 'Kavita Reddy',
    customerPhone: '+91 97001 22334',
    customerAddress: 'In-Store Visit (Banjara Hills Clinic)',
    scheduledSlot: 'Today, 04:30 PM',
    items: [
      { id: 'srv-c1', name: 'In-Clinic Doctor Consultation', quantity: 1, price: 499 },
      { id: 'srv-c3', name: 'Annual DHPPiL Booster Vaccine & Health Card', quantity: 1, price: 850 }
    ],
    totalAmount: 1349,
    paymentMethod: 'Pay at Clinic Counter',
    paymentStatus: 'Pay on Arrival',
    orderStatus: 'preparing',
    assignedDeliveryBoyId: 'db-4', // Assigned to Dr. Anita Joshi
    placedAt: '2026-09-05T13:00:00Z',
    notes: 'Needs vaccination card renewal and checkup for mild coughing.'
  },
  // 3. Home Medical Checkup Visit
  {
    id: 'BKG-9103',
    orderType: 'home_service',
    serviceCategory: 'Veterinary',
    serviceName: 'At-Home Senior & Adult Pet Doctor Consultation',
    petName: 'Simba (Labrador, 4 yrs)',
    customerName: 'Vikram Seth',
    customerPhone: '+91 98877 66554',
    customerAddress: 'Plot 88, MLA Colony, Banjara Hills (1.1 km)',
    scheduledSlot: 'Today, 05:30 PM',
    items: [
      { id: 'srv-h2', name: 'At-Home Vet Consultation & Prescription', quantity: 1, price: 899 }
    ],
    totalAmount: 899,
    paymentMethod: 'Prepaid (Card - HDFC)',
    paymentStatus: 'Paid',
    orderStatus: 'new',
    assignedDeliveryBoyId: null,
    placedAt: '2026-09-05T13:40:00Z',
    notes: 'Dog has minor skin irritation on paws and itching near ears.'
  },
  // 4. In-Clinic Dental Scaling & Radiography
  {
    id: 'BKG-9104',
    orderType: 'clinic_visit',
    serviceCategory: 'Veterinary',
    serviceName: 'In-Clinic Ultrasonic Dental Scaling & Oral Polish',
    petName: 'Rocky (Beagle, 5 yrs)',
    customerName: 'Arjun Nambiar',
    customerPhone: '+91 98490 66778',
    customerAddress: 'In-Clinic Visit (Room 2, Surgery & Dental Suite)',
    scheduledSlot: 'Tomorrow, 11:00 AM',
    items: [
      { id: 'srv-c2', name: 'Ultrasonic Dental Scaling & Fluoride Polish', quantity: 1, price: 2499 }
    ],
    totalAmount: 2499,
    paymentMethod: 'Prepaid (UPI - PhonePe)',
    paymentStatus: 'Paid',
    orderStatus: 'preparing',
    assignedDeliveryBoyId: 'db-4',
    placedAt: '2026-09-05T13:55:00Z',
    notes: 'Pre-anesthesia fasting instructions given to owner.'
  },
  // 5. Home Puppy Vaccination & Microchip
  {
    id: 'BKG-9105',
    orderType: 'home_service',
    serviceCategory: 'Veterinary',
    serviceName: 'Doorstep Puppy 7-in-1 Core Vaccination',
    petName: 'Milo (French Bulldog Puppy, 3 mos)',
    customerName: 'Rohit Singhania',
    customerPhone: '+91 97112 33445',
    customerAddress: 'Flat 601, Sky High Towers, Madhapur (3.4 km)',
    scheduledSlot: 'Tomorrow, 02:00 PM',
    items: [
      { id: 'srv-h3', name: 'Doorstep Core Puppy Vaccine & Deworming', quantity: 1, price: 1099 }
    ],
    totalAmount: 1099,
    paymentMethod: 'Prepaid (UPI - Paytm)',
    paymentStatus: 'Paid',
    orderStatus: 'ready',
    assignedDeliveryBoyId: 'db-4',
    placedAt: '2026-09-05T14:10:00Z',
    notes: 'First time puppy booster. Bring puppy care kit.'
  },
  // 6. In-Clinic Luxury Spa & Show Haircut
  {
    id: 'BKG-9106',
    orderType: 'clinic_visit',
    serviceCategory: 'Grooming',
    serviceName: 'In-Clinic Luxury Aromatherapy Grooming & Breed Cut',
    petName: 'Bella (Persian Cat, 2 yrs)',
    customerName: 'Meera Chawla',
    customerPhone: '+91 99002 88990',
    customerAddress: 'In-Store Salon Visit (Banjara Hills)',
    scheduledSlot: 'Tomorrow, 03:30 PM',
    items: [
      { id: 'srv-c4', name: 'Luxury Aromatherapy Grooming & Scissor Trim', quantity: 1, price: 1499 }
    ],
    totalAmount: 1499,
    paymentMethod: 'Prepaid (Net Banking)',
    paymentStatus: 'Paid',
    orderStatus: 'new',
    assignedDeliveryBoyId: null,
    placedAt: '2026-09-05T14:15:00Z',
    notes: 'Cat requires gentle handling. Lion cut requested.'
  },
  // 7. Product Quick Delivery Order
  {
    id: 'ORD-7821',
    orderType: 'product_delivery',
    customerName: 'Aarav Mehta',
    customerPhone: '+91 98450 11223',
    customerAddress: 'Flat 402, Green Valley Apts, Road 10, Banjara Hills (1.4 km)',
    items: [
      { id: 'prod-1', name: 'Pedigree Adult Dry Dog Food 3kg', quantity: 1, price: 799 },
      { id: 'prod-6', name: 'Rubber Bone Chew Toy', quantity: 2, price: 199 }
    ],
    totalAmount: 1197,
    paymentMethod: 'Prepaid (UPI)',
    paymentStatus: 'Paid',
    orderStatus: 'out_for_delivery',
    assignedDeliveryBoyId: 'db-2',
    placedAt: '2026-09-05T12:45:00Z',
    estimatedDelivery: '15-20 mins',
    notes: 'Please ring the doorbell and leave at door.'
  },
  // 8. Product Quick Delivery Order
  {
    id: 'ORD-7822',
    orderType: 'product_delivery',
    customerName: 'Pooja Reddy',
    customerPhone: '+91 99123 44556',
    customerAddress: 'Villa 18, Palm Meadows, Jubilee Hills (2.8 km)',
    items: [
      { id: 'prod-3', name: 'Whiskas Ocean Fish Dry Food 1.2kg', quantity: 2, price: 449 },
      { id: 'prod-8', name: 'Anti-Tick & Flea Dog Shampoo', quantity: 1, price: 349 }
    ],
    totalAmount: 1247,
    paymentMethod: 'Cash on Delivery',
    paymentStatus: 'Pending Collection',
    orderStatus: 'ready',
    assignedDeliveryBoyId: null,
    placedAt: '2026-09-05T13:05:00Z',
    estimatedDelivery: '25 mins',
    notes: 'Call before arriving.'
  }
];

export function VendorProvider({ children }) {
  // Vendor profile & store details
  const [vendor, setVendor] = useState(() => {
    const saved = localStorage.getItem('paw_vendor_profile');
    return saved ? JSON.parse(saved) : INITIAL_VENDOR;
  });

  // Store products (mapped with isActive property)
  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem('paw_vendor_products');
    if (saved) return JSON.parse(saved);
    return PRODUCTS.slice(0, 14).map((p, idx) => ({
      ...p,
      isActive: true,
      stockCount: p.stockCount || (idx % 3 === 0 ? 8 : 24),
      inStock: p.inStock !== undefined ? p.inStock : true,
      dailySales: Math.floor(Math.random() * 15) + 3
    }));
  });

  // Delivery team
  const [deliveryBoys, setDeliveryBoys] = useState(() => {
    const saved = localStorage.getItem('paw_vendor_delivery_boys');
    return saved ? JSON.parse(saved) : INITIAL_DELIVERY_BOYS;
  });

  // Live Orders
  const [orders, setOrders] = useState(() => {
    const saved = localStorage.getItem('paw_vendor_orders');
    return saved ? JSON.parse(saved) : INITIAL_ORDERS;
  });

  // Services Catalog (Home Services & In-Clinic Visits)
  const [services, setServices] = useState(() => {
    const saved = localStorage.getItem('paw_vendor_services');
    return saved ? JSON.parse(saved) : INITIAL_SERVICES;
  });

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem('paw_vendor_profile', JSON.stringify(vendor));
  }, [vendor]);

  useEffect(() => {
    localStorage.setItem('paw_vendor_products', JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem('paw_vendor_services', JSON.stringify(services));
  }, [services]);

  useEffect(() => {
    localStorage.setItem('paw_vendor_delivery_boys', JSON.stringify(deliveryBoys));
  }, [deliveryBoys]);

  useEffect(() => {
    localStorage.setItem('paw_vendor_orders', JSON.stringify(orders));
  }, [orders]);

  // Operational toggle
  const toggleStoreOpen = () => {
    setVendor(prev => ({ ...prev, isStoreOpen: !prev.isStoreOpen }));
  };

  // 4.1 Submit Onboarding Application
  const submitOnboardingApplication = (applicationData) => {
    const newVendorData = {
      ...vendor,
      ...applicationData,
      status: 'pending',
      submittedAt: new Date().toISOString(),
      id: 'vendor-' + Date.now().toString().slice(-6)
    };
    setVendor(newVendorData);
    return newVendorData;
  };

  // Demo simulate admin approval
  const setApprovalStatus = (status) => {
    setVendor(prev => ({
      ...prev,
      status,
      approvedAt: status === 'approved' ? new Date().toISOString() : null
    }));
  };

  // 4.2 Product Operations
  const addProduct = (newProduct) => {
    const id = 'prod-v' + Date.now().toString().slice(-5);
    const product = {
      id,
      name: newProduct.name,
      shortName: newProduct.shortName || newProduct.name.slice(0, 28),
      category: newProduct.category || 'food',
      subcategory: newProduct.subcategory || 'General',
      petType: newProduct.petType || 'Dog',
      brand: newProduct.brand || vendor.storeName,
      price: Number(newProduct.price),
      mrp: Number(newProduct.mrp) || Number(newProduct.price),
      discountPercent: newProduct.mrp > newProduct.price 
        ? Math.round(((newProduct.mrp - newProduct.price) / newProduct.mrp) * 100) 
        : 0,
      stockCount: Number(newProduct.stockCount) || 10,
      inStock: Number(newProduct.stockCount) > 0,
      isActive: true,
      rating: 5.0,
      reviewsCount: 1,
      isInstantDelivery: true,
      deliveryTimeMinutes: 15,
      storeId: vendor.id,
      storeName: vendor.storeName,
      image: newProduct.image || '/images/prod_pedigree.jpg',
      description: newProduct.description || 'Quality product available at our store.',
      createdAt: new Date().toISOString()
    };

    setProducts(prev => [product, ...prev]);
    return product;
  };

  const updateProduct = (id, updatedFields) => {
    setProducts(prev => prev.map(p => {
      if (p.id === id) {
        const updated = { ...p, ...updatedFields };
        if (updatedFields.price || updatedFields.mrp) {
          const price = Number(updated.price);
          const mrp = Number(updated.mrp) || price;
          updated.discountPercent = mrp > price ? Math.round(((mrp - price) / mrp) * 100) : 0;
        }
        if (updatedFields.stockCount !== undefined) {
          updated.inStock = Number(updatedFields.stockCount) > 0;
        }
        return updated;
      }
      return p;
    }));
  };

  const toggleProductActive = (id) => {
    setProducts(prev => prev.map(p => (p.id === id ? { ...p, isActive: !p.isActive } : p)));
  };

  const toggleProductStock = (id) => {
    setProducts(prev => prev.map(p => (p.id === id ? { 
      ...p, 
      inStock: !p.inStock,
      stockCount: !p.inStock ? (p.stockCount > 0 ? p.stockCount : 10) : 0
    } : p)));
  };

  const deleteProduct = (id) => {
    setProducts(prev => prev.filter(p => p.id !== id));
  };

  // 4.2 Services Operations (Home Services & Clinic Visits)
  const addService = (newService) => {
    const id = 'srv-v' + Date.now().toString().slice(-5);
    const service = {
      id,
      name: newService.name,
      shortName: newService.shortName || newService.name.slice(0, 28),
      category: newService.category || 'Grooming',
      deliveryMode: newService.deliveryMode || 'home_service',
      price: Number(newService.price),
      mrp: Number(newService.mrp) || Number(newService.price),
      durationMinutes: Number(newService.durationMinutes) || 45,
      petType: newService.petType || 'Dogs & Cats',
      isActive: true,
      rating: 5.0,
      reviewsCount: 1,
      image: newService.image || '/images/cat_grooming.jpg',
      description: newService.description || 'Professional pet care service.',
      features: newService.features || ['Certified Professional', 'Doorstep / Clinic Care', 'Safety Assured'],
      visitingFee: newService.deliveryMode === 'home_service' ? (Number(newService.visitingFee) || 99) : 0,
      tags: newService.deliveryMode === 'home_service' ? ['Doorstep', 'At-Home Service'] : ['In-Clinic', 'Appointment']
    };
    setServices(prev => [service, ...prev]);
    return service;
  };

  const updateService = (id, updatedFields) => {
    setServices(prev => prev.map(s => (s.id === id ? { ...s, ...updatedFields } : s)));
  };

  const toggleServiceActive = (id) => {
    setServices(prev => prev.map(s => (s.id === id ? { ...s, isActive: !s.isActive } : s)));
  };

  const deleteService = (id) => {
    setServices(prev => prev.filter(s => s.id !== id));
  };

  // 4.2 Delivery Team Operations
  const addDeliveryBoy = (boyData) => {
    const newBoy = {
      id: 'db-' + Date.now().toString().slice(-4),
      name: boyData.name,
      phone: boyData.phone,
      role: boyData.role || 'delivery_rider',
      roleTitle: boyData.roleTitle || 'Delivery Partner',
      vehicleType: boyData.vehicleType || 'Motorcycle',
      vehicleNumber: boyData.vehicleNumber,
      drivingLicence: boyData.drivingLicence || 'DL-PENDING-VERIFY',
      status: 'available',
      rating: 5.0,
      totalDeliveries: 0,
      joinedDate: new Date().toISOString().split('T')[0],
      avatar: boyData.avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${boyData.name}`
    };
    setDeliveryBoys(prev => [newBoy, ...prev]);
    return newBoy;
  };

  const updateDeliveryBoyStatus = (id, newStatus) => {
    setDeliveryBoys(prev => prev.map(b => (b.id === id ? { ...b, status: newStatus } : b)));
  };

  const deleteDeliveryBoy = (id) => {
    setDeliveryBoys(prev => prev.filter(b => b.id !== id));
  };

  // 4.2 Orders & Delivery Boy Assignment
  const assignDeliveryBoy = (orderId, deliveryBoyId) => {
    setOrders(prev => prev.map(order => {
      if (order.id === orderId) {
        return {
          ...order,
          assignedDeliveryBoyId: deliveryBoyId,
          orderStatus: order.orderStatus === 'new' || order.orderStatus === 'preparing' ? 'ready' : order.orderStatus
        };
      }
      return order;
    }));

    // Mark delivery boy as busy
    if (deliveryBoyId) {
      setDeliveryBoys(prev => prev.map(b => (b.id === deliveryBoyId ? { ...b, status: 'busy', currentOrderId: orderId } : b)));
    }
  };

  const updateOrderStatus = (orderId, newStatus) => {
    setOrders(prev => prev.map(order => {
      if (order.id === orderId) {
        const updated = { ...order, orderStatus: newStatus };
        if (newStatus === 'delivered') {
          updated.deliveredAt = new Date().toISOString();
          updated.paymentStatus = 'Paid';
        }
        return updated;
      }
      return order;
    }));

    // If marked delivered or cancelled, release assigned delivery boy back to available
    if (newStatus === 'delivered' || newStatus === 'cancelled') {
      const order = orders.find(o => o.id === orderId);
      if (order && order.assignedDeliveryBoyId) {
        setDeliveryBoys(prev => prev.map(b => {
          if (b.id === order.assignedDeliveryBoyId) {
            return {
              ...b,
              status: 'available',
              currentOrderId: null,
              totalDeliveries: newStatus === 'delivered' ? b.totalDeliveries + 1 : b.totalDeliveries
            };
          }
          return b;
        }));
      }
    }
  };

  const addOrder = (newOrder) => {
    setOrders(prev => [newOrder, ...prev]);
    return newOrder;
  };

  // Summary Metrics for Dashboard
  const metrics = {
    todayRevenue: orders.filter(o => o.orderStatus !== 'cancelled').reduce((sum, o) => sum + o.totalAmount, 0),
    activeOrdersCount: orders.filter(o => ['new', 'preparing', 'ready', 'out_for_delivery'].includes(o.orderStatus)).length,
    totalProductsCount: products.length,
    activeProductsCount: products.filter(p => p.isActive).length,
    outOfStockCount: products.filter(p => !p.inStock || p.stockCount === 0).length,
    totalServicesCount: services.length,
    activeServicesCount: services.filter(s => s.isActive).length,
    activeDeliveryBoysCount: deliveryBoys.filter(b => b.status === 'available' || b.status === 'busy').length,
    totalDeliveryBoysCount: deliveryBoys.length
  };

  return (
    <VendorContext.Provider
      value={{
        vendor,
        products,
        services,
        deliveryBoys,
        orders,
        metrics,
        toggleStoreOpen,
        submitOnboardingApplication,
        setApprovalStatus,
        addProduct,
        updateProduct,
        toggleProductActive,
        toggleProductStock,
        deleteProduct,
        addService,
        updateService,
        toggleServiceActive,
        deleteService,
        addDeliveryBoy,
        updateDeliveryBoyStatus,
        deleteDeliveryBoy,
        assignDeliveryBoy,
        updateOrderStatus,
        addOrder
      }}
    >
      {children}
    </VendorContext.Provider>
  );
}

export function useVendor() {
  const context = useContext(VendorContext);
  if (!context) {
    throw new Error('useVendor must be used within a VendorProvider');
  }
  return context;
}

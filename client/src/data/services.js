export const SALONS = [
  {
    id: 'salon-1',
    name: 'Paws & Claws Supermart, Spa & Clinic',
    tagline: 'Certified Master Stylists & Veterinary Clinic',
    rating: 4.9,
    reviewsCount: 430,
    distance: '1.2 km away',
    timeEstimate: '10 mins drive',
    discountTag: '🏡 Doorstep Van & In-Clinic Available',
    address: 'Road No. 36, Jubilee Hills, Hyderabad',
    image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=600&q=80',
    type: 'grooming',
    homeServiceEnabled: true,
    clinicVisitEnabled: true,
    homeVisitingFee: 99,
    services: [
      { id: 's1', name: 'Doorstep Luxury Full Spa & Breed Haircut', duration: '60 mins', price: 1299, originalPrice: 1599, mode: 'both', desc: 'Warm hydrobath, organic herbal shampoo, breed haircut, nail clip, paw balm.' },
      { id: 's2', name: 'At-Home Hair Cut & Styling (Van)', duration: '45 mins', price: 799, originalPrice: 999, mode: 'both', desc: 'Sanitized mobile van grooming with gentle scissor styling.' },
      { id: 's3', name: 'Nail Clipping & Paw Care Add-on', duration: '20 mins', price: 299, originalPrice: 399, mode: 'both', desc: 'Painless nail trim and soothing organic paw balm.' },
      { id: 's4', name: 'Anti-Tick & Flea Medicated Wash', duration: '50 mins', price: 999, originalPrice: 1250, mode: 'both', desc: 'Herbal neem deep soak and manual parasite extraction.' },
      { id: 's5', name: 'In-Salon Luxury Aromatherapy Spa', duration: '75 mins', price: 1499, originalPrice: 1899, mode: 'clinic', desc: 'Jacuzzi bath with lavender oils, fluff dry, and pawdicure.' }
    ],
    amenities: ['Air Conditioned Van', 'Trained Gentle Handlers', 'Free Treat on Visit', 'Live Video Stream']
  },
  {
    id: 'salon-4',
    name: 'Dr. Paws 24/7 Veterinary Hospital & Clinic',
    tagline: 'Multi-Speciality Animal Hospital & Doorstep Vets',
    rating: 4.95,
    reviewsCount: 520,
    distance: '0.9 km away',
    timeEstimate: '8 mins drive',
    discountTag: 'Instant Token & Home Doctor Visit',
    address: 'Film Nagar Road, Banjara Hills, Hyderabad',
    image: 'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&w=600&q=80',
    type: 'clinic',
    homeServiceEnabled: true,
    clinicVisitEnabled: true,
    homeVisitingFee: 99,
    services: [
      { id: 's13', name: 'In-Clinic Comprehensive Doctor Consultation', duration: '25 mins', price: 499, originalPrice: 650, mode: 'clinic', desc: 'Complete physical vitals check, eyes/ears exam, prescription.' },
      { id: 's14', name: 'At-Home Senior & Adult Pet Doctor Visit', duration: '40 mins', price: 899, originalPrice: 1100, mode: 'home', desc: 'Licensed vet visits home with digital prescription on WhatsApp.' },
      { id: 's15', name: 'Doorstep Puppy / Kitten Core 7-in-1 Vaccination', duration: '30 mins', price: 1099, originalPrice: 1399, mode: 'both', desc: 'Cold-chain stored vaccine, deworming dose & health passport stamp.' },
      { id: 's16', name: 'In-Clinic Ultrasonic Dental Scaling & Polish', duration: '60 mins', price: 2499, originalPrice: 3200, mode: 'clinic', desc: 'Subgingival ultrasonic plaque removal with fluoride polishing.' },
      { id: 's17', name: 'In-Clinic Digital Ultrasound Scan & 2-View X-Ray', duration: '45 mins', price: 1850, originalPrice: 2300, mode: 'clinic', desc: 'High-res abdominal scan and digital radiograph with fast report.' }
    ],
    amenities: ['24/7 ICU & Oxygen', 'In-House Digital X-Ray', 'Pharmacy Store', 'Mobile Doctor Unit']
  },
  {
    id: 'salon-2',
    name: 'Fluffy Tails Pet Spa & Mobile Grooming',
    tagline: 'Organic Shampoos & Stress-Free Doorstep Grooming',
    rating: 4.7,
    reviewsCount: 280,
    distance: '1.8 km away',
    timeEstimate: '15 mins drive',
    discountTag: '15% OFF on Home Spa',
    address: 'Plot 42, Madhapur, Hyderabad',
    image: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=600&q=80',
    type: 'grooming',
    homeServiceEnabled: true,
    clinicVisitEnabled: true,
    homeVisitingFee: 99,
    services: [
      { id: 's6', name: 'Aroma Therapy Doorstep Bath', duration: '45 mins', price: 849, originalPrice: 999, mode: 'both', desc: 'Relaxing lavender wash and blow dry.' },
      { id: 's7', name: 'Teeth Brushing & Breath Clean', duration: '20 mins', price: 349, originalPrice: 450, mode: 'both', desc: 'Enzymatic toothpaste and oral fresh spray.' },
      { id: 's8', name: 'Full Body De-Shedding & Carding', duration: '60 mins', price: 1099, originalPrice: 1399, mode: 'both', desc: 'Undercoat de-shedding reduces shedding up to 90%.' },
      { id: 's9', name: 'Puppy First Spa Package', duration: '40 mins', price: 699, originalPrice: 899, mode: 'both', desc: 'Gentle introduction for puppies under 6 months.' }
    ],
    amenities: ['Organic Shampoos', 'Puppy Play Zone', 'Cat-Exclusive Room', 'Complimentary Bandana']
  },
  {
    id: 'salon-3',
    name: 'City Vets & Pet Healthcare Centre',
    tagline: 'Expert Doctors, Vaccinations & Wellness Care',
    rating: 4.85,
    reviewsCount: 310,
    distance: '2.1 km away',
    timeEstimate: '15 mins drive',
    discountTag: 'Free Deworming with Vaccination',
    address: 'Road No. 12, Banjara Hills, Hyderabad',
    image: 'https://images.unsplash.com/photo-1535294435445-d7249524ef2e?auto=format&fit=crop&w=600&q=80',
    type: 'clinic',
    homeServiceEnabled: true,
    clinicVisitEnabled: true,
    homeVisitingFee: 99,
    services: [
      { id: 's21', name: 'General Health Inspection & Vitals Check', duration: '25 mins', price: 449, originalPrice: 550, mode: 'clinic', desc: 'Routine preventive wellness assessment.' },
      { id: 's22', name: 'At-Home Skin Allergy & Flea Consultation', duration: '35 mins', price: 849, originalPrice: 1050, mode: 'home', desc: 'Doorstep skin scraping exam and soothing spray prescription.' },
      { id: 's23', name: 'Annual Rabies & DHPPiL Core Vaccine', duration: '20 mins', price: 799, originalPrice: 950, mode: 'both', desc: 'Complete immunity booster package with stamp.' }
    ],
    amenities: ['Diagnostics Lab', 'Pharmacy', 'Emergency Support', 'Doctor Home Visit Fleet']
  },
  {
    id: 'salon-5',
    name: 'PawHaven Resort & Luxury Boarding',
    tagline: '5-Star Staycation & Daycare for Dogs & Cats',
    rating: 4.8,
    reviewsCount: 210,
    distance: '3.4 km away',
    timeEstimate: '25 mins drive',
    discountTag: '10% OFF on 3+ Days Stay',
    address: 'Gachibowli Green Enclave, Hyderabad',
    image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=600&q=80',
    type: 'boarding',
    homeServiceEnabled: false,
    clinicVisitEnabled: true,
    homeVisitingFee: 0,
    services: [
      { id: 's18', name: 'Day Care (8 AM - 8 PM)', duration: '12 Hours', price: 599, originalPrice: 750, mode: 'clinic', desc: 'Agility play, 2 meals, social session.' },
      { id: 's19', name: 'Overnight Cozy Deluxe Room', duration: '24 Hours', price: 999, originalPrice: 1200, mode: 'clinic', desc: 'Air-conditioned private room with 3 meals & webcam access.' },
      { id: 's20', name: 'Presidential Suite with Pool Access', duration: '24 Hours', price: 1699, originalPrice: 2100, mode: 'clinic', desc: 'Luxury private garden suite with pool splash session.' }
    ],
    amenities: ['24/7 Live Webcams', 'Swimming Pool', 'Custom Meal Plans', 'Daily Walk & Agility Sessions']
  }
];

export const SERVICE_FILTER_PILLS = [
  { id: 'all', label: 'All Services' },
  { id: 'home', label: '🏡 At-Home Doorstep' },
  { id: 'clinic', label: '🏥 In-Clinic / Salon' },
  { id: 'grooming', label: '✂️ Pet Grooming' },
  { id: 'vet', label: '🩺 Veterinary & Clinic' },
  { id: 'boarding', label: '🏨 Pet Boarding' }
];


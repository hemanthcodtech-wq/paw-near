export const SALONS = [
  {
    id: 'salon-1',
    name: 'Paws & Claws Groomers',
    tagline: 'Certified Master Pet Stylists',
    rating: 4.8,
    reviewsCount: 320,
    distance: '1.2 km away',
    timeEstimate: '10 mins drive',
    discountTag: '20% OFF on First Visit',
    address: 'Road No. 36, Jubilee Hills, Hyderabad',
    image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=600&q=80',
    type: 'grooming',
    services: [
      { id: 's1', name: 'Full Grooming & Bath', duration: '60 mins', price: 999, originalPrice: 1299 },
      { id: 's2', name: 'Hair Cut & Styling', duration: '45 mins', price: 799, originalPrice: 999 },
      { id: 's3', name: 'Nail Clipping & Paw Care', duration: '20 mins', price: 299, originalPrice: 399 },
      { id: 's4', name: 'Herbal Anti-Tick Bath', duration: '50 mins', price: 899, originalPrice: 1199 },
      { id: 's5', name: 'Luxury Aromatic Spa', duration: '75 mins', price: 1499, originalPrice: 1899 }
    ],
    amenities: ['Air Conditioned', 'Trained Gentle Handlers', 'Free Treat on Visit', 'Live Video Stream']
  },
  {
    id: 'salon-2',
    name: 'Fluffy Tails Pet Spa',
    tagline: 'Organic Shampoos & Stress-Free Grooming',
    rating: 4.7,
    reviewsCount: 280,
    distance: '1.8 km away',
    timeEstimate: '15 mins drive',
    discountTag: '15% OFF on Spa',
    address: 'Plot 42, Madhapur, Hyderabad',
    image: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=600&q=80',
    type: 'grooming',
    services: [
      { id: 's6', name: 'Aroma Therapy Bath', duration: '45 mins', price: 849, originalPrice: 999 },
      { id: 's7', name: 'Teeth Brushing & Breath Clean', duration: '20 mins', price: 349, originalPrice: 450 },
      { id: 's8', name: 'Full Body De-Shedding', duration: '60 mins', price: 1099, originalPrice: 1399 },
      { id: 's9', name: 'Puppy First Spa Package', duration: '40 mins', price: 699, originalPrice: 899 }
    ],
    amenities: ['Organic Shampoos', 'Puppy Play Zone', 'Cat-Exclusive Room', 'Complimentary Bandana']
  },
  {
    id: 'salon-3',
    name: 'Happy Paws Salon & Daycare',
    tagline: 'Grooming, Styling & Playful Care',
    rating: 4.6,
    reviewsCount: 190,
    distance: '2.5 km away',
    timeEstimate: '20 mins drive',
    discountTag: 'Free Nail Trim with Bath',
    address: 'Banjara Hills Main Rd, Hyderabad',
    image: 'https://images.unsplash.com/photo-1535294435445-d7249524ef2e?auto=format&fit=crop&w=600&q=80',
    type: 'grooming',
    services: [
      { id: 's10', name: 'Basic Bath & Blow Dry', duration: '40 mins', price: 599, originalPrice: 750 },
      { id: 's11', name: 'Show Quality Breed Cut', duration: '75 mins', price: 1299, originalPrice: 1599 },
      { id: 's12', name: 'Ear Cleaning & Plucking', duration: '15 mins', price: 249, originalPrice: 350 }
    ],
    amenities: ['Boarding Suites', 'Playground', 'Veterinary On-Call', 'Hydraulic Grooming Tables']
  },
  {
    id: 'salon-4',
    name: 'Dr. Paws Veterinary Clinic & Emergency',
    tagline: '24/7 Multi-Speciality Animal Care',
    rating: 4.9,
    reviewsCount: 420,
    distance: '0.9 km away',
    timeEstimate: '8 mins drive',
    discountTag: 'Instant Token Booking',
    address: 'Film Nagar Road, Hyderabad',
    image: 'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&w=600&q=80',
    type: 'clinic',
    services: [
      { id: 's13', name: 'General Vet Consultation', duration: '30 mins', price: 499, originalPrice: 600 },
      { id: 's14', name: 'Annual 7-in-1 Vaccination', duration: '20 mins', price: 799, originalPrice: 950 },
      { id: 's15', name: 'Rabies Booster + Digital Certificate', duration: '15 mins', price: 349, originalPrice: 450 },
      { id: 's16', name: 'Microchipping & ID Tag', duration: '20 mins', price: 1199, originalPrice: 1400 },
      { id: 's17', name: 'Dental Scaling & Polish', duration: '45 mins', price: 1899, originalPrice: 2400 }
    ],
    amenities: ['24/7 ICU & Oxygen', 'In-House Digital X-Ray', 'Pharmacy Store', 'Ambulance On-Call']
  },
  {
    id: 'salon-5',
    name: 'PawHaven Resort & Luxury Boarding',
    tagline: '5-Star Staycation for Dogs & Cats',
    rating: 4.8,
    reviewsCount: 210,
    distance: '3.4 km away',
    timeEstimate: '25 mins drive',
    discountTag: '10% OFF on 3+ Days Stay',
    address: 'Gachibowli Green Enclave, Hyderabad',
    image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=600&q=80',
    type: 'boarding',
    services: [
      { id: 's18', name: 'Day Care (8 AM - 8 PM)', duration: '12 Hours', price: 599, originalPrice: 750 },
      { id: 's19', name: 'Overnight Cozy Deluxe Room', duration: '24 Hours', price: 999, originalPrice: 1200 },
      { id: 's20', name: 'Presidential Suite with Pool Access', duration: '24 Hours', price: 1699, originalPrice: 2100 }
    ],
    amenities: ['24/7 Live Webcams', 'Swimming Pool', 'Custom Meal Plans', 'Daily Walk & Agility Sessions']
  }
];

export const SERVICE_FILTER_PILLS = [
  { id: 'all', label: 'All' },
  { id: 'bath', label: 'Bath' },
  { id: 'haircut', label: 'Hair Cut' },
  { id: 'nail', label: 'Nail Trim' },
  { id: 'spa', label: 'Spa' },
  { id: 'clinic', label: 'Vet & Clinic' },
  { id: 'boarding', label: 'Boarding' }
];

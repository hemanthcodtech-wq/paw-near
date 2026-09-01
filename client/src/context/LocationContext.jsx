import React, { createContext, useContext, useState } from 'react';

const LocationContext = createContext();

export function LocationProvider({ children }) {
  const [selectedLocation, setSelectedLocation] = useState({
    id: 'addr-1',
    type: 'Home',
    tag: 'Primary',
    addressLine1: 'Flat 402, Royal Palms Residency, Road No 12',
    area: 'Banjara Hills',
    city: 'Hyderabad',
    state: 'Telangana',
    pincode: '500034',
    shortDisplay: 'Banjara Hills, Hyderabad, Telangana',
    lat: 17.4156,
    lng: 78.4350
  });

  const [savedAddresses, setSavedAddresses] = useState([
    {
      id: 'addr-1',
      type: 'Home',
      tag: 'Primary',
      name: 'Aarav Sharma',
      phone: '+91 98765 43210',
      addressLine1: 'Flat 402, Royal Palms Residency, Road No 12',
      area: 'Banjara Hills',
      city: 'Hyderabad',
      state: 'Telangana',
      pincode: '500034',
      shortDisplay: 'Banjara Hills, Hyderabad, Telangana',
      lat: 17.4156,
      lng: 78.4350
    },
    {
      id: 'addr-2',
      type: 'Work',
      tag: 'Office',
      name: 'Aarav Sharma',
      phone: '+91 98765 43210',
      addressLine1: 'Tower B, Cyber Gateway, Hitec City',
      area: 'Madhapur',
      city: 'Hyderabad',
      state: 'Telangana',
      pincode: '500081',
      shortDisplay: 'Hitec City, Madhapur, Hyderabad',
      lat: 17.4435,
      lng: 78.3772
    },
    {
      id: 'addr-3',
      type: 'Other',
      tag: 'Parents Villa',
      name: 'Aarav Sharma',
      phone: '+91 98765 43210',
      addressLine1: 'Villa 18, Palm Meadows, Jubilee Hills',
      area: 'Jubilee Hills',
      city: 'Hyderabad',
      state: 'Telangana',
      pincode: '500033',
      shortDisplay: 'Jubilee Hills, Hyderabad',
      lat: 17.4319,
      lng: 78.4073
    }
  ]);

  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  const [isDetectingGPS, setIsDetectingGPS] = useState(false);

  const switchLocation = (address) => {
    setSelectedLocation(address);
    setIsLocationModalOpen(false);
  };

  const addAddress = (newAddr) => {
    const created = {
      ...newAddr,
      id: `addr-${Date.now()}`,
      shortDisplay: `${newAddr.area || newAddr.addressLine1}, ${newAddr.city}`
    };
    setSavedAddresses(prev => [created, ...prev]);
    setSelectedLocation(created);
    return created;
  };

  const detectCurrentLocation = () => {
    setIsDetectingGPS(true);
    setTimeout(() => {
      setIsDetectingGPS(false);
      const detected = {
        id: 'addr-gps',
        type: 'Current Location',
        tag: 'GPS Detected',
        addressLine1: 'Near Park View Enclave, Banjara Hills',
        area: 'Banjara Hills',
        city: 'Hyderabad',
        state: 'Telangana',
        pincode: '500034',
        shortDisplay: 'Banjara Hills, Hyderabad (Live GPS)',
        lat: 17.4168,
        lng: 78.4380
      };
      setSelectedLocation(detected);
      setIsLocationModalOpen(false);
    }, 900);
  };

  return (
    <LocationContext.Provider
      value={{
        selectedLocation,
        savedAddresses,
        isLocationModalOpen,
        isDetectingGPS,
        setIsLocationModalOpen,
        switchLocation,
        addAddress,
        detectCurrentLocation
      }}
    >
      {children}
    </LocationContext.Provider>
  );
}

export function useLocationContext() {
  const context = useContext(LocationContext);
  if (!context) throw new Error('useLocationContext must be used within LocationProvider');
  return context;
}

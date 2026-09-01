import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState({
    id: 'usr-101',
    name: 'Aarav Sharma',
    email: 'aarav@thepawstreet.com',
    phone: '+91 98765 43210',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    isLoggedIn: true,
    memberSince: 'Aug 2024',
    walletBalance: 450
  });

  const [pets, setPets] = useState([
    {
      id: 'pet-1',
      name: 'Bruno',
      type: 'Dog',
      breed: 'Golden Retriever',
      gender: 'Male',
      ageYears: 2,
      ageMonths: 4,
      weightKg: 28,
      image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=400&q=80',
      vaccinated: true,
      vaccineExpiry: '15 Dec 2026',
      microchipped: true,
      allergies: 'Chicken Treats (Mild)',
      notes: 'Loves chew bones and park fetch!'
    },
    {
      id: 'pet-2',
      name: 'Milo',
      type: 'Cat',
      breed: 'Persian Longhair',
      gender: 'Female',
      ageYears: 1,
      ageMonths: 2,
      weightKg: 4.2,
      image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=400&q=80',
      vaccinated: true,
      vaccineExpiry: '20 Oct 2026',
      microchipped: false,
      allergies: 'None',
      notes: 'Loves fish treats and warm fleece blankets.'
    }
  ]);

  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const loginWithPhone = (phone, otp) => {
    setUser({
      id: 'usr-101',
      name: 'Aarav Sharma',
      email: 'aarav@thepawstreet.com',
      phone: phone.startsWith('+91') ? phone : `+91 ${phone}`,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
      isLoggedIn: true,
      memberSince: 'Aug 2024',
      walletBalance: 450
    });
    setIsAuthModalOpen(false);
  };

  const loginWithEmail = (email, password) => {
    setUser({
      id: 'usr-101',
      name: email.split('@')[0].replace('.', ' ').replace(/\b\w/g, l => l.toUpperCase()) || 'Aarav Sharma',
      email: email,
      phone: '+91 98765 43210',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
      isLoggedIn: true,
      memberSince: 'Aug 2024',
      walletBalance: 450
    });
    setIsAuthModalOpen(false);
  };

  const registerUser = (userData) => {
    const newUser = {
      id: `usr-${Date.now()}`,
      name: userData.name || 'Pet Parent',
      email: userData.email,
      phone: userData.phone ? (userData.phone.startsWith('+91') ? userData.phone : `+91 ${userData.phone}`) : '+91 98765 43210',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=300&q=80',
      isLoggedIn: true,
      memberSince: 'Sep 2026',
      walletBalance: 200
    };
    setUser(newUser);
    if (userData.petName) {
      addPet({
        name: userData.petName,
        type: userData.petType || 'Dog',
        breed: userData.petBreed || 'Friendly Breed',
        gender: 'Male',
        ageYears: 1,
        weightKg: 10,
        vaccinated: true,
        vaccineExpiry: '30 Dec 2026',
        allergies: 'None'
      });
    }
    setIsAuthModalOpen(false);
    return newUser;
  };

  const loginWithGoogle = () => {
    setUser({
      id: 'usr-google-102',
      name: 'Aarav Sharma',
      email: 'aarav.sharma@gmail.com',
      phone: '+91 98765 43210',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=300&q=80',
      isLoggedIn: true,
      memberSince: 'Sep 2026',
      walletBalance: 200
    });
    setIsAuthModalOpen(false);
  };

  const logout = () => {
    setUser(null);
  };

  const addPet = (petData) => {
    const newPet = {
      ...petData,
      id: `pet-${Date.now()}`,
      image: petData.image || (petData.type === 'Cat'
        ? 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=400&q=80'
        : 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=400&q=80')
    };
    setPets(prev => [...prev, newPet]);
    return newPet;
  };

  const updatePet = (id, updatedFields) => {
    setPets(prev => prev.map(p => p.id === id ? { ...p, ...updatedFields } : p));
  };

  const deletePet = (id) => {
    setPets(prev => prev.filter(p => p.id !== id));
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        pets,
        isAuthModalOpen,
        setIsAuthModalOpen,
        loginWithPhone,
        loginWithEmail,
        registerUser,
        loginWithGoogle,
        logout,
        addPet,
        updatePet,
        deletePet
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
}

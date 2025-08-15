'use client';

// context/UserContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

type User = {
  id: string;
  fullname: string;
  loginid: string;
  ispremium: boolean;
  emailid: string;
  accounttype: any
} | null;

type UserContextType = {
  userData: User;
  setUserData: (userData: User) => void;
};

// Create context
const UserContext = createContext<UserContextType | undefined>(undefined);

// Provider component
export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [userData, setUserData] = useState<User>(null);

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use the context
export const useUserData = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser must be used within a UserProvider");
  return context;
};

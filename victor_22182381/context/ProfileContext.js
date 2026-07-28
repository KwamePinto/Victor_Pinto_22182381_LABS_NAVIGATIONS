import React, { createContext, useContext, useState } from 'react';

const ProfileContext = createContext(null);

const initialProfile = {
  name: 'Victor Pinto',
  indexNumber: '22182381',
  programme: 'BSc. Computer Science',
  level: '300',
  bio: 'Computer Science student at the University of Ghana.',
};

export function ProfileProvider({ children }) {
  const [profile, setProfile] = useState(initialProfile);

  return (
    <ProfileContext.Provider value={{ profile, setProfile }}>
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfile() {
  return useContext(ProfileContext);
}

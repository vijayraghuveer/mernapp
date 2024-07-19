import { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const UserContext = createContext()

const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('user')) || null;
    } catch (error) {
      console.error('Error parsing user from localStorage', error);
      return null;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('user', JSON.stringify(currentUser));
    } catch (error) {
      console.error('Error saving user to localStorage', error);
    }
  }, [currentUser]);

  return <UserContext.Provider value={{currentUser, setCurrentUser}}>{children}</UserContext.Provider>
}

export default UserProvider
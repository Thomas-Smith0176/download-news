import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [currUser, setCurrUser] = useState();
  
    return (
      <UserContext.Provider value={{ currUser, setCurrUser }}>
        {children}
      </UserContext.Provider>
    );
  };
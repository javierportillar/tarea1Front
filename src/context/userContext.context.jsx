import React, { createContext, useContext } from 'react';
import { useUsers } from '../hooks/useUser.hook';

const UserContext = createContext();

export const UserProvider = ({children}) => {
  const useUsersHook = useUsers();

  return (
    <UserContext.Provider value={useUsersHook}>
        {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
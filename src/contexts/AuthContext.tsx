/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useMemo, useState } from 'react';

interface IAuthContext {
  user: object | null;
  logIn: () => void;
  logOut: () => void;
}

const AuthContext = createContext<IAuthContext>({
  user: null,
  logIn: () => {},
  logOut: () => {},
});

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<object | null>(
    localStorage.getItem('user')
      ? JSON.parse(localStorage.getItem('user') || '{}')
      : null
  );
  console.log(user);

  const logIn = () => {
    const userData = { user: 'isAuth' };

    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
  };

  const logOut = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  const value = useMemo(
    () => ({
      user,
      logIn,
      logOut,
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };

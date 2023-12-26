/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useMemo, useState } from 'react';

type TUser = {
  username: string;
} | null;
interface IAuthContext {
  user: { username: string } | null;
  logIn: () => void;
  logOut: () => void;
}

const AuthContext = createContext<IAuthContext>({
  user: null,
  logIn: () => {},
  logOut: () => {},
});

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<TUser>(
    localStorage.getItem('user')
      ? JSON.parse(localStorage.getItem('user') || '{}')
      : null
  );

  const logIn = () => {
    const userData = { username: 'Ivan Ivanov' };

    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
  };
  const logOut = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  const value = useMemo<IAuthContext>(
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

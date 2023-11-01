import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import routes from '../routes';

const PrivateRoute = () => {
  const { user } = useAuth();
  const location = useLocation();

  if (location.pathname === routes.pages.loginPagePath()) {
    return user ? (
      <Navigate
        to={routes.pages.rootPagePath()}
        state={{ from: location.pathname }}
      />
    ) : (
      <Outlet />
    );
  }

  if (location.pathname === routes.pages.signupPagePath()) {
    return user ? (
      <Navigate
        to={routes.pages.rootPagePath()}
        state={{ from: location.pathname }}
      />
    ) : (
      <Outlet />
    );
  }

  return user ? (
    <Outlet />
  ) : (
    <Navigate
      to={routes.pages.loginPagePath()}
      state={{ from: location.pathname }}
    />
  );
};

export default PrivateRoute;

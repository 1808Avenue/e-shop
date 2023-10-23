import { Link, Route, Routes } from 'react-router-dom';
import routes from '../routes';
import { Main } from '../pages/Main';
import { Login } from '../pages/Login';
import { Signup } from '../pages/Signup';
import { Notfound } from '../pages/Notfound';
import PrivateRoute from './PrivateRoute';
import { useAuth } from '../contexts/AuthContext';

const AppRouter = () => {
  const { logIn, logOut } = useAuth();

  return (
    <>
      <header>
        <Link to={routes.rootPagePath()}>Main</Link>
        <Link to={routes.loginPagePath()}>Login</Link>
        <Link to={routes.signupPagePath()}>Signup</Link>
        <button onClick={logIn}>login</button>
        <button onClick={logOut}>logout</button>
      </header>
      <Routes>
        <Route path={routes.rootPagePath()} element={<PrivateRoute />}>
          <Route path={routes.rootPagePath()} element={<Main />} />
        </Route>
        <Route path={routes.loginPagePath()} element={<PrivateRoute />}>
          <Route path={routes.loginPagePath()} element={<Login />} />
        </Route>
        <Route path={routes.signupPagePath()} element={<PrivateRoute />}>
          <Route path={routes.signupPagePath()} element={<Signup />} />
        </Route>
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
};

export default AppRouter;

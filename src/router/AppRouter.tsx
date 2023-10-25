import { Route, Routes } from 'react-router-dom';
import routes from '../routes';
import { Main } from '../pages/Main';
import { Login } from '../pages/Login';
import { Signup } from '../pages/Signup';
import { Notfound } from '../pages/Notfound';
import PrivateRoute from './PrivateRoute';

const AppRouter = () => {
  return (
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
  );
};

export default AppRouter;

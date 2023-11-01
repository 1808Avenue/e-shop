import { Route, Routes } from 'react-router-dom';
import { Notfound } from '../pages/notfound';
import PrivateRoute from './PrivateRoute';
import { routesConfig } from './config';

const AppRouter = () => {
  return (
    <Routes>
      {routesConfig.map((route) => (
        <Route
          path={route.wrapperPath}
          element={<PrivateRoute />}
          key={route.key}
        >
          <Route path={route.path} element={route.element} />
        </Route>
      ))}
      <Route path="*" element={<Notfound />} />
    </Routes>
  );
};

export default AppRouter;

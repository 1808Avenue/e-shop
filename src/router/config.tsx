import routes from '../routes';
import { Main } from '../pages/Main';
import { Login } from '../pages/Login';
import { Signup } from '../pages/Signup';

export interface IRouteConfigItem {
  path: string;
  wrapperPath: string;
  element: JSX.Element;
  key: number;
}

export const routesConfig: IRouteConfigItem[] = [
  {
    path: routes.rootPagePath(),
    wrapperPath: routes.rootPagePath(),
    element: <Main />,
    key: 1,
  },
  {
    path: routes.loginPagePath(),
    wrapperPath: routes.rootPagePath(),
    element: <Login />,
    key: 2,
  },
  {
    path: routes.signupPagePath(),
    wrapperPath: routes.signupPagePath(),
    element: <Signup />,
    key: 3,
  },
];

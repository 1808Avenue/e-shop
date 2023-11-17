import { Login } from '../pages/login';
import { Main } from '../pages/main';
import { Signup } from '../pages/signup';
import routes from '../routes';

export interface IRouteConfigItem {
  path: string;
  wrapperPath: string;
  element: JSX.Element;
  key: number;
}

export const routesConfig: IRouteConfigItem[] = [
  {
    path: routes.pages.rootPagePath(),
    wrapperPath: routes.pages.rootPagePath(),
    element: <Main />,
    key: 1,
  },
  {
    path: routes.pages.loginPagePath(),
    wrapperPath: routes.pages.rootPagePath(),
    element: <Login />,
    key: 2,
  },
  {
    path: routes.pages.signupPagePath(),
    wrapperPath: routes.pages.signupPagePath(),
    element: <Signup />,
    key: 3,
  },
];

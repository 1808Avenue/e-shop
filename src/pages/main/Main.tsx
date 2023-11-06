import { Header } from '../common-components/header';
import { Products } from './components/products';

export const Main = () => {
  return (
    <div className="wrapper">
      <Header />
      <Products />
      <footer></footer>
    </div>
  );
};

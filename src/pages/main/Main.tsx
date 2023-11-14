import { Header } from '../common-components/header';
import { Products } from './components/products';
import { Search } from './components/search';

export const Main = () => {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <Search />
        <Products />
      </main>
    </div>
  );
};

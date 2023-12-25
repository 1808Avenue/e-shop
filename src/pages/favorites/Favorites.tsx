import { FavInterActionBar } from './components/favInteractionBar';
import { FavProducts } from './components/favProducts';
import { FavSidebar } from './components/favSidebar';
import { Header } from '../common-components/header';

export const Favorites = () => {
  return (
    <div className="wrapper">
      <Header />
      <FavInterActionBar />
      <FavSidebar />
      <main>
        <FavProducts />
      </main>
    </div>
  );
};

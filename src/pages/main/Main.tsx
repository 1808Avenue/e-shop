import { Header } from '../common-components/header';
import { InteractionBar } from './components/interactionBar/InteractionBar';
import { Products } from './components/products';
import { Sidebar } from './components/sidebar';

export const Main = () => {
  return (
    <div className="wrapper">
      <Header />
      <InteractionBar />
      <Sidebar />
      <main>
        <Products />
      </main>
    </div>
  );
};

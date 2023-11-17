import { InteractionBar } from './components/interactionBar/InteractionBar';
import { Products } from './components/products';
import { Sidebar } from './components/sidebar';
import { Header } from '../common-components/header';

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

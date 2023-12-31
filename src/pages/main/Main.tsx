import { Header } from '../common-components/header';
import { InteractionBar } from './components/interactionBar/InteractionBar';
import { Products } from './components/products';

export const Main = () => {
  return (
    <div className="wrapper">
      <Header />
      <InteractionBar />
      <main>
        <Products />
      </main>
    </div>
  );
};

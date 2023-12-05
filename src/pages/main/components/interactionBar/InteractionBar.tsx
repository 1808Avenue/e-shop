import styles from './InteractionBar.module.scss';
import { Menu } from '../menu';
import { Search } from '../search';
import { Sort } from '../sort';

export const InteractionBar = () => {
  return (
    <section className="interaction_bar">
      <div className={styles.interaction_bar__container}>
        <div className={styles.interaction_bar__nav}>
          <Menu />
          <Search />
        </div>
        <Sort />
      </div>
    </section>
  );
};

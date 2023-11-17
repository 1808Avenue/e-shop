import styles from './InteractionBar.module.scss';
import { Filter } from '../filter';
import { Menu } from '../menu';
import { Search } from '../search';

export const InteractionBar = () => {
  return (
    <section className="interaction_bar">
      <div className={styles.interaction_bar__container}>
        <div className={styles.interaction_bar__nav}>
          <Menu />
          <Search />
        </div>
        <Filter />
      </div>
    </section>
  );
};

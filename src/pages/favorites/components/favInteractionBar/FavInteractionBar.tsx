import styles from './FavInteractionBar.module.scss';
import { FavMenu } from '../favMenu';

export const FavInterActionBar = () => {
  return (
    <section className="interaction_bar">
      <div className={styles.FavInteraction_bar__container}>
        <div className={styles.FavInteraction_bar__nav}>
          <FavMenu />
          <h1 className={styles.FavInteraction_bar__title}>
            My favorite products
          </h1>
        </div>
      </div>
    </section>
  );
};

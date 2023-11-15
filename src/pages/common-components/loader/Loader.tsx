import styles from './Loader.module.scss';

export const Loader = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.square}></div>
      <div className={styles.square}></div>
      <div className={`${styles.square} ${styles.last}`}></div>
      <div className={`${styles.square} ${styles.clear}`}></div>
      <div className={styles.square}></div>
      <div className={`${styles.square} ${styles.last}`}></div>
      <div className={`${styles.square} ${styles.clear}`}></div>
      <div className={styles.square}></div>
      <div className={`${styles.square} ${styles.last}`}></div>
    </div>
  );
};

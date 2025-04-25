import styles from './Header.module.css';

import rocket from '../../../assets/icons/rocket.svg';

export function Header() {
  return (
    <div className={styles.header}>
      <img src={rocket} alt="Logo do TODO" className={styles.icon} />
      <div className={styles.title}>
        <h1 className={styles.titleBlue}>to</h1>
        <h1 className={styles.titlePurple}>do</h1>
      </div>
    </div>
  );
}

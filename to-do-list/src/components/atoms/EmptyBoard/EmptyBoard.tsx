import styles from './EmptyBoard.module.css';
import { EmptyBoardProps } from './EmptyBoard.types.ts';

export function EmptyBoard({
  description,
  icon,
  subdescription
}: EmptyBoardProps) {
  return (
    <div className={styles.emptyBoard}>
      <img className={styles.icon} src={icon} />
      <div className={styles.info}>
        <h1 className={styles.description}>{description}</h1>
        <h2 className={styles.subdescription}>{subdescription}</h2>
      </div>
    </div>
  );
}

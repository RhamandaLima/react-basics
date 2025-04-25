import { Counter } from '../../atoms/Counter/Counter.tsx';
import styles from './TaskBoardHeader.module.css';
import { TaskBoardHeaderProps } from './TaskBoardHeader.types.ts';

export function TaskBoardHeader({
  counterTotal,
  counterSelection
}: TaskBoardHeaderProps) {
  return (
    <div className={styles.taskboardheader}>
      <Counter {...counterTotal} />
      <Counter {...counterSelection} />
    </div>
  );
}

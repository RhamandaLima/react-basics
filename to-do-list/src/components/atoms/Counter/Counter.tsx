import { getClassNames } from '../../../shared/utils/styles-utils/style-class.utils.ts';
import styles from './Counter.module.css';
import { CounterProps } from './Counter.types.ts';

export function Counter({
  description,
  descriptionColor,
  total,
  selected
}: CounterProps) {
  const showSelected = selected !== undefined && total > 0;

  return (
    <div className={styles.counterContainer}>
      <span
        className={getClassNames(
          styles.description,
          styles[`description-${descriptionColor}`]
        )}
      >
        {description}
      </span>
      <div className={styles.number}>
        {showSelected && <span>{selected} de</span>}
        <span>{total}</span>
      </div>
    </div>
  );
}

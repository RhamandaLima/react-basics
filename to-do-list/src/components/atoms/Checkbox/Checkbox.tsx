import { useState } from 'react';
import styles from './Checkbox.module.css';
import { CheckboxProps } from './Checkbox.types';
import { getClassNames } from '../../../shared/utils/styles-utils/style-class.utils';

export function Checkbox({ checked = false, onChange, label }: CheckboxProps) {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChecked = (): void => {
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    onChange?.(newChecked);
  };

  return (
    <label className={styles.checkboxContainer}>
      <input type="checkbox" checked={isChecked} onChange={handleChecked} />
      <span className={styles.customCheckbox} />
      {label && (
        <span
          className={getClassNames(
            styles.checkboxLabel,
            isChecked && styles.checkboxLabelChecked
          )}
        >
          {label}
        </span>
      )}
    </label>
  );
}

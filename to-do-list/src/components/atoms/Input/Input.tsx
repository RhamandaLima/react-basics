import { getClassNames } from '../../../shared/utils/styles-utils/style-class.utils';
import styles from './Input.module.css';
import { InputProps } from './Input.types';

export function Input({
  value = '',
  onChange,
  label,
  placeholder = '',
  type = 'text',
  ...props
}: InputProps) {
  const hasValue = !!value;

  if (!onChange) {
    throw new Error('Input must have an onChange handler.');
  }

  return (
    <label className={styles.inputContainer}>
      {label && <span className={styles.inputLabel}>{label}</span>}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={getClassNames(
          styles.inputBase,
          hasValue && styles.inputFilled
        )}
        {...props}
      />
    </label>
  );
}

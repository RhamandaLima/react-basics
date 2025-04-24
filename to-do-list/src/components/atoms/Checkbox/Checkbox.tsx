import { useState } from "react";
import styles from "./Checkbox.module.css";
import { CheckboxProps } from "./Checkbox.types";

export function Checkbox({ checked = false, onChange, label }: CheckboxProps) {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChecked = () => {
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    onChange?.(newChecked);
  };

  const classNames = (...classes: (string | false | undefined)[]): string => {
    return classes.filter(Boolean).join(" ");
  };

  return (
    <label className={styles.checkboxContainer}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleChecked}
      />
      <span className={styles.customCheckbox} />
      {label && (
        <span
          className={classNames(
            styles.checkboxLabel,
            isChecked && styles.checkboxLabelChecked
          )}>
          {label}
        </span>
      )}
    </label>
  );
}

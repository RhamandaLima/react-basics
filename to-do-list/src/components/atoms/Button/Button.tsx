import { ButtonProps, ButtonType } from './Button.types';

import trashIcon from '../../../assets/icons/delete.svg';
import plusIcon from '../../../assets/icons/plus.svg';

import styles from './Button.module.css';

export function Button({
  buttonType = ButtonType.CREATE,
  onClick,
  label,
  ...props
}: ButtonProps) {
  const getButtonClassName = (): string => {
    switch (buttonType) {
      case ButtonType.DELETE:
        return `${styles.buttonBase} ${styles.deleteButton}`;
      case ButtonType.CREATE:
        return `${styles.buttonBase} ${styles.createButton}`;
      default:
        return styles.buttonBase;
    }
  };

  return (
    <button className={getButtonClassName()} onClick={onClick} {...props}>
      {buttonType === ButtonType.DELETE && (
        <img src={trashIcon} alt="Excluir" className={styles.deleteIcon} />
      )}
      {buttonType === ButtonType.CREATE && (
        <>
          {label && <span>{label}</span>}
          <img src={plusIcon} alt="Criar" className={styles.icon} />
        </>
      )}
    </button>
  );
}

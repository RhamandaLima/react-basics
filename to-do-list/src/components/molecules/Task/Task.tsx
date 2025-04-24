import { Button } from "../../atoms/Button/Button";
import { ButtonType } from "../../atoms/Button/Button.types";
import { Checkbox } from "../../atoms/Checkbox/Checkbox";
import { TaskProps } from "./Task.types";
import styles from "./Task.module.css";

export function Task({
  taskId,
  label,
  onTaskDelete,
  onCheckboxChange,
  checked,
}: TaskProps) {
  const handleCheckboxChange = (newChecked: boolean): void => {
    onCheckboxChange(taskId, newChecked);
  };

  const handleDelete = (): void => {
    onTaskDelete(taskId);
  };

  return (
    <div className={styles.taskButtonContainer}>
      <Checkbox
        label={label}
        checked={checked}
        onChange={handleCheckboxChange}
      />
      <Button
        buttonType={ButtonType.DELETE}
        onClick={handleDelete}
        aria-label="Excluir tarefa"
      />
    </div>
  );
}

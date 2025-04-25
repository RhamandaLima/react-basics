import { ToDo } from '../../templates/ToDo/ToDo';
import styles from './ToDoList.module.css';

export function ToDoList() {
  return (
    <div className={styles.toDoList}>
      <ToDo />
    </div>
  );
}

import { useState } from 'react';
import { Button } from '../../atoms/Button/Button';
import { ButtonType } from '../../atoms/Button/Button.types';
import { Input } from '../../atoms/Input/Input';

import styles from './NewTask.module.css';
import { TaskInfo } from '../Task/Task.types';
import { NewTaskProps } from './newTask.types';

export function NewTask({ onCreate }: NewTaskProps) {
  const [taskLabel, setTaskLabel] = useState('');

  function handleCreateTask(): void {
    if (taskLabel.trim() === '') return;

    const newTask: TaskInfo = {
      id: crypto.randomUUID(),
      label: taskLabel.trim(),
      checked: false
    };

    onCreate(newTask);
    setTaskLabel('');
  }

  return (
    <div className={styles.newtask}>
      <Input
        placeholder="Adicione uma nova tarefa"
        value={taskLabel}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setTaskLabel(e.target.value)
        }
      />
      <Button
        buttonType={ButtonType.CREATE}
        label="Criar"
        onClick={handleCreateTask}
      />
    </div>
  );
}

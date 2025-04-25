import { useState } from 'react';
import styles from './ToDo.module.css';

import { NewTask } from '../../molecules/NewTask/NewTask';
import { TaskBoard } from '../../organisms/TaskBoard/TaskBoard';
import { TaskInfo } from '../../../shared/interfaces/task.interface';

export function ToDo() {
  const [tasks, setTasks] = useState<TaskInfo[]>([]);

  function handleCreateTask(newTask: TaskInfo): void {
    setTasks((prev: TaskInfo[]) => [...prev, newTask]);
  }

  function handleToggleChecked(taskId: string, checked: boolean): void {
    setTasks((prev: TaskInfo[]) =>
      prev.map((task: TaskInfo) =>
        task.id === taskId ? { ...task, checked } : task
      )
    );
  }

  function handleDeleteTask(taskId: string): void {
    setTasks((prev: TaskInfo[]) =>
      prev.filter((task: TaskInfo) => task.id !== taskId)
    );
  }

  return (
    <div className={styles.todo}>
      <div style={{ marginBottom: '3.313rem' }}>
        <NewTask onCreate={handleCreateTask} />
      </div>
      <TaskBoard
        taskList={tasks}
        onCheckboxChange={handleToggleChecked}
        onTaskDelete={handleDeleteTask}
      />
    </div>
  );
}

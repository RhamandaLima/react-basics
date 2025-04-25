import { useState } from 'react';

import { TaskInfo } from '../../molecules/Task/Task.types.ts';
import { Task } from '../../molecules/Task/Task.tsx';
import { TaskBoardProps } from './TaskBoard.types.ts';

import styles from './TaskBoard.module.css';

import {
  CounterColor,
  CounterProps
} from '../../atoms/Counter/Counter.types.ts';
import { TaskBoardHeader } from '../../molecules/TaskBoardHeader/TaskBoardHeader.tsx';
import { EmptyBoard } from '../../atoms/EmptyBoard/EmptyBoard.tsx';
import { EmptyBoardProps } from '../../atoms/EmptyBoard/EmptyBoard.types.ts';

import emptyFile from '../../../assets/icons/empty-file.svg';

export function TaskBoard({ taskList = [] }: TaskBoardProps) {
  const [tasks, setTasks] = useState<TaskInfo[]>(taskList);

  const totalTasks = tasks?.length;
  const getTasksSelected = (tasks: TaskInfo[]): number => {
    return tasks?.filter((task: TaskInfo) => task.checked).length;
  };

  const counterTotal: CounterProps = {
    description: 'Tarefas criadas',
    descriptionColor: CounterColor.BLUE,
    total: totalTasks
  };
  const counterSelection: CounterProps = {
    description: 'Concluídas',
    descriptionColor: CounterColor.PURPLE,
    total: totalTasks,
    selected: getTasksSelected(tasks)
  };

  const emptyBoardProps: EmptyBoardProps = {
    description: 'Você ainda não tem tarefas cadastradas',
    icon: emptyFile,
    subdescription: 'Crie tarefas e organize seus itens a fazer'
  };

  const handleCheckboxChange = (taskId: string, checked: boolean): void => {
    setTasks((prevTasks: TaskInfo[]) =>
      prevTasks.map((task: TaskInfo) =>
        task.id === taskId ? { ...task, checked } : task
      )
    );
  };

  const handleTaskDelete = (taskId: string): void => {
    setTasks((prevTasks: TaskInfo[]) =>
      prevTasks.filter((task: TaskInfo) => task.id !== taskId)
    );
  };

  return (
    <>
      <div style={{ marginBottom: '1.5rem' }}>
        <TaskBoardHeader
          counterTotal={counterTotal}
          counterSelection={counterSelection}
        />
      </div>

      {tasks.length === 0 && (
        <>
          <div className={styles.divider}></div>
          <EmptyBoard {...emptyBoardProps}></EmptyBoard>
        </>
      )}

      {tasks.map((task: TaskInfo) => (
        <Task
          key={task.id}
          taskId={task.id}
          label={task.label}
          checked={task.checked}
          onCheckboxChange={handleCheckboxChange}
          onTaskDelete={handleTaskDelete}
        />
      ))}
    </>
  );
}

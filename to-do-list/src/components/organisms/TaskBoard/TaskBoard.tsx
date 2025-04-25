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
import { TaskInfo } from '../../../shared/interfaces/task.interface.ts';

export function TaskBoard({
  taskList,
  onCheckboxChange,
  onTaskDelete
}: TaskBoardProps) {
  const totalTasks = taskList?.length;
  const selectedCount = taskList?.filter(
    (task: TaskInfo) => task.checked
  ).length;

  const counterTotal: CounterProps = {
    description: 'Tarefas criadas',
    descriptionColor: CounterColor.BLUE,
    total: totalTasks
  };
  const counterSelection: CounterProps = {
    description: 'Concluídas',
    descriptionColor: CounterColor.PURPLE,
    total: totalTasks,
    selected: selectedCount
  };

  const emptyBoardProps: EmptyBoardProps = {
    description: 'Você ainda não tem tarefas cadastradas',
    icon: emptyFile,
    subdescription: 'Crie tarefas e organize seus itens a fazer'
  };

  return (
    <>
      <div style={{ marginBottom: '1.5rem' }}>
        <TaskBoardHeader
          counterTotal={counterTotal}
          counterSelection={counterSelection}
        />
      </div>

      {taskList.length === 0 && (
        <>
          <div className={styles.divider}></div>
          <EmptyBoard {...emptyBoardProps}></EmptyBoard>
        </>
      )}

      {taskList.map((task: TaskInfo) => (
        <Task
          key={task.id}
          taskId={task.id}
          label={task.label}
          checked={task.checked}
          onCheckboxChange={onCheckboxChange}
          onTaskDelete={onTaskDelete}
        />
      ))}
    </>
  );
}

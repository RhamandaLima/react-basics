import { TaskInfo } from '../../molecules/Task/Task.types';

export interface TaskBoardProps {
  taskList: TaskInfo[];
  onCheckboxChange: (taskId: string, checked: boolean) => void;
  onTaskDelete: (taskId: string) => void;
}

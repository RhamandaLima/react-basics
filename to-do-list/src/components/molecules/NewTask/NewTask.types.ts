import { TaskInfo } from '../Task/Task.types';

export interface NewTaskProps {
  onCreate: (taskName: TaskInfo) => void;
}

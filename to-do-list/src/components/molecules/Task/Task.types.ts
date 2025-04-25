export interface TaskProps {
  taskId: string;
  label: string;
  onTaskDelete: (taskId: string) => void;
  onCheckboxChange: (taskId: string, checked: boolean) => void;
  checked: boolean;
}

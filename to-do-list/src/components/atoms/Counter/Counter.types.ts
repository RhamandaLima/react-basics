export enum CounterColor {
  BLUE = 'blue',
  PURPLE = 'purple'
}

export interface CounterProps {
  description: string;
  descriptionColor: CounterColor;
  total: number;
  selected?: number;
}

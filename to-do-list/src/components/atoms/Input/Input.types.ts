import { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

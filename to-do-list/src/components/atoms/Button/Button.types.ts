import React from "react";

export enum ButtonType {
  DELETE = "delete",
  CREATE = "create",
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType?: ButtonType;
  label?: string;
}

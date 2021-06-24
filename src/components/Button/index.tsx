import { ButtonHTMLAttributes } from "react"

import './styles.scss';

// Atributos que pode ter um button
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean;
};

export function Button({ isOutlined = false, ...props }: ButtonProps) {
  return (
    <button
      className={`button ${isOutlined ? 'outlined' : ''}`}
      {...props}
    />
  )
}
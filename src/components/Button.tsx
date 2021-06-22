import { ButtonHTMLAttributes } from "react"

import '../styles/button.scss';

// Atributos que pode ter um button
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button(props: ButtonProps) {
  return (
    <button className="button" {...props} />
  )
}
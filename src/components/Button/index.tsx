import { MouseEventHandler, ReactNode } from "react"
import './Button.scss'

type ButtonType = 'submit' | 'button'

type ButtonProps = {
  children: ReactNode,
  onClick: MouseEventHandler<HTMLButtonElement>,
  type: ButtonType,
  disabled?: boolean
}
const Button = ({ children, onClick, type, disabled }: ButtonProps) => {
  return (
    <button type={type} onClick={onClick} className="btn" disabled={disabled}>
      {children}
    </button>
  )
}

export default Button
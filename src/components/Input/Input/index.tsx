import React, { ChangeEventHandler } from 'react'

type Props = {
  inputId: string,
  inputType: string,
  value: string,
  onChange: ChangeEventHandler<HTMLInputElement>,
  placeholder?: string,
  otherProps?: any
}
const Input = ({ inputId, inputType, onChange, value, placeholder, otherProps }: Props) => {
  return (
    <>
      <label htmlFor={inputId}></label>
      <input type={inputType} id={inputId} placeholder={placeholder} value={value} onChange={onChange}  {...otherProps} />
    </>
  )
}

export default Input
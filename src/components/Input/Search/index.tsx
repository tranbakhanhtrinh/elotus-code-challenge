import searchIcon from '@/assets/images/search-icon.svg'
import { ChangeEventHandler } from "react"
import Input from "../Input"
import './Search.scss'

type Props = {
  value: string,
  onChange: ChangeEventHandler<HTMLInputElement>,
  onSubmit?: React.FormEventHandler<HTMLFormElement>,
  placeholder: string,
  otherProps?: any
}

const SearchInput = ({ onChange, onSubmit, value, placeholder, otherProps }: Props) => {
  return (
    <form onSubmit={onSubmit} className='search-input'>
      <Input type='search' id='search' placeholder={placeholder} value={value} onChange={onChange}  {...otherProps} />
      <figure>
        <img src={searchIcon} alt="searchIcon" />
      </figure>
    </form>
  )
}

export default SearchInput
import logo from '@/assets/logo.svg'
import SearchInput from '@/components/Input/Search'
import { routesForNavbar } from '@/constants/routes'
import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './Header.scss'

const Header = () => {
  const [searchValue, setSearchValue] = useState<string>('')
  const navigate = useNavigate();

  const onSearch = (e: any) => {
    const { value } = e.target
    setSearchValue(value)
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    navigate(`/search/movie?q=${searchValue}`)
  };


  const navLink = routesForNavbar.map(route => <li key={route.label} aria-label={route.ariaLabel}>
    <NavLink to={route.to}>{route.label}</NavLink>
  </li>)
  return (
    <header>
      <div className='flex items-center justify-between'>
        <nav className='flex items-center'>
          <img src={logo} alt='Logo' />
        </nav>
        <SearchInput placeholder='Search...' value={searchValue} onChange={onSearch} onSubmit={handleSubmit} />
      </div>
      <ul className='flex items-center'>
        {navLink}
      </ul>
    </header >
  )
}

export default Header
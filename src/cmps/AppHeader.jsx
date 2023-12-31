import { Link, NavLink } from 'react-router-dom'
import Logo from '../assets/imgs/logo.svg'

export function AppHeader() {
  return (
    <header className="app-header">
      <div className='link-panel'>
        <Link className="logo" to="/">
          <img src={Logo} alt="myteam" />
        </Link>
        <nav className="main-nav">
          <NavLink to="/">home</NavLink>
          <NavLink to="/about">about</NavLink>
        </nav>
      </div>
      <button className='contact-btn'>contact us</button>
    </header>
  )
}

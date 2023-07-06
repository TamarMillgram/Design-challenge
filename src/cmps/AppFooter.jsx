import { Link, NavLink } from 'react-router-dom'
import Logo from '../assets/imgs/logo.svg'
import IconTwitter from '../assets/imgs/icon-twitter.svg'
import IconFacebook from '../assets/imgs/icon-facebook.svg'
import IconPinterest from '../assets/imgs/icon-pinterest.svg'

export function AppFooter() {
  return (
    <footer className='main-footer'>
      <div className='main-details'>
        <div className='link-panel'>
          <Link className="logo" to="/">
            <img src={Logo} alt="myteam" />
          </Link>
          <nav className="main-nav">
            <NavLink to="/">home</NavLink>
            <NavLink to="/about">about</NavLink>
          </nav>
        </div>
        <div className='address'>
          <p>987  Hillcrest Lane</p>
          <p>Irvine, CA</p>
          <p>California 92714</p>
          <p>all Us : 949-833-7432</p>
        </div>
      </div>
      <div className='social-media'>
        <div className='social-links'>
          <a href="#"><img src={IconFacebook} alt="" /></a>
          <a href="#"><img src={IconPinterest} alt="" /></a>
          <a href="#"><img src={IconTwitter} alt="" /></a>
        </div>
        <p>Copyright 2020. All Rights Reserved</p>
      </div>

    </footer>
  )
}

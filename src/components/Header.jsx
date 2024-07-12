import React from 'react'
import logo2 from '../images/logo2.png'
import { Link } from 'react-router-dom'
import { AiOutlineClose } from 'react-icons/ai'
import { FaBars } from 'react-icons/fa'

const Header = () => {
  return (
    <nav>
      <div className="container nav_container">
        <Link to="/" className='nav_logo'>
          <img src={logo2} alt="Navbar Logo" />
        </Link>
      <ul className="nav_menu">
        <li><Link to="/profile/id">Ernest Achiever</Link></li> 
        <li><Link to="/create">Create Post</Link></li>
        <li><Link to="/authors">Authors</Link></li>
        <li><Link to="/logout">Logout</Link></li>
      </ul>
      <button className="nav_toggle-btn">
        <AiOutlineClose/>
      </button>
      </div>
    </nav>
  )
}

export default Header
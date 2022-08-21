import React from 'react'
import '../Styles/Header.css'
import {FaUser} from 'react-icons/fa'
import {Link} from'react-router-dom'
const Header = () => {
  return (
    <div className='header'>
      <div className="headerLeft">
        <Link to="/home"> <img src="./images/logo.png" className='header-icon' alt="" /></Link>
      <Link to="/movies/popular" className='link'>Popular</Link>
      <Link to="/movies/top_rated"className='link'>Top Rated</Link>
      <Link to="/movies/upcoming" className='link'>Upcoming</Link>
      </div>
      <div className="headerRight">
      <FaUser/>
      </div>
    </div>
  )
}

export default Header

import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
	<header>
	<Link className='site-logo' to='/'>Missing Persons</Link>
	<nav>
	    <Link to='/'>Home</Link>
		<Link to='/about'>About</Link>
		<Link to='/missing'>Missing</Link>
	</nav>

	</header>
  )
}

export default Header
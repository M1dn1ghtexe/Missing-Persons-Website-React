import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const Navbar = () => {
  return (

	<div className='site-wrapper'>
	<Header/>
	<Outlet/>
	<Footer/>
	
	</div>
	
  )
}

export default Navbar
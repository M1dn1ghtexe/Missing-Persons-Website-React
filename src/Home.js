import React from 'react'
import {Link} from 'react-router-dom'
import homePage from '../assetss/images/HomeImage.jpg'


const Header = () => {
	
  return (
	<>
	<div className='home-container' style={{backgroundImage:`url(${homePage})`}}>
	<h1> This is the home page of the missing person website.</h1>
	<p> This is the p of the home page of the missing person website.</p>
	</div>
	
	


	</>
	
  )
}

export default Header
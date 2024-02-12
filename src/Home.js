import React from 'react'
import {Link} from 'react-router-dom'
import homePage from '../assetss/images/HomeImage.jpg'


const Header = () => {
	
  return (
	<>
	<div className='home-container' style={{backgroundImage:`url(${homePage})`}}>
	<h1> This is the home page of the missing person website.</h1>
	<h2> The following website uses the public FBI API and in NO circumstance is part of the FBI network.</h2>
	<h3>If you want to visit the official FBI website click <Link to='https://www.fbi.gov'>here</Link></h3>
	<p> Content Warning: The following website contains material that may be harmful or traumatizing to some audience.Viewe discretion is advised.</p>
	</div>
	
	


	</>
	
  )
}

export default Header
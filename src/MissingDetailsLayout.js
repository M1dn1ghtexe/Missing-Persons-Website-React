import React, { useState } from 'react'
import {Link,Outlet, useParams} from 'react-router-dom'


const MissingDetailsLayout = () => {
	const param=useParams()
	const [missingP,setMissingP]=useState([])
	



	
	
  return (
	<>
	<nav className='detailsLayout'>
	 <Link to={`/missing/${param.id}`}>Story Details</Link>
	 <Link to={`/missing/${param.id}/physicalTraits`}> Physical Traits</Link>
	 <Link to={`/missing/${param.id}/additionalPhotos`}>More Photos</Link>
	 <Link to={`/missing`}>Back to Missing Persons</Link>
	 

	</nav>
	<Outlet context={[missingP,setMissingP]}/>






	</>
  )
}

export default MissingDetailsLayout
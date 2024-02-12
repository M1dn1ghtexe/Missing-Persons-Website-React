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

	<div className='submitTip'>
		<h1>Submit a Tip</h1>
		<p>
		If you have any information concerning this case, please contact the FBI in Little Rock at (501) 221-9100, your local FBI office, the nearest American Embassy or Consulate, or you can submit a tip online at tips.fbi.gov.
		</p>
	</div>






	</>
  )
}

export default MissingDetailsLayout
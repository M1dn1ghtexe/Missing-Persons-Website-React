import React from 'react'
import { useOutletContext } from 'react-router-dom'

const AdditionalPhotos = () => {
	const params=useOutletContext()

	console.log(params);


	const additionalPhotos=params[0].images.map((el)=>(
		
		<div key={el.large} className='missingP-tile'>
		<img src={el.large}/>
		<div className='missingP-info'>
		{el.caption?(<h3>{el.caption}</h3>):<h3>No details found for this photo.</h3>}
			
			
			
		</div>
		

		</div>

		
	))

  return (
	<div className='missingP-list'>
			{additionalPhotos} 
		</div>
	
  )
}

export default AdditionalPhotos
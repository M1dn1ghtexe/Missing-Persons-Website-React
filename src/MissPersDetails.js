import React, { useEffect, useState } from 'react'
import {useParams,useOutletContext} from 'react-router-dom'
import axios from 'axios'

const MissPersCard = () => {

	const params=useParams()
	const [mpDetails,setMpDetails]=useState(null)
	const setMissingP=useOutletContext()
	
	
	useEffect(()=>{
		axios(`https://api.fbi.gov/@wanted-person/${params.id}`)
		.then((data)=>{

			data.data.details?data.data.details=data.data.details.replaceAll('<p>','').replaceAll('</p>',''):
			data.data.caution=data.data.caution.replaceAll('<p>','').replaceAll('</p>','')

			

			setMissingP[1](data.data)
			setMpDetails(data.data)

			
			
		})


	},[])
	


  return (
	<div className='missingP-details-container'>

	{mpDetails? (
		<div className='missingP-details'>
		<img src={mpDetails.images[0].large}/>
		<h2>{mpDetails.title}</h2>
		{mpDetails.details?(<p>{mpDetails.details}</p>): <p>{mpDetails.caution}</p>}
		
		</div>

	): <h2>loading</h2>}



	</div>
  )
}

export default MissPersCard
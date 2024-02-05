import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'

const MissPersCard = () => {

	const params=useParams()
	const [mpDetails,setMpDetails]=useState(null)

	useEffect(()=>{
		axios(`https://api.fbi.gov/@wanted-person/${params.id}`)
		.then((data)=>{
			
			setMpDetails(data.data)

			
			
		})


	},[])
	


  return (
	<div className='missingP-details-container'>

	{mpDetails? (
		<div className='missingP-details'>
		<img src={mpDetails.images[0].large}/>
		<h2>{mpDetails.title}</h2>
		<p>{mpDetails.details}</p>
		</div>

	): <h2>loading</h2>}



	</div>
  )
}

export default MissPersCard
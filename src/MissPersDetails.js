import React, { useEffect, useState } from 'react'
import {useParams,useOutletContext} from 'react-router-dom'
import axios from 'axios'
import SubmitTip from './submitTip'

const MissPersCard = () => {

	const params=useParams()
	const [mpDetails,setMpDetails]=useState(null)
	const setMissingP=useOutletContext()
	
	
	
	useEffect(()=>{
		axios(`https://api.fbi.gov/@wanted-person/${params.id}`)
		.then((data)=>{

			data.data.details?data.data.details=data.data.details.replaceAll('<p>','').replaceAll('</p>',''):
			data.data.caution=data.data.caution.replaceAll('<p>','').replaceAll('</p>','')

			
			

			data.data.warning_message?setMissingP[3](data.data.warning_message):null
			setMissingP[1](data.data)
			setMpDetails(data.data)

			
			
		})


	},[])
	


  return (
	<div className='missingP-details-container'>
	{setMissingP[2]?<h2 className='warningMessage'>{setMissingP[2]}</h2>:null}

	{mpDetails? (
		<div className='info'>
		<div className='imgdetails'>
		<img  src={mpDetails.images[0].large}/>
		</div>
		
		

		<h2>{mpDetails.title}</h2>
		 <p style={{fontSize:10}}>Published on : {mpDetails.publication}</p>
		
		{mpDetails.details?(<p>{mpDetails.details}</p>): <p>{mpDetails.caution}</p>}
		
		</div>
		

	): <h2>loading</h2>}

	<SubmitTip/>
	



	



	</div>
  )
}

export default MissPersCard
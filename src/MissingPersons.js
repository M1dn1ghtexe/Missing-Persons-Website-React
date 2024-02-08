import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

const MissingPersons = () => {

	const [missingPers,setMissingPers]=useState([])

	React.useEffect(()=>{

		axios('https://api.fbi.gov/wanted/v1/list',{params:{

		
		'page':1
		}})
		.then((data)=>{
			console.log(data.data.items);

			setMissingPers(data.data.items)
		})

	},[])

	const missingMapped=missingPers.map((el)=>(
		
		<div key={el.uid} className='missingP-tile'>
		<Link to={`/missing/${el.uid}`}>
	
	
		<img src={el.images[0].large}/>

		
		
		<div className='missingP-info'>
			<h3>{el.title}</h3>
		
		</div>
		</Link>

		</div>

		
	))




  return (
	
		<div className='missingP-list'>
			{missingMapped}
		</div>
	
  )
}

export default MissingPersons
import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

const MissingPersons = () => {

	const [missingPers,setMissingPers]=useState([])
	const [currentPage,setCurrentPage]=useState(1)

	React.useEffect(()=>{

		axios('https://api.fbi.gov/wanted/v1/list',{params:{

		
		'page':currentPage
		}})
		.then((data)=>{
			console.log(data.data.items);

			setMissingPers(data.data.items)
		})
		.catch((err)=>{
			setMissingPers([])

			
			console.log(err);

		})

	},[currentPage])

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
	
	<>
		<div className='missingP-list'>
			{missingMapped.length!=0?missingMapped:<p>The FBI open source API can't take more requests for now, please try again in a few minutes.</p>}
			

		</div>
		<button onClick={
			
			()=>{
				setCurrentPage((prev)=>prev+1)
				window.scroll({
					top:0,
					behavior:'smooth'
				})
				
				
				}


		}>Next Page</button>

	</>
	
	
  )
}

export default MissingPersons
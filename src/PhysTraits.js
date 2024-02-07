import React from 'react'
import { useOutletContext,Link } from 'react-router-dom';

const PhysTraits = () => {
	const [missingP]=useOutletContext()




	
	
  return (

	<section className='physTraits'>

	
	   
	   <img src={missingP.images[0].large}/>

	   
		
	
	

	<table className='physTraitsTable'>
	<thead>

		<tr>
			<th>Trait</th>
			<th>Value</th>
		</tr>
	</thead>
	<tbody>
		<tr>
		     <td>Gender</td>
			 <td>{missingP.sex}</td>
			 </tr>
			 <tr>
			 <td>Hair</td>
			<td>
			{missingP.hair?missingP.hair:missingP.hair_raw}
				
				
				
			</td>

			 </tr>
			<tr>
			<td>Eyes color</td>
			<td>{missingP.eyes?missingP.eyes:missingP.eyes_raw}</td>

			</tr>
			<tr>
			<td>Race</td>
			<td>{missingP.race}</td>
			</tr>
			<tr>
			<td>Weight</td>
			<td>{missingP.weight}</td>

			</tr>
			
		
			


		
	</tbody>




	</table>
	


	





	</section>
	
	
  )
}

export default PhysTraits
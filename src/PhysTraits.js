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
			<tr>
				<td>Remarks</td>
				<td>{missingP.remarks?missingP.remarks:<p>No remarks found.</p>}</td>
			</tr>
			<tr>
			
			<td>Aliases</td>
			{missingP.aliases?<td>{missingP.aliases[0]}</td>:<td>No Aliases Found</td>}

			</tr>
			
		
			


		
	</tbody>




	</table>
	<div className='info'>
	    {missingP.publication? <p>Publication:  {missingP.publication}</p>:<p>Publication: No data found.</p>}
	   
		{missingP.modified?	<p>Last Modified:  {missingP.modified}</p>:<p>Last Modified: No modifications has been made.</p>}
	
		{missingP.field_offices?<p>Field Office: {missingP.field_offices[0]}</p>:<p>Field Office: No data found.</p>}

	</div>

	

	</section>
	
	
	
  )
}

export default PhysTraits
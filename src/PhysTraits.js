import React from 'react'
import { useOutletContext,Link } from 'react-router-dom';
import SubmitTip from './submitTip';

const PhysTraits = () => {
	const missingP=useOutletContext()





	
	
  return (

	<section className='physTraits'>
	 {missingP[2]?<h1 className='warningMessage'>{missingP[2]}</h1>:null}


	
	   
	   <img src={missingP[0].images[0].large}/>

	   
		
	
	

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
			 <td>{missingP[0].sex}</td>
			 </tr>
			 <tr>
			 <td>Hair</td>
			<td>
			{missingP[0].hair?missingP[0].hair:missingP[0].hair_raw}
				
				
				
			</td>

			 </tr>
			<tr>
			<td>Eyes color</td>
			<td>{missingP[0].eyes?missingP[0].eyes:missingP[0].eyes_raw}</td>

			</tr>
			<tr>
			<td>Race</td>
			<td>{missingP[0].race}</td>
			</tr>
			<tr>
			<td>Weight</td>
			<td>{missingP[0].weight}</td>

			</tr>
			<tr>
				<td>Remarks</td>
				<td>{missingP[0].remarks?missingP[0].remarks:<p>No remarks found.</p>}</td>
			</tr>
			<tr>
			
			<td>Aliases</td>
			{missingP[0].aliases?<td>{missingP[0].aliases[0]}</td>:<td>No Aliases Found</td>}

			</tr>
			
		
			


		
	</tbody>




	</table>
	<div className='info'>
	    {missingP.publication? <p>Publication:  {missingP.publication}</p>:<p>Publication: No data found.</p>}
	   
		{missingP.modified?	<p>Last Modified:  {missingP.modified}</p>:<p>Last Modified: No modifications has been made.</p>}
	
		{missingP.field_offices?<p>Field Office: {missingP.field_offices[0]}</p>:<p>Field Office: No data found.</p>}

	</div>
	
    <SubmitTip/>
	

	</section>
	
	
	
  )
}

export default PhysTraits
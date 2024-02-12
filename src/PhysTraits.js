import React, { useEffect, useState } from 'react'
import { useOutletContext,Link } from 'react-router-dom';
import SubmitTip from './submitTip';

const PhysTraits = () => {
	const missingP=useOutletContext()
	const [showTable,setShowTable]=useState(false)

	useEffect(()=>{

		var data=missingP[0]
		if (!data.sex && !data.hair && !data.eyes && !data.eyes_raw && !data.race && !data.weight && !data.aliases) {
			setShowTable(false)
		}
		else{
			setShowTable(true)
		}




	},[missingP])





	
	
  return (

	<section className='physTraits'>
	 {missingP[2]?<h1 className='warningMessage'>{missingP[2]}</h1>:null}


	
	   
	   <img src={missingP[0].images[0].large}/>

{showTable?<table className='physTraitsTable'>
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




	</table>:<p>No traits found on this entry.</p>}
	
	<div className='info'>
	    {missingP[0].publication? <p>Publication:  {missingP[0].publication}</p>:<p>Publication: No data found.</p>}
	   
		{missingP[0].modified?	<p>Last Modified:  {missingP[0].modified}</p>:<p>Last Modified: No modifications has been made.</p>}
	
		{missingP[0].field_offices?<p>Field Office: {missingP[0].field_offices[0]}</p>:<p>Field Office: No data found.</p>}

	</div>
	
    <SubmitTip/>
	

	</section>
	
	
	
  )
}

export default PhysTraits
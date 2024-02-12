import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios'
import { BrowserRouter, Routes,Route,Link} from 'react-router-dom';
import Home from './Home'
import About from './About'
import Navbar from './Navbar';
import MissingPersons from './MissingPersons';
import MissingPersDetails from './MissPersDetails'
import MissingDetailsLayout from './MissingDetailsLayout';
import AdditionalPhotos from './additionalPhotos';
import PhysTraits from './PhysTraits';



var rot=document.getElementById("root")
var root=ReactDOM.createRoot(rot)


root.render(<Comp/>)




function Comp(){

	const [currentPage,setCurrentPage]=useState(1)


	return(
		<BrowserRouter>
		<Routes>
		 <Route element={<Navbar/>}>
		<Route path='/' element={<Home/>}/>
		<Route path='about' element={<About/>}/>
		<Route path='missing' element={<MissingPersons context={[currentPage,setCurrentPage]}/>}/>
		<Route path='missing/:id' element={<MissingDetailsLayout/>} >
		<Route index element={<MissingPersDetails/>}/>
		<Route path='physicalTraits' element={<PhysTraits/>} />
		<Route path='additionalPhotos' element={<AdditionalPhotos/>} />
		






		</Route>
		</Route>

		

		</Routes>

		</BrowserRouter>
	
	)
	
	

}

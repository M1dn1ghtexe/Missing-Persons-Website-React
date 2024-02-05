import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios'
import { BrowserRouter, Routes,Route,Link} from 'react-router-dom';
import Home from './Home'
import About from './About'
import Navbar from './Navbar';
import MissingPersons from './MissingPersons';
import MissingPersDetails from './MissPersDetails'



var rot=document.getElementById("root")
var root=ReactDOM.createRoot(rot)


root.render(<Comp/>)




function Comp(){


	return(
		<BrowserRouter>
		<Routes>
		 <Route element={<Navbar/>}>
		<Route path='/' element={<Home/>}/>
		<Route path='/about' element={<About/>}/>
		<Route path='/missing' element={<MissingPersons/>}/>
		<Route path='/missing/:id' element={<MissingPersDetails/>}/>
		</Route>

		

		</Routes>

		</BrowserRouter>
	
	)
	
	

}

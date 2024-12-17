
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './App.css'
import LandingPage from './stores/pages/LandingPage'
import MobilePage from './stores/pages/MoblilePage'
import ComputerPage from './stores/pages/ComputerPage'
import BagPage from './stores/pages/BagPage'
function App() {
  return (
    <div>
      <Router>
     <Routes>
       <Route path='/'element = {<LandingPage/>}/>
       <Route path='/mobiles'element = {<MobilePage/>}/> 
       <Route path='/computers'element= {<ComputerPage/>}/>
       <Route path='bags' element={<BagPage/>}/>
     </Routes>
     </Router>
    </div>
  )
}
export default App




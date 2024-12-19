
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './App.css'
import LandingPage from './stores/pages/LandingPage'
import MobilePage from './stores/pages/MoblilePage'
import ComputerPage from './stores/pages/ComputerPage'
import BagPage from './stores/pages/BagPage'
import WomenPage from './stores/pages/WomenPage';
import GlasPage from './stores/pages/GlasPage';
import WatchPage from './stores/pages/WatchPage';
import MobileSingle from './singles/MobileSingle';
import ComputerSingle from './singles/ComputerSingle';
import BagSingle from './singles/BagSingle';
import GlasesSingle from './singles/GlasesSingle'
import WatchSingle from './singles/WatchSingle';
import WomenSingle from './singles/WomenSingle';
function App() {
  return (
    <div>
    <Router>
      <Routes>
        <Route path='/'element = {<LandingPage/>}/>
        <Route path='/mobiles'element = {<MobilePage/>}/> 
        <Route path='/computers'element= {<ComputerPage/>}/>
        <Route path='/bags' element={<BagPage/>}/>
        <Route path='/women' element={<WomenPage/>}/>
        <Route path='/sunglases' element={<GlasPage/>}/>
        <Route path='/watches' element={<WatchPage/>}/>
        <Route path='/mobiles/:id'element={<MobileSingle/>}/>
        <Route path='/computers/:id'element={<ComputerSingle/>}/>
        <Route path='/bags/:id'element={<BagSingle/>}/>
        <Route path='/sunglases/:id'element={<GlasesSingle/>}/>
        <Route path='/watches/:id'element={<WatchSingle/>}/>
        <Route path='/women/:id'element={<WomenSingle/>}/>
      </Routes>
     </Router>
    </div>
  )
}
export default App




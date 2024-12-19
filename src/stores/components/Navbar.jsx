import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
  <div className="navSection">
        <div className="title">
           <Link to={'/'}><h2>S-mart</h2></Link>
       </div>
       <div className="search">
           <input type="text" placeholder='Search..' />
        </div>
        <div className="user">
           <div className="user-detail">SignIN/SignUP</div>
        </div>
        <div className="cart">Cart </div>
  </div>
  <div className="subMenu">
    <ul>
        <Link to={'/mobiles'}><li className='a'>Mobiles</li></Link> 
        <Link to={'/computers'}><li className='a'>Computers</li></Link>
        <Link to={'/sunglases'}><li className='a'>Sunglases</li></Link>
        <Link to={'/bags'}><li className='a'>Bags</li></Link>
        <Link to={'/watches'}><li className='a'>Watches</li></Link> 
        <Link to= {'/women'}><li className='a'>Women</li></Link>
    </ul>
  </div>
  </>
  )
}

export default Navbar

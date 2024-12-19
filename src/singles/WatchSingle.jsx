import React from 'react'
import { useParams } from 'react-router-dom'
import { watchData } from '../stores/data/watch'
import Navbar from '../stores/components/Navbar'

const WatchSingle = () => {
    const {id} = useParams()
    const product = watchData.find((item)=>item.id === id)
  return (
   <>
   <Navbar/>
   <div className="ind-section">
    <div className="ind-image">
        <img src={product.image} alt="" />
    </div>
    <div className="ind-details space">
        <div className="ind-company"><h2>{product.company}</h2></div>
        <div className="ind-model space"><h2>{product.model}</h2></div>
        <div className="ind-price space"><h2>{product.price}</h2></div>
        <div className="ind-desc space"><p>{product.discription}</p></div>
        <button>Add to Cart</button>
    </div>
   </div>
   </>
  )
}

export default WatchSingle

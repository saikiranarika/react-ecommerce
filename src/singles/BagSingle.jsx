import React from 'react'
import Navbar from '../stores/components/Navbar'
import { bagData } from '../stores/data/bags'
import { useParams } from 'react-router-dom'

const BagSingle = () => {
    const {id} = useParams()
    const product = bagData.find((item)=>item.id === id)
  return (
   <>
   <Navbar/>
   <div className="ind-section">
       <div className="ind-image">
          <img src={product.image} alt="" />
       </div>
       <div className="ind-details space">
            <div className="ind-company">
              <h2>{product.company}</h2>
            </div>
            <div className="ind-model space">
                <h2>{product.model}</h2>
           </div>
         <div className="ind-price space">
              <h2>{product.price}</h2>
        </div>
        <div className="ind-desc space">
             <p>{product.discription}</p>
        </div>
         <button>Add to Cart</button>
      </div>
   </div>
   </>
  )
}

export default BagSingle
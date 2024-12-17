import React from 'react'
import { bagData } from '../data/bags'
import Navbar from '../components/Navbar'

const BagPage =() =>{
  return (
    <>
    <Navbar/>
    <div className="pageSection">
        {bagData.map((item)=>{
            return(
                <div className="k">
                    <div className="pageImg">
                        <img className='s' src={item.image} alt="" />
                    </div>
                    <div className="proModel">
                        {item.company},{item.model}
                    </div>
                </div>
            )
        })}

    </div>
      
    </>
  )
}

export default BagPage

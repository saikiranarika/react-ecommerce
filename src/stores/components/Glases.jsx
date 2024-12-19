import React from 'react'
import { glasData } from '../data/glases'
const Glases =()=> {
    const firstFiveImages = glasData.slice(0,5);
  return (
    <div>
        <div className="proTitle">
            <h2>Sun glases</h2>
        </div>
        <div className="proSection">
            {firstFiveImages.map((item,index)=>(
                <div className="imgBox" key={index}>
                    <img className='proImg' src={item.image} alt={item.name} />
                </div>
            ))}
        </div>
      
    </div>
  )
}

export default Glases

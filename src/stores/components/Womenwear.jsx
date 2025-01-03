import React from 'react'
import{womenData} from '../data/womenwear'

const Womenwear =()=> {
    const firstFiveImages = womenData.slice(0,5);
  return (
    <div>
        <div className="proTitle">
            <h2>Womenwear</h2>
        </div>
        <div className="proSection">
            {firstFiveImages.map((item,index)=>(
                <div className="imgBox" key={index}>
                    <img className='proImage1' src={item.image} alt={item.name} />
                </div>
            ))}
        </div>
      
    </div>
  )
}

export default Womenwear

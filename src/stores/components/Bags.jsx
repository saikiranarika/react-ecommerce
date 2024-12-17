import React from 'react';
import { bagData } from '../data/bags';

const Bags = ()=> {
    const firstFiveImages = bagData.slice(0,5);
  return (
    <div>
        <div className="proTitle">
            <h2>Bags</h2>
        </div>
        <div className="proSection">
            {firstFiveImages.map((item,index)=>(
                <div className="imgBox" key={index}>
                    <img className='proImage' src={item.image} alt={item.name} />
                </div>
            ))}
        </div>
      
    </div>
  );
};

export default Bags;

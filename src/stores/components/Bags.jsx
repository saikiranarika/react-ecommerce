import React from 'react';
import { bagData } from '../data/bags';
import { Link } from 'react-router-dom';
const Bags = ()=> {
    const firstFiveImages = bagData.slice(0,5);
  return (
    <div>
        <div className="proTitle">
            <h2>Bags</h2>
        </div>
        <div className="proSection">
            {firstFiveImages.map((item,index)=>(
                <Link to={`/bags/${item.id}`}>
                <div className="imgBox" key={index}>
                    <img className='proImage' src={item.image} alt='' />
                </div>
                </Link>
            ))}
        </div>
      
    </div>
  );
};

export default Bags;

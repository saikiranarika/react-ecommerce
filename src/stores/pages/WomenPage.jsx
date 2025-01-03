import React from 'react'
import{womenData} from'../data/womenwear'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
const WomenPage =()=> {
  return (
    <>
    <Navbar/>
    <div className="pageSection">
        {womenData.map((item)=>{
            return(
                <div className="k">
                   <Link to={`/women/${item.id}`}>
                      <div className="pageImg">
                        <img className='s1'src={item.image} alt="" />
                      </div>
                   </Link>
                    <div className="proModel">
                        {item.company}{item.model}
                    </div>
                </div>
            )
        })}
    </div>

      
    </>
  )
}

export default WomenPage

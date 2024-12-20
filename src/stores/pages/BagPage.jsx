import React from 'react'
import { bagData } from '../data/bags'
import Navbar from '../components/Navbar'
import  {Link} from 'react-router-dom'
const BagPage =() =>{
  return (
    <>
    <Navbar/>
    <div className="pageSection">
        {bagData.map((item)=>{
            return(
                <div className="k">
                      <Link to={`/bags/${item.id}`} >
                   <div className="pageImg">
                        <img  className="s"src={item.image} alt="" />
                    </div>
                 </Link>
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

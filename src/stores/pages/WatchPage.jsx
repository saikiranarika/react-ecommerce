import React from 'react'
import { watchData } from '../data/watch'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
const WatchPage =()=> {
  return (
    <div>
        <Navbar/>
        <div className="pageSection">
            {watchData.map((item)=>{
                return(
                    <div className="k">
                       <Link to={`/watches/${item.id}`}>
                       <div className="pageImg">
                            <img className='s'src={item.image} alt="" />
                        </div>
                       </Link>
                        <div className="proModel">
                            {item.company},{item.model}
                        </div>
                    </div>
                )
            })}
        </div>
      
    </div>
  )
}

export default WatchPage

import React from 'react'
import { glasData } from '../data/glases'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
const GlasPage =()=> {
  return (
    <div>
        <Navbar/>
        <div className="pageSection">
            {glasData.map((item)=>{
                return(
                    <div className="k">
                        <Link to={`/sunglases/${item.id}`} >
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
      
    </div>
  )
}

export default GlasPage

import React from 'react'
import Navbar from '../components/Navbar'
import { computerData } from '../data/computer'
import { Link } from 'react-router-dom'
const ComputerPage = ()=> {
  return (
    <>
    <Navbar/>
    <div className="pageSection">
        {computerData.map((item)=>{
            return(
                <div className='k'>
               <Link to={`/computers/${item.id}`} >
                   <div className="pageImg">
                        <img  className="s"src={item.image} alt="" />
                    </div>
                 </Link>
                <div className="proModel">
                    {item.company},{item.model}
                </div>
                </div>
            )
        })

        }
    </div>
    </>
  )
}

export default ComputerPage

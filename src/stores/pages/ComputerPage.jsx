import React from 'react'
import Navbar from '../components/Navbar'
import { computerData } from '../data/computer'
const ComputerPage = ()=> {
  return (
    <>
    <Navbar/>
    <div className="pageSection">
        {computerData.map((item)=>{
            return(
                <div className='k'>
                <div className="pageImg">
                    <img className='s' src={item.image} alt="" />
                </div>
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

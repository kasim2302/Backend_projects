import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <>
    <div className='bg-gray-900 text-white flex items-center justify-between p-5 '>
        <div>
            <h2>TASK-7</h2>
        </div>
        <div className=' flex items-center justify-center gap-5'>
            <Link to="/">Form-1</Link>
             <Link to="/Assignment2">Form-2</Link>
              <Link to="/Assignment3">Form-3</Link>
               <Link to="/Assignment4">Form-4</Link>
                <Link to="/Assignment5">Form-5</Link>
                 <Link to="/Assignment6">Form-6</Link>
        </div>
    </div>
    
    </>
  )
}

export default Navbar
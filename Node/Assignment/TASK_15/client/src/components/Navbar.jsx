import React from 'react'
import {  Routes ,Route , Link,Navigate, useNavigate } from 'react-router-dom'
const Navbar = () => {
    const navigate = useNavigate()
    
       const handleclick  = () =>{
          localStorage.removeItem("logintoken")
          navigate("/login")
       }
  return (
   <>
    <div className='bg-black text-white flex justify-between items-center p-3 '>
         <div>
             <h1>MERN TASK</h1>
         </div>
         <div className='flex gap-10'>
             <Link to="/login" className='bg-blue-700 px-2 py-1 rounded'>Login</Link>
             <Link to="/register"  className='bg-green-700 px-2 py-1 rounded'>Register</Link>
             <Link to="/dashboard">Dashboard</Link>
             <button onClick={handleclick} className='text-red-700'>Logout</button>
   
   
         </div>
       </div>
   </>
  )
}

export default Navbar
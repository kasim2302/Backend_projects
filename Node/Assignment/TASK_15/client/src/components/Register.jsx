import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Register = () => {

    const navigate = useNavigate()
    const [formdata,setFormData] = useState({name:"",email:"",password:""}) 

    const handlechange = (e) => {
       setFormData({...formdata,[e.target.name]:e.target.value})
    }

    const handlesubmit = async (e) =>{
   e.preventDefault()
   try {
     const savedata = await axios.post(
       "http://localhost:5000/api/users/register",
       formdata
     )
     console.log(savedata.data)
     alert(savedata.data.msg)
     setFormData({name:"",email:"",password:""})
     navigate("/login")

   } catch (error) {
     console.log(error.response?.data || error.message)
   }
}

  return (
   <>
   <div className='flex justify-center items-center flex-col mt-20 '>
    <div className='w-100 h-80 shadow'>
     <h1 className='text-2xl text-center '>
        Register
       </h1>
      <form onSubmit={handlesubmit} className='flex justify-center items-center flex-col gap-5 p-5'>
        <input type="text" placeholder='Enter your name' name='name' onChange={handlechange} className='w-60 px-3 py-1 border rounded'/>
        <input type="email" placeholder='Example@gmail.com' name='email' onChange={handlechange} className='w-60 px-3 py-1 border rounded'/>
        <input type="password" placeholder='Enter your password' name='password' onChange={handlechange} className='w-60 px-3 py-1 border rounded'/>
        <input type="submit" value={"Register"} className='bg-green-600 text-white px-3 py-1 rounded w-60' />
      </form>
    </div>
       
   </div>
   </>
  )
}

export default Register
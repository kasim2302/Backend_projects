import React, { useState } from 'react'
import axios from 'axios'

const Register = () => {

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
   } catch (error) {
     console.log(error.response?.data || error.message)
   }
}

  return (
   <>
   <div>
       <h1>
        Register
       </h1>
      <form onSubmit={handlesubmit}>
        <input type="text" placeholder='Enter your name' name='name' onChange={handlechange}/>
        <input type="email" placeholder='Example@gmail.com' name='email' onChange={handlechange}/>
        <input type="password" placeholder='Enter your password' name='password' onChange={handlechange}/>
        <input type="submit" value={"Register"} />
      </form>
   </div>
   </>
  )
}

export default Register
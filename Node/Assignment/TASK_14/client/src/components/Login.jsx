import React, { useState } from 'react'
import axios from 'axios'

const Register = () => {

    const [logindata,setLoginData] = useState({email:"",password:""}) 

    const handlechange = (e) => {
       setLoginData({...logindata,[e.target.name]:e.target.value})
    }

    const handlesubmit = async (e) =>{
    e.preventDefault()
    try {
     const savedata = await axios.post(
       "http://localhost:5000/api/users/login",
       logindata
     )
     console.log(savedata.data)

     localStorage.setItem("logintoken",savedata.data.token)
     setLoginData({email:"",password:""})
   } catch (error) {
     console.log(error.response?.data || error.message)
   }
}

  return (
   <>
   <div>
    <h1>Login</h1>
      <form onSubmit={handlesubmit}>
        <input type="email" placeholder='Example@gmail.com' name='email' onChange={handlechange}/>
        <input type="password" placeholder='Enter your password' name='password' onChange={handlechange}/>
        <input type="submit" value={"Register"} />
      </form>
   </div>
   </>
  )
}

export default Register
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

   const navigate = useNavigate()

    const btn_txt = "Get User"
    const txt2 = "Click to get User Details"
    const home_page = "Home Page"
    
    const user = [{
        id: 1 ,
        name: "Rajesh",
        role: "Developer"
    },
    {
        id:2,
        name:"Surya",
        role: "Testing"
    },
    {
        id:3,
        name:"Isac",
        role: "Project Manager"
    }]

    const handleuser = (user) => {
       navigate(`/user/${user.id}`,{
        state: user,
       })
     
    }



  return (
   <>
     <div>
      <h1 className='bg-gray-900 text-white text-center p-3 text-2xl'>{home_page}</h1>
      </div>
      <div className='bg-yellow-500 h-60 flex justify-center items-center gap-5 flex-col'>
      <h3 className='text-3xl' >{txt2}</h3>
      <button onClick={() => handleuser(user)} className='bg-black text-center text-white text-xl p-3 rounded hover:bg-gray-900'>{btn_txt}</button>
     </div>
   </>
  )
}

export default Home
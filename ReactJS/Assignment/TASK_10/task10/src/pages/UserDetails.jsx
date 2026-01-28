import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const UserDetails = () => {
    const userInfo = "User Details"

    const {id} = useParams()
    const location = useLocation()
    const user = location.state

    if(!user){
        return <h3>No user data Found! please go back</h3>
    }

  return (
    <>
    <div>
      <div>
        <h1 className='text-2xl bg-gray-900 p-3 text-center text-white'>{userInfo}</h1>
      </div>
      <div className='flex justify-center items-center gap-5 mt-20'>
        {user.map((e,i)=>(
        <div className='bg-gray-900 p-5 text-white rounded w-60 h-30'>
         <div key={i} >
         <h2>Id: {e.id}</h2>
         <h2>Name: {e.name}</h2>
         <h2>Role: {e.role}</h2>
        </div>   

        </div>    
       
         

        ))}

      </div>
    </div>
    </>
  )
}

export default UserDetails
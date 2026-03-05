import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const Dashboard = () => {

    const navigate = useNavigate()

    const [datas,setDatas] = useState([])


    useEffect(()=>{
        const token = localStorage.getItem("logintoken")

        if(!token){
            alert("Invalid Access")
            navigate("/login")
            return
        }

        const fetchdata = async () => {
            try {
                
                const res =await axios.get("http://localhost:5000/api/users/dashboard",{headers:{Authorization:token}})
                console.log(res.data.getdatas)
                setDatas(res.data.getdatas)
            } catch (error) {
                alert(error.response.data.msg)
                navigate("/login")
            }
        }

        fetchdata()
    },[])

  return (
   <>
    <div>
        <div className='text-2xl'>
            Dashboard
        </div>
        {datas.map((e)=>(
            <div key={e._id}>
               <h1>{e.name}</h1>
            </div>
        ))}
    </div>
   </>
  )
}

export default Dashboard
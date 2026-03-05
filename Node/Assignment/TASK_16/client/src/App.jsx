import React, { useEffect, useState } from 'react'
import './index.css'
import axios from 'axios'


const App = () => {

    const [formdata,setFormData] = useState({name:"",email:"",age:""})

    const [users,setUsers] = useState([])

    const [editId,setEditId] = useState("")
   
    const handlechange = (e) => {

      setFormData({...formdata,[e.target.name]:e.target.value})

    }
 // add data to the db via form
    const adddata = async (e) =>{
      e.preventDefault()
       
      try {
          const add = await axios.post('http://localhost:5000/api/crud/create',formdata)

          alert(add.data.msg)
          setFormData({name:"",email:"",age:""})
          fetchdata()


      } catch (error) {
        alert(error.response.data.msg) 
      }

    }

    //read data from the db 

    const fetchdata = async () => {

      try {
        
      const readdata = await axios.get("http://localhost:5000/api/crud/read")

      setUsers(readdata.data.getdatas)

      

      } catch (error) {
        alert(error.response.data.msg)
      }

    }

    useEffect(()=>{
       (async ()=>{
         await fetchdata()
       })()
    },[]
  )

    const handleEdit = async (user) => {

       setFormData({name:user.name,email:user.email,age:user.age})
       setEditId(user._id)
    }
    
    const handleDelete = async (userid) => {

           
      try {
        const deletedata = await axios.delete(`http://localhost:5000/api/crud/delete/${userid}`)
        alert(deletedata.data.msg)
        fetchdata()
      } catch (error) {
        alert(error.response.data.msg)
      }
    }

    const updatedata = async (e) => {
     e.preventDefault()
     try {
        const updatedata =await axios.put(`http://localhost:5000/api/crud/update/${editId}`,formdata)
        alert(updatedata.data.msg)
        fetchdata()
     } catch (error) {
      alert(error.response.data.msg)
     }
    }
  return (
    <>
      <div className="mt-20">
        <div>
          <form className="flex justify-center items-center flex-col gap-3">
            <input
              type="text"
              name="name"
              value={formdata.name}
              onChange={handlechange}
              placeholder="Enter your name"
              className="border w-60 px-2 py-1 rounded"
            />
            <input
              type="email"
              name="email"
              onChange={handlechange}
              value={formdata.email}
              placeholder="Enter your email"
              className="border w-60 px-2 py-1 rounded"
            />
            <input
              type="text"
              name="age"
              value={formdata.age}
              onChange={handlechange}
              placeholder="Enter your age"
              className="border w-60 px-2 py-1 rounded"
            />

            {editId ?
             <button
              onClick={updatedata}
              className="bg-yellow-500 w-60 px-2 py-1 rounded"
            >
              Update
            </button>
              :
           <button
              onClick={adddata}
              className="bg-green-700 text-white w-60 px-2 py-1 rounded"
            >
              Add
            </button> }
           
            
          </form>
        </div>

        <div className="mt-20 flex justify-center items-center">
          <table className="min-w-200 border border-gray-300 mt-10">
            <thead className="bg-gray-200">
              <tr>
                <th className="border px-2 py-1">S.No</th> 
                <th className="border px-2 py-1">Name</th>
                <th className="border px-2 py-1">Email</th>
                <th className="border px-2 py-1">Age</th>
                <th className="border px-2 py-1">Action</th>
              </tr>
            </thead>

            <tbody>
              {users.map((e,i) => (
                <tr key={e._id} className="hover:bg-gray-100 text-center">
                  <td className="border px-4 py-2">{i+1}</td>
                  <td className="border px-4 py-2">{e.name}</td>
                  <td className="border px-4 py-2">{e.email}</td>
                  <td className="border px-4 py-2">{e.age}</td>
                  <td className="border px-4 py-2 space-x-2">
                    <button className="bg-yellow-500 text-white px-3 py-1 rounded"
                     onClick={()=> handleEdit(e)}>
                      Edit
                    </button>

                    <button className="bg-red-600 text-white px-3 py-1 rounded"
                     onClick={()=> handleDelete(e._id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default App
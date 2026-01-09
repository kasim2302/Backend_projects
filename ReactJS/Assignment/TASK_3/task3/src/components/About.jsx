import React from 'react'

const About = () => {
  
  const program = "Javascript"
  const year = 1995

  const Author = {name:"Brendan Eich",city:"Pennsylvania"}
   
  const skills = ["HTML","CSS","JAVASCRIPT","REACT JS"]

  const products = [{id:1,name:"Labtop",price:50000},
    {id:2,name:"RAM",price:1000},
    {id:3,name:"SSD",price:2500},
    {id:4,name:"Mouse",price:800}]
  return (
   <>
     <div className='text-2xl mx-10 my-10'>Rendering Process</div>
      <div className='text-xl mx-10 my-10'>Primitive Rendering:</div>
     <div className=' p-5 w-100 mx-10 my-10 shadow-2xl' >
        <h3>Programming Name: {program}</h3>
        <h3>Published year: {year}</h3>
     </div>
      <div className='text-xl mx-10 my-10'>Non Primitive Rendering:</div>
     <div className=' p-5 w-100 mx-10 my-10 shadow-2xl' >
        <h3>Author: {Author.name}</h3>
        <h3>City: {Author.city}</h3>
     </div>

       <div className=' p-5 w-100 mx-10 my-10 shadow-2xl' >
       <h1 className='text-xl bg-black text-white p-3'>Skills:</h1>
        <ul >
          <li>{skills[0]}</li>
          <li>{skills[1]}</li>
          <li>{skills[2]}</li>
          <li>{skills[3]}</li>
        </ul>
     </div>

     <div className="p-6 overflow-x-auto mx-5 my-10">
      <table className="min-w-100 border border-gray-200 rounded-lg overflow-hidden  shadow-2xl">
        
        {/* Table Head */}
        <thead className="bg-black text-white">
          <tr>
            <th className="px-6 py-3 text-left">ID</th>
            <th className="px-6 py-3 text-left">Name</th>
            <th className="px-6 py-3 text-left">Price (₹)</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody className="bg-white divide-y">
          {products.map((item) => (
            <tr
              key={item.id}
              className="hover:bg-gray-100 transition"
            >
              <td className="px-6 py-4">{item.id}</td>
              <td className="px-6 py-4">{item.name}</td>
              <td className="px-6 py-4 font-medium text-green-600">
                ₹{item.price}
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>


   </>
  )
}

export default About
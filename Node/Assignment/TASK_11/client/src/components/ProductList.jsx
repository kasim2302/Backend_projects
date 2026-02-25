import React, { useState } from 'react'
import axios from 'axios'
const ProductList = () => {


    const [data1,setData] = useState([])


    const handleclick = async () => {
     
        const res = await axios.get('http://localhost:5000/api/product/get')

        setData(res.data.getdata)   
    }

  const handleClick1 = async () => {
  try {
    const productObject = {
      product_Id: 102,
      product_Name: "Charger",
      Category: "Electronics",
      product_Price: 4000,
      Quantity: 10
    }

    const res = await axios.post(
      "http://localhost:5000/api/product/add",
      productObject
    )

    console.log(res.data)
  } catch (error) {
    console.log("Error:", error.response?.data)
  }
}

  return (
   <>
   
    <div className='mt-10'>
        <h1 className='text-3xl text-center '>Send Product to Backend</h1>
    </div>
    <div>
        <div className='flex justify-center items-center flex-col mt-10 '>
        <button className='bg-yellow-400 text-white px-4 py-2 rounded cursor-pointer'
        onClick={handleClick1}
        >Add Product</button>
    </div>
    </div>


    <div className='mt-10'>
        <h1 className='text-3xl text-center '>Frontend to Backend API Process</h1>
    </div>

    <div className='flex justify-center items-center flex-col mt-10 '>
        <button className='bg-yellow-400 text-white px-4 py-2 rounded cursor-pointer'
        onClick={handleclick}
        >Get Product</button>
    </div>

     <div className='mt-10'>
      <div className='flex justify-center items-center gap-5 flex-wrap'>
        {data1.map((e)=>(
        <div key={e._id} className='w-70 h-40 flex justify-center items-center flex-col gap-3 p-4 shadow'>
           <h3>Product Name: {e.product_Name}</h3>
           <h3>Category: {e.Category}</h3>
           <h3>Price: {e.product_Price}</h3>
           <h3>Quantity: {e.Quantity}</h3>
        </div>
        ))}

      </div> 

      
      
    </div>
   </>
)
}

export default ProductList
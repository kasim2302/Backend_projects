import React, { useState } from 'react'

const DummyApi_1 = () => {

    const[product,setProduct] = useState([])
    const[loading,setLoading] = useState(false)

    const fetchdata = async () =>{
        setLoading(true)

        const res = await fetch("https://dummyjson.com/products?limit=2")
        const data = await res.json()

        setProduct(data.products)
        setLoading(false)

    }

  return (
    <>
    <div className='mt-10 flex justify-center items-center flex-col gap-3'>
        <button className='bg-green-500 p-3 text-white rounded cursor-pointer' onClick={fetchdata}>Fetch Product</button>
    </div>
   

    {loading && <h2>Loading...</h2> }
    {!loading && 
     product.map((e)=>(
        <div className='shadow-xl p-5 rounded flex items-center flex-col gap-3 w-80' key={e.id}>
        <img src={e.thumbnail} alt={e.title} width="200" />
        <h3>{e.title}</h3>
        <h3>price: ₹{e.price}</h3>
        <button className='bg-yellow-400 text-center text-white p-3 rounded cursor-pointer '>Buy Now</button>
       </div>

     ))
    }
    </>
  )
}

export default DummyApi_1
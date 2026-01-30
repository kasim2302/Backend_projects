import React, { useEffect, useState } from 'react'

const DummyApi_2 = () => {

    const[product,setProduct] = useState([])
    const[show,setShow] = useState(false)    

    useEffect(()=>{
        const fetchdata  = async () => {
         const res = await fetch("https://dummyjson.com/products?limit=1")
         const data = await res.json()
         setProduct(data.products)
        }
        fetchdata()
    },[])
    

  return (
    <>
      <div className='flex justify-center items-center flex-col mt-10'>
        <button onClick={() => setShow(!show)} className='bg-black text-white p-3 rounded'>
            {show ? "Hide products":"show products"}
        </button>
        {show && 
         product.map((e)=>(
       <div className='shadow-xl p-5 rounded flex items-center flex-col gap-3' key={e.id}>
        <img src={e.thumbnail} alt={e.title} width="200" />
        <h3>{e.title}</h3>
        <h3>price: ₹{e.price}</h3>
        <button className='bg-yellow-400 text-center text-white p-3 rounded cursor-pointer '>Buy Now</button>
       </div>            
         ))
        }
      </div>
    </>
  )
}

export default DummyApi_2
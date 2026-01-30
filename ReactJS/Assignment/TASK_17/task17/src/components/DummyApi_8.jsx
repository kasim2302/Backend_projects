import React, { useEffect, useState } from "react"

const DummyApi_8 = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://dummyjson.com/products?limit=6")
      const data = await res.json()
      setProducts(data.products)
    }

    fetchData()
  }, [])

  return (
     <div className='mt-20 flex flex-wrap justify-center items-center flex-row gap-30 p-10'> 
      {products.map((e) => (

      <div className='shadow-xl p-5 rounded flex items-center flex-col gap-3' key={e.id}>
        <img src={e.thumbnail} alt={e.title} width="200" />
        <h3>{e.title}</h3>
        <h3>price: ₹{e.price}</h3>
        <button className='bg-yellow-400 text-center text-white p-3 rounded cursor-pointer '>Buy Now</button>
       </div>
        ))}
    </div>
  )
}

export default DummyApi_8

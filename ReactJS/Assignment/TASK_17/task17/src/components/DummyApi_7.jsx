import React, { useEffect, useState } from "react"

const DummyApi_7 = () => {
  const [products, setProducts] = useState([])
  const [isSorted, setIsSorted] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://dummyjson.com/products?limit=12")
      const data = await res.json()
      setProducts(data.products)
    }

    fetchData()
  }, [])

  const sortByName = () => {
    const sortedData = [...products].sort((a, b) =>
      a.title.localeCompare(b.title)
    )

    setProducts(sortedData)
    setIsSorted(true)
  }

  return (
     <>
    <div className="flex flex-col justify-center items-center mt-10">
      <button
        onClick={sortByName}
        className="bg-blue-600 text-white p-3 rounded"
      >
        Sort A → Z
      </button>

    </div>
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
    </>
  )
}

export default DummyApi_7

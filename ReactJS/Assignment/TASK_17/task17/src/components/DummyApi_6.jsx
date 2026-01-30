import React, { useState } from "react"

const DummyApi_6 = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchData = async () => {
    setLoading(true)

    const res = await fetch("https://dummyjson.com/products?limit=20")
    const data = await res.json()

    setProducts(data.products)
    setLoading(false)
  }

  return (
    <div className="mt-20 text-center">
      <button
        onClick={fetchData}
        className="bg-green-500 text-white px-4 py-2 mb-4 rounded"
      >
        Fetch Data
      </button>

      {loading && <h2>Loading...</h2>}

      {/* {!loading && products.length > 0 && (
        <h3>Total Records: {products.length}</h3>
      )} */}
      {!loading && products.length > 0 &&(
        <h3>Total Records: {products.length}</h3>
      )}
    </div>
  )
}

export default DummyApi_6

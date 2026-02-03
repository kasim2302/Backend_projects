import React, { useEffect, useState } from 'react'

const ProductPage = () => {
   
    const [product,setProduct] = useState([])
    const [category,setCategory] = useState("")
    useEffect(()=>{
        const fetchapi = async () => {
          try{
            const res = await fetch("https://dummyjson.com/products?limit=30")
            const data  = await res.json()
            setProduct(data.products)
            
          }
          catch(error){
             console.log("Error",error)
          }
        }
        fetchapi()
    },[])
     
    const handledata = (e)=>{
      setCategory(e.target.value)
    }
    const UniqueCategories = [...new Set(product.map((p)=> p.category))]

    const filterProducts = category === "" ? product : product.filter(p => p.category === category)
  return (
   <>
   <div className="flex justify-center items-center flex-col shadow p-3">
      <div>
        <select value={category} onChange={handledata} className='border p-1 rounded'>
         <option value="Select Category" >Select Category</option>
         {UniqueCategories.map((e)=>(
            <option  key={e}>{e}</option>
         ))}
        </select>
      </div>
   </div>
   <div className="mt-20">
  {filterProducts.length === 0 ? (
    <p className="text-center">No Records Found</p>
  ) : (
    <div className="flex justify-center items-start gap-6 flex-wrap">
      {filterProducts.map((e) => (
        <div
          key={e.id}
          className=" w-60 h-80 flex flex-col justify-center items-center gap-4 shadow-xl"
        >
          <img
            src={e.thumbnail}
            alt="product"
            className="w-24 h-24 object-contain"
          />
           <h3>{e.title}</h3>
          <h3>₹{e.price}</h3>
          <button className="bg-black text-white px-4 py-2 rounded">
            Add to cart
          </button>
        </div>
      ))}
    </div>
  )}
</div>

   </>
  )
}

export default ProductPage
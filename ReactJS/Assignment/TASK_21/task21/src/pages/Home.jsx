import React, { useState } from 'react'
import UseCounter from '../hooks/UseCounter'
import useToggle from '../hooks/useToggle'
import useInput from '../hooks/useInput'
import useFetch from '../hooks/useFetch'
import useTimer from '../hooks/useTimer'
const Home = () => {
   const{count,increment,decrement} = UseCounter(0)
   const{value: isOn , Toggle} = useToggle(false)
   const {value1,onChange} = useInput("")
   const {data,loading,error} = useFetch("https://dummyjson.com/products?limit=5")
   const {seconds} = useTimer()
   if(loading) return <h2>Loading...</h2>
   if(error) return <h2>Something went wrong!</h2>

    return (
  <>
    <div className='flex justify-center items-center gap-5 flex-col mt-20'>
        <h1 className='text-xl'>{count}</h1>
        <div className='flex gap-5'>
         <button onClick={increment} className='bg-black text-white p-2 rounded cursor-pointer '>Increment</button>
         <button onClick={decrement} className='bg-black text-white p-2 rounded cursor-pointer '>Decrement</button>
        </div>
    </div>

    <div className='flex justify-center items-center gap-5 flex-col mt-20'>
        <p className={`text-xl  ${isOn ? "text-green-600" : "text-red-700"}`}>
            {isOn ? "ON" : "OFF"}
        </p>
        <button onClick={Toggle} className='bg-black text-white p-2 rounded'>Toggle</button>
    </div>

    <div className='flex justify-center items-center gap-5 flex-col mt-20'>
     
     <p>{value1}</p>
     <input type="text" onChange={onChange} className='border w-70 rounded px-3 py-1' />
    </div>

    <div className='flex justify-center items-center gap-5 flex-row flex-wrap p-5 mt-20'>
            {data.map((e)=>(
            <div className='flex justify-center items-center gap-3 flex-col shadow p-5' key={e.id}>
                <img src={e.thumbnail} alt="image" width={200} height={200}/>
                <h2>{e.title}</h2>
                <h2>{e.price}</h2>
                <button className='bg-black text-white p-2 rounded cursor-pointer'>Add to Cart</button>
            </div>
            ))}
    </div>

    <div className='flex justify-center items-center flex-row'>
       <h2 className='text-2xl'>Timer: {seconds}</h2>
    </div>
  </>
)
}

export default Home
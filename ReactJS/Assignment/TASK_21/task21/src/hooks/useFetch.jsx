import React, { useEffect, useState } from 'react'

const useFetch = (url) => {
    const[data,setData] = useState(null)
    const[loading,setLoading] = useState(true)
    const[error,setError] = useState(null)
    
    useEffect(()=>{

        const fetchdata =async ()=>{
        try{
           const res = await fetch(url)
           const result = await res.json()
           setData(result.products)
        }
        catch(error){
           setError("Something Went Wrong!")
        }
        finally{
           setLoading(false)
        }
        }
        fetchdata()
    },[url])

  return {data,loading,error}
}

export default useFetch
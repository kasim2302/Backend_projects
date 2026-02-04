import React, { useEffect, useState } from 'react'

const useTimer = () => {
    const[seconds,setSeconds] = useState(0)

    useEffect(()=>{
       const intervalid = setInterval(()=>{
        setSeconds(prev => prev + 1)
       },1000)

       return () => clearInterval(intervalid)
    },[])
  return {seconds}
}

export default useTimer
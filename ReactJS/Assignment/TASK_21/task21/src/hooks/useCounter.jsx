import React, { useState } from 'react'

const UseCounter = (initialvalue=0) => {

    const[count,setCount] = useState(0)

    const increment = () =>{
        setCount(prev => prev + 1)
    }
    const decrement = () => {
        setCount(prev => prev - 1)
    }
  return {count,increment,decrement}
}

export default UseCounter
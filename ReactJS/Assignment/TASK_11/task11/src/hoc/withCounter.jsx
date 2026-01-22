import { useState } from "react"

  

const withCounter = (WrappedComponent) =>{

    return function(){
      const [count,setCount] = useState(0)
       
      const increment = ()=>{
        setCount(count + 1)
      }
      const decrement = ()=>{
      
        setCount(count - 1)
      }

      return (
        <WrappedComponent count={count} increment={increment} decrement={decrement}/>
      )

    }
} 
export default withCounter
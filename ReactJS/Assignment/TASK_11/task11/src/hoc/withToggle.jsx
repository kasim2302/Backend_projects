import { useState } from "react"

const withToggle = (WrappedComponent) =>{
      return function(){
        const[isOn,setIson] = useState(false)

        return(
            <>
               <WrappedComponent isOn={isOn} toggle={()=> setIson(!isOn)} />
            </>
        )
      }
}
export default withToggle
import { useState } from "react"

const withShowHide = (WrappedComponent) =>{

    return function(){
           const [show,setShow] = useState(false)
            
           const handlechange = ()=>{
               setShow(show ? false : true)
              
           }
           return(
            <> 
            <div className="flex justify-center items-center mt-10 flex-col gap-2 ">
             <button onClick={handlechange} className="bg-black text-white text-center p-2 rounded"> 
              {show ? "hide" : "show"}    
             </button>
             {show && <WrappedComponent/>}
             </div>
            </>
           )
    }
}
export default withShowHide
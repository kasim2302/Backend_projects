import React, {  useRef } from 'react'
import { toast } from 'react-toastify'
const Practice_Useref = () => {

    const Heading_ref = useRef(null)
    const background_ref = useRef(null)
    const inputref = useRef(null)
    const handlechange = () =>{
        Heading_ref.current.innerText = "Welcome"
        Heading_ref.current.style.color = "green"
        background_ref.current.style.backgroundColor = "yellow"

    }
    // useEffect(()=>{
    //     inputref.current.focus()
    // },[])

    const refname =useRef(null)
    const refpwd =useRef(null)
    const handledata = (e) =>{
    e.preventDefault()

    const name = refname.current.value
    const pwd = refpwd.current.value
     
    toast.success(` username: ${name}
                    password: ${pwd} `)
    
    }

    const head_ref = useRef(null)
    const count_ref = useRef(0)
    const increasecount = () => {
      count_ref.current = count_ref.current + 1
      head_ref.current.innerText = count_ref.current 
    }

    const pref = useRef(null)
    const showtext = () =>{
        toast.success(pref.current.innerText)
    }
  return (
   <>
   <div className='flex justify-center items-center flex-col gap-5' ref={background_ref}>
       <h1 ref={Heading_ref}>Jafina</h1>
       <button className='bg-black text-white p-3 rounded cursor-pointer' onClick={handlechange}>Change Text</button>
    <div>
    <h2>Auto Focus using Ref</h2>    
    <input autoFocus type="text" className='border w-70 px-3 py-1 rounded' ref={inputref} placeholder='Enter the input'/>
   </div>

   </div>
   
   <div>
    <form className='flex justify-center items-center flex-col gap-5 mt-20' onSubmit={handledata}>
        <h2 className='text-2xl'>Login Form</h2>
        <input type="text" ref={refname} className='border w-70 px-3 py-1 rounded' placeholder='Enter the username'/>
        <input type="text" ref={refpwd} className='border w-70 px-3 py-1 rounded' placeholder='Enter the password'/>
        <button type='submit' className='bg-blue-700 w-70 text-white px-3 py-1 rounded cursor-pointer'>Login</button>
    </form>
   </div>
   <div  className='flex justify-center items-center flex-col gap-5 mt-20'>
      <h2 className='text-xl' ref={head_ref}></h2>
      <button className='bg-black text-white p-3 rounded' onClick={increasecount}>Count</button>
   </div>

   <div className='flex justify-center items-center flex-col gap-5 mt-20'>
      <p ref={pref}>Welcome to useRef practice webpage</p>
      <button onClick={showtext} className='bg-black text-white p-3 rounded'>Alert Text</button>
   </div>
   </>
)
}

export default Practice_Useref
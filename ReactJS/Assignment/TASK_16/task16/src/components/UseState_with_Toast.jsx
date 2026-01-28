import React, { useState } from 'react'
import { toast } from 'react-toastify'
const UseState_with_Toast = () => {
    // Task -1
    const[num,setNum] = useState("")
     
    const handlesubmit = (e) =>{
        e.preventDefault()
        const n = Number(num)

        if(n >= 10 && n <= 100 && n % 10 === 0){
            toast.success("Good Number")
            setNum("")
        }
        else{
            toast.error("Not a good Number")
        }
    }

    // Task-2

     const[num1,setNum1] = useState("")

     const handlesubmit1 = (e) => {
     e.preventDefault()

     const n1 = Number(num1)

     if(n1 >= 50 && n1 <= 150 && n1 % 5 === 0){
        toast.success("Valid Number")
        setNum1("")
     }
     else{
        toast.error("Invalid Number")
     }
    }

    //Task - 3

    const[count,setCount] = useState(0)
    const[value,setValue] = useState("")

    const handlesubmit2 = (e) => {
    
    e.preventDefault()
    
    if(count >= 3){
        toast.warning("Limit Reached")
        return
    }
     setCount(prev => prev + 1) 
     toast.success(`Submitted ${count + 1} times`)

    }

    //Task-4

    const[num2,setNum2] = useState("")

    const handlesubmit3 = (e) => {
      e.preventDefault()

      if(num2.length === 4 && num2[0] === '9' && !isNaN(num2) ){
        toast.success("Accepted Number")
        setNum2("")
      }
      else{
        toast.error("Rejected Number")
      }
    }

    //Task-5

    const[num3,setNum3] = useState("")

    const handlesubmit4 = (e) => {
       e.preventDefault()
       const n2 = Number(num3)

       if(n2 % 3 === 0 && n2 % 5 === 0){
        toast.success("Special Number")
        setNum3("")
       }
       else{
        toast.info("Normal Number")
       }
    }

    return (
    <>
    <div className='text-center'>
        <h3 className='bg-black text-2xl text-white p-3 '>UseState() with Toast Function</h3>
    </div>
    {/* TASK-1 */}
    <div className='mt-30'>
        <form onSubmit={handlesubmit1 } className='flex justify-center items-center flex-col gap-3'>
             <h3 className='text-xl'>Good Number Checker</h3>
            <input type="text" value={num} onChange={(e) =>setNum(e.target.value)} className='border px-3 py-1 rounded'/>
            <button className='bg-black p-2 rounded text-white'>Check</button>
        </form>
    </div>

    {/* TASK-2 */}
    <div className='mt-10'>
    <form onSubmit={handlesubmit1 } className='flex justify-center items-center flex-col gap-3'>
             <h3 className='text-xl'>Range-Based Validation </h3>
            <input type="text" value={num1} onChange={(e) =>setNum1(e.target.value)} className='border px-3 py-1 rounded'/>
            <button className='bg-black p-2 rounded text-white'>Check</button>
    </form>
    </div>
     
    {/* TASK-3 */}
    <div className='mt-10'>
    <form onSubmit={handlesubmit2 } className='flex justify-center items-center flex-col gap-3'>
             <h3 className='text-xl'>Attempt-Limited Submit </h3>
            <input type="text" value={value} onChange={(e) =>setValue(e.target.value)} className='border px-3 py-1 rounded'/>
            <button className='bg-black p-2 rounded text-white' disabled={count >= 3} >Submit</button>
    </form>
    </div>
    
    {/* TASK-4 */}
    <div className='mt-10'>
    <form onSubmit={handlesubmit3 } className='flex justify-center items-center flex-col gap-3'>
             <h3 className='text-xl'> Pattern-Based Number Check </h3>
            <input type="text" value={num2} onChange={(e) =>setNum2(e.target.value)} className='border px-3 py-1 rounded'/>
            <button className='bg-black p-2 rounded text-white'>Submit</button>
    </form>
    </div>

     {/* TASK-5 */}
    <div className='mt-10'>
    <form onSubmit={handlesubmit4 } className='flex justify-center items-center flex-col gap-3'>
             <h3 className='text-xl'>Conditional Reset Logic </h3>
            <input type="text" value={num3} onChange={(e) =>setNum3(e.target.value)} className='border px-3 py-1 rounded'/>
            <button className='bg-black p-2 rounded text-white'>Check</button>
    </form>
    </div>
    
    </>
)
}

export default UseState_with_Toast
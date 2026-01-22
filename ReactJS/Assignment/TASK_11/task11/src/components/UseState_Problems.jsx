import React, { useState } from 'react'

const UseState_Problems = () => {
  return (
   <>
     <Check_Odd_Even/>
     <NumberCheck/>
     <ToggleText/>
     <Voting/>
     <PasswordToggle/>
     <SquareCube/>
     <CharCounter/>
     <Result/>
     <ColorChange/>
   </>  
 )
}

export default UseState_Problems

export const Check_Odd_Even = () =>{
    const[num,setNum] = useState("")
    return(
        <>
        <div className='flex justify-center items-center flex-col gap-1'>
         <h3 className='text-xl text-center'>{num % 2 === 0 ? "Even" : "Odd"}</h3>
         <input type="text" value={num} onChange={(e)=> setNum(e.target.value)} placeholder='Enter the Number' className='border px-3 py-1 rounded' />

        </div>
         
        </>
    )
}


export const NumberCheck = () =>{

     const[number,setNumber] = useState("")
    return(
        <>

         <div className='flex justify-center items-center flex-col gap-1'>
         <h3 className='text-xl text-center'>{number > 0 ? "positive" : number < 0 ? "Negative" : "Zero"}</h3>
         <input type="text" value={number} onChange={(e)=> setNumber(e.target.value)} placeholder='Enter the Number' className='border px-3 py-1 rounded' />

        </div>
        </>
    )
}

const ToggleText = () => {
  const [isOn, setIsOn] = useState(false);

  return (
   
    <div className="flex justify-center items-center mt-10 flex-col gap-2 ">
      <button onClick={() => setIsOn(!isOn)} className="bg-black text-white text-center p-2 rounded">
      {isOn ? "ON" : "OFF"}
    </button>
            
    </div>
  );
};

const Voting = () => {
  const [age, setAge] = useState(17);

  return(
    <>
    <div className='flex justify-center items-center flex-col gap-1'>
        <h3 className='text-xl text-center'>{age >= 18 ? "Eligible" : "Not Eligible"}</h3>
        <input type="text" value={age} onChange={(e)=> setAge(e.target.value)} placeholder='Enter the your age' className='border px-3 py-1 rounded' />
    </div>
    </>
  )
  
};

const PasswordToggle = () => {
  const [show, setShow] = useState(false);

  return (
    <>
     
       <div className="flex justify-center items-center mt-10 flex-col gap-2 ">
       <input type={show ? "text" : "password"} placeholder="Password"  className='border px-3 py-1 rounded'/>
       <button onClick={() => setShow(!show)} className="bg-black text-white text-center p-2 rounded">
        {show ? "Hide" : "Show"}
      </button>            
        </div>
    </>
  );
};

const SquareCube = () => {
  const [num, setNum] = useState("");

  return (
    <>
    <div className='flex justify-center items-center flex-col gap-1 mt-5'>
     <h3>Square: {num ** 2}</h3>
      <h3>Cube: {num ** 3}</h3>
      <input type="text" value={num} onChange={(e)=>setNum(e.target.value)} placeholder='Enter the number' className='border px-3 py-1 rounded'/>
     
    </div>
     
    </>
  );
};

const CharCounter = () => {
  const [text, setText] = useState("");

  return (
    <>
      <div className='flex justify-center items-center gap-2 flex-col mt-5'>
      <p>Characters: {text.length}</p>
      <input onChange={(e) => setText(e.target.value)} placeholder='Enter the characters' className='border px-3 py-1 rounded'/>
      </div>
    </>
  );
};

const Result = () => {
  const [marks, setMarks] = useState("");

  return (
    <>
    <div className='flex justify-center items-center flex-col gap-1'>
        <h3 className='text-xl text-center'>{marks >= 40 ? "Pass" : "Fail"}</h3>
        <input type="text" value={marks} onChange={(e)=> setMarks(e.target.value)} placeholder='Enter your marks' className='border px-3 py-1 rounded' />
    </div>
    </>
  )
  
};

const ColorChange = () => {
  const [isRed, setIsRed] = useState(true);

  return (
    <>
    <div className="flex justify-center items-center mt-10 flex-col gap-2 ">
      <button style={{ color: isRed ? "red" : "green" }} onClick={() => setIsRed(!isRed)} className="bg-black text-white text-center p-2 rounded">
      Change Color
    </button>
     </div>
    </>
  );
};

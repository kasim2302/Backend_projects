import React, { useState } from 'react'

const UseStateTask = () => {
  return (
    <>
    <TypedValue/>
    <ButtonValue/>
    <IsEligible_vote/>
    <EvenNum/>
    <OddNum/>
    <ShowNumbers/>
    </>
  )
}

export default UseStateTask

export const TypedValue = () => {

    const[value,setValue] = useState("")
    return(
        <>
        <div className='flex justify-center items-center gap-2 flex-col mt-10'>
            <h3>{value}</h3>
            <input type="text" onChange={(e) => setValue(e.target.value)} value={value}
             placeholder='Enter the value or charcater' className='border px-3 py-1 rounded'/>
        </div>
        </>
    )
}

export const ButtonValue = () =>{

    const[text,setText] = useState(false)
    const handlechange = () =>{
        setText(!text) 
    }
     
    return(
        <>
        <div className='flex justify-center items-center flex-col mt-5 gap-2'>
            <h3>{text ? "WELCOME" : "BYE"}</h3>
            <button onClick={handlechange} className='bg-black text-white text-center p-3 rounded'>Change Text</button>
        </div>
        </>
    )
}

export const IsEligible_vote = () => {
    const[vote,setVote] = useState("")
     
    const isVoter = (e) =>{
        setVote(e.target.value)
    }

    return(
        <>
        <div className='flex justify-center items-center flex-col mt-5 gap-2'>
         <h3>{vote >= 18 ? "Eligible" : "Not Eligible"}</h3>
         <input type="text" onChange={isVoter} placeholder='Enter your age' value={vote} className='border px-3 py-1 rounded'/>
        </div>
        </>
    )
}




export const EvenNum = () => {
  const [numbers, setNumbers] = useState([]);
  const [input, setInput] = useState("");

  const addNumber = () => {
    if (input === "") return;

    setNumbers([...numbers, Number(input)]);
    setInput("");
  };

  return (
    <div className="flex justify-center items-center flex-col gap-3 mt-5">
      <h2 className="font-bold">Even Numbers Only</h2>

      <input
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter number"
        className="border px-3 py-1 rounded"
      />

      <button
        onClick={addNumber}
        className="bg-black text-white px-4 py-1 rounded"
      >
        Add
      </button>

     
      <h3>
        {numbers
          .filter((num) => num % 2 === 0)
          .map((num, index) => (
            <span key={index} className="mr-2">
              {num}
            </span>
          ))}
      </h3>
    </div>
  );
};

export const OddNum = () => {
  const [numbers, setNumbers] = useState([]);
  const [input, setInput] = useState("");
  const [isOdd, setIsOdd] = useState(false);

  const addNumber = () => {
    if (input === "") return;

    const num = Number(input);

    // store every number in array
    setNumbers([...numbers, num]);

    // check odd or even
    if (num % 2 !== 0) {
      setIsOdd(true);
    } else {
      setIsOdd(false);
    }

    setInput("");
  };

  return (
    <div className="flex justify-center items-center flex-col gap-3 mt-5">
      <h2 className="font-bold">Even Number Checker</h2>

      <input
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter number"
        className="border px-3 py-1 rounded"
      />

      <button
        onClick={addNumber}
        className="bg-black text-white px-4 py-1 rounded"
      >
        Add
      </button>

      {isOdd && (
        <p className="text-red-500">This is not an even number</p>
      )}

      <h3 className="mt-2">
        {numbers
          .filter((num) => num % 2 === 0)
          .map((num, index) => (
            <span key={index} className="mr-2">
              {num}
            </span>
          ))}
      </h3>
    </div>
  );
};


export const ShowNumbers = () => {
  const [numbers, setNumbers] = useState([]);
  const [input, setInput] = useState("");

  const addNumber = () => {
    if (input === "") return;

    setNumbers([...numbers, Number(input)]);
    setInput("");
  };

  return (
    <div className="flex justify-center items-center flex-col gap-3 mt-5">
      <h2 className="font-bold">Entered Numbers</h2>

      <input
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter number"
        className="border px-3 py-1 rounded"
      />

      <button
        onClick={addNumber}
        className="bg-black text-white px-4 py-1 rounded"
      >
        Add
      </button>

      <div className="mt-2">
        {numbers.length === 0 ? (
          <p>No numbers added yet</p>
        ) : (
          numbers.map((num, index) => (
            <p key={index}>{num}</p>
          ))
        )}
      </div>
    </div>
  );
};

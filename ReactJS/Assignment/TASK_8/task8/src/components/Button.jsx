import React from 'react'

const Button = () => {
    const text1 = "click me"
const changetext = ()=>{
    alert("welcome to this website")
}
  return (
    <>
    <button className='bg-gray-950 text-white p-3 text-center rounded' onClick={changetext}>{text1}</button>
    </>
  )
}

export default Button
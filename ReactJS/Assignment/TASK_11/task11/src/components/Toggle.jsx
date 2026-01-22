import React from 'react'
import withToggle from '../hoc/withToggle'
const Toggle = ({isOn,toggle}) => {
  return (
    <>
    <div className='flex justify-center items-center flex-col gap-2 mt-10'>
        <h3>{isOn ? "Light Mode ☀️ " : "Dark Mode 🌙"}</h3>
        <button onClick={toggle} className='bg-black text-center text-white p-2 rounded'>Toggle</button>
    </div>
    </>
  )
}

export const LightOn  = withToggle(Toggle)
import React from 'react'
import './index.css'
import {ToastContainer } from 'react-toastify'
import UseState_with_Toast from './components/UseState_with_Toast'
const App = () => {
  return (
    <>
       <UseState_with_Toast/>
       <ToastContainer />
    </>
)
}

export default App
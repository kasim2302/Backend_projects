import React from 'react'
import './index.css'
import {  LikeHOC } from './components/Like'
import { Message, Show } from './components/ShowHide'
import { LightOn } from './components/Toggle'
import UseState_Problems from './components/UseState_Problems'
const App = () => {
  return (
 <>
    <LikeHOC/>
    {/* <DisLikeHOC/> */}
    <Show/>
    <Message/>
    <LightOn/>

    <UseState_Problems/>
 </>
  )
}

export default App
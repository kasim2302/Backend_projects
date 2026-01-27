import React from 'react'
import "./index.css"
import Counter from './components/Counter'
import ImmutableObject from './components/ImmutableObject'
import MultiInputForm from './components/MultiInputForm'
import ValidationForm from './components/ValidationForm'
import ConditionalUI from './components/ConditionalUi'
import CounterPrev from './components/CounterPrecv'
import TogglePrev from './components/TogglePrev'
import ArrayPrev from './components/Arrayprev'
import BatchingExample from './components/BatchingExample'
import FormSubmitCounter from './components/FormSubmitCounter'
const App = () => {
  return (
   <>
   <Counter/>
   <ImmutableObject/>
   <MultiInputForm/>
   <ValidationForm/>
   <ConditionalUI/>
   <CounterPrev/>
   <TogglePrev/>
   <ArrayPrev/>
   <BatchingExample/>
   <FormSubmitCounter/>



  
   

   
   </>
  )
}

export default App
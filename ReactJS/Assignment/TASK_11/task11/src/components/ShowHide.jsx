import React from 'react'
import withShowHide from '../hoc/withShowHide'
const ShowHide = () => {
  return (
   <>
    <h3>Welcome to Kingsland! </h3>
   </>
  )
}

export const Show = withShowHide(ShowHide)


const ShowMessage = () =>{
    return (
        <>
        <h3>Welcome to Winterfell!</h3>
        </>
    )
}

export const Message = withShowHide(ShowMessage)

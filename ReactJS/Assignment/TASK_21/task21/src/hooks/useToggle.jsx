import React, { useState } from 'react'

const useToggle = (initialvalue = false) => {
    
    const[value,setValue] = useState(initialvalue)

    const Toggle = () => {
        setValue(prev => !prev)
    }

  return {value,Toggle}
}

export default useToggle
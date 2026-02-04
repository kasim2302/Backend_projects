import React, { useState } from 'react'

const useInput = (initialvalue="") => {
  const[value1,setValue] = useState(initialvalue)

  const onChange = (e) => {
    setValue(e.target.value)
  }
  return {value1,onChange}
}

export default useInput
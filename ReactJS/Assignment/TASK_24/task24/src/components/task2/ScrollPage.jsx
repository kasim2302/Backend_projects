import { useState, useReducer, useEffect, useRef } from "react"

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [action.payload, ...state].slice(0, 5)
    case "CLEAR":
      return []
    default:
      return state
  }
}

export default function ScrollPage() {
  const [count, setCount] = useState(0)
  const [positions, dispatch] = useReducer(reducer, [])

  const throttleRef = useRef(false)
  const prevScrollRef = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      if (throttleRef.current) return
      throttleRef.current = true

      setTimeout(() => {
        const current = window.scrollY
        setCount(prev => prev + 1)
        dispatch({ type: "ADD", payload: current })
        prevScrollRef.current = current
        throttleRef.current = false
      }, 1000)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="bg-slate-800 p-6 rounded-xl h-[300px] overflow-y-scroll">
      <div className="h-[800px]">
        <h2 className="font-bold mb-3">Task 2 - Throttle Scroll</h2>
        <p>Scroll Count: {count}</p>

        <button
          onClick={() => dispatch({ type: "CLEAR" })}
          className="mt-2 px-3 py-1 bg-red-500 rounded"
        >
          Clear Positions
        </button>

        <ul className="mt-2">
          {positions.map((pos, i) => (
            <li key={i}>{pos}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

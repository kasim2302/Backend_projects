import { useState, useReducer, useRef, useEffect, lazy, Suspense } from "react"

const Results = lazy(() => import("./Results"))

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      if (!action.payload.trim()) return state
      return [...state, action.payload]
    case "CLEAR":
      return []
    default:
      return state
  }
}

export default function SearchPage() {
  const [text, setText] = useState("")
  const [count, setCount] = useState(0)
  const [history, dispatch] = useReducer(reducer, [])

  const inputRef = useRef(null)
  const timerRef = useRef(null)

  useEffect(() => inputRef.current.focus(), [])

  const handleChange = (e) => {
    const value = e.target.value
    setText(value)

    clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => {
      setCount(prev => prev + 1)
      dispatch({ type: "ADD", payload: value })
    }, 1000)
  }

  return (
    <div className="bg-slate-800 p-6 rounded-xl">
      <h2 className="font-bold mb-3">Task 1 - Debounce</h2>

      <input
        ref={inputRef}
        value={text}
        onChange={handleChange}
        className="w-full p-2 bg-slate-700 rounded"
        placeholder="Search..."
      />

      <p className="mt-2">Search Count: {count}</p>

      <button
        onClick={() => dispatch({ type: "CLEAR" })}
        className="mt-2 px-3 py-1 bg-red-500 rounded"
      >
        Clear History
      </button>

      <ul className="mt-2 space-y-1">
        {history.map((h, i) => (
          <li key={i} className="bg-slate-700 p-1 rounded">{h}</li>
        ))}
      </ul>

      <Suspense fallback={<p>Loading...</p>}>
        <Results query={text} />
      </Suspense>
    </div>
  )
}

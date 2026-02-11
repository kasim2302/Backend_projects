import { useReducer, useState, useRef } from "react"

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload]
    case "DELETE":
      return state.filter((_, i) => i !== action.index)
    default:
      return state
  }
}

export default function TodoPage() {
  const [todos, dispatch] = useReducer(reducer, [])
  const [text, setText] = useState("")
  const [count, setCount] = useState(0)

  const inputRef = useRef(null)
  const timerRef = useRef(null)

  const handleChange = (e) => {
    clearTimeout(timerRef.current)
    const value = e.target.value
    timerRef.current = setTimeout(() => setText(value), 500)
  }

  const addTodo = () => {
    if (!text.trim()) return
    dispatch({ type: "ADD", payload: text })
    setCount(prev => prev + 1)
    setText("")
    inputRef.current.focus()
  }

  return (
    <div className="bg-slate-800 p-6 rounded-xl">
      <h2 className="font-bold mb-2">Task 5 - Todo</h2>

      <input
        ref={inputRef}
        onChange={handleChange}
        className="p-2 bg-slate-700 rounded w-full"
        placeholder="Add todo..."
      />

      <button onClick={addTodo} className="mt-2 bg-blue-500 px-3 py-1 rounded">
        Add
      </button>

      <p>Total Added: {count}</p>

      {todos.map((todo, i) => (
        <div key={i} className="flex justify-between mt-2 bg-slate-700 p-2 rounded">
          {todo}
          <button onClick={() => dispatch({ type: "DELETE", index: i })}>
            ❌
          </button>
        </div>
      ))}
    </div>
  )
}

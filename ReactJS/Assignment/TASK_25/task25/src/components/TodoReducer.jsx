import { useReducer, useState } from "react"

const initialState = { todos: [] }

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return { todos: [...state.todos, action.payload] }

    case "DELETE_TODO":
      return {
        todos: state.todos.filter((_, index) => index !== action.payload)
      }

    case "CLEAR_ALL":
      return initialState

    default:
      return state
  }
}

export default function TodoReducer() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [input, setInput] = useState("")

  const addTodo = () => {
    if (!input.trim()) return
    dispatch({ type: "ADD_TODO", payload: input })
    setInput("")
  }

  return (
    <div className="bg-slate-800 p-6 rounded-xl shadow-lg">
      <h2 className="text-xl font-bold mb-4">Task 3 - Todo</h2>

      <div className="flex space-x-2">
        <input
          className="flex-1 p-2 rounded bg-slate-700 focus:outline-none"
          placeholder="Add todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button
          onClick={addTodo}
          className="bg-green-500 px-4 py-2 rounded hover:bg-green-600"
        >
          Add
        </button>
      </div>

      <button
        onClick={() => dispatch({ type: "CLEAR_ALL" })}
        className="mt-3 bg-red-500 px-4 py-2 rounded hover:bg-red-600"
      >
        Clear All
      </button>

      <ul className="mt-4 space-y-2">
        {state.todos.map((todo, index) => (
          <li
            key={index}
            className="flex justify-between bg-slate-700 p-2 rounded"
          >
            {todo}
            <button
              onClick={() =>
                dispatch({ type: "DELETE_TODO", payload: index })
              }
              className="text-red-400 hover:text-red-500"
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

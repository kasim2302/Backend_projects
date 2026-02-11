import { useReducer } from "react"

const initialState = { count: 0 }

const reducer = (state, action) => {
  switch (action.type) {
    case "INC":
      return { count: state.count + 5 }
    case "DEC":
      return { count: state.count - 5 }
    case "RESET":
      return initialState
    default:
      return state
  }
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="bg-slate-800 p-6 rounded-xl shadow-lg text-center">
      <h2 className="text-xl font-bold mb-4">Task 1 - Counter</h2>

      <h1 className="text-4xl font-bold mb-4">{state.count}</h1>

      <div className="space-x-3">
        <button
          onClick={() => dispatch({ type: "INC" })}
          className="bg-green-500 px-4 py-2 rounded hover:bg-green-600"
        >
          +5
        </button>

        <button
          onClick={() => dispatch({ type: "DEC" })}
          className="bg-yellow-500 px-4 py-2 rounded hover:bg-yellow-600"
        >
          -5
        </button>

        <button
          onClick={() => dispatch({ type: "RESET" })}
          className="bg-red-500 px-4 py-2 rounded hover:bg-red-600"
        >
          Reset
        </button>
      </div>
    </div>
  )
}

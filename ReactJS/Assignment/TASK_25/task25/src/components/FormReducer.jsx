import { useReducer } from "react"

const initialState = {
  name: "",
  email: "",
  password: ""
}

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload }
    case "SET_EMAIL":
      return { ...state, email: action.payload }
    case "SET_PASSWORD":
      return { ...state, password: action.payload }
    case "RESET":
      return initialState
    default:
      return state
  }
}

export default function FormReducer() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="bg-slate-800 p-6 rounded-xl shadow-lg space-y-4">
      <h2 className="text-xl font-bold">Task 2 - Form Manager</h2>

      <input
        className="w-full p-2 rounded bg-slate-700 focus:outline-none"
        placeholder="Name"
        value={state.name}
        onChange={(e) =>
          dispatch({ type: "SET_NAME", payload: e.target.value })
        }
      />

      <input
        className="w-full p-2 rounded bg-slate-700 focus:outline-none"
        placeholder="Email"
        value={state.email}
        onChange={(e) =>
          dispatch({ type: "SET_EMAIL", payload: e.target.value })
        }
      />

      <input
        type="password"
        className="w-full p-2 rounded bg-slate-700 focus:outline-none"
        placeholder="Password"
        value={state.password}
        onChange={(e) =>
          dispatch({ type: "SET_PASSWORD", payload: e.target.value })
        }
      />

      <button
        onClick={() => dispatch({ type: "RESET" })}
        className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
      >
        Reset
      </button>
    </div>
  )
}

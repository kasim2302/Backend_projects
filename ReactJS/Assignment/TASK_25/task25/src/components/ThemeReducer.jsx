import { useReducer } from "react"

const initialState = {
  dark: false,
  fontSize: 16
}

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return { ...state, dark: !state.dark }

    case "INC_FONT":
      return { ...state, fontSize: state.fontSize + 2 }

    case "DEC_FONT":
      return { ...state, fontSize: state.fontSize - 2 }

    default:
      return state
  }
}

export default function ThemeReducer() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div
      className={`p-6 rounded-xl shadow-lg transition-all ${
        state.dark ? "bg-black text-white" : "bg-white text-black"
      }`}
      style={{ fontSize: state.fontSize }}
    >
      <h2 className="text-xl font-bold mb-4">
        Task 4 - Theme & Font Controller
      </h2>

      <div className="space-x-3 mb-4">
        <button
          onClick={() => dispatch({ type: "TOGGLE_THEME" })}
          className="bg-purple-500 px-4 py-2 rounded text-white"
        >
          Toggle Theme
        </button>

        <button
          onClick={() => dispatch({ type: "INC_FONT" })}
          className="bg-green-500 px-4 py-2 rounded text-white"
        >
          A+
        </button>

        <button
          onClick={() => dispatch({ type: "DEC_FONT" })}
          className="bg-red-500 px-4 py-2 rounded text-white"
        >
          A-
        </button>
      </div>

      <p>
        This text changes theme and font size dynamically.
      </p>
    </div>
  )
}

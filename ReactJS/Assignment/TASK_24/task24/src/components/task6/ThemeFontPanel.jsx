import { useReducer, useState, useRef, lazy, Suspense } from "react"

const TextView = lazy(() => import("./TextView"))

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" }
    case "FONT":
      return { ...state, font: action.payload }
    default:
      return state
  }
}

export default function ThemeFontPanel() {
  const [settings, dispatch] = useReducer(reducer, { theme: "light", font: 18 })
  const [count, setCount] = useState(0)
  const prevFont = useRef(settings.font)

  return (
    <div className="bg-slate-800 p-6 rounded-xl">
      <h2 className="font-bold mb-2">Task 6 - Lazy TextView</h2>

      <button
        onClick={() => {
          dispatch({ type: "TOGGLE" })
          setCount(prev => prev + 1)
        }}
        className="bg-indigo-500 px-3 py-1 rounded mr-2"
      >
        Toggle
      </button>

      <button
        onClick={() => {
          prevFont.current = settings.font
          dispatch({ type: "FONT", payload: settings.font + 2 })
          setCount(prev => prev + 1)
        }}
        className="bg-teal-500 px-3 py-1 rounded"
      >
        Increase Font
      </button>

      <Suspense fallback={<p>Loading Text...</p>}>
        <TextView settings={settings} />
      </Suspense>

      <p className="mt-2">Changes: {count}</p>
    </div>
  )
}

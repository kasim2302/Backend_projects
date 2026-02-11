import { useReducer, useState, useRef, lazy, Suspense } from "react"

const Preview = lazy(() => import("./Preview"))

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

export default function ThemeController() {
  const [settings, dispatch] = useReducer(reducer, { theme: "light", font: 16 })
  const [count, setCount] = useState(0)
  const prevFont = useRef(settings.font)

  const changeFont = (size) => {
    prevFont.current = settings.font
    dispatch({ type: "FONT", payload: size })
    setCount(prev => prev + 1)
  }

  return (
    <div className="bg-slate-800 p-6 rounded-xl">
      <h2 className="font-bold mb-2">Task 4 - Theme</h2>

      <button
        onClick={() => {
          dispatch({ type: "TOGGLE" })
          setCount(prev => prev + 1)
        }}
        className="bg-purple-500 px-3 py-1 rounded mr-2"
      >
        Toggle Theme
      </button>

      <button
        onClick={() => changeFont(settings.font + 2)}
        className="bg-green-500 px-3 py-1 rounded"
      >
        Increase Font
      </button>

      <Suspense fallback={<p>Loading...</p>}>
        <Preview settings={settings} />
      </Suspense>

      <p className="mt-2">Changes: {count}</p>
    </div>
  )
}

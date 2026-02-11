import { useReducer, useRef, useState } from "react"

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return { ...state, [action.field]: action.value }
    case "RESET":
      return { name: "", email: "", password: "" }
    default:
      return state
  }
}

export default function FormPage() {
  const [form, dispatch] = useReducer(reducer, {
    name: "",
    email: "",
    password: ""
  })

  const [count, setCount] = useState(0)

  const emailRef = useRef(null)
  const passRef = useRef(null)

  const handleKey = (e, nextRef) => {
    if (e.key === "Enter") {
      e.preventDefault()
      nextRef.current.focus()
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setCount(prev => prev + 1)
    dispatch({ type: "RESET" })
  }

  return (
    <form onSubmit={handleSubmit} className="bg-slate-800 p-6 rounded-xl space-y-3">
      <h2 className="font-bold">Task 3 - Form</h2>

      <input
        value={form.name}
        onChange={(e) => dispatch({ type: "CHANGE", field: "name", value: e.target.value })}
        onKeyDown={(e) => handleKey(e, emailRef)}
        className="w-full p-2 bg-slate-700 rounded"
        placeholder="Name"
      />

      <input
        ref={emailRef}
        value={form.email}
        onChange={(e) => dispatch({ type: "CHANGE", field: "email", value: e.target.value })}
        onKeyDown={(e) => handleKey(e, passRef)}
        className="w-full p-2 bg-slate-700 rounded"
        placeholder="Email"
      />

      <input
        ref={passRef}
        value={form.password}
        onChange={(e) => dispatch({ type: "CHANGE", field: "password", value: e.target.value })}
        className="w-full p-2 bg-slate-700 rounded"
        placeholder="Password"
      />

      <button className="bg-blue-500 px-3 py-1 rounded">Submit</button>
      <p>Submitted: {count}</p>
    </form>
  )
}

import Counter from "./components/Counter"
import FormReducer from "./components/FormReducer"
import TodoReducer from "./components/TodoReducer"
import ThemeReducer from "./components/ThemeReducer"
import './index.css'
export default function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white p-6 space-y-8">
      <Counter />
      <FormReducer />
      <TodoReducer />
      <ThemeReducer />
    </div>
  )
}

import Task1 from "./components/task1/SearchPage"
import Task2 from "./components/task2/ScrollPage"
import Task3 from "./components/task3/FormPage"
import Task4 from "./components/task4/ThemeController"
import Task5 from "./components/task5/TodoPage"
import Task6 from "./components/task6/ThemeFontPanel"
import './index.css'
export default function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white p-6 space-y-10">
      <Task1 />
      <Task2 />
      <Task3 />
      <Task4 />
      <Task5 />
      <Task6 />
    </div>
  )
}

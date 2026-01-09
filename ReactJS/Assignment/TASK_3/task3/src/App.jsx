
import "./index.css"
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from "./components/Home"
import Contact from "./components/Contact"
import About from "./components/About"
import ProfileCard from "./components/ProfileCard"

const App = () => {
  return (
   <>
   <div>
        <Navbar/>
    <main>
    <Routes>
    <Route path='/' element={<ProfileCard/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    

    </Routes>
    </main>
   </div>
   
   </>
  )
}

export default App
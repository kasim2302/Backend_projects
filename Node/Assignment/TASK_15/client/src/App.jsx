import React from 'react'
import './index.css'
import Register from './components/Register'
import Login from './components/Login'
import { Routes ,Route , Link,Navigate, useNavigate} from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Home from './components/Home'
import Navbar from './components/Navbar'


const App = () => {

   

  return (
  <>
     <div>
      <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/dashboard' element={<PrivateRoute><Dashboard/></PrivateRoute>}/>
    </Routes>
     </div>
   
  </>
  )
}

export default App



export const PrivateRoute = ({children}) => {
  const token = localStorage.getItem("logintoken")
  return token ? children : <Navigate to={"/login"}/>
}
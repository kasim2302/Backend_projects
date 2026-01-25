import {Routes,Route} from 'react-router-dom'
import StudentForm from '../components/StudentForm'
import ProductForm from '../components/ProductForm'
import UserProfile from '../components/UserProfile'
import LoginForm from '../components/LoginForm'
import AddressForm from '../components/AddressForm'

const Approutes = () => {
  return (
   <>
   <Routes>
    <Route path='/student' element={<StudentForm/>}/>
    <Route path='/product' element={<ProductForm/>}/>
    <Route path='/user' element={<UserProfile/>}/>
    <Route path='/login' element={<LoginForm/>}/>
    <Route path='/address' element={<AddressForm/>}/>
   </Routes>
   </>
  )
}

export default Approutes
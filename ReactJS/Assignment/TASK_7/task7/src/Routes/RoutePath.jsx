
import {Routes,Route} from "react-router"
import UsernameForm from '../components/UsernameForm'
import LoginValidationForm from '../components/LoginValidationForm'
import RegisterForm  from '../components/RegisterForm '
import AdminLogin  from '../components/AdminLogin '
import MultiStepForm from '../components/MultistepForm'
import SignupForm  from '../components/SignupForm '




const RoutePath = () => {
  return (
    <>
     <div>
        <Routes>
            <Route path="/" element={<UsernameForm/>}/>
             <Route path="/Assignment2" element={<LoginValidationForm/>}/>
              <Route path="/Assignment3" element={<RegisterForm />}/>
               <Route path="/Assignment4" element={<AdminLogin />}/>
                <Route path="/Assignment5" element={<MultiStepForm/>}/>
                 <Route path="/Assignment6" element={<SignupForm />}/>
        </Routes>
     </div>
    </>
  )
}

export default RoutePath
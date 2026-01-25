import {Link} from 'react-router-dom';
const Navbar = () => {
  return (
   <>
   <div className='bg-gray-950 text-white flex justify-between items-center p-4 gap-5'>
    <div>
       <h3 className='text-2xl'>Forms</h3>
    </div>
    <div className='flex gap-5'>
      <Link className='p-2 hover:bg-black'  to="/student">Student Form</Link>
      <Link  className='p-2 hover:bg-black ' to="/product">Product Form</Link>
      <Link  className='p-2 hover:bg-black ' to="/user">User Profile</Link>
      <Link  className='p-2 hover:bg-black ' to="/login">Login Form</Link>
      <Link  className='p-2 hover:bg-black ' to="/address">Address Form</Link>
    </div>
   </div>
   
   </>
  )
}

export default Navbar
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
   <>
   <nav className="bg-gray-900 px-6 py-4">
    <div className="max-w-7xl mx-auto flex items-center justify-between">
      <div className="text-white text-xl font-bold ">
        <img src="./mk.jpg" alt="logo" width={40} height={40} className="rounded" />
      </div>
    <div className="flex space-x-6 text-white">
    <Link to="/" className="hover:text-gray-400 cursor-pointer">Home</Link>
    <Link to="/about" className="hover:text-gray-400 cursor-pointer">About</Link>
    <Link to="/contact" className="hover:text-gray-400 cursor-pointer">Contact</Link>
     </div>
    
    </div>
   </nav>
  
  
   
   </>
  )
}

export default Navbar
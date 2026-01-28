import React from 'react'

const Footer = () => {
  return (
   <>
    <footer className="bg-gray-900 text-white py-6 text-center">
      <p className="text-sm">
        © 2025 Mohamed Kasim. All Rights Reserved.
      </p>

      <a href="#home">
        <img
          src="/img/toparrow.png"
          alt="top"
          className="mx-auto mt-3 w-8"
        />
      </a>
    </footer>
   </>
  )
}

export default Footer
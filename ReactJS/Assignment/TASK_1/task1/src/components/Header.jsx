import React from 'react'

const Header = ({ darkMode, toggleDarkMode }) => {
  return (
    <>
      <header className="sticky top-0 bg-white dark:bg-gray-800 shadow z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <img src="/img/mk.jpg" alt="logo" className="w-14" />

          <nav className="space-x-6">
            <a className="text-gray-700 dark:text-gray-200 hover:text-blue-500" id="#home">
              Home
            </a>
            <a className="text-gray-700 dark:text-gray-200 hover:text-blue-500" id='#about'>
              About
            </a>
            <a className="text-gray-700 dark:text-gray-200 hover:text-blue-500" id='#skills'>
              Skills
            </a>
            <a className="text-gray-700 dark:text-gray-200 hover:text-blue-500" id='projects'>
              Projects
            </a>
          </nav>

          <button
            onClick={toggleDarkMode}
            className="ml-4 px-3 py-2 rounded-full bg-gray-200 dark:bg-gray-700"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>
      </header>
    </>
  );
}

export default Header
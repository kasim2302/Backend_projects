import { useContext } from "react";
import { ThemeContext } from "../Theme/ThemeContext";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="p-6 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
        Theme Switcher
      </h1>

      <button
        onClick={toggleTheme}
        className="px-4 py-2 rounded bg-gray-900 text-white
                   dark:bg-white dark:text-black transition"
      >
        {theme === "light" ? "🌙 Dark" : "☀️ Light"}
      </button>
    </div>
  );
};

export default Header;

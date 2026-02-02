import { useContext } from "react";
import { ThemeContext } from "../Theme/ThemeContext";

const Content = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="p-6">
      <div className="rounded-lg p-6 bg-gray-100 dark:bg-gray-800">
        <p className="text-gray-800 dark:text-gray-200">
          This component also uses the theme.
        </p>

        <p className="mt-2 font-semibold text-gray-900 dark:text-white">
          Current Theme: {theme}
        </p>
      </div>
    </div>
  );
};

export default Content;

import { useLocation } from "react-router-dom";

const ThemePage = () => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);

  const mode = params.get("mode");
  const isDark = mode === "dark";

  return (
    <div
      className={`min-h-screen flex items-center justify-center
      ${isDark ? "bg-black text-white" : "bg-gray-100 text-black"}`}
    >
      <h1 className="text-2xl font-bold">
        {isDark ? "Dark Theme" : "Light Theme"}
      </h1>
    </div>
  );
};

export default ThemePage;

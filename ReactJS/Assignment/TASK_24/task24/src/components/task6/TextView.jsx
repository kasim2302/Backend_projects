export default function TextView({ settings }) {
  return (
    <div
      className={`mt-3 p-3 rounded ${
        settings.theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }`}
      style={{ fontSize: settings.font }}
    >
      Lazy Loaded Text View
    </div>
  )
}

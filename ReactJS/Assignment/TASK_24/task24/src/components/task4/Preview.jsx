export default function Preview({ settings }) {
  return (
    <div
      className={`mt-3 p-3 rounded ${
        settings.theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }`}
      style={{ fontSize: settings.font }}
    >
      Preview Text
    </div>
  )
}

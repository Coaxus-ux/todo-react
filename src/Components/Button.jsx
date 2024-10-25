export default function Button({icon, text, onClick, size}) {
  return (
    <button className="button-container" onClick={onClick}>
      {icon}
      {text}
    </button>
  )
}
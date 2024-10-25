export default function ButtonInput() {
  const handleClick = () => {
    console.log('clicked')
  }
  return (
    <div className="button-container">
      <input type="text" placeholder="Add a task" />
      <button onClick={handleClick} className="button-input">x</button>
    </div>
  )
}
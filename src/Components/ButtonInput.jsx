import { TypcnTimes } from "@/assets/Icons/TypcnTimes"
export default function ButtonInput() {
  return (
    <div className="button-container">
      <input type="text" placeholder="Add a task" />
      <button className="button-input">
        <TypcnTimes width="20" height="20" />
      </button>
    </div>
  )
}
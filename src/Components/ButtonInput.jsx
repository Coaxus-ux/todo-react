import { TypcnTimes } from "@/components/Icons"
export default function ButtonInput() {
  return (
    <div className="button-input-container">
      <input type="text" placeholder="Add a task" />
      <button className="button-input">
        <TypcnTimes size="20" />
      </button>
    </div>
  )
}
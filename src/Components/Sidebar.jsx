import ButtonInput from '@/components/ButtonInput'
import Button from '@/components/Button'
import { IcBaselinePlus } from '@/components/Icons'
export default function Sidebar() {
 
  return (
    <aside className="side-body">
      <h1 className="side-title">Todo</h1>
      <p>My Lists</p>
      <ButtonInput />
      <Button text="New List" icon={<IcBaselinePlus size="20" />} />
    </aside>
  )
}
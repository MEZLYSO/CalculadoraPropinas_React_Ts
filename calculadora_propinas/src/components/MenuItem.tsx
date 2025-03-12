import { MenuItem } from "../types"

type MenuItemProps = {
    item: MenuItem
} 

export default function MenuItem({item}:MenuItemProps) {
  return (
    <button
    className="border-2 border-black w-full p-3 flex justify-between hover:bg-green-200"
    >
        <p>{item.name}</p>
        <p className="font-black">${item.price}</p>
    </button>
  )
}

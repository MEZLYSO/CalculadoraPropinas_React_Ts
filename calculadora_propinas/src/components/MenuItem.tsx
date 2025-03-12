import type { MenuItem } from "../types"

type MenuItemProps = {
    item: MenuItem
    addItem:(item:MenuItem)=>void
} 

export default function MenuItem({item,addItem}:MenuItemProps) {
  return (
    <button
    className="border-2 border-black w-full p-3 flex justify-between hover:bg-green-200"
    onClick={()=>addItem(item)}
    >
        <p>{item.name}</p>
        <p className="font-black">${item.price}</p>
    </button>
  )
}

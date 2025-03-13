import { formatCurrency } from "../helpers"
import { OrderItem } from "../types"

type OrderContentsProps = {
  order:OrderItem[]
}

export default function OrderContents({order}:OrderContentsProps) {
  return (
    <>
        <h2 className=" font-black text-4xl">Consumo</h2>
        <div className="space-y-3 mt-5">
          {order.length===0?(
            <p>Orden vacia</p>
          ):(
            order.map(item=>(
              <div
              className="flex justify-between border-t items-center border-gray-200 py-5 last-of-type:border-b" 
              key={item.id}>
                <div>
                <p className="text-lg">{item.name} - {formatCurrency(item.price)}</p>
                <p className="font-black">Cantidad: {item.quantity} - {formatCurrency(item.price*item.quantity)}</p>
                </div>
                <button
                className="bg-red-400 h-8 w-8 rounded-full text-white font-black"
                >X</button>
              </div>
            ))
          )}
        </div>
    </>
  )
}

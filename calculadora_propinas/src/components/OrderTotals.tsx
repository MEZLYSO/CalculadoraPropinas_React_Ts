import { useMemo } from "react"
import { OrderItem } from "../types"
import { formatCurrency } from "../helpers"

type OrderTotalsProps = {
  order:OrderItem[]
  tip:number
  placeOrder: ()=>void
}

export default function orderTotals({order,tip,placeOrder}:OrderTotalsProps) {

  const subtotalAmount = useMemo(()=> order.reduce((total,item)=> total + (item.quantity*item.price),0),[order])
  const tipAmount = useMemo(()=> tip*subtotalAmount,[tip,order])
  const amoutTotal = useMemo(()=> subtotalAmount+tipAmount,[subtotalAmount,tipAmount])

  return (
    <>
        <div className="space-y-3">
            <h2 className="text-4xl font-black">Totales y propina:</h2>
            <p>Subtotal a pagar:
                <span className="font-bold">{formatCurrency(subtotalAmount)}</span>
            </p>
            <p>Propina:
                <span className="font-bold"> {formatCurrency(tipAmount)}</span>
            </p>
            <p>Total a pagar:
                <span className="font-bold"> {formatCurrency(amoutTotal)}</span>
            </p>
        </div>
      <button 
        className="w-full bg-blue-500 font-black text-white uppercase p-3 mt-10
        disabled:opacity-20"
        onClick={placeOrder}
        disabled={amoutTotal ==0}
      >
        Guardar Orden
      </button>
    </>
  )
}

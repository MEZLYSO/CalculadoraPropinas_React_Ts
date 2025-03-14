import MenuItem from "./components/MenuItem"
import OrderContents from "./components/OrderContents"
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder"
import OrderTotals from "./components/OrderTotals"
import TipPorcentageForm from "./components/TipPorcentageForm"

function App() {
 
  const {order,tip,setTip,addItem, removeItem, placeOrder} = useOrder()

  return (
    <>
     <header className="bg-blue-400 py-5">
        <h1 className="text-center text-4xl font-black text-white">Calculadora de Propina</h1>
     </header>
     <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2 sm:grid-cols-1">
        <div className="p-5">
          <h2 className="text-4xl font-black">Menú</h2>
          <div className="space-y-3">
            {menuItems.map(item=>(
              <MenuItem
              key={item.id}
              item={item}
              addItem={addItem}
              />
            ))}
          </div>
        </div>
        <div className="p-5 space-y-10 border-dotted border-2">
          {order.length?(
            <>
              <OrderContents 
              order={order}
              removeItem={removeItem}
              />
              <TipPorcentageForm 
              setTip={setTip}
              tip={tip}
              />
              <OrderTotals
              order={order}
              tip={tip}
              placeOrder={placeOrder}
              />
            </>
          ):(
            <p className="text-center">Orden vacia</p>
          )}
        </div>
     </main>
    </>
  )
}

export default App

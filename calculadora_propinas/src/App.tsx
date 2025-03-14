import MenuItem from "./components/MenuItem"
import OrderContents from "./components/OrderContents"
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder"
import OrderTotals from "./components/OrderTotals"

function App() {
 
  const {order,addItem, removeItem} = useOrder()

  return (
    <>
     <header className="bg-blue-400 py-5">
        <h1 className="text-center text-4xl font-black">Calculadora de Propina</h1>
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
          <OrderContents 
          order={order}
          removeItem={removeItem}
          />
          <OrderTotals
          order={order}
          />
        </div>
     </main>
    </>
  )
}

export default App

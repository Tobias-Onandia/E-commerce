import { useContext } from "react"
import { BuyContext } from "../context/cartContext"
import Cart from "./Cart"


const CartList = () => {
  const { note, handleClear } = useContext(BuyContext)
  const newNote = [...new Set(note)]


    if(newNote.length > 0 ) 
    return( 
      <main className="flex flex-wrap justify-between items-start ">
      {newNote.map(item => <Cart key={item.id}  title={item.title} description={item.description} price={item.price} id={item.id} />)}
      <button onClick={()=> handleClear()} className="btn btn-primary mt-xl absolute right-xl">Limpiar</button>
     </main> )

     return( 
     <main className="flex justify-center align-center">
        <div >No tienes Articulos</div> 
     </main>
    )
  

}

export default CartList
import { useContext } from "react"
import { Link } from "react-router-dom"
import Cart from "./Cart"
import { BuyContext } from "../context/cartContext"



const CartList = () => {
  const { note, handleClear } = useContext(BuyContext)

   let hash = {}
   let newNote = note.filter(function(current){
    let exists = !hash[current.id]
    hash[current.id] = true;
    return exists
  })


  if(newNote.length > 0 ) 
    return( 
      <main className="flex flex-wrap justify-between items-start ">
      {newNote.map(item => <Cart key={item.id}  title={item.id} description={item.description} price={item.price} id={item.id} />)}
      <button onClick={()=> handleClear()} className="btn btn-primary mt-xl absolute right-xl">Limpiar</button>

     </main> )

     return( 
     <main className="flex justify-center align-center m-lg">
       <div className="collapse">
        <input type="checkbox" /> 
        <div className="collapse-title text-xl font-medium bg-primary rounded ">
          No tienes articulos 
        </div>
        <div className="collapse-content"> 
          <p><Link to={`/`}>Ir a un producto</Link></p>
        </div>
      </div>
     </main>
    )
  

}

export default CartList
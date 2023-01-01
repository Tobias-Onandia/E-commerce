import { useContext } from "react"
import { Link } from "react-router-dom"
import { BuyContext } from "../context/cartContext"
import Cart from "./Cart"


const CartList = () => {
  const { note, handleClear } = useContext(BuyContext)
  
  let newNote = note.filter((item,index)=>{
    return note.indexOf(item) === index;
 })
  


    if(newNote.length > 0 ) 
    return( 
      <main className="flex flex-wrap justify-between items-start ">
      {newNote.map(item => <Cart key={item.id}  title={item.id} description={item.description} price={5000} id={item.id} />)}
      {console.log(newNote)}

      <button onClick={()=> handleClear()} className="btn btn-primary mt-xl absolute right-xl">Limpiar</button>
     </main> )

     return( 
     <main className="flex justify-center align-center">
       <div className="collapse">
        <input type="checkbox" /> 
        <div className="collapse-title text-xl font-medium">
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
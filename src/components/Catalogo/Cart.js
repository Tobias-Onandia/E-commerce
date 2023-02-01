import { useContext } from "react"
import { BuyContext } from "../context/cartContext"


 const Cart = ({ title , description, price, id, handleCreateOrder }) => {
 
  const { handleDelete } = useContext(BuyContext)


    return(
      <div className="card lg:card-side bg-base-100 shadow-xl m-xl">
        <figure><img src="https://placeimg.com/400/400/arch" alt="Album"/></figure>
      <div className="card-body ">
        <div className="flex justify-between">
        <h2 className="card-title ">{title}</h2>
        </div>
        <p>{description}</p>
          <button className="btn btn-primary">${price}</button>
        <div className="card-actions justify-between">
          <button onClick={()=> handleDelete(id)} className="btn btn-primary">Borrar</button>
        </div>
      </div>
      <div>
      </div>
    </div>
   )
}


export default Cart
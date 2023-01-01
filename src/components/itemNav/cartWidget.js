import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext} from "react";
import { BuyContext } from "../context/cartContext";




const CartWidget = ()=>{
  const { add,newPrice } = useContext(BuyContext)

  
    return(
        <div className="flex-none">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="indicator">
              <FaShoppingCart />
              <span className="badge badge-sm indicator-item">{add}</span>
            </div>
          </label>
          <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
            <div className="card-body">
              {newPrice !== undefined && add !== 0
               ? <button className="btn btn-primary btn-block">{`$${5000 * add}`}</button>
               :  null
              }
              {
               add !== 0 
               ? <button className="btn btn-primary btn-block"><Link to="./Cart">Ir al Carrito</Link></button> 
               : <span className="btn btn-primary btn-block"> No tenes objetos</span>
              }
              </div>
          </div>
        </div>
    </div>
    )
}

export default CartWidget
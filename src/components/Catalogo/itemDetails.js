import { useContext} from "react"
import { useParams } from "react-router"
import { BuyContext } from "../context/cartContext"

const ItemDetails = () => {
  const {sumar, count, restar, agregar  } = useContext(BuyContext)
  const { details } = useParams()
 

  return(
  <div className="hero min-h-screen bg-base-200 ">
    <div className="hero-content flex-col lg:flex-row">
      <img src="https://placeimg.com/260/400/arch" alt= "Tarjeta"className="max-w-sm rounded-lg shadow-2xl" />
      <div className="flex flex-col w-auto text-center">
        <h1 className="text-5xl font-bold">{details} </h1>
        <p className="py-6 mt-xl">{}!</p>
        <section className="flex mt-xl justify-center">
          <button onClick={() => restar()} className="btn btn-primary mr-xl">-</button>
              <p className="text-4xl font-bold mb-xl">{count}</p>
          <button onClick={() => sumar()} className="btn btn-primary ml-xl">+</button>
        </section>
        <button onClick={() => agregar(details)}className="btn btn-primary mt-xl">Agregar</button>
      </div>
    </div>
  </div>
  )
}

export default ItemDetails
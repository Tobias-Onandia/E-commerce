import { addDoc, collection, getDocs, query, where, documentId, writeBatch } from "firebase/firestore"
import { useContext } from "react"
import { BuyContext } from "../context/cartContext"
import { db } from "../firebaseConfig"


 const Cart = ({ title , description, price, id }) => {
 
  const { handleDelete, newPrice, note } = useContext(BuyContext)


  const handleCreateOrder = async () => {
    const objOrder = {
      buyer :{
        name: 'Tobias Onandia',
        email: 'tobias.onandia@gmail.com',
        phone: '123-456-1234'
      },
      items: note,
      total: newPrice
    }
    const batch = writeBatch(db)
    
    const ids = note.map(prod => prod.id)
    const productRef = query(collection(db, 'home'), where(documentId(), 'in', ids))
    const productAddedToCart = await getDocs(productRef)
    const { docs } = productAddedToCart
    
    const outOfStock = []

    docs.forEach(doc => {
      const dataDoc = doc.data()
      const stockDb = dataDoc.stock

      const productAddToCart = note.find(prod => prod.id === doc.id)
      const prodQuantity = productAddToCart?.stock

      if(stockDb >= prodQuantity){
        batch.update(doc.ref, { stock : stockDb - prodQuantity})
      }else {
        outOfStock.push({ id: doc.id, ...dataDoc})
      }
    })

    if(outOfStock.length === 0){
      await batch.commit()

      const orderRef = collection(db, 'orders')

      const orderAdded = await addDoc(orderRef, objOrder)

      console.log(orderAdded.id)
    }
  }

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
          <button onClick={() => handleCreateOrder()}  className="btn btn-primary">Confirmar orden</button>
        </div>
        <div className="rating">
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
        </div>
      </div>
      <div>
      </div>
    </div>
   )
}


export default Cart
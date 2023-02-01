
import { addDoc, collection, getDocs, query, where, documentId, writeBatch } from "firebase/firestore"
import { useContext, useState } from "react"
import { BuyContext } from "../context/cartContext"
import { db } from "../firebaseConfig"

const Checkout = () => {
  const {  newPrice, note } = useContext(BuyContext)
  const [loading, setLoading] = useState(false)

  const handleCreateOrder = async () => {
   
   try{ const objOrder = {
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

    } else {
      console.log('Hay productos fuera de stock')
    }


  } 
  catch(err){ console.log(err) }
  finally{
    setLoading(true)
    
  }
} 


if(loading ) {
  return (
  <>  
   <button className="btn btn-wide">Se ha generado su orden</button>
  </>
  )
}

    return (
         <div>
          <label htmlFor="my-modal" className="btn">Confirmar orden</label>
          <input type="checkbox" id="my-modal" className="modal-toggle" />
          <form className="modal">
            <div className="modal-box flex flex-col ">
          <h3>Es necesario iniciar sesion</h3>
              <input type="email" className="font-bold text-lg m-lg " placeholder="email"/>
              <input type="password" placeholder="password" className="py-4 m-lg" />
              <div className="modal-action">
                <label htmlFor="my-modal" className="btn" onClick={handleCreateOrder}>iniciar sesion</label>
              </div>
            </div>
          </form>  
        </div>
        )
}

export default Checkout
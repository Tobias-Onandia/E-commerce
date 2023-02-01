import { getDoc, doc } from "firebase/firestore"
import { createContext, useState } from "react"
import { db } from "../firebaseConfig"
export const BuyContext = createContext()

export const CartContext = ({ children }) => {
  const [count,setCount] = useState(0)
  const [add, setAdd] = useState(0)
  const [note, setNote ] = useState([])
  const [newPrice, setNewPrice] = useState()

  const sumar = ()=> {
    setCount(count + 1)
  }

  const restar = () => {
    if(count !== 0)setCount(count - 1)
  }

  const agregar =  details => {
    if(count !== 0){
    const docRef = doc(db, 'home', details)
    getDoc(docRef)
    .then( doc => {
      const data = doc.data()
      const noteAdapted = {id: doc.id, ...data}
      setNote([noteAdapted, ...note])
      setNewPrice(noteAdapted.price * count)
    }) 
    setAdd(count + add)
   }
  }

  const handleDelete = (id) => {
    let temp = note.filter(item => item.id !== id)
    setNote(temp)
    setCount(0)
  }

  const handleClear = (id) => {
    let temp = note.filter(item => item.id === id)
    setAdd(0)
    setNote(temp)
  }

  return(
    <BuyContext.Provider value={{agregar,restar, sumar, add, count, note, handleDelete, handleClear, newPrice}}>
      {children}
    </BuyContext.Provider>
  )
}


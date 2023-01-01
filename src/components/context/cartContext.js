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

  const agregar = async details => {
    const docRef = doc(db, 'home', details)
     await getDoc(docRef).then( doc =>{
      const noteAdapted = {id: doc.id, ...doc.data()}
      console.log(noteAdapted)
      if(count !== 0){
      setAdd(count + add)
      setCount(0)
      setNote([...note, noteAdapted])
      setNewPrice(noteAdapted.price * count)
   }
    }) 
   }

  const handleDelete = (id) => {
    let temp = note.filter(item => item.id !== id)
    setNote(temp)
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


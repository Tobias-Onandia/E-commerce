import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Item from "./item";
import { collection, getDocs, getDoc, doc, query, where, orderBy, limit } from "firebase/firestore";
import { db } from "../firebaseConfig";

const ItemList = ()=>{
  const [product, setProduct] = useState()
  const [isLoading, setIsloading] = useState(true)
  const { categoryId } = useParams()
 
  useEffect(() =>{ 
    setIsloading(true)
    if(!categoryId){
      const collectionRef = categoryId
      ? query ( collection(db, 'home'), where('category', '==', categoryId), limit())
      : query (collection(db,"home"), orderBy('name', 'desc'))
    getDocs(collectionRef)
      .then(response => { const notesAdapted = response.docs.map(doc => {
        const data = doc.data()
        return {id: doc.id , ...data }
      })
      setProduct(notesAdapted.map(item => <Item key={item.id} description={item.description} title={item.name} url={item.url}/>))
    })
    .catch(err => console.log(err))
    .finally(() => {setIsloading(false)})}  
    else
    {
      const docRef = doc(db, 'home', categoryId)
      getDoc(docRef)
      .then(doc => {
        const data = doc.data()
        const noteAdapted = {id: doc.id, ...data}
        console.log(noteAdapted)
        setProduct(<Item key={noteAdapted.id} description={noteAdapted.description} title={noteAdapted.name} url={noteAdapted.url} />)
      })
      .catch(err => console.log(err))
      .finally(()=> setIsloading(false))
    }
  },[categoryId])


  if (isLoading) return <progress className="progress w-56"></progress>

  return (
    <main className="grid grid-cols-3">
      {product}
    </main>
    )
}


export default ItemList
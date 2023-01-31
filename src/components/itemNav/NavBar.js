import Search from "./Search";
import Profile from "./Profile";
import CartWidget from "./cartWidget";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { collection, getDocs, limit, orderBy, query, where } from "firebase/firestore";
import { db } from "../firebaseConfig";
import Item from "../Catalogo/item";



const NavBar = () => {
  
  const categoryId = useParams()


  useEffect(() =>{ 
      const collectionRef = categoryId
      ? query ( collection(db, 'home'), where('categoryComun', '==', categoryId), limit(1))
      : query (collection(db,"home"), orderBy('name', 'desc'))
    getDocs(collectionRef)
      .then(response => { 
        const notesAdapted = response.docs.map(doc => {
        const data = doc.data()
        return {id: doc.id , ...data }
      })
      notesAdapted.map(item => <Item key={item.id} description={item.description} title={item.name} url={item.url}/>)
    })
    .catch(err => console.log(err))
  })


  
  return(
    <div className="navbar bg-base-100 flex justify-between ">
    <Link to='./' className="btn btn-ghost normal-case text-xl">Artemia</Link>
    <div className="flex-1 flex justify-between ">
        <div className="m-auto">
         <Search />
        </div>
      <section className="dropdown dropdown-end">
        <label tabIndex={0} className="btn m-1">Categorias</label>
          <ul tabIndex={0} className="dropdown-content menu p-xl shadow bg-base-100 rounded-box w-52">
            <li className="mb-xl"><Link to={"/category/Prenda inferior"}>Prenda superior</Link></li>
            <li><Link to={"category/pantalones"}>Prenda inferior</Link></li>
          </ul>
      </section>
      <CartWidget />
      <Profile />
    </div>
    </div>
  )
}
 
export default NavBar;


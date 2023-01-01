import Search from "./Search";
import Profile from "./Profile";
import CartWidget from "./cartWidget";
import { Link } from "react-router-dom";


const NavBar = () => {


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
            <li className="mb-xl"><Link to={"/category/Prenda inferior"}>Prenda</Link></li>
            <li><Link to={"category/Abrigos"}>Abrigos</Link></li>
          </ul>
      </section>
      <CartWidget />
      <Profile />
    </div>
    </div>
  )
}
 
export default NavBar;


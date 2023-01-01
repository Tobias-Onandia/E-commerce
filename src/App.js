  import ItemListContainer from "./components/Catalogo/itemListContainer";
  import Login from "./components/Login";
  import { Route, Routes } from 'react-router-dom'
  import NavBar from "./components/itemNav/NavBar";
  import ItemDetails from "./components/Catalogo/itemDetails";
  import { CartContext } from "./components/context/cartContext";
  import CartList from "./components/Catalogo/CartList";


  function App() {

    return (
      <div>
          <CartContext>
            <NavBar />
            <Routes>
                <Route path="/" element={<ItemListContainer/>} />
                <Route path="/login" element={<Login />} />
                <Route path= "/item/:details" element = {<ItemDetails />}/>
                <Route path= "/cart" element = {<CartList />}/>
                <Route path= "/category/:categoryId" element = {<ItemListContainer  />} />
                <Route path="*" element={<h1>Not Found</h1>} />
            </Routes>
          </CartContext>
      </div>
    );
  }

  export default App;

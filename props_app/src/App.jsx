
import { Route, Routes } from "react-router-dom";
import "./styles.css";
import Navbar from "./components/Navbar";
import { useState } from "react";
import Products from "./pages/Products";


function App() {
  const [products, setProducts] = useState([ { name: 'Laptop', price: 1000, inCart: false }, { name: 'Smartphone', price: 500, inCart: false }, { name: 'Headphones', price: 100, inCart: false }, { name: 'Keyboard', price: 50, inCart: false }, { name: 'Mouse', price: 30, inCart: false } ]);


  return (
    <div>
      <h1>My Props App</h1>
      <Navbar products={products} setProducts={setProducts} />
      <Routes>
        <Route path="/" element={<Products products ={products} />} />
        {/* <Route path="/cart" element={<Cart />} /> */}
      </Routes>
    </div>
  );
}

export default App;

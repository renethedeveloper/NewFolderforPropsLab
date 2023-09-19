import { Link } from "react-router-dom"

const Navbar = ({products, setProducts}) => {
  
  return (
    <div>
      {/* we need products array here */}
        <div>Random Product: {products[0].name}</div>
        <Link to="/">Products</Link>
        <Link to="/cart">Cart</Link>
    </div>
  )
}

export default Navbar
import ProductsDisplay from "../../components/ProductsDisplay"
import { createContext } from "react"

const Products = ({children}) => {
  return (
    <div>
        <h1>This is the Products Page!</h1>
        <ProductsDisplay />
    </div>
  )
}

export default Products
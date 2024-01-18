import { CardContainer} from "../../Styles/ProductBook.style"
import ProductBookItem from "./ProductBookItem"

const ProductBook = ({filterSearch}) => {
  return (
    <CardContainer>
        {filterSearch.map((item)=>(
            <ProductBookItem key={item.id} item={item}/>
            ))}
    </CardContainer>
  )
}

export default ProductBook

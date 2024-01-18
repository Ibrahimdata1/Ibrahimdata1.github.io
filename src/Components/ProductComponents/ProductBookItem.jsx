import {
  CardTitleArab,
  CardIMG,
  CardDetails,
  CardPrice,
  CardTitle,
  CardContent,
  ButtonIpad,
  ButtonDesktop
} from "../../Styles/ProductBook.style";
import { ButtonItem } from "../../Styles/ProductBook.style";
import { CartContext } from "../Context";
import React from "react";
import ShoppingCartCheckoutOutlinedIcon from "@mui/icons-material/ShoppingCartCheckoutOutlined";
import { Link } from "react-router-dom";


const ProductBookItem = ({ item }) => {
  const { onAdd, changeBook } = React.useContext(CartContext);
  const [isHover, setIsHover] = React.useState(false);
  const modalMotion = {
    close: {
      opacity: 0,
    },
    open: {
      opacity: 1,
      transition: {
        type: "spring",
        duration: 5,
      },
    },
  };
  return (
    <CardContent
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
      initial={{opacity:0,y:-100}} animate={{opacity:1,y:0,transitionDuration:'150ms'}}
    >
      <Link to={"/checkout"}>
        <CardIMG src={item.url} onClick={() => changeBook(item)} />
      </Link>
      <CardDetails className={`${isHover ? "bgColor" : ""}`}>
        <div style={{flex:'3'}}>
          <CardTitle>{item.title}</CardTitle>
          <CardTitleArab>{item.titleArab}</CardTitleArab>
          <CardPrice>${item.price}</CardPrice>
        </div>
        <ButtonDesktop>
          <ButtonItem
            variant="contained"
            color="error"
            onClick={() => onAdd(item)}
          >
            <ShoppingCartCheckoutOutlinedIcon style={{ marginRight: "10px" }} />
            ADD TO CART
          </ButtonItem>
        </ButtonDesktop>
        <ButtonIpad>
          <ButtonItem
            variant="contained"
            color="error"
            onClick={() => onAdd(item)}
          >
            <ShoppingCartCheckoutOutlinedIcon style={{ marginRight: "10px" }} />
            ADD
          </ButtonItem>
        </ButtonIpad>
      </CardDetails>
    </CardContent>
  );
};

export default ProductBookItem;

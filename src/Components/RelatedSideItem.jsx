import React from "react";
import { CartContext } from "../Components/Context";
import {RelatedContainer,RelatedItemImg,RelatedItemText,RelatedItemTitle,RelatedItemPrice,RelatedItem,RelatedItemComment} from '../Styles/Checkout.style'

const RelatedSideItem = ({item}) => {
    const [isHover,setIsHover] = React.useState(false)
    const {changeBook} = React.useContext(CartContext)
  return (
    <RelatedContainer>
      <RelatedItem
        onClick={() => changeBook(item)}
        className={`${isHover ? "bgColorCheckout_Side" : null}`}
        onMouseOver={() => setIsHover(true)}
        onMouseOut={() => setIsHover(false)}
      >
        <RelatedItemImg src={item.url} key={item.id} />
        <RelatedItemText>
          <RelatedItemTitle>{item.title}</RelatedItemTitle>
          <RelatedItemPrice>${item.price}</RelatedItemPrice>
        </RelatedItemText>
      </RelatedItem>
      <RelatedItemComment>${item.comment}</RelatedItemComment>
    </RelatedContainer>
  );
};

export default RelatedSideItem;

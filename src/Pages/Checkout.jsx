import ReactImageMagnify from "react-image-magnify";
import {
  Container,
  Wrapper,
  Title,
  Top,
  TopButton,
  TopTexts,
  Toptext,
  DetailsContent,
  Bottom,
  Side,
  Info,
  Product,
  ProductDetails,
  ProductCopy,
  Image,
  ProductName,
  ProductComment,
  ProductHarakat,
  PriceDetail,
  Details,
  ProductAmountContainer,
  ProductAmount,
  ProductPrice,
  RelatedTitle,
  Related,
  Hr,
  ButtonCart,
  ProductAddCart,
  WrapProductAmount,
  AddButton,
  DelButton,
  RelatedWrapExtension,
  RelatedExtentionTitle
} from "../Styles/Checkout.style";
import { CartContext } from "../Components/Context";
import React from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { Link } from "react-router-dom";
import RelatedSideItem from "../Components/RelatedSideItem";
import RelatedItemExtension from "../Components/RelatedItemExtension";

const Checkout = () => {
  const { zoomBook, onAdd, handleOpen } = React.useContext(CartContext);
  const [cartNum, setCartNum] = React.useState(1);
  const addCartNum = () => {
    if (cartNum > 0) {
      setCartNum((setCartNum) => setCartNum + 1);
    } else {
      setCartNum(1);
    }
  };
  const delCartNum = () => {
    if (cartNum > 1) {
      setCartNum((setCartNum) => setCartNum - 1);
    } else {
      setCartNum(1);
    }
  };
  const updateZoombook = () => {
    const newZoomBook = { ...zoomBook, qty: cartNum };
    onAdd(newZoomBook);
  };
  const { displayProducts } = React.useContext(CartContext);  
  return (
    <Container style={{ backgroundColor: "#18150d" }}>
      <Wrapper>
        <Top>
          <Link to={"/products"}>
            <TopButton variant="contained" color="primary">
              Continue Shopping
            </TopButton>
          </Link>
          <a onClick={handleOpen}>
            <TopButton variant="contained" color="success">
              Checkout Now
            </TopButton>
          </a>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetails>
                <div style={{ width: "250px", zIndex: "10" }}>
                  <ReactImageMagnify
                    {...{
                      smallImage: {
                        isFluidWidth: true,
                        src: `${zoomBook.url}`,
                      },
                      largeImage: {
                        src: `${zoomBook.url}`,
                        width: 800,
                        height: 1000,
                      },
                    }}
                  />
                </div>
              </ProductDetails>
              <Details>
                <DetailsContent>
                  <ProductName>{zoomBook.title}</ProductName>
                  <ProductComment>{zoomBook.comment}</ProductComment>
                  <Hr />
                  <PriceDetail>
                    <ProductPrice>$ {zoomBook.price}</ProductPrice>
                    <WrapProductAmount>
                      <ProductAmountContainer>
                        <AddButton onClick={addCartNum} />
                        <ProductAmount>{cartNum}</ProductAmount>
                        <DelButton onClick={delCartNum} />
                      </ProductAmountContainer>
                      <ProductAddCart>
                        <ButtonCart
                          onClick={updateZoombook}
                          variant="contained"
                          color="error"
                          size="large"
                        >
                          <ShoppingCartCheckoutIcon
                            style={{ marginRight: "5px" }}
                          />
                          Add Cart
                        </ButtonCart>
                      </ProductAddCart>
                    </WrapProductAmount>
                  </PriceDetail>
                  <Hr />
                  <ProductHarakat>
                    <b>Harakat: </b>100%
                  </ProductHarakat>
                  <ProductCopy>
                    <b>Copy: </b>Saudi{" "}
                  </ProductCopy>
                </DetailsContent>
              </Details>
            </Product>
          </Info>
          
          <Side>
            <RelatedTitle>
              <ChevronLeftIcon style={{ marginRight: "10px" }} />
              RELATED PRODUCTS
            </RelatedTitle>
            <Related>
              {displayProducts.map((item) => (
                <RelatedSideItem item={item} key={item.id} />
              ))}
            </Related>
          </Side>
        </Bottom>
      </Wrapper>
      <RelatedExtentionTitle>Related Items</RelatedExtentionTitle>
      <RelatedWrapExtension>
        {displayProducts.map((item)=>(
          <RelatedItemExtension item={item} key={item.id}/>
        ))}
      </RelatedWrapExtension>
    </Container>
  );
};

export default Checkout;

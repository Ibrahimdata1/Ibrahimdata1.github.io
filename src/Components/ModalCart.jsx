import React from "react";
import Box from "@mui/material/Box";
import {
  ModalContent,
  ModalTitle,
  ModalContainer,
  Card,
  CardName,
  CardImg,
  CardCal,
  CardDelete,
  CardButtonContainer,
  SecondModalContainer,
  Line,
  ItemPriceContainer,
  ItemPriceResult,
  ItemPriceTitle,
  ShoppingPriceContainer,
  ShoppingPriceResult,
  ShoppingPriceTitle,
  TotalPriceContainer,
  TotalPriceResult,
  TotalPriceTitle,
  ButtonCheckout,
  CardImgDiv,
  CartEmptyContainer,
} from "../Styles/ModalCart.style";
import Modal from "@mui/material/Modal";
import { CartContext } from "./Context";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { IconButton } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Button from "@mui/material/Button";
import { motion } from "framer-motion";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Typography } from "@mui/joy";

const CartEmpty = () => {
  return (
    <CartEmptyContainer>
      <ShoppingCartOutlinedIcon style={{ fontSize: "100px" }} />
      <Typography>
        <h1>Your Cart is Currently Empty</h1>
      </Typography>
      <div>
        <Typography variant="h1" textAlign="center">
          Before proceed to checkout.
        </Typography>
        <Typography variant="h1">
          You must add some products to your cart.
        </Typography>
      </div>
      <Button
        variant="contained"
        size="small"
        color="success"
        style={{display:'flex',alignItems: "center", marginTop: "35px",textDecoration:'none' }}
        as="a" href="/products"
      >
        <span>
          <ShoppingCartOutlinedIcon
            fontSize="small"
            style={{ marginTop: "3px", marginRight: "5px" }}
          />
        </span>
        <span>RETURN TO SHOP</span>
      </Button>
    </CartEmptyContainer>
  );
};
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: "5px",
};
const resolution = window.innerWidth;
const isResolution = resolution < 993;

export default function ModalCart() {
  const { handleClose, open, onAdd, onRemove, onClear, cartLength, cart } =
    React.useContext(CartContext);
  const itemsPrice = cart.reduce(
    (preVal, curVal) => preVal + curVal.qty * curVal.price,
    0
  );
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + shippingPrice;
  //---------ModalFramerMotion-----------//
  const modalMotion = {
    hidden: {
      opacity: 0,
      y: "-100vh",
    },
    visible: {
      opacity: 1,
      y: "0",
    },
  };
  const onAddCart = (item) => {
    const newItem = { ...item, qty: 1 };
    console.log(newItem);
    onAdd(newItem);
  };
  const [isRes, setIsRes] = React.useState(false);
  React.useEffect(() => {
    if (isResolution) {
      setIsRes(true);
    }
  }, []);
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      component={motion.div}
      variants={modalMotion}
      initial="hidden"
      animate="visible"
    >
      <Box
        sx={style}
        style={
          isRes
            ? { padding: "0 30px", backgroundColor: "#18150d", width: "80%" }
            : { padding: "0 30px", backgroundColor: "#18150d" }
        }
      >
        <ModalContainer style={{ color: "white" }}>
          <ModalTitle>
            <h2>Cart Items</h2>
          </ModalTitle>
          <ModalContent>
            {cartLength === 0 && <CartEmpty />}
            {cart.map((item) => (
              <Typography color="common.white">
                <Card>
                  <CardName>Book1</CardName>
                  <CardImgDiv>
                    <CardImg src={item.url} key={item.id} />
                  </CardImgDiv>
                  <CardButtonContainer>
                    <IconButton onClick={() => onRemove(item)}>
                      <RemoveIcon style={{ color: "red" }} />
                    </IconButton>
                    <IconButton onClick={() => onAddCart(item)}>
                      <AddIcon style={{ color: "green" }} />
                    </IconButton>
                  </CardButtonContainer>
                  <CardCal>
                    {item.qty} x ${item.price}
                  </CardCal>
                  <CardDelete>
                    <IconButton onClick={() => onClear(item)}>
                      <DeleteForeverIcon />
                    </IconButton>
                  </CardDelete>
                </Card>
              </Typography>
            ))}
          </ModalContent>
          {cartLength !== 0 && (
            <SecondModalContainer>
              <Line style={{ color: "black" }} />
              <Typography color="common.white">
                <ItemPriceContainer>
                  <ItemPriceTitle>Items Price</ItemPriceTitle>
                  <ItemPriceResult>${itemsPrice.toFixed(2)}</ItemPriceResult>
                </ItemPriceContainer>
                <ShoppingPriceContainer>
                  <ShoppingPriceTitle>Shipping Price</ShoppingPriceTitle>
                  <ShoppingPriceResult>${shippingPrice}</ShoppingPriceResult>
                </ShoppingPriceContainer>
                <TotalPriceContainer>
                  <TotalPriceTitle>Total Price</TotalPriceTitle>
                  <TotalPriceResult>${totalPrice.toFixed(2)}</TotalPriceResult>
                </TotalPriceContainer>
              </Typography>
              <ButtonCheckout>
                  <Button
                    style={{ width: "90%",textDecoration:'none',textAlign:'center'}}
                    variant="contained"
                    color="success"
                    as="a" href="/"
                  >
                    Checkout
                  </Button>
              </ButtonCheckout>
            </SecondModalContainer>
          )}
        </ModalContainer>
      </Box>
    </Modal>
  );
}

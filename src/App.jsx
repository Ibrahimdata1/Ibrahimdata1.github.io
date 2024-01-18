import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import { CartContext } from "./Components/Context";
import React from "react";
import Student from "./Pages/Student";
import Footer from "./Components/Footer";
import Checkout from './Pages/Checkout'
import BookData from './Data/BookData'
import Register from "./Pages/Register";
import Login from "./Pages/Login";

const App = () => {
  const [user,setUser] = React.useState(null)
    const getUser=async()=>{
    try {
        const res = await axios.get(URL+'/login')
        setUser(res.data)
    } catch (error) {
        console.log(error)
    }
}
//-------------CartFunction------------//
const [cart,setCart] = React.useState([]);
const [displayProducts,setDisplayProducts] = React.useState(BookData)
const onAdd = (item) =>{
    const exist = cart.find((cart)=>cart.id === item.id);
    if(exist && item.qty > 1){
      const newCart = cart.map((cart)=>cart.id === item.id ? {...exist, qty:exist.qty+item.qty}:cart);
      setCart(newCart);
    localStorage.setItem('cart',JSON.stringify(newCart));
    }
    else if (exist){
        const newCart = cart.map((cart)=>cart.id === item.id ? {...exist, qty:exist.qty+1}:cart);
        setCart(newCart);
        localStorage.setItem('cart',JSON.stringify(newCart));
    }else{
      if(item.qty > 1){
        const newCart = [...cart,{...item,qty:item.qty}];
        setCart(newCart);
        localStorage.setItem('cart',JSON.stringify(newCart));
      }else{
        const newCart = [...cart,{...item,qty:1}];
        setCart(newCart);
        localStorage.setItem('cart',JSON.stringify(newCart));
      }
    };
};
const onRemove = (item) =>{
  const exist = cart.find((cart)=>cart.id === item.id);
  if (exist.qty === 1){
      const newCart = cart.filter((cart)=>cart.id !== item.id);
      setCart(newCart);
      localStorage.setItem('cart',JSON.stringify(newCart));
  }else{
      const newCart = cart.map((cart)=>cart.id === item.id ? {...exist,qty:exist.qty-1}:cart);
      setCart(newCart);
      localStorage.setItem('cart',JSON.stringify(newCart));
  }
};
const onClear = (item) => {
  const newCart = cart.filter((cart) => cart.id !== item.id);
  setCart(newCart);
  localStorage.setItem('cart',JSON.stringify(newCart));
};

const cartLength = cart.length;
//---------showCartModal-----------//
const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const iframePlayer = 'https://www.youtube.com/embed/57mvyD9Rk1U'
  const [urlVid, setUrlVid] = React.useState(iframePlayer);
  const changeVidUrl = (item) => {
    const newUrl = item.vidUrl;
   setUrlVid(newUrl);
  };
//-----------Checkout-----------//
const[zoomBook,setZoomBook] = React.useState('');
const changeBook = (item)=>{
  const changeBookItem = item
  setZoomBook(changeBookItem)
  localStorage.setItem('checkout',JSON.stringify(changeBookItem));
}
React.useEffect(()=>{
  setZoomBook(
    localStorage.getItem('checkout') ? JSON.parse(localStorage.getItem('checkout')):null
  );
  setCart(
    localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')):[]
  );
},[]);
  return (
    <BrowserRouter>
      <CartContext.Provider value={{getUser,setUser,user,onAdd,onRemove,cartLength,cart,setCart,onClear,open,setOpen,handleClose,handleOpen,changeVidUrl,urlVid,changeBook,zoomBook,displayProducts,setDisplayProducts}}>
        <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/student" element={<Student/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
      </Routes>
      <Footer/>
      </CartContext.Provider>
    </BrowserRouter>
  );
};

export default App;

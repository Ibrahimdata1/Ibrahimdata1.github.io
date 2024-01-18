import { useContext } from "react"
import { CartContext } from "./Context";
import {MenuBar,Tab} from '../Styles/Menu.style'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { URL } from "../url";

const Menu = () => {
    const {user,setUser} =useContext(CartContext)
    const navigate = useNavigate()
    const Logout = async()=>{
        try {
            const res = await axios.get(URL+'/logout')
            setUser(false)
            navigate('/login')
            console.log(res.data)
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <MenuBar>
      {!user && <Tab>Login</Tab>}
     {!user &&  <Tab>Register</Tab>}
     {user &&  <Tab>Write</Tab>}
     {user &&  <Tab>My Data</Tab>}
     {user &&  <Tab onClick={Logout}>Logout</Tab>}
     </MenuBar>
  )
}

export default Menu

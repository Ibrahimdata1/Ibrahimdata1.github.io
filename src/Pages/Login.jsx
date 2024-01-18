import {Container,Wrapper,Title,Form,Input,Agreement,Button} from '../Styles/Register.style'
import { Link,useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import axios from 'axios'
import {URL} from '../url'
import { CartContext } from "../Components/Context";


const Register = () => {
    const {setUser} = useContext(CartContext)
  const[email,setEmail]= useState('')
  const [password,setPassword] = useState('')
  const[error,setError] = useState(false)
  const navigate = useNavigate()

  const handleLogin = async()=>{
    try {
        const res = await axios.post(URL+'/login',{email,password},{withCredentials:true})
        setError(false)
        console.log('login successfull!')
        setUser(res.data)
        navigate('/')
    } catch (error) {
        setError(true)
        console.log(error)
    }
}

  return (
    <Container>
      <Wrapper>
        <Title>Login to Site</Title>
        <Form>
          <Input onChange={(e)=>setEmail(e.target.value)} placeholder="email" type='email'/>
          <Input onChange={(e)=>setPassword(e.target.value)} placeholder="password" type='password'/>
          <Agreement>
            By creating an account, l consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button onClick={handleLogin} as='a'>LOGIN</Button>
        </Form>
        {error && <h3 style={{color:'red',textAlign:'center',marginTop:'30px'}}>Something Went Wrong!</h3>}
      </Wrapper>
    </Container>
  );
};

export default Register;
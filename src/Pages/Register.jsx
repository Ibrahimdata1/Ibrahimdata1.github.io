import {Container,Wrapper,Title,Form,Input,Agreement,Button} from '../Styles/Register.style'
import { Link,useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios'
import {URL} from '../url'


const Register = () => {
  const [username,setUsername] = useState('')
  const[email,setEmail]= useState('')
  const [password,setPassword] = useState('')
  const[error,setError] = useState(false)
  const navigate = useNavigate()

  const handleRegister = async()=>{
    try {
        const res = await axios.post(URL+'/register',{username,email,password})
        setUsername(res.data.username)
        setEmail(res.data.email)
        setPassword(res.data.password)
        setError(false)
        navigate('/login')
    } catch (error) {
        setError(true)
        console.log(error)
    }
}

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input onChange={(e)=>setUsername(e.target.value)} placeholder="username" />
          <Input onChange={(e)=>setPassword(e.target.value)} placeholder="password" />
          <Input onChange={(e)=>setEmail(e.target.value)} placeholder="email" />
          <Agreement>
            By creating an account, l consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button onClick={handleRegister} as='a'>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
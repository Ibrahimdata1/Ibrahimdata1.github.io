import styled from "styled-components";
import {mobile,ipad} from '../Styles/Checkout.style'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background:
  linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
    url("/Images/libraryRegister.jpg")center; 
    background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({paddingTop:'0'})}
`;
export const Wrapper = styled.div`
margin-top: 50px;
  padding: 20px;
  width: 40%;
  background-color: whitesmoke;
  border-radius: 5px;
  ${mobile({width:'75%'})}
`;
export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
export const Title = styled.h1`
letter-spacing: 1px;
  font-size: 24px;
  ${ipad({textAlign:'center'})};
  color: black;
  font-weight: bolder;
  text-align: center;
`;
export const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0 0;
  padding: 10px;
`;
export const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0;
`;
export const Button = styled.button`
display: flex;
justify-content: center;
text-decoration: none;
margin: auto;
  width: 40%;
  border: none;
  padding: 15px 20px;
  cursor: pointer;
  background-color: teal;
  color: white;
  border-radius: 5px;
  ${mobile({width:'100%'})}
  &:active{
    transform: translateY(2px)
  }
  &:hover{
    filter: brightness(105%);
  }
`;
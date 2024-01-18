import styled from "styled-components";
import { css } from "styled-components";
import { Add, Remove } from "@mui/icons-material";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export const ipad = (props) => {
  return css`
    @media only screen and (max-width: 992px) {
      ${props}
    }
  `;
};
export const desktop = (props) => {
  return css`
    @media only screen and (min-width: 993px) {
      ${props}
    }
  `;
};
export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 600px) {
      ${props}
    }
  `;
};
export const Container = styled.div`
`;
export const Wrapper = styled.div`
  padding: 20px;
  ${ipad({ padding: "40px 10px 10px 10px" })}
  ${mobile({ padding: "40px 10px 10px 10px" })}
`;
export const Title = styled.h1`
  text-align: center;
  margin-left: 35px;
`;
export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 80px 25px 10px 25px;
`;
export const TopButton = styled(Button)`
  padding: 10px;
  cursor: pointer;
  ${mobile({ width:'40vw'})}
`;

export const TopTexts = styled.span`
  display: flex;
  justify-content: center;
  ${ipad({ display: "none" })}
`;

export const Toptext = styled.div`
  margin: 0px 10px;
  text-decoration: underline;
  cursor: pointer;
`;
export const DetailsContent = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;
export const Bottom = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 30px;
  ${ipad({ flexDirection: "column" })}
`;
export const Info = styled.div`
  flex: 3;
  display: flex;
`;
export const Product = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
  width: 100%;
  ${ipad({ width:'100%' })}
  ${mobile({ flexDirection:'column' })}
`;
export const ProductDetails = styled.div`
  flex: 1;
  display: flex;
  ${ipad({ flex:1,justifyContent:'center' })}
  ${mobile({ marginBottom:'30px' })}
`;
export const ProductCopy = styled.div``;
export const Image = styled.img`
  width: 200px;
  ${ipad({ marginBottom: "20px" })}
`;
export const ProductName = styled.h1`
  display: flex;
  justify-content: flex-start;
  margin: 0 0 20px 0;
`;
export const ProductComment = styled.p`
  display: flex;
  justify-content: flex-start;
  margin: 0px;
`;
export const ProductHarakat = styled.div``;
export const PriceDetail = styled.div`
  flex: 1;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
`;
export const Details = styled.div`
  display: flex;
  flex: 2;
  flex-direction: column;
  justify-content: flex-start;
  padding-left: 30px;
  ${ipad({ flex:1 })}
  ${mobile({ paddingLeft:'10px' })}
`;
export const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid white;
`;
export const ProductAmount = styled.div`
  font-size: 20px;
  margin: 0 20px;
  ${ipad({ margin: "5px 15px" })}
`;
export const ProductPrice = styled.span`
  font-size: 30px;
  color: goldenrod;
  ${ipad({ marginBottom: "20px", marginLeft: "0" })}
`;
export const Hr = styled.div`
  background-color: #eee;
  border: none;
  height: 1px;
  margin: 20px 0;
`;
export const Related = styled.div`
  height: 80vh;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    background-color: #fff;
    width: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: #fff;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #babac0;
    border-radius: 16px;
    border: 4px solid #fff;
  }
`;
export const RelatedTitle = styled.h3`
  text-align: left;
  display: flex;
  align-items: center;
`;
export const RelatedItemTitle = styled.h3`
color: white;
margin: 0 0 10px 0;
&:hover{
  color: #ff5900;
  transition: 0.3s;
};
${mobile({margin:'0 20px'})}
`;
export const RelatedItemPrice = styled.p`
margin: 0 0 10px 0;
color: #ff0000e0;
${ipad({ textAlign:'center'})}
`;
export const RelatedItemComment = styled.p`
  margin-right: 20px;
  ${desktop({ display:'none'})}
  ${mobile({width:'100%',marginLeft:'10px'})}
`
export const RelatedContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  ${ipad({ display:'flex',flexDirection:'row',alignItems:'flex-start'})}
  ${mobile({flexWrap:'wrap',marginBottom:'40px'})}
`;
export const RelatedItemText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 20px;
  ${ipad({ marginLeft:'0'})}
  ${mobile({flexDirection:'row',alignItems:'center'})}
`;
export const RelatedItemImg = styled.img`
  width: 50px;
  height: 80px;
  ${ipad({ width:'80px',height:'110px',marginBottom:'10px' })}
`;
export const ButtonCart = styled(Button)`
  width: 100%;
  ${ipad({ marginTop: "0" })}
`;
export const ProductAddCart = styled.div`
  margin-left: 30px;
`;
export const RelatedItem = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 20px;
  cursor: pointer;
  padding: 10px;
  ${ipad({ width:'15vh',flexDirection:'column' })}
  ${mobile({ marginBottom:'0',flexDirection:'row',alignItems:'center',width:'100%'})}
`;
export const WrapProductAmount = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0 0 0;
`;
export const AddButton = styled(Add)`
  border: 1px solid white;
  padding: 10px 0;
  cursor: pointer;
`;
export const DelButton = styled(Remove)`
  border: 1px solid white;
  padding: 10px 0;
  cursor: pointer;
`;
export const Side = styled.div`
  flex: 1;
  ${ipad({ display:'none'})}
`;
export const RelatedItemMobile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${ipad({ width:'50%'})}
  ${mobile({ width:'100%' })}
`
export const RelatedItemMobileImg = styled.img`
  width: 70px;
  height: 100px;
`;
export const RelatedItemMobileContent = styled.div`
   ${mobile({ marginRight:'10px' })}
`
export const RelatedWrapExtension = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-left: 20px;
  margin-right: 20px;
  ${desktop({ display:'none'})}
  ${mobile({ width:'100%',flexDirection:'column',margin:'0',padding:'0 10px'})}
`
export const RelatedExtentionTitle = styled.h1`
  font-weight: 400;
  border-bottom: 2px solid #f4f5f6;
  color: #ff6b00ff;
  margin-bottom: 20px;
  padding-left: 4rem;
  ${desktop({ display:'none'})}
  ${mobile({ display:'flex',justifyContent:'center',paddingLeft:'0' })}
`
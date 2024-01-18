import * as React from "react";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import { CartContext } from '../../Components/Context';
import { Link } from "react-router-dom";

const resolution = window.innerWidth;
const isMobile = resolution <= 420;
const SliderSonItem = ({item}) => {
  const {changeVidUrl} = React.useContext(CartContext)
  const changeVidUrlFn = () =>{
    changeVidUrl(item)
  }
 
  return (
    <Link to="/student" style={{ textDecoration: "none" }}>
    <Box
      sx={{ display: "flex", gap: 2, flexWrap: "wrap", p: 1, m: 0 ,justifyContent:'center'}}
      className="BoxEffect" onClick={changeVidUrlFn}
    >
      <Card component="li" sx={isMobile ? { minWidth: 200, flexGrow: 1,maxHeight:'20vh',maxWidth:'70vw',padding:'30px',border:'2px solid #9c0c0c7c'}:{ minWidth: 200, flexGrow: 1,border:'2px solid #9c0c0c7c'}}>
        
          <CardCover>
            <img src={item.url} alt="" style={{objectFit:'cover'}}/>
          </CardCover>
        
        <CardContent>
          <Typography
            level="body-lg"
            fontWeight="lg"
            textColor="#fff"
            mt={{ xs: 30, sm: 21 }}
          ></Typography>
        </CardContent>
      </Card>
    </Box>
    </Link>
  );
};
export default SliderSonItem;

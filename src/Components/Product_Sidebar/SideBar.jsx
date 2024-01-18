import {
  SideBarContainer,
  LogoContainer,
  LogoMobile,
} from "../../Styles/SideBar.style";
import SideBarCategory from "./SideBarCategory";
import SideBarPrice from "./SideBarPrice";
import SideBarHarakat from "./SideBarHarakat";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import styled from "styled-components";
import {css} from 'styled-components'

const ipad = (props) => {
  return css`
    @media only screen and (max-width: 992px) {
      ${props}
    }
  `;
};
const desktop = (props) => {
  return css`
    @media only screen and (min-width: 993px) {
      ${props}
    }
  `;
};
const mobile = (props) => {
  return css`
    @media only screen and (max-width: 420px) {
      ${props}
    }
  `;
};
const LogoContainerDesktop = styled.div`
  ${ipad({ display: "none" })};
`;
const LogoContainerMobile = styled.div`
  ${desktop({ display: "none" })};
`;
const SideBarContainer2 = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #100C08;
  color: white;
  flex: 1;
  padding-bottom: 1.5rem;
  padding-left: 20px;
  z-index: 100;
`
const Sidebar1 = styled.div`
  ${ipad({ display: "none" })};
`;
const Sidebar2 = styled.div`
  ${desktop({ display: "none" })};
`;
const SideBar = () => {
  const modalMotion = {
    close: {
      opacity: 0,
      x: "-100%",
    },
    open: {
      opacity: 1,
      x: "0",
      transition: {
        type: "spring",
        duration: 5,
      },
    },
  };
  const [isShow, setIsShow] = React.useState(false);
  React.useEffect(()=>{
    setIsShow(false);
  },[])
  return (
    <div>
      <Sidebar1>
        <SideBarContainer
          variants={modalMotion}
          initial={isShow ? "open" : "close"}
          animate={isShow ? "close" : "open"}
        >
          <LogoContainerMobile>
            <SearchIcon
              style={{ width: "2rem", height: "2rem" }}
              onClick={() => setIsShow((prev) => !prev)}
            />
          </LogoContainerMobile>
          <LogoContainerDesktop>
            <SearchIcon style={{ width: "2rem", height: "2rem" }} />
          </LogoContainerDesktop>
          <SideBarCategory />
          <SideBarPrice />
          <SideBarHarakat />
        </SideBarContainer>
      </Sidebar1>
      {/* -----------2nd-------------- */}
      <LogoMobile style={isShow ? {display:'none'}:null}>
        <SearchIcon  style={{ width: "2rem", height: "2rem",}}
            onClick={() => setIsShow((prev) => !prev)}/>
      </LogoMobile>
      <Sidebar2 style={isShow ? {display:'block'}:{display:'none'}}>
        <SideBarContainer2
        >
          <LogoContainer>
            <SearchIcon
              style={{ width: "2rem", height: "2rem" }}
              onClick={() => setIsShow((prev) => !prev)}
            />
          </LogoContainer>
          <SideBarCategory />
          <SideBarPrice />
          <SideBarHarakat />
        </SideBarContainer2>
      </Sidebar2>
    </div>
  );
};

export default SideBar;

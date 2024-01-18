import React from "react";
import { SDprogramMomContent,SDprogramMomContainer } from "../../Styles/SDprogram.style";
import SDdata_vid from '../../Data/SDdata_vid'
import SDProgramSon from "./SDprogramSon";


const SDprogramMom = () => {
  const [items, setItems] = React.useState(SDdata_vid);

  return (
    <SDprogramMomContainer>
      <SDprogramMomContent>
        <SDProgramSon items={items} />
      </SDprogramMomContent>
    </SDprogramMomContainer>
  );
};

export default SDprogramMom;

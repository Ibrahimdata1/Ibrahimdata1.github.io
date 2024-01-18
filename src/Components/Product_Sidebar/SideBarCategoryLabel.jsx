import { SubSideBarSpan,SubSideBarLabel, SubSideBarInput } from '../../Styles/SideBar.style'
import {FilterContext} from '../Context';
import React from 'react';

const SubSideBarItemLabel = ({title}) => {
  const {radioHandler} = React.useContext(FilterContext)
  const [radioChange,setRadioChange] = React.useState(false)

  React.useEffect(()=>{
    radioHandler(title);
  },[radioChange])
  return (
    <SubSideBarLabel>
      <SubSideBarInput type='radio' name='checkbox' onChange={()=>setRadioChange(prev=>!prev)}/>
      <SubSideBarSpan></SubSideBarSpan>{title}
    </SubSideBarLabel>
  );
};

export default SubSideBarItemLabel;

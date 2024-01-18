import {
  SubSideBarContainer,
  SubSideBarTitle,
  SubSideBarLabelContainer,
} from "../../Styles/SideBar.style";
import SubSideBarItemLabel from "./SideBarCategoryLabel";
const SideBarHarakat = () => {
  return (
    <SubSideBarContainer>
      <SubSideBarTitle>Harakat</SubSideBarTitle>
      <SubSideBarLabelContainer style={{marginRight:'25px'}}>
        <SubSideBarItemLabel title='100% Harakat'/>
        <SubSideBarItemLabel title='50% Harakat'/>
        <SubSideBarItemLabel title='No Harakat'/>
      </SubSideBarLabelContainer>
    </SubSideBarContainer>
  )
}

export default SideBarHarakat

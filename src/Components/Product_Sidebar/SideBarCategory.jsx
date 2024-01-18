import {
  SubSideBarContainer,
  SubSideBarTitle,
  SubSideBarLabelContainer
} from "../../Styles/SideBar.style";
import SideBarCategoryLabel from "./SideBarCategoryLabel";

const SideBarCategory = () => {
  return (
    <SubSideBarContainer>
      <SubSideBarTitle>Catagory</SubSideBarTitle>
      <SubSideBarLabelContainer style={{marginRight:'60px'}}>
        <SideBarCategoryLabel title='All'/>
        <SideBarCategoryLabel title='Aqeedah'/>
        <SideBarCategoryLabel title='Manhaj'/>
        <SideBarCategoryLabel title='Hadeeth'/>
        <SideBarCategoryLabel title='Fiqh'/>
        <SideBarCategoryLabel title='Seerah'/>
        <SideBarCategoryLabel title='Tazkiyah'/>
      </SubSideBarLabelContainer>
    </SubSideBarContainer>
  );
};

export default SideBarCategory;

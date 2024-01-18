import {
  SubSideBarContainer,
  SubSideBarTitle,
  SubSideBarLabelContainer,
} from "../../Styles/SideBar.style";
import SubSideBarItemLabel from "./SideBarCategoryLabel";
const SideBarPrice = () => {
  return (
    <SubSideBarContainer>
      <SubSideBarTitle>Price</SubSideBarTitle>
      <SubSideBarLabelContainer>
        <SubSideBarItemLabel title="All" />
        <SubSideBarItemLabel title="$0-$50" />
        <SubSideBarItemLabel title="$50-$100" />
        <SubSideBarItemLabel title="$100-$300" />
        <SubSideBarItemLabel title="$300-$500" />
        <SubSideBarItemLabel title="$500-$1000" />
        <SubSideBarItemLabel title="More Than $1000" />
      </SubSideBarLabelContainer>
    </SubSideBarContainer>
  );
};

export default SideBarPrice;

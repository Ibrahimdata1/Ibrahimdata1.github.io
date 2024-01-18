import {RelatedItemMobile,RelatedItemMobileContent} from '../Styles/Checkout.style';
import RelatedSideItem from "../Components/RelatedSideItem";

const RelatedItemExtension = ({item}) => {
 
  return (
    <RelatedItemMobile>
      <RelatedItemMobileContent>
        <RelatedSideItem item={item} key={item.id} />
      </RelatedItemMobileContent>
    </RelatedItemMobile>
  );
};

export default RelatedItemExtension;

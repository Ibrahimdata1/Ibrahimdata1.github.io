import { SearchContainer,SearchContent,ProfileContainer,IconLink,SearchInput } from "../../Styles/SearchBar.style"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const SearchBar = ({searchHandler}) => {
  return (
    <SearchContainer>
      <SearchContent>
        <SearchInput  type="text" placeholder="Search books name..." onChange={searchHandler}/>
      </SearchContent>
      <ProfileContainer>
        <IconLink>
            <FavoriteBorderIcon/>
        </IconLink>
        <IconLink>
            <PersonOutlineOutlinedIcon/>
        </IconLink>
        <IconLink>
            <ShoppingCartOutlinedIcon/>
        </IconLink>
      </ProfileContainer>
    </SearchContainer>
  )
}

export default SearchBar

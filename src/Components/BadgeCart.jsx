import { CartContext } from './Context';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React from 'react';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 0,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

export default function BadgeCart() {
  const {cartLength} = React.useContext(CartContext)
  return (
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={cartLength} color="secondary">
        <ShoppingCartIcon style={{color:'white'}} fontSize='large'/>
      </StyledBadge>
    </IconButton>
  );
}
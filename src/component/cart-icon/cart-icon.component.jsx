import { ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';
import {useContext} from 'react';
import { CartContext} from '../../context/cart.context';

const CartIcon = () => {

  const {isCartOpen ,setCartOpen , cartCount} = useContext(CartContext);

  const OpenCartOnCLick = () =>
      setCartOpen(!isCartOpen);

  return(
    <div className= 'cart-icon-container' onClick={OpenCartOnCLick}>
    <ShoppingBag className='shopping-icon'/>
    <span className ='item-count'>{cartCount}</span>
    </div>
  );
};

export default CartIcon;

import './cart-dropdown.styles.scss';
import Button from '../Button/button.component';
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import CartItem from '../Cart-Item/cartItem.component';
import {useNavigate} from 'react-router-dom';
const CartDropdown = () => {

  const { cartItems } = useContext(CartContext);
const navigate = useNavigate();
const goToCheckOutHandler = () => {

  navigate('/Checkout');
}

  return(
    <div className = 'cart-dropdown-container'>
    <div className='cart-items'>
    {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))
      ) : (
        <span className='empty-message'>Your cart is empty</span>
      )}
     </div>
     <Button onClick={goToCheckOutHandler}>CHECKOUT</Button>
    </div>
  )
}

export default CartDropdown;

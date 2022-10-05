import './cart-dropdown.styles.scss';
import Button from '../Button/button.component';
const CartDropdown = () => {
  return(
    <div className = 'cart-dropdown-container'>
    <div className = 'cartItems'/>
    <Button>Check Out</Button>
    </div>
  )
}

export default CartDropdown;

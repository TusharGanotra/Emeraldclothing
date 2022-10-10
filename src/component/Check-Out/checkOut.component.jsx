import './checkOut.styles.scss';
import {useContext} from 'react';
import {CartContext} from '../../context/cart.context';


import CheckoutItem from '../checkoutItem/checkoutitem.component';



const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <div className='checkout-container'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className='total'>TOTAL: ₹{cartTotal}</div>
    </div>
  );
};

export default Checkout;


// import './checkOut.styles.scss';
// import {useContext} from 'react';
// import {CartContext} from '../../context/cart.context';
//
//
// const CheckOut = () => {
//
//   const { cartItems } = useContext(CartContext);
//
//   return(
//     <div>
//     {cartItems.map((cartItem) => {
//       const {name , id , quantity } = cartItem;
//       return(
//         <div key = {id}>
//           <h2>{name}</h2>
//           <h2>{quantity}</h2>
//         </div>
//       );
//     })
//   }
//
//     </div>
//
//   )
// };
//
// export default CheckOut;

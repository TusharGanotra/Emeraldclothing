import './cartItem.styles.scss';

const CartItem = ({ cartItem }) => {
  const { imageUrl, price, name, quantity } = cartItem;

  return (
    <div className='cart-item-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='item-details'>
        <span className='name'>{name}</span>
        <span className='price'>
          {quantity} x ₹{price}
        </span>
      </div>
    </div>
  );
};
// Now we will recieving cartitem and then using name , quantity , other parameters parameters to show them inside cart
export default CartItem;

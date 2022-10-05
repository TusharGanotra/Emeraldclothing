import './product-card.styles.scss';
import Button from '../Button/button.component';

const ProductCard = ({product}) => {
  const { name , price , imageUrl} = product;
  return(
    <div className= 'product-card-container'>
    <img src={imageUrl}/>
    <div className = 'footer'>
    <span className = 'name'>{name}</span>
    <span className = 'price'>₹{price}</span>
    </div>
    <Button buttontype = 'inverted'>Add to cart</Button>
    </div>
  )

}

export default ProductCard ;

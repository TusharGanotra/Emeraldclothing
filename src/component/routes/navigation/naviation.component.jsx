import {Fragment , useContext} from 'react';//as an alternative for div
import { Outlet , Link} from 'react-router-dom';
import { ReactComponent as Emerald } from '../../../assets/Logoemerald.svg';
import CartIcon from '../../cart-icon/cart-icon.component';
import { UserContext } from '../../../context/user.context';
import CartDropdown from '../../cart-dropdown/cart-dropdown.component';
import {signOutUser} from '../../../utils/firebase/firebase.utils';
import './navigation.styles.scss'
import {CartContext} from '../../../context/cart.context';
const Navigation = () =>{

  const {currentUser , setcurrentUser} = useContext(UserContext);
  const {isCartOpen} = useContext(CartContext);

  const signOuthandler = async () => {
    await signOutUser();
    setcurrentUser(null);
  }

  return(
    <Fragment>
    <div className = 'navigation'>
<Link className = 'logo-container' to='/'>
<Emerald className='logo' />
</Link>

    <div className = "nav-links-container" >

    <Link className = 'nav-link' to ='/shop'>
    SHOP</Link>

    {
      currentUser ? ( <span className='nav-link' onClick={signOuthandler}>SIGN OUT</span> ) : (<Link className = 'nav-link' to ='/auth'>SIGN IN</Link>)
    }

    <CartIcon />
    </div>
    {isCartOpen && <CartDropdown/>}
    </div>

    <Outlet/>

    </Fragment>
  )
}

//  {isCartOpen && <CartDropdown/>} this is a sort of conditional statement
// Firts Thing is to remeber is compnent is always true
// here this statement indicates that if iscartOpen is true and cartDropdown is true the retuen CartDropdown

export default Navigation

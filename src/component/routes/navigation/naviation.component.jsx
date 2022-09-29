import {Fragment} from 'react';//as an alternative for div
import { Outlet , Link} from 'react-router-dom';
import { ReactComponent as Emerald } from '../../../assets/Logoemerald.svg';
import './navigation.styles.scss'
const Navigation = () =>{
  return(
    <Fragment>
    <div className = 'navigation'>
<Link className = 'logo-container' to='/'>
<Emerald className='logo' />
</Link>

    <div className = "nav-links-container" >

    <Link className = 'nav-link' to ='/shop'>
    SHOP</Link>
  <Link className = 'nav-link' to ='/signIn'>
    SIGN IN</Link>

    </div>
    </div>

    <Outlet/>

    </Fragment>
  )
}

export default Navigation

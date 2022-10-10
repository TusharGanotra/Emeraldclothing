
import {  Routes , Route} from 'react-router-dom'
import Home from './component/routes/home/home.component'
import Navigation from './component/routes/navigation/naviation.component'
import Authentication from './component/routes/Authentication/auth.component'
import Shop from'./component/routes/Shop/shop.component';
import CheckOut from './component/Check-Out/checkOut.component';



const App = () =>{
  return(
    <Routes>
    <Route path='/' element={<Navigation/>} >
    <Route index element={<Home/>} />
    <Route path='shop/*' element={<Shop/>} />
  <Route path='auth' element={<Authentication/>} />
  <Route path='Checkout' element={<CheckOut/>} />
    </Route>

    </Routes>
  )
};
export default App;

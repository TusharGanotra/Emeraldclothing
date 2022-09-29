
import {  Routes , Route} from 'react-router-dom'
import Home from './component/routes/home/home.component'
import Navigation from './component/routes/navigation/naviation.component'
import SignIn from './component/routes/Sign-in/signIn.component'



const Shop = () => {
return(
  <p>This is shop section</p>
)
}

const App = () =>{
  return(
    <Routes>
    <Route path='/' element={<Navigation/>} >
    <Route index element={<Home/>} />
    <Route path='/shop' element={<Shop/>} />
  <Route path='/signIn' element={<SignIn/>} />
    </Route>

    </Routes>
  )
};
export default App;

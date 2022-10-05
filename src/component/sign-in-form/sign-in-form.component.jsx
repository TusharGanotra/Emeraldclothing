import {useState , useContext} from 'react';
import Button from '../Button/button.component' ;
import './sign-in.styles.scss';
import {UserContext} from '../../context/user.context';

import  { signInWithGooglePopup,
createUserDocumentFromAuth,
signInAuthUserWithEmailAndPassword,} from '../../utils/firebase/firebase.utils'
import FormInput from '../Form-input/form-input.component'

const defaultFormFields = {

  email : "",
  password : ""

}
const SignIn = () => {

  const [formfields ,setformfields] = useState(defaultFormFields);
  const { email , password } = formfields;

const { setcurrentUser } = useContext(UserContext);

const resetFormfields = () =>{
  return( setformfields(defaultFormFields) );
}

const signInWithGoogle = async () => {
  const { user } = await signInWithGooglePopup();
  setcurrentUser(user);
  await createUserDocumentFromAuth(user);
};

  const handleSubmit = async (event) => {
     event.preventDefault();


    try{const {user} = await signInAuthUserWithEmailAndPassword(email , password);

    setcurrentUser(user);
        resetFormfields();
    }
    catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('incorrect password for email');
          break;
        case 'auth/user-not-found':
          alert('no user associated with this email');
          break;
        default:
          console.log(error);
      }
  }
};

  const handlechange = (event)=>{


      const { name, value } = event.target;

      setformfields({ ...formfields, [name] : value });

    //what ...formfield do is basically it spells all the data inside it like displayName , email etc
    // and change the delatils of all those every time the handlechange funtion triggers

  }

  return(
    <div className="sign-up-container">
    <h2>I  already have an account </h2>
    <span>Sign In using Email and Password</span>
    <form onSubmit = {handleSubmit}>




      <FormInput
      label="Email"
      type="email"
      name="email"
      value={email}
      onChange={handlechange}
    />


      <FormInput
      label="Password"
      type="Password"
      name="password"
      value={password}
      onChange={handlechange}
       />




<div className='buttons-container'>


    <Button  type = "Submit">Sign In</Button>
    <Button  buttontype = "google" type="button" onClick={signInWithGoogle}>Google Sign In</Button>
    </div>
    </form>
    </div>

  )
}

export default SignIn;

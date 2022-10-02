//Only to be used with SignIn with googleredirect
// import {useEffect} from 'react';
// import {getRedirectResult} from 'firebase/auth';

import Signup from "../../sign-up-form/sign-up-form.component";
import SignIn from "../../sign-in-form/sign-in-form.component";
import './authentication.styles.scss';




const Authentication = () => {
  //UserEffect will only be used after user is redirected after clicking sign in with google redirect what this will do is it will add the data to db
  // useEffect(
  //   () => async () => {
  //     const response = await getRedirectResult(auth);
  //     if(response){
  //       const userDocRef = createUserDocumentFromAuth(response)
  //     }
  //   },
  //   []
  // );


  /*<button onClick = {SignInWithGoogleRedirect}>Sign In with google REDIRECT</button>
  SignInWithGoogleRedirect is a function which when called saves the user data in firebase authentication but we have to first auth and SignInWithGoogleRedirect function to use it
*/


  return(
    <div className='authentication-container'>
    
    <SignIn / >
    <Signup />
    </div>
  )
}
export default Authentication;

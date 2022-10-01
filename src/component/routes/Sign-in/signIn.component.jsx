//Only to be used with SignIn with googleredirect
// import {useEffect} from 'react';
// import {getRedirectResult} from 'firebase/auth';

import Signup from "../../sign-up-form/sign-up-form.component"


import { SignInWithGooglePopup ,  createUserDocumentFromAuth  } from '../../../utils/firebase/firebase.utils'

const SignIn = () => {
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


  const logGoogleUserWithPopup = async () => {
    const response = await SignInWithGooglePopup();
  const userDoc = await createUserDocumentFromAuth(response);
  }

  return(
    <div>
    <h1>This is a sign in page </h1>
    <button onClick = {logGoogleUserWithPopup}>Sign In with google POP UP</button>
<Signup />
    </div>
  )
}
export default SignIn;

import { SignInWithGooglePopup , createUserDocumentFromAuth  } from '../../../utils/firebase/firebase.utils'

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await SignInWithGooglePopup();
  const userDoc = await createUserDocumentFromAuth(response);
  }
  return(
    <div>
    <h1>This is a sign in page </h1>
    <button onClick = {logGoogleUser}>Sign In with google </button>
    </div>
  )
}
export default SignIn;

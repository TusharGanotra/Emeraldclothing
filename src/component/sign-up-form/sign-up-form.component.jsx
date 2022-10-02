import {useState} from 'react';
import Button from '../Button/button.component' ;
import './sign-up.styles.scss'

import  {createAuthUserWithEmailAndPassword,
createUserDocumentFromAuth,} from '../../utils/firebase/firebase.utils'
import FormInput from '../Form-input/form-input.component'

const defaultFormFields = {
  displayName: '',
email: '',
password: '',
confirmPassword: '',
}
const Signup = () => {

  const [formfields ,setformfields] = useState(defaultFormFields);
  const {displayName , email , password , confirmPassword } = formfields;

  //resetFormfields basically changes the input back to empty after data is processed or a function is called

const resetFormfields = () =>{
  return( setformfields(defaultFormFields) );
}


  const handleSubmit = async (event) => {
    event.preventDefault();
    // event.preventDefault basically limits functions or prevent it from calling itself before its been called by some button or some action

    if(password !== confirmPassword){
      alert("password doesnt match ");
      return;
    }


// try and catch block basically pass the data which comes from user input to firebase functions
    try {
       const { user } = await createAuthUserWithEmailAndPassword(
         email,
         password
       );

       await createUserDocumentFromAuth(user, { displayName });
       resetFormfields();
     } catch (error) {
       if (error.code === 'auth/email-already-in-use') {
         alert('Cannot create user, email already in use');
       } else {
         console.log('user creation encountered an error', error);
       }
     }
   };

  const handlechange = (event) => {


      const { name, value } = event.target;

      setformfields({ ...formfields, [name] : value });

    //what ...formfield do is basically it spells all the data inside it like displayName , email etc
    // and change the delatils of all those every time the handlechange funtion triggers

  }

  return(
    <div className="sign-up-container">
    <h2>I do not have an account </h2>
    <span>Sign up with your Email and Password</span>
    <form onSubmit={handleSubmit}>

      <FormInput
      label="Display Name"
      type="text"
      name="displayName"
      value={displayName}
      onChange={handlechange}
      />


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



      <FormInput
      label="Confirm Password"
      type="Password"
      name="confirmPassword"
      value={confirmPassword}
      onChange={handlechange} />




    <Button  type = "Submit">Submit</Button>
    </form>
    </div>

  )
}

export default Signup;

import {useState} from 'react';
import Button from '../Button/button.component'
import './sign-up.styles.scss'

import  {createUserAuthWithEmailAndPassword , createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils'
import FormInput from '../Form-input/form-input.component'

const defaultFormFields = {
  displayName : "",
  email : "",
  password : "",
  confirmPassword : ""
}
const Signup = () => {

  const [formfields ,setformfields] =useState(defaultFormFields);
  const {displayName , email , password , confirmPassword } = formfields;

const resetFormfields = () =>{
  setformfields(defaultFormFields);
}


  const handleSubmit = async (event) => {
    event.preventDefault();//it is basically used to prevent function from working without it being called

    if(password != confirmPassword){
      alert("password doesnt match ");
      return;
    }



    try{
      const response = await createUserAuthWithEmailAndPassword(email,password);
      await createUserDocumentFromAuth(response, {displayName});
      resetFormfields();
    }
    catch(error){
      if( error = "FirebaseError: Firebase: Error (auth/email-already-in-use)"){
        alert("User already exist");
      }
    }
  }

  const handlechange = (event)=>{
    const {name , value} = event.target;

    setformfields({...formfields , [name] : value});
    //what ...formfield do is basically it spells all the data inside it like displayName , email etc
    // and change the delatils of all those every time the handlechange funtion triggers

  }

  return(
    <div className="sign-up-container">
    <h2>I do not have an account </h2>
    <span>Sign up with your Email and Password</span>
    <form onSubmit = {handleSubmit}>


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


    <Button  buttontype='inverted' type = "Submit">Submit</Button>
    </form>
    </div>

  )
}
export default Signup;

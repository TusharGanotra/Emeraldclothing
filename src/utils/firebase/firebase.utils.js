// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth , signInWithRedirect, signInWithPopup , GoogleAuthProvider } from "firebase/auth";

import {
  getFirestore,
  doc, // to get instance of doc
  getDoc, // to access doc
  setDoc // to update doc
} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARCeQJShngDOmRQwnq2Mg2v6SFZz7qI8Y",
  authDomain: "emerald-clothing.firebaseapp.com",
  projectId: "emerald-clothing",
  storageBucket: "emerald-clothing.appspot.com",
  messagingSenderId: "88368892802",
  appId: "1:88368892802:web:e48cfb093e6e11e6eb1d9b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt : 'select_account',
});
export const auth = getAuth(app);
export const SignInWithGooglePopup = () => {
  return signInWithPopup(auth, provider);
};

export const db = getFirestore();

export const createUserDocumentFromAuth = async (usersAuth) => {
   const userDocRef = doc(db , "users" ,usersAuth.user.uid);//this will create a db with collection name as users and uniquely identify it using user.uid
  console.log(userDocRef) ;
  const userSnapshot = await getDoc(userDocRef);//This will fetch or allows access of doc from our db
    console.log(userSnapshot.exists());//This will tell us wether any doc exists inside our userSnapshot
//If user Does'nt exist then adding data

if(!userSnapshot.exists()){
  const {displayName , email} = usersAuth.user;
  const createdAt = new Date();

  try{
    await setDoc(userDocRef , {
      displayName ,
      email,
      createdAt
    });
}
    catch(error){
      console.log("error creating at the user " + error.message);
    }


  return userDocRef;
};
//adding data in db ends here
};

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth , signInWithPopup , signInWithRedirect,  GoogleAuthProvider , signOut ,  createUserWithEmailAndPassword , signInWithEmailAndPassword, } from "firebase/auth";

import {
  getFirestore,
  doc, // to get instance of doc
  getDoc, // to access doc
  setDoc, // to update doc
 collection,
 writeBatch,
 query,
 getDocs
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
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt : 'select_account',
});



//To add data inside firestore from our local .js file
export const addCollectionAndDocuments = async (
    collectionKey,
    objectsToAdd
  ) => {
    const batch = writeBatch(db);
    const collectionRef = collection(db, collectionKey);

    objectsToAdd.forEach((object) => {
       const docRef = doc(collectionRef, object.title.toLowerCase());
       batch.set(docRef, object);
    });

    await batch.commit();
    console.log('done');
  };


  export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);
    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
      const { title, items } = docSnapshot.data();
      acc[title.toLowerCase()] = items;
      return acc;
    }, {});

    return categoryMap;
  };


export const auth = getAuth();

//Allowing user To sign in with google uisng popup screen
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);

 //SignInwithgoogle popu doesnot work without signInWithGoogleRedirect


export const db = getFirestore();


//To add data in db
export const createUserDocumentFromAuth = async (usersAuth , additionalInformation = {} ) => {


   const userDocRef = doc(db , "users" , usersAuth.uid);//this will create a collection in db users and uniquely identify it using user.uid
   console.log(userDocRef) ;
   const userSnapshot = await getDoc(userDocRef);//This will fetch or allows access of doc from our db
   console.log(userSnapshot.exists());//This will tell us wether any doc exists inside our userSnapshot
//If user Does'nt exist then adding data

if(!userSnapshot.exists()){
  const { displayName , email } = usersAuth;
  const createdAt = new Date();

  try{
    await setDoc(userDocRef , {
      displayName ,
      email,
      createdAt,
      ...additionalInformation,
    });
}
    catch(error){
      console.log("error creating at the user " + error.message);
    }
  }
  //...additionalInformation allows us to add other items or change the value of items like we can change displayName

  return userDocRef;

//adding data in db ends here
};


//allows user to create user and also autenticate user
 export const createAuthUserWithEmailAndPassword = async (email,password) =>{
  if(!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);

}

//allows user to sign in using email and password

export const signInAuthUserWithEmailAndPassword = async (email,password) =>{
 if(!email || !password) return;
 return await signInWithEmailAndPassword(auth, email, password);

}

export const signOutUser = async () => await signOut(auth);

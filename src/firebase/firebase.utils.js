import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';
const firebaseConfig = {
        apiKey: "AIzaSyAyrDvJK92jiRt5nop7c0kJiQgwX4jwh-k",
        authDomain: "ecommerce-2e5f9.firebaseapp.com",
        projectId: "ecommerce-2e5f9",
        storageBucket: "ecommerce-2e5f9.appspot.com",
        messagingSenderId: "997274751100",
        appId: "1:997274751100:web:2983b9d62c91d9c28cf9f9"
      };
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = ()=> auth.signInWithPopup(provider);


export const createUserProfileData = async (userAuth,additionalData)=>{
  if(!userAuth) return;
  const userRef =await firestore.doc(`users/${userAuth.uid}`)
  const snapshots =await userRef.get()
  if(!snapshots.exists){
    const {displayName,email} = userAuth;
    const createdAt = new Date();
    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    }catch(err){
      console.log(err)
    }

  }
  return userRef;

}

export default firebase;
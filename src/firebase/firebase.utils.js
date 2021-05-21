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
export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = ()=> auth.signInWithPopup(googleProvider);


export const addCollectionAndItems =async (collectionKey,objectsToAdd ) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch(); //multiple request at same time if one fail whole updates failed
  objectsToAdd.forEach(obj =>{
    const newDocRef =  collectionRef.doc(obj.title); 
    batch.set(newDocRef,obj); //adding requests to the batch
  });
  
 return await batch.commit();
}

export const convertCollectionSnapshotToMap=(collections) =>{
  const transformedCollection  = collections.docs.map(doc =>{
    const {title,items} = doc.data();
    return {
       routeName: encodeURI(title.toLowerCase()),
       id:doc.id,
       title,
       items

    } 
  })
 return transformedCollection.reduce((accumlator,collection)=>{
   accumlator[collection.title.toLowerCase()] = collection;
   return accumlator;
 },{})

}

export const getCurrentUser = () => {
  return new Promise((resolve,reject)=>{
    const unsubscribe = auth.onAuthStateChanged(userAuth=>{
      unsubscribe();
      resolve(userAuth)
    },reject);
  })
}

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
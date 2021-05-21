import {takeLatest,put,call,all} from "redux-saga/effects";
import {userActionTypes} from "./userTypes";
import {auth,googleProvider,createUserProfileData,getCurrentUser} from "../../firebase/firebase.utils";
import { googleSignInFailure,googleSignInSuccess,emailSignInSuccess,emailSignInFailure,signOutSuccess,
    signOutFailure,
    signUpFailure,
    signUpSuccess
 } from "../User/userActions";





export function* signInWithGoogle(){

    try {
        const {user} = yield auth.signInWithPopup(googleProvider);
    const userRef = yield call(createUserProfileData,user);
    const userSnapshot = yield userRef.get();
    yield put(googleSignInSuccess({id:userSnapshot.id,...userSnapshot.data()}))
    } catch (error) {
        yield put(googleSignInFailure(error))
    }
    

}

export function* onGoogleSignInStart(){
   yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START,signInWithGoogle);
}


export function* onEmailSignIn ({payload:{email,password},additonalData}){
    try {
        const {user} = yield auth.signInWithEmailAndPassword(email,password);
        const userRef = yield call(createUserProfileData,user,additonalData);
        const userSnapshot = yield userRef.get();
        yield put(emailSignInSuccess({id:userSnapshot.id,...userSnapshot.data()}))
    } catch (error) {
       yield put(emailSignInFailure(error))
    }
}

export function* onEmailSignInStart (){
    yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START,onEmailSignIn);
}


export function* isUserAuthenticated(){
    try {
      const userAuth =  yield getCurrentUser();
      if(!userAuth) return;
      const userRef = yield call(createUserProfileData,userAuth);
      const userSnapshot = yield userRef.get();
      yield put(emailSignInSuccess({id:userSnapshot.id,...userSnapshot.data()}))
        
    } catch (error) {
        yield put(emailSignInFailure(error))
    }
}
export function* onCheckUserSession(){
    yield takeLatest(userActionTypes.CHECK_USER_SESSION,isUserAuthenticated)
}   

export function* signOut(){

    try {
        yield auth.signOut();
       yield put(signOutSuccess())
    } catch (error) {
       yield put(signOutFailure(error))
    }

}

export function* onSignOutStart(){
    yield takeLatest(userActionTypes.SIGN_OUT_START,signOut)
}

export function* onSignUp({payload:{email,password,displayName}}){
    try {
        const {user} = yield auth.createUserWithEmailAndPassword(email,password);
        yield put(signUpSuccess({user,additonalData:{displayName}}))

    } catch (error) {
        yield put(signUpFailure(error))
    }
}

export function* signInAfterSignUp({payload:{user,additonalData}}){
    yield onEmailSignIn(user,additonalData)
}

export function* onSignUpSuccess(){
    yield takeLatest(userActionTypes.SIGN_UP_SUCCESS,signInAfterSignUp)
}


export function* onSignUpStart(){
    yield takeLatest(userActionTypes.SIGN_UP_START,onSignUp)
}

export function* userSagas() {
   yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(isUserAuthenticated),
    call(onSignOutStart),
    call(onSignUpStart),
    call(onSignUpSuccess)
])
}



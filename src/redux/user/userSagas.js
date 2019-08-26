import {takeLatest, all, put, call} from 'redux-saga/effects';
import UserActionTypes from "./userTypesAction";
import {auth, googleProvider, creatUserProfileDocument, getCurrentUser} from '../../firebase/firebase.utils';
import {
    signInFailure,
    signInSuccess,
    signOutFailure,
    signOutSuccess,
    signUpFailure,
    signUpSuccess
} from "./userActions";

export function* manageUserProfileDocument (userAuth, additionalData = {}) {
    try{
        const userRef =  yield creatUserProfileDocument(userAuth, additionalData);
        const userSnapshot = yield userRef.get();
        yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }) );
    } catch (e) {
        console.error('Error => userSaga manageUserProfileDocument =>', e);
        yield put(signInFailure(e))
    }
}


export  function* signInWithGoogle(){
    try{
        const userRefAuth = yield auth.signInWithPopup(googleProvider);
        yield manageUserProfileDocument(userRefAuth.user);
    } catch (e) {
        console.error('Error => userSaga signInWithGoogle =>', e);
        yield put(signInFailure(e))
    }
}
export  function* signInWithEmail(action){
    const {email, password} = action.payload;
    try{
        const userRefAuth = yield auth.signInWithEmailAndPassword(email, password);
        yield manageUserProfileDocument(userRefAuth.user);
    } catch (e) {
        console.error('Error => userSaga signInWithEmail =>', e);
        yield put(signInFailure(e))
    }
}
export  function* isUserAuthenticated(){
    try{
        const userAuth = yield getCurrentUser();
        if (!userAuth) return;
        yield manageUserProfileDocument(userAuth);
    } catch (e) {
        console.error('Error => userSaga isUserAuthenticated =>', e);
        yield put(signUpFailure(e))
    }
}

export function* signOut() {
    try {
        yield auth.signOut();
        yield put( signOutSuccess() )
    }catch (e) {
        console.error('Error => userSaga signOut =>', e);
        yield put( signOutFailure(e) )
    }
}

export function* signUp(action) {
    const {displayName, email, password, confirmPassword} = action.payload;
    try {
        const userRefAuth = yield auth.createUserWithEmailAndPassword(email, password);
        yield manageUserProfileDocument(userRefAuth.user);
    }catch (e) {
        console.error('Error => userSaga signUp =>', e);
        yield put( signUpFailure(e) )
    }
}

export  function* onGoogleSignInStart(){
    yield takeLatest( UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle  )
}
export  function* onEmailSignInStart(){
    yield takeLatest( UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail  )
}
export function* onCheckUserSession() {
    yield takeLatest( UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated  )
}
export function* onSignOutStart() {
    yield takeLatest( UserActionTypes.SIGN_OUT_START, signOut  )
}
export function* onSignUpStart() {
    yield takeLatest( UserActionTypes.SIGN_UP_START, signUp  )
}



export default function* userSagas () {
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onCheckUserSession),
        call(onSignOutStart),
        call(onSignUpStart)
    ])
}

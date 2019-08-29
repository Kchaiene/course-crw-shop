import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBUP0Ibwr0Ruj0pPMbOkX7IQXbghk2DpEQ",
    authDomain: "crwn-db-272f4.firebaseapp.com",
    databaseURL: "https://crwn-db-272f4.firebaseio.com",
    projectId: "crwn-db-272f4",
    storageBucket: "",
    messagingSenderId: "591608169829",
    appId: "1:591608169829:web:12e056e34dcaab53"
};
firebase.initializeApp(config);

export const creatUserProfileDocument = async (userAuth, additionalDate) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdDate = new Date();
        try {
            await userRef.set({
                displayName, email, createdDate, ...additionalDate
            })
        } catch (e) {
            console.error('Error creatUserProfileDocument', e);
        }
    }
    return userRef;
};

export const addCollectionsAndDocuments = async (collectionKey, objectsToAdd) =>{
    const collectionRef = firestore.collection(collectionKey);
    const batch = firestore.batch();

    objectsToAdd.forEach( object => {
        const newDocumentRef = collectionRef.doc();
        batch.set(newDocumentRef, object)
    } );
    return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collectionsSnapshot) => {
    const transformedCollection = collectionsSnapshot.docs.map( doc => {
        const {title, items} = doc.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title, items
        }
    });
    return transformedCollection.reduce( (accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {})
};

export const getCurrentUser = () =>{
    return new Promise( (resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged( userAuth => {
            unsubscribe();
            resolve(userAuth);
        }, reject);
    })
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt:'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;



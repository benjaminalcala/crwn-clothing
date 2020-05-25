import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyA6LPyt3YWfMLoJz1HLWMQBec6mEKDKRsM",
    authDomain: "crwn-db-dbdbb.firebaseapp.com",
    databaseURL: "https://crwn-db-dbdbb.firebaseio.com",
    projectId: "crwn-db-dbdbb",
    storageBucket: "crwn-db-dbdbb.appspot.com",
    messagingSenderId: "445961617104",
    appId: "1:445961617104:web:375264a28dcd02d6b9a8d5",
    measurementId: "G-Z07Z9PTT80"
  };


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDoc = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapshot = await userRef.get();

    if(!snapshot.exists){
        try{
            const {displayName, email} = userAuth;
            const createdAt = new Date();
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch(error){
            console.log(error)
        }
    }
    return userRef;
}

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'})

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
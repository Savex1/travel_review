import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB6vtjo7Ocu633khJpEN02vdCo8cIoqyok",
    authDomain: "travel-review-892cd.firebaseapp.com",
    projectId: "travel-review-892cd",
    storageBucket: "travel-review-892cd.appspot.com",
    messagingSenderId: "994642644327",
    appId: "1:994642644327:web:dff7b48d9fa28812d3b3c2",
    measurementId: "G-GXPHMCDQPM"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
 
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const createFirebaseUser = async (user, payload= {}) => {
    if (!user) return;

    const userRef = firestore.doc(`users/${user.uid}`);

    const userSnapShot = await userRef.get();

    if (!userSnapShot.exists) {
        const {
            displayName,
            email
        } = user;
        try {
            await userRef.set({displayName, email, ...payload})
            
        } catch (err) {
            console.log(err)
        }
    }
    return userRef
}


export const googleLogin = () => auth.signInWithPopup(provider);

export default firebase;
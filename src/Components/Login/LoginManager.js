import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";



export const initializeLogIn = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
    else {
        firebase.app();
    }
}


export const SignInUserWithEmailAndPassword = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
        .then(res => {
            const newUserInfo = res.user;
            newUserInfo.error = '';
            newUserInfo.success = true;
            return newUserInfo;
        })
        .catch((error) => {
            const newUserInfo = {};
            newUserInfo.error = error.message;
            newUserInfo.success = false;
            return newUserInfo;
        });
}
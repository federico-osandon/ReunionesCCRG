import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGE_SENDER_ID,
    appId: process.env.REACT_APP_ID
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const getFirebase= () => {
    return app
}

export const getFirestore = () => {
    return firebase.firestore(app)
}

export const getAuth = ()=> {
    return firebase.auth()
}
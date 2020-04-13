import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB3IeGNL2BTagLm4MENgarKb1xPDL8O8oU",
    authDomain: "babyshine-e4731.firebaseapp.com",
    databaseURL: "https://babyshine-e4731.firebaseio.com",
    projectId: "babyshine-e4731",
    storageBucket: "babyshine-e4731.appspot.com",
    messagingSenderId: "953707768112",
    appId: "1:953707768112:web:e8526dda7a8873226680f5",
    measurementId: "G-Q8RWT1FE3N"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();
firebase.firestore.settings({timestampsInSnapshots: true});

export default firebase;
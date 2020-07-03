import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyD7LV5QbWpN5bhc7sNewK2pycf4OWbR_Es",
    authDomain: "dicom-c6569.firebaseapp.com",
    databaseURL: "https://dicom-c6569.firebaseio.com",
    projectId: "dicom-c6569",
    storageBucket: "dicom-c6569.appspot.com",
    messagingSenderId: "1053569943627",
    appId: "1:1053569943627:web:928c6b996db14856e1a5ce"
};


firebase.initializeApp(config);

export const auth = firebase.auth;
export const db = firebase.database();

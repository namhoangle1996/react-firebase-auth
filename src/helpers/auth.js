import { auth } from "../services/firebase";
export function signup(email, password) {
    return auth().createUserWithEmailAndPassword(email, password);
}

export function signin(email, password) {
    return auth().signInWithEmailAndPassword(email, password);
}

export function signInWithGoogle() {
    const provider = new auth.GoogleAuthProvider();
    return auth().signInWithPopup(provider);
}

export function signOut() {
    return auth().signOut() ;
}

export function verifyEmail() {
    return auth().currentUser.sendEmailVerification({url: "http://localhost:3001/chat"})
}
export  function signInWithPhone(phoneNumber) {
    auth().languageCode= 'vn';
    var appVerifier = new auth.RecaptchaVerifier('recaptcha-container');
    return auth().signInWithPhoneNumber(phoneNumber, appVerifier).then( (confirmationResult) => {
        window.confirmationResult = confirmationResult;
    } )
}





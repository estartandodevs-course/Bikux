import firebase from "firebase/app";
import "firebase/auth";



const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain:  process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATA_BASE_URL,
    projectId:  process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID 
} 


firebase.initializeApp(firebaseConfig);


export async function login(email, password) {
    try {
        const user = await firebase.auth().signInWithEmailAndPassword(email, password);
        return { success: true, data: user };
    } catch (error) {
        const {code, message} = error;
        return { success: false, data: { code, message } };
    }
}

export async function logout() {
    try {
        await firebase.auth().signOut();
        return { success: true, data: "user unknown" };

    } catch (error) {
        const {code, message} = error;
        return { success: false, data: { code, message } };
    }
}

function IsLoggedIn () {
        
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            console.log("user logado :: ", user);
        }else {
            console.log("user não logado");
            }
        })

}

IsLoggedIn ();

 
    

 

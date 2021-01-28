import firebase from "firebase/app";
import "firebase/firestore";

const miConfiguracion = {
    apiKey: "AIzaSyClieLAse7BhbKyuqCfGPltfyupkn9FI1w",
    authDomain: "codercommerce.firebaseapp.com",
    projectId: "codercommerce",
    storageBucket: "codercommerce.appspot.com",
    messagingSenderId: "335395434802",
    appId: "1:335395434802:web:324b70cb6f9b591518272b"
}

const app = firebase.initializeApp(miConfiguracion);

export const firestore = firebase.firestore(app)
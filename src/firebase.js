import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import {getAuth }  from "firebase/auth" ;

const firebaseConfig = {
    apiKey: "AIzaSyDTx9ZjQKfZcV-HduIDulnmzI8NqlW8BFo",
    authDomain: "oumou-4e85c.firebaseapp.com",
    projectId: "oumou-4e85c",
    storageBucket: "oumou-4e85c.appspot.com",
    messagingSenderId: "618708076102",
    appId: "1:618708076102:web:9615ba552c9366dd03ac47",
    measurementId: "G-62VTH9GBBH"
};

const app = initializeApp(firebaseConfig);
const fireDb = getDatabase(app);
const auth = getAuth(app)

export { fireDb };
import * as firebase from 'firebase';

const configProd = {
    apiKey: "AIzaSyALcxnyAaHa6aEOG4Gs3Bmgr8-xfoJkCjY",
    authDomain: "madness-collection.firebaseapp.com",
    databaseURL: "https://madness-collection.firebaseio.com",
    projectId: "madness-collection",
    storageBucket: "",
    messagingSenderId: "65438036924"
};

const configDev = {
    apiKey: "AIzaSyC88xYOQ03IrSxRSoKY0db-CE_TXF_PtUc",
    authDomain: "madness-collection-dev.firebaseapp.com",
    databaseURL: "https://madness-collection-dev.firebaseio.com",
    projectId: "madness-collection-dev",
    storageBucket: "",
    messagingSenderId: "499524584747"
};

const config = process.env.NODE_ENV === 'production'
    ? configProd
    : configDev;


if (!firebase.apps.length) {
    firebase.initializeApp(config);
}



export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const ref = firebase.database().ref();
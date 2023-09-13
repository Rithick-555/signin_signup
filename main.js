// setting up firebase with our website
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCOTqEA7AWbayMrHz6mLL1q2QukCUImXs8",
    authDomain: "loginregisterpage-1da8c.firebaseapp.com",
    projectId: "loginregisterpage-1da8c",
    storageBucket: "loginregisterpage-1da8c.appspot.com",
    messagingSenderId: "1092542140027",
    appId: "1:1092542140027:web:739a0ed3dfbb04af9d1cde",
    measurementId: "G-J8KGG8SL46"
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

// Sign up function
const signUp = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password)
    // firebase code
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            document.write("You are Signed Up")
            console.log(result)
            // ...
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
            // ..
        });
}

// Sign In function
const signIn = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // firebase code
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            document.write("You are Signed In")
            console.log(result)
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
        });
}
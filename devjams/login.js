// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCZpr7SPiFIaPj8HWMPFfnenGU6UzBEm20",
    authDomain: "vitv-53e6b.firebaseapp.com",
    projectId: "vitv-53e6b",
    storageBucket: "vitv-53e6b.appspot.com",
    messagingSenderId: "405159326911",
    appId: "1:405159326911:web:884e10194a6aeb6663020a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Function to check email domain
function isValidEmailDomain(email) {
    const allowedDomains = ['vit.ac.in', 'vitstudent.ac.in'];
    const domain = email.split('@')[1];
    return allowedDomains.includes(domain);
}

// Login with Google
document.getElementById('google-login').addEventListener('click', () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            const email = user.email;

            // Validate email domain
            if (isValidEmailDomain(email)) {
                // Redirect to dashboard
                window.location.href = 'acknowledgement.html';
            } else {
                // Sign out and show error message
                signOut(auth);
                alert('Access denied: Please use a vit.ac.in or vitstudent.ac.in email address.');
            }
        })
        .catch((error) => {
            console.error('Error during Google login:', error);
        });
});

// Login form submission
document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validate email domain
    if (!isValidEmailDomain(email)) {
        alert('Access denied: Please use a vit.ac.in or vitstudent.ac.in email address.');
        return;
    }

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Successfully logged in
            window.location.href = 'acknowledgement.html'; // Redirect to another page after login
        })
        .catch((error) => {
            console.error('Error logging in:', error);
        });
});
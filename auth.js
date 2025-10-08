// auth.js
import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged 
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

// Access the auth instance from window (set in HTML)
const auth = window.firebaseAuth;

// Simple auth manager object
const authManager = {
    // 🔹 Handle Sign Up
    signup: async function(userData) {
        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth, 
                userData.email, 
                userData.password
            );
            const user = userCredential.user;
            console.log("✅ User registered:", user.email);

            alert("Account created successfully!");
            window.location.href = "login.html"; // redirect to login
            return true;
        } catch (error) {
            console.error("❌ Signup error:", error.message);
            alert(error.message);
            return false;
        }
    },

    // 🔹 Handle Login
    login: async function(email, password) {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log("✅ Logged in:", user.email);

            // redirect to dashboard
            window.location.href = "dashboard.html";
            return true;
        } catch (error) {
            console.error("❌ Login error:", error.message);
            alert("Login failed: " + error.message);
            return false;
        }
    },

    // 🔹 Handle Logout
    logout: async function() {
        try {
            await signOut(auth);
            console.log("✅ Signed out successfully");
            window.location.href = "login.html";
        } catch (error) {
            console.error("❌ Logout error:", error.message);
        }
    },

    // 🔹 Track Authentication State
    monitorAuthState: function() {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log("👤 Logged in as:", user.email);
            } else {
                console.log("🚪 No user logged in");
            }
        });
    }
};

// make available globally
window.authManager = authManager;

// start listening for auth state
authManager.monitorAuthState();

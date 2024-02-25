// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { logEvent } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAe-AnziwGvflAyXz_EBHvr7nMEM3fC85c",
    authDomain: "scientia-blog.firebaseapp.com",
    databaseURL: "https://scientia-blog-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "scientia-blog",
    storageBucket: "scientia-blog.appspot.com",
    messagingSenderId: "37618701406",
    appId: "1:37618701406:web:0645397458ce6345b010cf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


logEvent(analytics, 'page_view');


export default app
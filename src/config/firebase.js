// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNrScbw7slPybAoRg2q0iDgtPNZduo4mM",
  authDomain: "chat-app-gs-e56a4.firebaseapp.com",
  projectId: "chat-app-gs-e56a4",
  storageBucket: "chat-app-gs-e56a4.firebasestorage.app",
  messagingSenderId: "461318607102",
  appId: "1:461318607102:web:d1a0f446ba9e03990295af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db =getFirestore(app);

const signup = async(username, email, password) =>{
    try {
        const res = await createUserWithEmailAndPassword(auth,email,password);
        const user = res.user;
        await setDoc(doc(db, "users",user.uid), {
            id:user.uid,
            username:username.toLowerCase(),
            email,
            name:"",
            avatar:"",
            bio:"Hey there I am using chat app",
            lastSeen:Date.now(),

        })
        await setDoc(doc, (db,"chats", user.uid),{
            chatData:[]
        })
    } catch (error) {
        console.error(error)
    }
}
import { initializeApp } from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCMxdq1JOMbyJZpbTtah_CekpiFCfc61_8',
  authDomain: 'invoice-app-c182c.firebaseapp.com',
  projectId: 'invoice-app-c182c',
  storageBucket: 'invoice-app-c182c.appspot.com',
  messagingSenderId: '820380941438',
  appId: '1:820380941438:web:20a7cf037fa9997b466c2f',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp.firestore();

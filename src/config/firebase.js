// Firebase hosting and database service
import firebase from 'firebase/app';
import 'firebase/database';
// import 'firebase/hosting'; 

import { FirebaseConfig } from "./keys";
firebase.initializeApp(FirebaseConfig);

// Database reference
const databaseRef = firebase.database().ref();

// Firebase 'posts' collection reference
export const postsRef = databaseRef.child("posts");

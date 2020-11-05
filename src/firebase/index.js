import firebase from "firebase";
import { firebaseConfig } from "./config";

export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const database = firebaseApp.database();

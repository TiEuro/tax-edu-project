import { db } from "../components/firabaseconfig";
import { collection, getDocs, getDoc, addDoc, updateDoc, doc } from "firebase/firestore";

const userColletionRef = collection(db,"usuario");

class userDataService{
    addUsers = (newuser) =>{
        return addDoc(userColletionRef, newuser);
    }
}


export default new userDataService();
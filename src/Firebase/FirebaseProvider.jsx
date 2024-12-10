import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "./Firebase.config";

export const  AuthContext  = createContext(null)
const googleProvider = new GoogleAuthProvider()
const FirebaseProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)

    // create user
    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    // user login
    const logIn = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    // logout 
    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }
    // google login
    const googleSignIn = ()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    // User Profile Update
    const updateInfo = (name,url)=>{
       return updateProfile(auth.currentUser, {
            displayName: name, photoURL: url
          })
    }


    // observe user
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unSubscribe()
        }
    },[])

    const authInfo = {
        user,
        createUser,
        logIn,
        loading,
        googleSignIn,
        logOut,
        updateInfo
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default FirebaseProvider;
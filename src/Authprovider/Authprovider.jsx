import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";



export const AuthContext = createContext();
const auth = getAuth(app);

const Authprovider = ({children}) => {

    const [user,Setuser] = useState(null);
    const [loading,setLoading] = useState(true);

    const createUser = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const singIn = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }


     useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth,currentUser =>{
            Setuser(currentUser);
            console.log('user',currentUser);
            setLoading(false);
        });
        return () =>{
            return unsubscribe();
        }
     },[])   



    const authInfo = {
        user,
        loading,
        createUser,
        singIn,
        logOut
    }


    return (
        <AuthContext.Provider value={authInfo}>
                {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;
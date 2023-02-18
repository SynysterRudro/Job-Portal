import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    const provideLogin = (provider) => {
        return signInWithPopup(auth, provider);
    }

    const emailPasswordSignUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const emailPasswordLogIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('user inside state changed', currentUser);
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unsubscribe()
        }
    }, [])



    const logOut = () => {
        return signOut(auth);
    }


    const authInfo = { user, loading, provideLogin, emailPasswordSignUp, emailPasswordLogIn, logOut };

    return (
        <div>

            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>

        </div>
    );
};

export default AuthProvider;
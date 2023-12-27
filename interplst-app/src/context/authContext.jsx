import { createContext, useEffect, useState } from "react"
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from "../config/firebaseConfig"

export const authContext = createContext(null)

export const AuthContextProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unsubuscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log({ currentUser });
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubuscribe();
    }, [])

    return <authContext.Provider value={{login, user, loading}} > {children} </authContext.Provider>
}
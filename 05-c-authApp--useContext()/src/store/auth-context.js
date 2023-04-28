import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => { },      // dummy function, to help with autocompletion
    onLogin: (email, pw) => { }
})

// We can manage the whole log in functionality here
export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        const storedUserLoggedInInfo = localStorage.getItem('isLoggedIn')

        if (storedUserLoggedInInfo === "Y") {
            setIsLoggedIn(true)
        }
    },
        [])

    const logoutHandler = () => {
        localStorage.removeItem("isLoggedIn");
        setIsLoggedIn(false)
    }

    const loginHandler = () => {
        localStorage.setItem("isLoggedIn", "Y");
        setIsLoggedIn(true)
    }

    return (
        <AuthContext.Provider value={{
            isLoggedIn: isLoggedIn,
            onLogout: logoutHandler,
            onLogin: loginHandler
        }}>
            {props.children}
        </AuthContext.Provider>)
}

export default AuthContext
import React from "react"

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => { },            // dummy function, e.g. to help with autocompletion
    onLogin: (email, pw) => { }
})


export default AuthContext
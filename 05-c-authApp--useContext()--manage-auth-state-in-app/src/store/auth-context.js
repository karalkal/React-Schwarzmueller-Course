import React from "react"

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => { },            // dummy function to help with autocompletion and representation/data consistency
    onLogin: (email, pw) => { }
})


export default AuthContext
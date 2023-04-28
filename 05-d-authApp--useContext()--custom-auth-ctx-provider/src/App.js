import React, { useEffect, useState, useContext } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './store/auth-context';

function App() {

  /*
  // Now state and login / logout functionality is managed in auth-context.js
  // And we just get the context via the AuthContext.Provider component 
  // Login and Home coms will get access to it too so we don's need to pass props around

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInfo = localStorage.getItem('isLoggedIn')

    if (storedUserLoggedInInfo === "Y") {
      setIsLoggedIn(true)
    }
  },
    [])


  const loginHandler = (email, password) => {
    localStorage.setItem("isLoggedIn", "Y");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };


  // AuthContext is not a component but its prop .Provider is.
  // Now all child components have access to context via value prop (ctx.isLoggedIn for example)
  // and we don't have to pass it as props to each and every child component.
  // This way we avoid the chain of forwarding props via components which don't need it.
  return (
    <AuthContext.Provider value={{
      isLoggedIn: isLoggedIn,
      onLogout: logoutHandler
    }}>
      <MainHeader onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </AuthContext.Provider>
  );
  */

  const ctx = useContext(AuthContext)

  return (
    <React.Fragment>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </React.Fragment>
  );

}

export default App;

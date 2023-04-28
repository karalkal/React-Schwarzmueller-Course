import React, { useEffect, useState, useContext } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './store/auth-context';

function App() {

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
  // and we don't have to pass it as props down the chain to each and every child component.
  // This way we avoid the chain of forwarding props via components which don't need it.
  return (
    <AuthContext.Provider value={{
      isLoggedIn: isLoggedIn,
      onLogout: logoutHandler,
      onLogin: loginHandler,
    }}>
      <MainHeader onLogout={logoutHandler} />
      <main>
        {/* It is ok to pass these as props to child comps as they are directly consumed there  */}
        {/* Just for the sake of the exercise we are still using ctx in child components  */}
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </AuthContext.Provider>
  );

}

export default App;

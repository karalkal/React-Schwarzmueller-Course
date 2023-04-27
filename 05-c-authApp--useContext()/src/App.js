import React, { useEffect, useState } from 'react';

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
  // AuthContext is not a component but its prop Provider is
  // Now all child components have access to context (ctx.isLoggedIn)
  // and we don't have to pass it as props.
  // This way we avoid the chain of forwarding props via components which don't need it 
  return (
    <AuthContext.Provider value={{
      isLoggedIn: isLoggedIn,
    }}>
      <MainHeader onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </AuthContext.Provider>
  );
}

export default App;

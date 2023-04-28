import React, { useContext } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './store/auth-context';

function App() {

  /*
  Now state and login / logout functionality is managed in auth-context.js
  And we get the context via the AuthContextProvider component which is wrapping <App>
  Login and Home components will get access to it too so we don't need to pass props around.
  App does not deal with auth anymore, it is representational component, as it is meant to be  .
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

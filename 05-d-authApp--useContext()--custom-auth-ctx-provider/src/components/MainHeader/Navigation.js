import React from 'react';

import classes from './Navigation.module.css';
import AuthContext from '../../store/auth-context';

// the Consumer comp receives the context (named ctx here) and it can be utilized instead of props
const Navigation = (props) => {
  return (
    <AuthContext.Consumer>
      {(ctx) => {
        return (
          <nav className={classes.nav}>
            <ul>
              {ctx.isLoggedIn && (
                <li>
                  <a href="/">Users</a>
                </li>
              )}
              {ctx.isLoggedIn && (
                <li>
                  <a href="/">Admin</a>
                </li>
              )}
              {ctx.isLoggedIn && (
                <li>
                  <button onClick={ctx.onLogout}>Logout</button>
                </li>
              )}
            </ul>
          </nav>
        )
      }}

    </AuthContext.Consumer>
  );
};

export default Navigation;

import React, {useContext} from 'react';

import Card from '../UI/Card/Card';
import classes from './Home.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../store/auth-context';

const Home = (props) => {
const ctx = useContext(AuthContext)

  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      {/* useContext instead of props */}
      {/* <Button onClick={props.onLogout}>Log Out</Button> */}
      <Button onClick={ctx.onLogout}>Log Out</Button>
    </Card>
  );
};

export default Home;

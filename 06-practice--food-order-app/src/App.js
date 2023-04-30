import { Fragment } from 'react';
import Header from './components/Layout/Header';
import MainContainer from './components/Meals/MainContainer'

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <MainContainer />
      </main>
    </Fragment>
  );
}

export default App;
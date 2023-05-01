import { Fragment } from 'react';
import Header from './components/Layout/Header';
import MainContainer from './components/Meals/MainContainer'
import Cart from './components/Cart/Cart';

function App() {
  return (
    <Fragment>
      <Cart />        {/* Cart is a Modal */}
      <Header />
      <main>
        <MainContainer />
      </main>
    </Fragment>
  );
}

export default App;
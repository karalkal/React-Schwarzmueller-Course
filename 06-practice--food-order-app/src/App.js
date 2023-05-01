import { Fragment, useState } from 'react';
import Header from './components/Layout/Header';
import MainContainer from './components/Meals/MainContainer'
import Cart from './components/Cart/Cart';


function App() {
  const [cartVisible, setCardVisible] = useState(false)

  const showCartHandler = () => {
    setCardVisible(true)
  }
  const hideCartHandler = () => {
    setCardVisible(false)
  }

  return (
    <Fragment>
      {cartVisible && <Cart onHideCart={hideCartHandler} />}        {/* Cart is a Modal */}
      <Header onDisplayCart={showCartHandler} />
      <main>
        <MainContainer />
      </main>
    </Fragment>
  );
}

export default App;
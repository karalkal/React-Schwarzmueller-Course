import { Fragment, useState, useContext } from 'react';
import Header from './components/Layout/Header';
import MainContainer from './components/Meals/MainContainer'
import Cart from './components/Cart/Cart';
import cartContext from './store/cart-context';


function App() {
  const [cartVisible, setCardVisible] = useState(false)

  // showCartHandler and hideCartHandler are being passed via a chain of comps
  const showCartHandler = () => {
    setCardVisible(true)
  }
  const hideCartHandler = () => {
    setCardVisible(false)
  }

  // ctx functions
  function addItemToCartHandler(item) {
  };

  function removeItemFromCartHandler(id) {
  };

  return (
    <cartContext.Provider
      value={{
        items: [],
        totalAmount: 0,
        addItem: (addItemToCartHandler),
        removeItem: removeItemFromCartHandler,
      }}>

      {cartVisible && <Cart onHideCart={hideCartHandler} />}        {/* Cart is a Modal */}

      <Header onDisplayCart={showCartHandler} />

      <main>
        <MainContainer />
      </main>

    </cartContext.Provider>
  );
}

export default App;
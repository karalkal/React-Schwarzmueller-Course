import { useState } from 'react';
import Header from './components/Layout/Header';
import MainContainer from './components/Meals/MainContainer'
import Cart from './components/Cart/Cart';
import CartContextProvider from './store/CartContextProvider';


function App() {
    const [cartVisible, setCardVisible] = useState(false)

    // showCartHandler and hideCartHandler are being passed via a chain of comps
    const showCartHandler = () => {
        setCardVisible(true)
    }
    const hideCartHandler = () => {
        setCardVisible(false)
    }

    return (
        <CartContextProvider>
            {cartVisible && <Cart onHideCart={hideCartHandler} />}        {/* Cart is a Modal */}
            <Header onDisplayCart={showCartHandler} />
            <main>
                <MainContainer />
            </main>
        </CartContextProvider>
    );
}

export default App;
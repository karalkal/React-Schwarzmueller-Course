import CartContext from "./cart-context"

const CartContextProvider = (props) => {
    // ctx functions
    function addItemToCartHandler(item) {
        return {
            ...cartContext,
            items: [item, ...cartContext.items]
        }
    };

    function removeItemFromCartHandler(id) {
    };

    const cartContext = {
        items: [],
        totalAmount: 0,
        addItem: (addItemToCartHandler),
        removeItem: removeItemFromCartHandler,
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
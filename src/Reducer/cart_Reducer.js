const cartReducer = (state, action) => {
    const currentCart = Array.isArray(state.cart) ? state.cart : [];
    if (action.type === "ADD_TO_CART") {
        let { id, color, amount, product } = action.payload;

        let cartProduct = {
            id: id + color,
            name: product.name,
            color,
            amount,
            image: product.image[0].url,
            price: product.price,
            max: product.stock,
        };

        return {
            ...state,
            cart: [...currentCart, cartProduct],
        };
    }

    if (action.type === "REMOVE_ITEM") {
        const updatedCart = state.cart.filter(
            (curElem) => curElem.id !== action.payload.id
        );
        return {
            ...state,
            cart: updatedCart
        };
    }

    


    return state;
}
export default cartReducer;
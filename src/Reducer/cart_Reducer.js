const cartReducer = (state, action) => {
    const currentCart = Array.isArray(state.cart) ? state.cart : [];

    switch (action.type) {
        case "ADD_TO_CART": {
            let { id, color, amount, product } = action.payload;
            let existingItem = state.cart.find(
                (curItem) => curItem.id === id + color
            );

            if (existingItem) {
                let updateProduct = state.cart.map((curElm) => {
                    if (curElm.id === id + color) {
                        let newAmount = curElm.amount + amount;
                        if (newAmount >= curElm.max) {
                            newAmount = curElm.max;
                        }
                        return { ...curElm, amount: newAmount };
                    }
                    return curElm;
                });

                return { ...state, cart: updateProduct };
            } else {
                let cartProduct = {
                    id: id + color,
                    name: product.name,
                    color,
                    amount,
                    image: product.image[0].url,
                    price: product.price,
                    max: product.stock,
                };

                return { ...state, cart: [...currentCart, cartProduct] };
            }
        }

        case "SET_DECREMENT": {
            let updatedProduct = state.cart.map((curElem) => {
                if (curElem.id === action.payload) {
                    let decAmount = curElem.amount - 1;
                    if (decAmount <= 1) {
                        decAmount = 1;
                    }
                    return { ...curElem, amount: decAmount };
                }
                return curElem;
            });
            return { ...state, cart: updatedProduct };
        }

        case "SET_INCREMENT": {
            let updatedProduct = state.cart.map((curElem) => {
                if (curElem.id === action.payload) {
                    let incAmount = curElem.amount + 1;
                    if (incAmount >= curElem.max) {
                        incAmount = curElem.max;
                    }
                    return { ...curElem, amount: incAmount };
                }
                return curElem;
            });
            return { ...state, cart: updatedProduct };
        }

        case "CART_TOTAL_ITEM": {
            let updatedItemVal = state.cart.reduce((initialVal, curElem) => {
                return initialVal + curElem.amount;
            }, 0);

            return { ...state, total_item: updatedItemVal };
        }

        case "CART_TOTAL_PRCIE": {
            let totalPrice = state.cart.reduce((initialVal, curElem) => {
                return initialVal + curElem.price * curElem.amount;
            }, 0);

            return { ...state, total_price: totalPrice };
        }

        case "REMOVE_ITEM": {
            const updatedCart = state.cart.filter(
                (curElem) => curElem.id !== action.payload.id
            );
            return { ...state, cart: updatedCart };
        }

        case "CLEAR_CART": {
            return { ...state, cart: [] };
        }

        default:
            return state;
    }
};

export default cartReducer;

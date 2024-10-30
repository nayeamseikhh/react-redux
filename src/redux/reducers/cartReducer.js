import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartAction";

// initialState is like ES6 default value pass empty array
export const initialState = {
    cart: []
} 
// (state, action) is a paramiter
export const cartReducers = (state = initialState , action) => {
    switch(action.type){
        case ADD_TO_CART:
            // id = action.id;
            // newCart = [...state.cart, id]
            return {
                cart: [...state.cart, action.id]
            }
        case REMOVE_FROM_CART: 
            const id = action.id;
            //Filtering all items from (state.cart)., Excluding the ID ()
            const reminingCart = state.cart.filter(item => item !== id);
            return {
                cart:reminingCart
            }
        default:
            return state;
    }
}

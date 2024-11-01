import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartAction";

// initialState is like ES6 default value pass empty array
export const initialState = {
    cart: [],
    products: [
        {name: 'Lenovo Laptop', id:1},
        {name: 'Asus Laptop', id:2},
        {name: 'Dell Laptop', id:3},
        {name: 'Hp Laptop', id:4},
        {name: 'Toshiba Laptop', id:5}
    ]
} 
// (state, action) is a paramiter
const cartReducers = (state = initialState , action) => {
    switch(action.type){
        case ADD_TO_CART:
            const newItem ={
                productId: action.id,
                name: action.name,
                cartId: state.cart.length + 1
            }
            const newCart = [...state.cart, newItem];
            return {...state, cart: newCart};
        case REMOVE_FROM_CART: 
            const cartId = action.cartId;
            //Filtering all items from (state.cart)., Excluding the ID ()
            const reminingCart = state.cart.filter(item => item.cartId !== cartId);
            return {
                ...state, cart:reminingCart
            }
        default:
            return state;
    }
}
export default cartReducers;

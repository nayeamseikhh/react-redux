import {legacy_createStore} from "redux"
import cartReducers from "../reducers/cartReducer"


export const store = legacy_createStore(cartReducers)
import {createStore} from "react-redux"
import { cartReducers } from "../reducers/cartReducer";


export const store = createStore(cartReducers)
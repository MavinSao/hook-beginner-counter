import { applyMiddleware, createStore } from "redux";
import { countReducer } from "../reducer/countReducer";
import thunk from 'redux-thunk'

export const store = createStore(countReducer, applyMiddleware(thunk));
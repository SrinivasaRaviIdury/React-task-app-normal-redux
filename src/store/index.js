import { applyMiddleware, combineReducers, createStore } from "redux";
import { authReducer } from "./auth-reducer";
import { requestReducer } from "./request-reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({ authReducer, requestReducer });
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

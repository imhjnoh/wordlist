import {createStore, combineReducers, applyMiddleware } from "redux"
import wordlist from "./wordlist"
import thunk from "redux-thunk"

const middlewares = [thunk]
const rootReducer = combineReducers({wordlist})
const enhancer = applyMiddleware(...middlewares)
const store = createStore(rootReducer, enhancer)

export default store;
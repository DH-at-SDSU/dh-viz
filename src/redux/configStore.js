import { applyMiddleware, createStore, compose } from "redux";
import thunkMiddleware from "redux-thunk";

import monitorReducerEnhancer from './enhancers/monitorReducers'
import loggerMiddleware from './middleware/logger'
import rootReducer from "./rootReducer";

export default function configStore(initState) {
    const middlewares = [loggerMiddleware, thunkMiddleware]
    const middlewareEnhancer = applyMiddleware(...middlewares)

    const enhancers = [middlewareEnhancer, monitorReducerEnhancer]
    const composedEnhancers = compose(...enhancers)

    const store = createStore(rootReducer, initState, composedEnhancers)

    return store;
}
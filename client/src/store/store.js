import { createStore, applyMiddleware } from 'redux';
import throttle from 'lodash/throttle'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension';
import sagas from "./sagas";
import reducers from './reducer'
import { env } from "../local"

const sagaMiddleware = createSagaMiddleware();
let middleware;

if (env === 'dev') {
    middleware = composeWithDevTools(
        applyMiddleware(sagaMiddleware),
    )
} else {
    middleware = applyMiddleware(sagaMiddleware)
}

const initialState = localStorage.getItem('redux_state') ? JSON.parse(localStorage.getItem('redux_state')) : {};




const store = createStore(reducers, initialState, middleware);

sagas.forEach(saga => sagaMiddleware.run(saga));

store.subscribe(throttle(() => localStorage.setItem('redux_state', JSON.stringify(store.getState())), 100))



export default store;


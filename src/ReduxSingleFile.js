import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import { BrowserRouter } from 'react-router-dom';
import { createStore  } from 'redux';
import { combineReducers } from 'redux';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const initialState = {
    cart: [
      {
        product: 'bread 700g',
        quantity: 2,
        unitCost: 90
      },
      {
        product: 'milk 500ml',
        quantity: 1,
        unitCost: 47
      }
    ]
}


const productsReducer = (state=[], action) => {
    return state;
}

function addToCart(product, quantity, unitCost) {
    return {
      type: ADD_TO_CART,
      payload: { product, quantity, unitCost }
    }
}
const ADD_TO_CART = 'ADD_TO_CART';
const cartReducer = (state=initialState, action) => {
    switch(action.type){
        case ADD_TO_CART: {
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
        }
        default: 
            return state;
    }
}

const allReducers = {
    products: productsReducer,
    shoppingCart: cartReducer
}

const rootReducer = combineReducers(allReducers);
const store = createStore(rootReducer);

store.dispatch(addToCart('Coffee 500gm', 1, 250));
store.dispatch(addToCart('Flour 1kg', 2, 110));
store.dispatch(addToCart('Juice 2L', 1, 250));

console.log("initial state: ", store.getState());

let unsubscribe = store.subscribe(() => 
    console.log(store.getState())
)
unsubscribe();



ReactDOM.render(
<Provider store={configureStore()}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

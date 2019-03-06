import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import configureStore from './store';
import { BrowserRouter } from 'react-router-dom';
import store from './store';

// import { updatePageHeading } from './actions/pageActions';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// console.log("initial state: ", store.getState());

// let unsubscribe = store.subscribe(() => 
//     console.log(store.getState())
// )
/*
store.dispatch(addToCart('Coffee 500gm', 1, 250));
store.dispatch(addToCart('Flour 1kg', 2, 110));
store.dispatch(addToCart('Juice 2L', 1, 250));
// Update Cart
store.dispatch(updateCart('Flour 1kg', 5, 110));

// Delete from Cart
store.dispatch(deleteFromCart('Coffee 500gm'));
*/

// store.dispatch(updatePageHeading('HOME'));

// unsubscribe();

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

import { combineReducers } from 'redux';
import productsReducer from './products-reducer';
import pageHeadingReducer from './pageHeading-reducer';

// products: productsReducer,
// shoppingCart: cartReducer,

const allReducers = {
    pageHeading: pageHeadingReducer
}

const rootReducer = combineReducers(allReducers);

// const rootReducer = pageHeadingReducer;

export default rootReducer;
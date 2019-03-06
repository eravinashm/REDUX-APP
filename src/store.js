import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// import rootReducer from './reducers/index';
import pageHeadingReducer from './reducers/pageHeading-reducer';

const store = createStore(pageHeadingReducer, composeWithDevTools());

export default store;
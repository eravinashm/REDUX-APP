// import { ADD_TO_CART, UPDATE_CART, DELETE_FROM_CART } from '../actions/cartActions';

const initialState = {
    pageHeading: 'HOME'
}

export default function(state=initialState, action){
    switch(action.type){
        case 'UPDATE_PAGE_HEADING': 
            return action.payload; 
        default: 
            return state;
    }
}
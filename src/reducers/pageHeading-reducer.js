
const initialState = 'home';

export default function(state=initialState, action){
    switch(action.type){
        case 'UPDATE_PAGE_HEADING': 
            return action.payload ; 
        default: 
            return { pageHeading: state };
    }
}
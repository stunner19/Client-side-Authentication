import * as ActionTypes from '../actions/types';

export default function(state = {authenticated : false, errorMessage : ''}, action){
    switch(action.type){

        case ActionTypes.AUTH_USER:
            return {...state, authenticated : true, errorMessage : ''};
        case ActionTypes.UNAUTH_USER:
            return {...state, authenticated : false, errorMessage : ''};
        case ActionTypes.AUTH_ERROR:
            return {...state, errorMessage : action.payload, authenticated : false};
        default :
            return state;
    }
}
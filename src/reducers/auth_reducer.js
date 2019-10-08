import * as ActionTypes from '../actions/types';

export default function(state = {}, action){
    switch(action.type){

        case ActionTypes.AUTH_USER:
            return {...state, authenticated : true};
        case ActionTypes.UNAUTH_USER:
            return {...state, authenticated : false};
        default :
            return state;
    }
}
import { LoginState } from '../models/login-state';
import * as LActions from  '../actions/login.actions';

export type Action = LActions.All;



const initialState : LoginState = {

    id : null,
    email : null,
    name : null,
    access_token : null,
    refresh_token : null,
}
export function loginReducer(state : LoginState = initialState, action : Action)
{
    switch (action.type)
    {
        case LActions.LOGIN_SUCCESS :
            return Object.assign({}, state, { access_token : action.payload.access_token, refresh_token : action.payload.refresh_token});

        case LActions.LOGIN_FAILED :
                return initialState;

        case LActions.LOGIN_USER :
            return Object.assign({}, state, { id : action.payload.id, email : action.payload.email, name : action.payload.name});
     }
}

// import { Action } from '@ngrx/store';
import { LoginState } from '../models/login-state';
import * as LActions from  '../actions/login.actions';

export type Action = LActions.All;



const initialState : LoginState = {

    //id : null,
    //email : null,
    access_token : null,
    refresh_token : null
}
export function loginReducer(state : LoginState = initialState, action : Action)
{
    switch (action.type)
    {
        case LActions.LOGIN_SUCCESS :
            return { access_token : action.payload.access_token, refresh_token : action.payload.refresh_token}
     }
}

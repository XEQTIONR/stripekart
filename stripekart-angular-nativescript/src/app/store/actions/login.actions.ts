import { Action } from '@ngrx/store';

export const LOGIN_SUCCESS = '[Authentication] Successful Login';
export const LOGIN_FAILED = '[Authentication] Failed Login';
export const LOGIN_USER = '[Authentication] Save Login User';
export const LOGIN_REFRESH = '[Authentication] Login from refresh token';
export const LOGOUT =  '[Authentication] Log out';

export interface LoginSuccessResponse {

    //id : number;
    //email : string;
    //token_type : string;
    //expires_in : number;
    access_token : string;
    refresh_token : string;

}
export interface LoginFailedResponse {

    error : string;
    error_description : string;
    message : string;


}

export interface LoginUserResponse {

    id : number;
    email : string;
    name : string;
}

export class LoginSuccess implements Action {
    readonly type = LOGIN_SUCCESS;

    constructor(public payload : LoginSuccessResponse){}
}

export class LoginFailed implements Action {
    readonly type = LOGIN_FAILED;

    constructor(public payload : LoginFailedResponse){}
}

export class LoginUser implements Action {
    readonly type = LOGIN_USER;

    constructor(public payload){}
}

export class LoginUsingRefresh implements Action {
    readonly type = LOGIN_REFRESH;

    constructor(public payload){}

}

export class Logout implements Action {
    readonly type = LOGOUT;
}



export type All = LoginSuccess | LoginFailed | LoginUser | Logout;

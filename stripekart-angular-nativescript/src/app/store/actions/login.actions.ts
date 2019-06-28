import { Action } from '@ngrx/store';

export const LOGIN_SUCCESS = '[Login] Successful Login';
export const LOGIN_FAILED = '[Login] Failed Login';
export const LOGIN_USER = '[Login] Save Login User';

export interface LoginSuccessResponse {

    //id : number;
    //email : string;
    token_type : string;
    expires_in : number;
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



export type All = LoginSuccess | LoginFailed | LoginUser;

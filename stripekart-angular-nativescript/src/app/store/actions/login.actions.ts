import { Action } from '@ngrx/store';

export const LOGIN_SUCCESS = '[Login] Successful Login';
export const LOGIN_FAILED = '[Login] Failed Login';

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

export class LoginSuccess implements Action {
    readonly type = LOGIN_SUCCESS;

    constructor(public payload : LoginSuccessResponse){}
}
export class LoginFailed implements Action {
    readonly type = LOGIN_FAILED;

    constructor(public payload : LoginFailedResponse){}


}



export type All = LoginSuccess | LoginFailed;

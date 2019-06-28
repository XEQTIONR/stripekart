import { Injectable } from '@angular/core';
import { LoginState } from './store/models/login-state';
import * as LoginActions from  './store/actions/login.actions';
import { Store } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';


interface AppState {
    login_state : LoginState;
}

interface Credentials {
    username : string;
    password : string;
}

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private loginApiUrl : string = environment.apiUrl + 'login';
    loginState$ : Observable<LoginState>;

    constructor(private http : HttpClient, private store : Store<AppState>) {
        this.loginState$ = store.select('loginState');
    }

    public login( loginCredentials : Credentials)
    {
     // returning an observable
        return this.http.post(this.loginApiUrl, loginCredentials);
    }

    public updateLoginState(payload : LoginActions.LoginSuccessResponse){
        this.store.dispatch( new LoginActions.LoginSuccess(payload));

        if (typeof(Storage) !== "undefined")
        {

            sessionStorage.setItem('access_token', payload.access_token);
            localStorage.setItem('refresh_token', payload.refresh_token);

            localStorage.setItem('access_token', payload.access_token);
            localStorage.removeItem('access_token');

        }
    }

    public updateLoginFailedState(payload : LoginActions.LoginFailedResponse){
        this.store.dispatch( new LoginActions.LoginFailed(payload));
    }

}

import { Injectable } from '@angular/core';
import { LoginState } from './store/models/login-state';
import * as LoginActions from  './store/actions/login.actions';
import { Store } from '@ngrx/store';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    private userApiUrl : string = environment.apiUrl + 'user';
    private refreshApiUrl : string = environment.apiUrl + 'login/refresh';
    public id : number;
    public name : string;
    public email : string;
    public access_token : string;
    private refresh_token : string;

    public loginState$ : Observable<LoginState>;

    constructor(private http : HttpClient, private store : Store<AppState>) {

        window.onbeforeunload  = function(){

            let count = parseInt(localStorage.getItem('tab_count'));
            if(count>0)
            {
                count--;
                localStorage.setItem('tab_count', ''+count);

            }
            else if(count == 0)
                localStorage.removeItem('tab_count');
        }

        window.addEventListener('storage', (event) => {

            if (typeof(Storage) !== "undefined")
                switch(event.key)
                {
                    case 'access_token' :
                        if(event.newValue != null)
                        {
                            console.log('access_token request caught');
                            sessionStorage.setItem('access_token', event.newValue);
                            let access_token = event.newValue;
                            let refresh_token = localStorage.getItem('refresh_token');

                            this.updateLoginState({'access_token' : access_token, 'refresh_token' : refresh_token});
                        }

                        break;

                    case 'auth_request' :
                        console.log('auth request caught');
                        if(event.newValue != null)
                            if(sessionStorage.getItem('access_token') != null)
                            {
                                localStorage.setItem('access_token', sessionStorage.getItem('access_token'));
                                localStorage.removeItem('access_token');

                                localStorage.removeItem('auth_request');

                            }


                }

        });




        this.loginState$ = store.select('loginState');

        this.loginState$.subscribe(
            (res : LoginState) => {
                console.log("USER INFO2");
                console.log(res);

                if(res != null && res.email != null) // first mutation only access tokens set
                {
                    this.email = res.email;
                    this.id = res.id;
                    this.name = res.name;
                    this.access_token = res.access_token;
                    this.refresh_token = res.refresh_token;

                }
                else
                console.log("NOT SETTING");
            }
        )
    }

    public login( loginCredentials : Credentials)
    {
     // returning an observable
        return this.http.post(this.loginApiUrl, loginCredentials);
    }

    public updateLoginState(payload : LoginActions.LoginSuccessResponse){

        if(this.access_token != payload.access_token && this.refresh_token != payload.refresh_token)
        {
            this.store.dispatch( new LoginActions.LoginSuccess(payload));
            this.access_token = payload.access_token;
            this.refresh_token = payload.refresh_token;

            if (typeof(Storage) !== "undefined")
            {

                if(sessionStorage.getItem('access_token')!= payload.access_token
                && localStorage.getItem('refresh_token')!= payload.refresh_token
                )
                {
                sessionStorage.setItem('access_token', payload.access_token);
                localStorage.setItem('refresh_token', payload.refresh_token);

                localStorage.setItem('access_token', payload.access_token);
                localStorage.removeItem('access_token');
                }
            }

            var headers = new HttpHeaders({
                'Accept':  'application/json',
                'Authorization': 'Bearer '+payload.access_token
            });

            var options = {
                headers : headers
            }


            this.http.get(this.userApiUrl, options)
                .subscribe(
                    (res : LoginActions.LoginUserResponse )  => {
                        //console.log("THE USER", res);
                        this.store.dispatch( new LoginActions.LoginUser(res));
                        this.id = res.id;
                        this.name = res.name;
                        this.email = res.email;
                    },
                    (error) => {
                        console.log('error', 'on User API call');
                        console.log(error);

                        this.updateLoginFailedState(error.error); // error.error is a LoginActions.LoginFailedResponse
                    },
                    () =>{
                        console.log('USER API DONE');

                        let count  = parseInt(localStorage.getItem('tab_count'));

                        if(isNaN(count))
                            count =0;
                        localStorage.setItem('tab_count', (count+1)+"");

                    }
                );
                    // }
                // );
        }

    }

    public updateLoginFailedState(payload : LoginActions.LoginFailedResponse){
        this.store.dispatch( new LoginActions.LoginFailed(payload));
    }

    public refreshTokens(){
        console.log('refresh tokens called');
        this.http.post(this.refreshApiUrl, { refresh_token : this.refresh_token})
            .subscribe(
                (res : LoginActions.LoginSuccessResponse) =>{
                    console.log("RESPONSE after REFRSHING tokens :", res);
                    this.updateLoginState(res);

                },
                (error) =>{
                    console.log("ERROR ED out", error);
                },
                () =>{

                }
            )
    }

    public getRefreshToken(){
        return this.refresh_token;
    }

    public setRefreshToken(refresh_token : string){
        this.refresh_token = refresh_token;
        //this.refreshTokens();
    }



}

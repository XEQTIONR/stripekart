import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { environment } from '../../../environments/environment'
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LoginState } from '../../store/models/login-state';
import * as LoginActions from  '../../store/actions/login.actions';




interface AppState {
     login_state : LoginState;
}

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

    loginApiUrl : string;
    loginForm =  new FormGroup({
        username : new FormControl(''),
        password : new FormControl('')
    });

    loginState$ : Observable<LoginState>;


    constructor(private http : HttpClient, private store : Store<AppState>) {

        this.loginState$ = store.select('loginState');
    }

//   updateName() {
//       this.loginForm.controls['email'].setValue("TREX");
//   }



    attemptLogin(){
    this.http.post(this.loginApiUrl, this.loginForm.value)
                // .map( data => this.updateLoginState(data))
                .subscribe(
                    (res : LoginActions.LoginSuccessResponse) => {
                    console.log("RES IS :");
                    console.log(res);

                    this.updateLoginState(res);
        ''            },
                    error => {
                        console.log('error');
                        console.log(error.error.message);

                        this.updateLoginFailedState(error.error)
                    },
                    () =>{
                        //comletion handler
                        // not triggered on error
                        console.log('complete');

                    });
    }

    updateLoginState(payload : LoginActions.LoginSuccessResponse){
        this.store.dispatch( new LoginActions.LoginSuccess(payload));
    }
    updateLoginFailedState(payload : LoginActions.LoginFailedResponse){
        this.store.dispatch( new LoginActions.LoginFailed(payload));
    }


    ngOnInit() {
        this.loginApiUrl = environment.apiUrl + 'login';
    }



}

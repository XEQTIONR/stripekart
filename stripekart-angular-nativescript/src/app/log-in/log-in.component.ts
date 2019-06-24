import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { environment } from '../../environments/environment'
// import { LoginService } from '../login.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LoginState } from '../store/models/login-state';
import * as LActions from  '../store/actions/login.actions';




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
    response : any;
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
                    (res) => {
                    console.log("RES IS :");
                    console.log(res);
                    //console.log("RES BODY", res.access_token)
                    this.updateLoginState(res);
        ''            },
                    error => {
                        console.log('error');
                        console.log(error.error.message);
                    },
                    () =>{
                        //comletion handler
                        // not triggered on error
                        console.log('complete');

                    });
    }

    updateLoginState(payload : any){
        this.store.dispatch( new LActions.LoginSuccess(payload));
    }


    ngOnInit() {
        this.loginApiUrl = environment.apiUrl + 'login';
    }



}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import * as LoginActions from  '../../store/actions/login.actions';
import { Router } from '@angular/router';
import { UserService } from '../../user.service';


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

    constructor(private userService : UserService, private router : Router) {

    }

    attemptLogin() : void {
       this.userService.login(this.loginForm.value)
            .subscribe(

                    (res : LoginActions.LoginSuccessResponse) => {
                        //console.log("RES IS :");
                        //console.log(res);
                        this.userService.updateLoginState(res);
                        this.router.navigateByUrl('/home');

                    },
                    (error : HttpErrorResponse ) => {
                        //console.log('error');
                        //console.log(error);
                        this.userService.updateLoginFailedState(error.error); // error.error is a LoginActions.LoginFailedResponse

                    },
                    () =>{
                        console.log("Login Component Completion Handler");
                        //comletion handler
                        // not triggered on error
                    }
            );
    }


    ngOnInit() {
    }



}

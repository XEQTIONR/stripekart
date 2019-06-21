import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { environment } from '../../environments/environment'
// import { LoginService } from '../login.service';
import { HttpClient, HttpParams } from '@angular/common/http'
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
    })


  constructor(private http : HttpClient) {}

  updateName() {
     // this.loginForm.controls['email'].setValue("TREX");
  }

  attemptLogin(){

  this.http.post(this.loginApiUrl, this.loginForm.value)
                .subscribe(
                    (res : Response) => {
                    console.log("RES IS :");
                    console.log(res);
                    },
                    error => {
                        console.log('error');
                        console.log(error);
                    },
                    () =>{
                        //comletion handler
                        // not triggered on error
                        console.log('complete');

                    });
                }

  ngOnInit() {
      this.loginApiUrl = environment.apiUrl + 'login';
  }



}

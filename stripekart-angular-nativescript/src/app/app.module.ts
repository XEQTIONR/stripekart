import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';


import { AuthenticationModule } from './authentication/authentication.module'

window.addEventListener('storage', (event) => {

    console.log('STORAGE EVENT DETECTED',);
    console.log(event.key, event.storageArea);
    console.log("new val : ", event.newValue);
    console.log("old val : ", event.oldValue);
    console.log("--DONE--")

    if (typeof(Storage) !== "undefined")
        switch(event.key)
        {
            case 'access_token' :
                if(event.newValue != null)
                    sessionStorage.setItem('access_token', event.newValue);
                break;

            case 'auth_request' :
                if(event.newValue != null)
                    if(sessionStorage.getItem('access_token') != null)
                    {
                        localStorage.setItem('access_token', sessionStorage.getItem('access_token'));
                        localStorage.removeItem('access_token');
                    }


        }

});

window.onload = () =>{

    console.log('window onload called', localStorage.getItem('refresh_token'));
    if (typeof(Storage) !== "undefined")
        if(localStorage.getItem('refresh_token')!=null && sessionStorage.getItem('access_token') == null )
        {
            localStorage.setItem('auth_request', 'requested');
            localStorage.removeItem('auth_request');
        }

}



@NgModule({
  declarations: [

    AppComponent,
    HomeComponent,
    ResetPasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    //StoreModule.forRoot({ loginState : loginReducer }),
    StoreDevtoolsModule.instrument({}),
    AuthenticationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

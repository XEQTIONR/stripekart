import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LogInComponent } from './log-in/log-in.component';

import { ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { loginReducer } from '../store/reducers/login.reducer';

//import { StoreDevtoolsModule } from '@ngrx/store-devtools';


@NgModule({
  declarations: [LogInComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ loginState : loginReducer }),
  ]
})
export class AuthenticationModule { }

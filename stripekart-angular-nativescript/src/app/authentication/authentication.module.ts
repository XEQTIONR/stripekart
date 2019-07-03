import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthenticationComponent} from  './authentication.component'
import { LogInComponent } from './log-in/log-in.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { loginReducer } from '../store/reducers/login.reducer';
import { ResetEmailComponent } from './reset-email/reset-email.component';

//import { StoreDevtoolsModule } from '@ngrx/store-devtools';


@NgModule({
  declarations: [
      LogInComponent,
      AuthenticationComponent,
      ResetPasswordComponent,
      ResetEmailComponent,

    ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ loginState : loginReducer }),
  ]
})
export class AuthenticationModule { }

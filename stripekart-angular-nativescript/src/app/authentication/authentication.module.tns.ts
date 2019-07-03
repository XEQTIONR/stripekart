import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { LogInComponent } from './log-in/log-in.component';
import { ResetEmailComponent } from './reset-email/reset-email.component';

@NgModule({
  declarations: [LogInComponent, ResetEmailComponent],
  imports: [
    AuthenticationRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AuthenticationModule { }

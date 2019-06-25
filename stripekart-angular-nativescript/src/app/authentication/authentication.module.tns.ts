import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { LogInComponent } from './log-in/log-in.component';

@NgModule({
  declarations: [LogInComponent],
  imports: [
    AuthenticationRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AuthenticationModule { }

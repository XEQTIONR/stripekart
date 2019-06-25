import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { LogInComponent } from './log-in/log-in.component'
const routes: Routes = [

    { path: 'login2', component : LogInComponent}

];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class AuthenticationRoutingModule { }

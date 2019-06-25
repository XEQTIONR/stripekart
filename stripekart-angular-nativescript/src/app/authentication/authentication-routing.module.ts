import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './authentication.common';



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }

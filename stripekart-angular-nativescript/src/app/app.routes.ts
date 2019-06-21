import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { LogInComponent} from './log-in/log-in.component';

export const routes: Routes = [
  {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full',
  },
  {
      path: 'home',
      component: HomeComponent,
  },
  {
      path: 'resetpassword/:token',
      component: ResetPasswordComponent,
  },
  {
      path: 'login',
      component: LogInComponent,
  }
];

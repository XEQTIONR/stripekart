import { Routes } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { AuthenticationComponent } from './authentication.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ResetEmailComponent} from './reset-email/reset-email.component';
export const componentDeclarations: any[] = [
];

export const providerDeclarations: any[] = [
];

export const routes: Routes = [

    {
        path: '', component: AuthenticationComponent,
        children : [
            { path: 'login', component : LogInComponent },
            {
                path: 'password/reset/:token',
                component: ResetPasswordComponent,
            },
            {
                path: 'password/reset',
                component: ResetEmailComponent,
            },
        ]
    },

];

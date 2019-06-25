import { Routes } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { AuthenticationComponent } from './authentication.component';

export const componentDeclarations: any[] = [
];

export const providerDeclarations: any[] = [
];

export const routes: Routes = [

    {
        path: '', component: AuthenticationComponent,
        children : [
            { path: 'login', component : LogInComponent }
        ]
    },

];

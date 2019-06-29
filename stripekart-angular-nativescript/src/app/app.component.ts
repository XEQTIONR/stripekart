import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    constructor(private userService : UserService){}
    ngOnInit(){

        console.log("APP COMPONENT INITTED");

        if(sessionStorage.getItem('access_token') == null)
        {
            console.log("access TOKEN IS NULL");
            if(this.userService.getRefreshToken() ==  null)
            {
                var token = localStorage.getItem('refresh_token');
                if(token != null)
                {
                    this.userService.setRefreshToken(token);
                    this.userService.refreshTokens();
                }
                else
                {
                    console.log("NO REFRESH TOKEN IN localstorage")
                }

            }
        }
        else
            console.log('Found AcCeSS ToKen In SeSSioN Storage')

    }
}
